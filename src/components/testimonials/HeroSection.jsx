/**
 * TestimonialsHero.jsx  — Component 1 / 3
 * Hero banner + trust stats + platform badges for Testimonials page.
 * Theme: black · #2d7fff / #6062ff · Cinzel / Oswald / Roboto Mono
 * Dependency: npm install swiper
 */

import { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "40+", label: "Projects Delivered", icon: "◈" },
  { value: "15+", label: "Happy Clients", icon: "◈" },
  { value: "5.0", label: "Average Rating", icon: "★" },
  { value: "100%", label: "Client Satisfaction", icon: "◈" },
];

const PLATFORMS = [
  {
    name: "Google",
    logo: "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    filled: true,
  },
  {
    name: "Fiverr",
    logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg",
    filled: true,
  },
  {
    name: "Upwork",
    logo: "https://cdn.worldvectorlogo.com/logos/upwork-2.svg",
    filled: true,
  },
  {
    name: "LinkedIn",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    filled: true,
  },
];

// ─── Floating Shapes (unique — star / quote motif) ────────────────────────────

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
          top: "42%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
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

      {/* 4-point star — top-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "48px",
          right: "5.5%",
          opacity: 0.13,
          animation: "floatA 8s ease-in-out infinite",
        }}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <defs>
          <linearGradient id="thsg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M40 4 L45 35 L76 40 L45 45 L40 76 L35 45 L4 40 L35 35 Z"
          fill="url(#thsg1)"
        />
      </svg>

      {/* Quote mark — top-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "52px",
          left: "5%",
          opacity: 0.11,
          animation: "floatB 10s ease-in-out infinite",
        }}
        width="72"
        height="58"
        viewBox="0 0 72 58"
        fill="none"
      >
        <defs>
          <linearGradient id="thqg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6062ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d7fff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d="M0 36 C0 16 11 4 29 0 L34 9 C22 14 18 20 18 27 L32 27 L32 58 L0 58 Z"
          fill="url(#thqg)"
        />
        <path
          d="M40 36 C40 16 51 4 69 0 L72 9 C60 14 58 20 58 27 L72 27 L72 58 L40 58 Z"
          fill="url(#thqg)"
          fillOpacity="0.6"
        />
      </svg>

      {/* Dashed ring + 3 orbit dots — left mid */}
      <svg
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "30%",
          left: "-48px",
          opacity: 0.13,
          animation: "floatA 14s ease-in-out infinite reverse",
        }}
        width="156"
        height="156"
        viewBox="0 0 156 156"
        fill="none"
      >
        <defs>
          <linearGradient id="thrg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <circle
          cx="78"
          cy="78"
          r="74"
          stroke="url(#thrg)"
          strokeWidth="1.5"
          strokeDasharray="8 5"
        />
        <circle
          cx="78"
          cy="78"
          r="52"
          stroke="#2d7fff"
          strokeWidth="0.8"
          strokeOpacity="0.30"
        />
        <circle cx="78" cy="4" r="4.5" fill="#2d7fff" />
        <circle cx="152" cy="78" r="4.5" fill="#6062ff" />
        <circle cx="78" cy="152" r="3" fill="#2d7fff" fillOpacity="0.50" />
      </svg>

      {/* 6-point star — bottom-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "68px",
          left: "6%",
          opacity: 0.1,
          animation: "floatB 9s ease-in-out infinite 1s",
        }}
        width="54"
        height="54"
        viewBox="0 0 54 54"
        fill="none"
      >
        <defs>
          <linearGradient id="thss2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <path
          d="M27 2 L30 18 L45 10 L34 24 L50 27 L34 30 L45 44 L30 36 L27 52 L24 36 L9 44 L20 30 L4 27 L20 24 L9 10 L24 18 Z"
          fill="url(#thss2)"
        />
      </svg>

      {/* Gradient dot cluster — right */}
      <svg
        className="hidden xl:block"
        style={{ position: "absolute", top: "24%", right: "1%", opacity: 0.11 }}
        width="68"
        height="112"
        viewBox="0 0 68 112"
        fill="none"
      >
        <defs>
          <linearGradient id="thdg" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#thdg)"
              opacity={1 - i * 0.12}
            />
          )),
        )}
      </svg>

      {/* Plus — top-left inner */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "16%",
          left: "14%",
          opacity: 0.08,
          animation: "floatA 7s ease-in-out infinite 0.5s",
        }}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect x="12" y="0" width="8" height="32" rx="4" fill="#2d7fff" />
        <rect x="0" y="12" width="32" height="8" rx="4" fill="#6062ff" />
      </svg>

      {/* Diamond — bottom-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "14%",
          right: "8%",
          opacity: 0.09,
          animation: "floatB 11s ease-in-out infinite 2s",
        }}
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
      >
        <defs>
          <linearGradient id="thdmd" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect
          x="33"
          y="3"
          width="44"
          height="44"
          rx="5"
          transform="rotate(45 33 3)"
          fill="url(#thdmd)"
        />
        <rect
          x="33"
          y="13"
          width="27"
          height="27"
          rx="3"
          transform="rotate(45 33 13)"
          fill="none"
          stroke="#6062ff"
          strokeWidth="0.8"
          strokeOpacity="0.45"
        />
      </svg>
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
        flex: "1 1 130px",
        padding: "22px 18px",
        borderRadius: "16px",
        textAlign: "center",
        cursor: "default",
        border: `1px solid ${hov ? "rgba(45,127,255,0.30)" : "rgba(255,255,255,0.07)"}`,
        background: hov ? "rgba(45,127,255,0.06)" : "rgba(255,255,255,0.025)",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${0.45 + index * 0.08}s, transform 0.4s ease ${0.45 + index * 0.08}s, border-color 0.3s, background 0.3s`,
      }}
    >
      {/* Top shimmer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "12px",
          right: "12px",
          height: "1px",
          background: hov
            ? "linear-gradient(90deg,transparent,rgba(45,127,255,0.50),transparent)"
            : "linear-gradient(90deg,transparent,rgba(45,127,255,0.18),transparent)",
          transition: "all 0.4s",
        }}
      />
      <p
        style={{
          fontFamily: "'Cinzel',serif",
          fontSize: "clamp(26px,3.2vw,38px)",
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

export default function TestimonialsHeroSection() {
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
      id="testimonials-hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding:
          "clamp(100px,12vw,150px) clamp(20px,5%,60px) clamp(80px,10vw,110px)",
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
            maxWidth: "700px",
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
            // client stories
          </p>
          <h1
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(36px,6vw,70px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 8px 0",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Real Words From
          </h1>
          <h1
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(36px,6vw,70px)",
              fontWeight: 400,
              margin: "0 0 24px 0",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Real Clients.
          </h1>
          <p
            style={{
              fontFamily: "'Oswald',sans-serif",
              fontWeight: 300,
              fontSize: "clamp(15px,1.8vw,17px)",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.38)",
              letterSpacing: "0.025em",
              margin: "0 auto 36px",
              maxWidth: "500px",
            }}
          >
            No cherry-picking, no edits. Every review below is unfiltered
            feedback from clients I've worked with — across freelance platforms
            and direct engagements.
          </p>

          {/* Star row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              marginBottom: "28px",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#f4b400"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "18px",
                fontWeight: 600,
                color: "#fff",
                marginLeft: "10px",
              }}
            >
              5.0
            </span>
            <span
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.30)",
                marginLeft: "6px",
              }}
            >
              / 5.0 average
            </span>
          </div>

          {/* Platform badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {PLATFORMS.map((p) => (
              <div
                key={p.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "7px 16px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{
                    width: "16px",
                    height: "16px",
                    objectFit: "contain",
                    opacity: 0.75,
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <span
                  style={{
                    fontFamily: "'Roboto Mono',monospace",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            margin: "clamp(56px,7vw,80px) 0 clamp(36px,5vw,52px)",
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
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(45,127,255,0.45)",
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

        {/* ── Stats ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} visible={visible} />
          ))}
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
