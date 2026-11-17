import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

// Elements that get a gentle fade/slide-up as they enter the viewport.
const TARGETS = [
  "section h2",
  "section h2 + p",
  "section h2 + div",
  "footer",
].join(",");

export default function ScrollEffects() {
  const { pathname } = useLocation();
  const bar = useRef(null);
  const [showTop, setShowTop] = useState(false);

  // Scroll progress + back-to-top
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, window.scrollY / h) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      setShowTop(window.scrollY > 700);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  // Scroll reveal
  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("rv-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const seen = new WeakSet();
    const scan = () => {
      document.querySelectorAll(TARGETS).forEach((el, i) => {
        if (seen.has(el)) return;
        seen.add(el);
        // Anything already on screen at load stays visible (no flash)
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.9) return;
        el.style.setProperty("--rv-delay", `${(i % 3) * 70}ms`);
        el.classList.add("rv");
        io.observe(el);
      });
    };
    scan();
    // pages are lazy-loaded / data arrives later → rescan a few times
    const timers = [250, 800, 1800].map((t) => setTimeout(scan, t));
    return () => {
      timers.forEach(clearTimeout);
      io.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div ref={bar} className="scroll-progress" aria-hidden="true" />
      <button
        type="button"
        className={`to-top${showTop ? " show" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
