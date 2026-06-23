/**
 * ServicesHero.jsx  — Component 1 / 3
 * Full-width hero for the Services page.
 * Theme: black bg · #2d7fff / #6062ff gradient · Cinzel / Oswald / Roboto Mono
 */

import { useEffect, useRef, useState } from "react";

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
          right: "-100px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(96,98,255,0.10) 0%,transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "20%",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(45,127,255,0.05) 0%,transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(45,127,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.025) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gear / cog ring — top-right (services motif) */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "44px",
          right: "5.5%",
          opacity: 0.11,
          animation: "floatA 12s ease-in-out infinite",
        }}
        width="108"
        height="108"
        viewBox="0 0 108 108"
        fill="none"
      >
        <defs>
          <linearGradient id="shg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <circle
          cx="54"
          cy="54"
          r="50"
          stroke="url(#shg1)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <circle
          cx="54"
          cy="54"
          r="34"
          stroke="#2d7fff"
          strokeWidth="1"
          strokeOpacity="0.40"
        />
        <circle
          cx="54"
          cy="54"
          r="14"
          fill="rgba(45,127,255,0.10)"
          stroke="#6062ff"
          strokeWidth="1"
          strokeOpacity="0.50"
        />
        {/* Gear teeth stubs */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
          <line
            key={i}
            x1={54 + 34 * Math.cos((deg * Math.PI) / 180)}
            y1={54 + 34 * Math.sin((deg * Math.PI) / 180)}
            x2={54 + 50 * Math.cos((deg * Math.PI) / 180)}
            y2={54 + 50 * Math.sin((deg * Math.PI) / 180)}
            stroke="#2d7fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.4"
          />
        ))}
      </svg>

      {/* Diamond — bottom-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "72px",
          left: "4.5%",
          opacity: 0.1,
          animation: "floatB 9s ease-in-out infinite",
        }}
        width="84"
        height="84"
        viewBox="0 0 84 84"
        fill="none"
      >
        <defs>
          <linearGradient id="shd1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6062ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d7fff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect
          x="42"
          y="3"
          width="56"
          height="56"
          rx="6"
          transform="rotate(45 42 3)"
          fill="url(#shd1)"
        />
        <rect
          x="42"
          y="15"
          width="36"
          height="36"
          rx="3"
          transform="rotate(45 42 15)"
          fill="none"
          stroke="#2d7fff"
          strokeWidth="0.8"
          strokeOpacity="0.45"
        />
      </svg>

      {/* Dashed ring + orbit dots — left mid */}
      <svg
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "35%",
          left: "-46px",
          opacity: 0.12,
          animation: "floatA 14s ease-in-out infinite reverse",
        }}
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
      >
        <defs>
          <linearGradient id="shrg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <circle
          cx="75"
          cy="75"
          r="71"
          stroke="url(#shrg)"
          strokeWidth="1.4"
          strokeDasharray="8 5"
        />
        <circle
          cx="75"
          cy="75"
          r="49"
          stroke="#2d7fff"
          strokeWidth="0.7"
          strokeOpacity="0.30"
        />
        <circle cx="75" cy="4" r="4" fill="#2d7fff" />
        <circle cx="146" cy="75" r="4" fill="#6062ff" />
        <circle cx="75" cy="146" r="3" fill="#2d7fff" fillOpacity="0.5" />
      </svg>

      {/* Dot cluster — right */}
      <svg
        className="hidden xl:block"
        style={{ position: "absolute", top: "28%", right: "1%", opacity: 0.09 }}
        width="68"
        height="112"
        viewBox="0 0 68 112"
        fill="none"
      >
        <defs>
          <linearGradient id="shdg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4, 5].map((i) =>
          [0, 1, 2].map((j) => (
            <circle
              key={`${i}-${j}`}
              cx={j * 22 + 11}
              cy={i * 22 + 11}
              r="2.2"
              fill="url(#shdg)"
              opacity={1 - i * 0.12}
            />
          )),
        )}
      </svg>

      {/* Plus — top-left area */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          opacity: 0.08,
          animation: "floatB 8s ease-in-out infinite 1s",
        }}
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
      >
        <rect x="13" y="0" width="8" height="34" rx="4" fill="#2d7fff" />
        <rect x="0" y="13" width="34" height="8" rx="4" fill="#6062ff" />
      </svg>

      {/* Triangle — bottom-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "14%",
          right: "8%",
          opacity: 0.08,
          animation: "floatA 10s ease-in-out infinite 2s",
        }}
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <defs>
          <linearGradient id="shtr" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <polygon points="28,3 53,50 3,50" fill="url(#shtr)" />
      </svg>
    </div>
  );
}

// ─── Stat Badge ───────────────────────────────────────────────────────────────

function StatBadge({ value, label, delay, visible }) {
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
        transition: `opacity 0.6s ease ${delay}s, transform 0.4s ease ${delay}s, border-color 0.3s, background 0.3s`,
      }}
    >
      <p
        style={{
          fontFamily: "'Cinzel',serif",
          fontSize: "clamp(22px,2.8vw,34px)",
          fontWeight: 600,
          background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: "0 0 4px 0",
        }}
      >
        {value}
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
        {label}
      </p>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesHeroSection() {
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
      id="services-hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding:
          "clamp(100px,12vw,150px) clamp(20px,5%,60px) clamp(80px,10vw,120px)",
      }}
    >
      <FloatingShapes />

      <div
        style={{ position: "relative", maxWidth: "1140px", margin: "0 auto" }}
      >
        {/* ── Centered hero copy ── */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "780px",
            margin: "0 auto",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s ease 0.05s",
          }}
        >
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#2d7fff",
              margin: "0 0 16px 0",
            }}
          >
            // what i offer
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
            Services Built
          </h1>
          <h1
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(36px,6vw,72px)",
              fontWeight: 400,
              margin: "0 0 28px 0",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            For Results.
          </h1>

          <p
            style={{
              fontFamily: "'Oswald',sans-serif",
              fontWeight: 300,
              fontSize: "clamp(15px,1.8vw,17px)",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.40)",
              letterSpacing: "0.025em",
              margin: "0 auto 40px",
              maxWidth: "560px",
            }}
          >
            From a pixel-perfect landing page to a full-scale web application —
            I deliver fast, scalable, and beautifully crafted digital solutions
            tailored to your business.
          </p>

          {/* CTA row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            <a
              href="#services-list"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "100px",
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "'Oswald',sans-serif",
                fontSize: "12px",
                fontWeight: 500,
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
              Explore Services
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontFamily: "'Oswald',sans-serif",
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
              Get a Quote
            </a>
          </div>
        </div>

        {/* ── Divider with label ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            margin: "clamp(56px,7vw,80px) 0 clamp(40px,5vw,56px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition: "all 0.7s ease 0.45s",
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
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(45,127,255,0.50)",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            by the numbers
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

        {/* ── Stats strip ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.5s",
          }}
        >
          <StatBadge
            value="40+"
            label="Projects Delivered"
            delay={0.55}
            visible={visible}
          />
          <StatBadge
            value="5+"
            label="Years Experience"
            delay={0.62}
            visible={visible}
          />
          <StatBadge
            value="15+"
            label="Happy Clients"
            delay={0.69}
            visible={visible}
          />
          <StatBadge
            value="100%"
            label="On-Time Delivery"
            delay={0.76}
            visible={visible}
          />
        </div>
      </div>

      <style>{`
        @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(-5deg)}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `}</style>
    </section>
  );
}
