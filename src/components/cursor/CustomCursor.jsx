/**
 * CustomCursor.jsx
 * Custom cursor — dot + ring both always visible.
 * Hover = 1.5× scale (Perfect tracking, no jumping), Click = 1.0×, native cursor kept.
 * Drop ONCE in App.jsx root. Zero dependencies.
 */

import { useEffect, useRef, useCallback } from "react";

const DOT_SIZE = 10;
const RING_SIZE = 36;
const LAG = 0.1; // trailer lerp speed

const SCALE_HOVER = 1.5;
const SCALE_CLICK = 1.0;
const SCALE_NORMAL = 1;

const HOVER_SEL = [
  "a",
  "button",
  "[role='button']",
  "[role='link']",
  "input[type='submit']",
  "input[type='button']",
  "input[type='checkbox']",
  "input[type='radio']",
  "select",
  "label[for]",
  ".cursor-hover",
].join(",");

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const pos = useRef({ x: -300, y: -300 });
  const trail = useRef({ x: -300, y: -300 });
  const rafId = useRef(null);

  const isHov = useRef(false);
  const isClick = useRef(false);
  const visible = useRef(false);

  // ── Apply State Helper ───────────────────────────────────────────────────
  const getScale = useCallback(() => {
    return isClick.current
      ? SCALE_CLICK
      : isHov.current
        ? SCALE_HOVER
        : SCALE_NORMAL;
  }, []);

  // ── RAF tick ──────────────────────────────────────────────────────────────
  const tick = useCallback(() => {
    const t = trail.current;
    const p = pos.current;

    // Smooth lag animation
    t.x += (p.x - t.x) * LAG;
    t.y += (p.y - t.y) * LAG;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const currentScale = getScale();

    // Combining translate and scale in transform stops any cursor jumping/offsetting bugs
    if (dot) {
      dot.style.transform = `translate3d(${p.x - DOT_SIZE / 2}px, ${p.y - DOT_SIZE / 2}px, 0) scale(${currentScale})`;
    }
    if (ring) {
      ring.style.transform = `translate3d(${t.x - RING_SIZE / 2}px, ${t.y - RING_SIZE / 2}px, 0) scale(${currentScale})`;
    }

    rafId.current = requestAnimationFrame(tick);
  }, [getScale]);

  // ── Visual Styles Updates ─────────────────────────────────────────────────
  const updateStyles = useCallback(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Ring colors
    ring.style.borderColor = isHov.current
      ? "rgba(45,127,255,0.90)"
      : "rgba(45,127,255,0.65)";
    ring.style.background = isHov.current
      ? "rgba(45,127,255,0.08)"
      : "rgba(45,127,255,0.04)";

    // Dot glow
    dot.style.boxShadow = isHov.current
      ? "0 0 14px rgba(45,127,255,0.80)"
      : "0 0 8px rgba(45,127,255,0.55)";
  }, []);

  // ── Events ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const show = () => {
      if (!visible.current) {
        visible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
    };

    const onMove = (e) => {
      show();
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    // Using capture or clean checking to handle nested elements inside buttons perfectly
    const onOver = (e) => {
      const el = e.target.closest(HOVER_SEL);
      if (el && !isHov.current) {
        isHov.current = true;
        updateStyles();
      }
    };

    const onOut = (e) => {
      const el = e.target.closest(HOVER_SEL);
      // Ensure we are actually leaving the interactive element
      if (el && (!e.relatedTarget || !e.relatedTarget.closest(HOVER_SEL))) {
        isHov.current = false;
        updateStyles();
      }
    };

    const onDown = () => {
      isClick.current = true;
    };

    const onUp = () => {
      isClick.current = false;
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [tick, updateStyles]);

  return (
    <>
      {/* Central Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${DOT_SIZE}px`,
          height: `${DOT_SIZE}px`,
          borderRadius: "50%",
          background: "#2d7fff",
          pointerEvents: "none",
          zIndex: 999999,
          opacity: 0,
          willChange: "transform",
          transition:
            "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, opacity 0.3s ease",
          boxShadow: "0 0 8px rgba(45,127,255,0.55)",
        }}
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${RING_SIZE}px`,
          height: `${RING_SIZE}px`,
          borderRadius: "50%",
          border: "1.5px solid rgba(45,127,255,0.65)",
          background: "rgba(45,127,255,0.04)",
          pointerEvents: "none",
          zIndex: 999998,
          opacity: 0,
          willChange: "transform",
          transition:
            "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, background 0.3s ease, opacity 0.35s ease",
        }}
      />

      {/* Touch device fallback */}
      <style>{`
        @media (pointer: coarse) {
          div[aria-hidden="true"] { display: none !important; }
        }
      `}</style>
    </>
  );
}
