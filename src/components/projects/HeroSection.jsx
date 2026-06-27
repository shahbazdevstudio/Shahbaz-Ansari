/**
 * ProjectsHero.jsx  — Component 1 / 3
 * Hero for Projects page — centered copy + filter tabs + stats strip.
 * Theme: black · #2d7fff / #6062ff · Cinzel / Oswald / Roboto Mono
 */

import { useState, useEffect, useRef } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";

const CATEGORIES = ["All", "React", "Next.js", "Full-Stack", "UI/UX", "API"];

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Built" },
  { value: "35+", label: "Happy Clients" },
  { value: "100%", label: "On-Time Delivery" },
];

// ─── Floating Shapes ──────────────────────────────────────────────────────────

function FloatingShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-110px",
          left: "-130px",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(45,127,255,0.11) 0%,transparent 62%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-110px",
          width: "490px",
          height: "490px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(96,98,255,0.10) 0%,transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "720px",
          height: "240px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse,rgba(45,127,255,0.04) 0%,transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(45,127,255,0.024) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.024) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hexagon — top-right */}
      <img
      src="/icons/star-cross.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "114px",
          right: "5.5%",
          opacity: 0.15,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="108"
        height="108"
        viewBox="0 0 108 108"
        fill="none"
      />

      {/* Dashed ring + dots — left */}
      <img
        src="/icons/rings.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "28%",
          left: "-48px",
          opacity: 0.13,
          animation: "floatA 14s ease-in-out infinite reverse",
        }}
        width="156"
        height="156"
        alt="ring"
      />

      {/* Diamond — bottom-left */}
      <img
        src="/icons/diamond.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "68px",
          left: "4.5%",
          opacity: 0.05,
          animation: "floatB 10s ease-in-out infinite",
        }}
        width="84"
        height="84"
        alt="diamond"
      />

      {/* Dot cluster — right */}
      <img
        src="/icons/dots.svg"
        className="hidden xl:block"
        style={{ position: "absolute", top: "26%", right: "1%", opacity: 0.11 }}
        width="68"
        height="112"
        viewBox="0 0 68 112"
        fill="none"
        alt="dots"
      />

      {/* Plus — top-left */}
      <img
        src="/icons/plus-accent.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "14%",
          left: "9%",
          opacity: 0.09,
          animation: "floatB 8s ease-in-out infinite 0.5s",
        }}
        width="34"
        height="34"
        alt="accent"
      />

      {/* Triangle — bottom-right */}
      <img
        src="/icons/triangle-accent.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          opacity: 0.09,
          animation: "floatA 11s ease-in-out infinite 2s",
        }}
        width="58"
        height="58"
        alt="triangle"
      />
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({ stat, index, visible }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: "1 1 120px",
        padding: "18px 14px",
        borderRadius: "14px",
        textAlign: "center",
        cursor: "default",
        border: `1px solid ${hov ? "rgba(45,127,255,0.30)" : "rgba(255,255,255,0.07)"}`,
        background: hov ? "rgba(45,127,255,0.06)" : "rgba(255,255,255,0.025)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${0.45 + index * 0.07}s, transform 0.4s ease ${0.45 + index * 0.07}s, border-color 0.3s, background 0.3s`,
      }}
    >
      <p
        style={{
          fontSize: "clamp(22px,3vw,34px)",
          fontWeight: 600,
          background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: "0 0 4px 0",
        }}
      >
        {stat.value}
      </p>
      <p
        style={{
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "10px",
          color: "rgba(255,255,255,0.28)",
          margin: 0,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectsHeroSection({ activeFilter, onFilterChange }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="projects-hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding:
          "clamp(100px,12vw,150px) clamp(20px,5%,60px) clamp(72px,9vw,110px)",
      }}
    >
      <FloatingShapes />

      <div
        style={{ position: "relative", maxWidth: "1140px", margin: "0 auto" }}
      >
        {/* ── Centered copy ── */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "720px",
            margin: "0 auto",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s ease 0.05s",
          }}
        >
          <p
            className="!mt-10 md:!mt-0"
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#2d7fff",
              margin: "0 0 16px 0",
            }}
          >
            // my work
          </p>
          <h1
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(36px,6vw,72px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 8px 0",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Crafted with
          </h1>
          <h1
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(36px,6vw,72px)",
              fontWeight: 400,
              margin: "0 0 24px 0",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Purpose.
          </h1>
          <p
            style={{
              fontWeight: 300,
              fontSize: "clamp(15px,1.8vw,12px)",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.38)",
              letterSpacing: "0.025em",
              margin: "0 auto 40px",
              maxWidth: "520px",
            }}
          >
            Explore a selection of websites and web applications I've designed
            and developed, focusing on performance, usability, and clean,
            scalable code.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            <a
              href="#projects-grid"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 30px",
                borderRadius: "100px",
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                boxShadow: "0 4px 24px rgba(45,127,255,0.28)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(45,127,255,0.42)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(45,127,255,0.28)";
              }}
            >
              Browse Projects
              <HiArrowSmallRight size={16} />
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 30px",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                backdropFilter: "blur(8px)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
              }}
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            margin: "clamp(52px,7vw,72px) 0 clamp(28px,4vw,40px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.42s",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg,transparent,rgba(45,127,255,0.25))",
            }}
          />
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(45,127,255,0.65)",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            filter by category
          </p>
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg,rgba(45,127,255,0.25),transparent)",
            }}
          />
        </div>

        {/* ── Filter tabs ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
            marginBottom: "clamp(40px,5vw,60px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.7s ease 0.48s",
          }}
        >
          {CATEGORIES.map((cat) => {
            const active = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => onFilterChange(cat)}
                style={{
                  padding: "9px 20px",
                  borderRadius: "100px",
                  cursor: "pointer",
                  fontFamily: "'Roboto Mono',monospace",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: `1px solid ${active ? "rgba(45,127,255,0.50)" : "rgba(255,255,255,0.09)"}`,
                  background: active
                    ? "linear-gradient(135deg,rgba(45,127,255,0.18) 0%,rgba(96,98,255,0.12) 100%)"
                    : "rgba(255,255,255,0.03)",
                  color: active ? "#fff" : "rgba(255,255,255,0.42)",
                  boxShadow: active ? "0 0 20px rgba(45,127,255,0.15)" : "none",
                  transition: "all 0.25s ease",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Stats strip ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
