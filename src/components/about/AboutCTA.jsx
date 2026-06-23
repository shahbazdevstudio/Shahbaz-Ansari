/**
 * AboutCTA.jsx  — Component 3 / 3
 * Services I offer · Final hire-me CTA strip
 */

import { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    num: "01",
    title: "Frontend Development",
    desc: "React, Next.js, Tailwind CSS — responsive, accessible, performant. I build interfaces that feel as fast as they look.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Backend & APIs",
    desc: "Node.js, Express, MongoDB REST APIs built with auth, validation, and scalability from the start.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "UI / UX Design",
    desc: "Figma mockups to browser pixel-perfect. I design systems, component libraries, and interaction flows.",
    tags: ["Figma", "Design Systems", "Framer"],
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Performance Audit",
    desc: "Core Web Vitals, bundle analysis, lazy loading strategies — I'll find the bottlenecks and fix them.",
    tags: ["Lighthouse", "Web Vitals", "SEO"],
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "SaaS / Dashboard",
    desc: "Data-heavy apps, role-based auth, real-time features, and chart-heavy dashboards for B2B products.",
    tags: ["React", "Charts", "Auth", "Real-time"],
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8h2m2 0h6M7 12h4m2 0h4" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Site Redesign",
    desc: "Audit existing sites and rebuild them to a significantly higher standard of design, speed, and conversion.",
    tags: ["Redesign", "Responsive", "CRO"],
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

// ─── Floating Shapes (unique — brackets / deploy motif) ──────────────────────

function FloatingShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-100px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(45,127,255,0.10) 0%,transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-90px",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(96,98,255,0.09) 0%,transparent 62%)",
          filter: "blur(50px)",
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(45,127,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.022) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Code brackets — top-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "52px",
          right: "5%",
          opacity: 0.11,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="90"
        height="70"
        viewBox="0 0 90 70"
        fill="none"
      >
        <defs>
          <linearGradient id="acbg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <polyline
          points="32,8 8,35 32,62"
          stroke="url(#acbg)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="58,8 82,35 58,62"
          stroke="url(#acbg)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Hexagon — bottom-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "72px",
          left: "4%",
          opacity: 0.1,
          animation: "floatB 11s ease-in-out infinite",
        }}
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
      >
        <defs>
          <linearGradient id="achex" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6062ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d7fff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <polygon points="45,4 82,25 82,65 45,86 8,65 8,25" fill="url(#achex)" />
        <polygon
          points="45,16 72,30.5 72,59.5 45,74 18,59.5 18,30.5"
          fill="none"
          stroke="#2d7fff"
          strokeWidth="0.9"
          strokeOpacity="0.45"
        />
      </svg>

      {/* Dashed ring — left mid */}
      <svg
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "40%",
          left: "-44px",
          opacity: 0.11,
          animation: "floatA 12s ease-in-out infinite reverse",
        }}
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
      >
        <defs>
          <linearGradient id="acrg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <circle
          cx="70"
          cy="70"
          r="66"
          stroke="url(#acrg)"
          strokeWidth="1.4"
          strokeDasharray="8 5"
        />
        <circle
          cx="70"
          cy="70"
          r="44"
          stroke="#2d7fff"
          strokeWidth="0.7"
          strokeOpacity="0.30"
        />
        <circle cx="70" cy="4" r="4" fill="#2d7fff" />
        <circle cx="136" cy="70" r="4" fill="#6062ff" />
      </svg>

      {/* Dot cluster — right */}
      <svg
        className="hidden xl:block"
        style={{ position: "absolute", top: "22%", right: "1%", opacity: 0.09 }}
        width="68"
        height="112"
        viewBox="0 0 68 112"
        fill="none"
      >
        <defs>
          <linearGradient id="acdg" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#acdg)"
              opacity={1 - i * 0.12}
            />
          )),
        )}
      </svg>

      {/* Plus — top-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "12%",
          left: "9%",
          opacity: 0.08,
          animation: "floatB 8s ease-in-out infinite 1s",
        }}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect x="12" y="0" width="8" height="32" rx="4" fill="#2d7fff" />
        <rect x="0" y="12" width="32" height="8" rx="4" fill="#6062ff" />
      </svg>

      {/* Triangle — bottom-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "7%",
          opacity: 0.08,
          animation: "floatA 10s ease-in-out infinite 2s",
        }}
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <defs>
          <linearGradient id="actr" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <polygon points="28,3 52,50 4,50" fill="url(#actr)" />
      </svg>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ svc, index, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "clamp(20px,3%,28px)",
        borderRadius: "18px",
        border: `1px solid ${hovered ? "rgba(45,127,255,0.28)" : "rgba(255,255,255,0.06)"}`,
        background: hovered
          ? "rgba(45,127,255,0.05)"
          : "rgba(255,255,255,0.02)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(22px)",
        transition: `opacity 0.6s ease ${0.15 + index * 0.07}s, transform 0.3s ease, border-color 0.3s, background 0.3s`,
      }}
    >
      {/* Inner glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at top left, rgba(45,127,255,0.07) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />
      {/* Top shimmer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "16px",
          right: "16px",
          height: "1px",
          background:
            "linear-gradient(90deg,transparent,rgba(45,127,255,0.35),transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      {/* Number + Icon row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'Roboto Mono',monospace",
            fontSize: "10px",
            color: hovered ? "#2d7fff" : "rgba(255,255,255,0.18)",
            letterSpacing: "0.12em",
            transition: "color 0.3s",
            position: "relative",
          }}
        >
          {svc.num}
        </span>
        <span
          style={{
            color: hovered ? "#2d7fff" : "rgba(45,127,255,0.55)",
            transition: "color 0.3s",
            position: "relative",
          }}
        >
          {svc.icon}
        </span>
      </div>

      {/* Title */}
      <p
        style={{
          fontFamily: "'Oswald',sans-serif",
          fontSize: "clamp(14px,1.6vw,16px)",
          fontWeight: 500,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#fff",
          margin: 0,
          position: "relative",
        }}
      >
        {svc.title}
      </p>

      {/* Desc */}
      <p
        style={{
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "11.5px",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.35)",
          margin: 0,
          position: "relative",
          flex: 1,
        }}
      >
        {svc.desc}
      </p>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          position: "relative",
        }}
      >
        {svc.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "9px",
              letterSpacing: "0.07em",
              padding: "3px 10px",
              borderRadius: "100px",
              border: "1px solid rgba(45,127,255,0.18)",
              background: "rgba(45,127,255,0.05)",
              color: "rgba(255,255,255,0.40)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutCTA() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.06 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="about-cta"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding: "clamp(80px,10vw,120px) clamp(20px,5%,60px)",
      }}
    >
      <FloatingShapes />

      <div
        style={{ position: "relative", maxWidth: "1140px", margin: "0 auto" }}
      >
        {/* ── Services header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px,6vw,64px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.05s",
          }}
        >
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#2d7fff",
              margin: "0 0 10px 0",
            }}
          >
            // what i do
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(32px,4.5vw,52px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 14px 0",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Services I{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Offer
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.30)",
              maxWidth: "420px",
              margin: "0 auto",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            End-to-end web development — from idea to deployed product.
          </p>
        </div>

        {/* ── Services grid ── */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "12px",
            marginBottom: "clamp(64px,8vw,96px)",
          }}
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard key={i} svc={svc} index={i} visible={visible} />
          ))}
        </div>

        {/* ── Final CTA banner ── */}
        <div
          style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(45,127,255,0.22)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.55s",
          }}
        >
          {/* Gradient background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg,rgba(45,127,255,0.10) 0%,rgba(96,98,255,0.08) 50%,rgba(0,0,0,0) 100%)",
            }}
          />
          {/* Grid overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(rgba(45,127,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.04) 1px,transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          {/* Left glow */}
          <div
            style={{
              position: "absolute",
              left: "-60px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(45,127,255,0.14) 0%,transparent 65%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          <div
            className="cta-inner"
            style={{
              position: "relative",
              padding: "clamp(40px,6%,60px) clamp(28px,5%,56px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "28px",
            }}
          >
            <div style={{ maxWidth: "540px" }}>
              <p
                style={{
                  fontFamily: "'Roboto Mono',monospace",
                  fontSize: "11px",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#2d7fff",
                  margin: "0 0 10px 0",
                }}
              >
                // open to work
              </p>
              <h3
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: "clamp(26px,3.5vw,44px)",
                  fontWeight: 400,
                  color: "#fff",
                  margin: "0 0 14px 0",
                  lineHeight: 1.15,
                }}
              >
                Ready to Start Your{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Next Project?
                </span>
              </h3>
              <p
                style={{
                  fontFamily: "'Oswald',sans-serif",
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "rgba(255,255,255,0.38)",
                  letterSpacing: "0.025em",
                  margin: 0,
                }}
              >
                I'm currently available for freelance projects, full-time roles,
                and long-term partnerships. Let's build something great
                together.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <a
                href="#contact"
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
                  boxShadow: "0 4px 24px rgba(45,127,255,0.30)",
                  whiteSpace: "nowrap",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 36px rgba(45,127,255,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 24px rgba(45,127,255,0.30)";
                }}
              >
                Start a Project
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
                href="/resume.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.60)",
                  textDecoration: "none",
                  fontFamily: "'Oswald',sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  backdropFilter: "blur(8px)",
                  whiteSpace: "nowrap",
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
                  e.currentTarget.style.color = "rgba(255,255,255,0.60)";
                }}
              >
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
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:768px){ .services-grid{ grid-template-columns:repeat(3,1fr) !important; } }
        @media(max-width:600px){ .services-grid{ grid-template-columns:1fr !important; } }
        @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(-5deg)}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `}</style>
    </section>
  );
}
