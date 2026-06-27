import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    num: "01",
    title: "Frontend Development",
    desc: "React, Next.js, Tailwind CSS — responsive, accessible, performant. I build interfaces that feel as fast as they look.",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    icon: "/icons/code.svg",
  },
  {
    num: "02",
    title: "Backend & APIs",
    desc: "Node.js, Express, MongoDB REST APIs built with auth, validation, and scalability from the start.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    icon: "/icons/database-accent.svg",
  },
  {
    num: "03",
    title: "UI / UX Design",
    desc: "Figma mockups to browser pixel-perfect. I design systems, component libraries, and interaction flows.",
    tags: ["Figma", "Design Systems", "Framer"],
    icon: "/icons/target-accent.svg",
  },
  {
    num: "04",
    title: "Performance Audit",
    desc: "Core Web Vitals, bundle analysis, lazy loading strategies — I'll find the bottlenecks and fix them.",
    tags: ["Lighthouse", "Web Vitals", "SEO"],
    icon: "/icons/bolt-accent.svg",
  },
  {
    num: "05",
    title: "SaaS / Dashboard",
    desc: "Data-heavy apps, role-based auth, real-time features, and chart-heavy dashboards for B2B products.",
    tags: ["React", "Charts", "Auth", "Real-time"],
    icon: "/icons/monitor-code.svg",
  },
  {
    num: "06",
    title: "Site Redesign",
    desc: "Audit existing sites and rebuild them to a significantly higher standard of design, speed, and conversion.",
    tags: ["Redesign", "Responsive", "CRO"],
    icon: "/icons/edit-pencil.svg",
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
      <img
        src="/icons/code.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "52px",
          right: "5%",
          opacity: 0.1,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="90"
        height="70"
        alt="code"
      />

      {/* Hexagon — bottom-left */}
      <img
        src="/icons/geometric-shape.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "72px",
          left: "4%",
          opacity: 0.05,
          animation: "floatB 11s ease-in-out infinite",
        }}
        width="90"
        height="90"
        alt="geometric-shape"
      />

      {/* Dashed ring — left mid */}
      <img
        src="/icons/rings.svg"
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
        alt="rings"
      />

      {/* Dot cluster — right */}
      <img
        src="/icons/dots.svg"
        className="hidden xl:block"
        style={{ position: "absolute", top: "22%", right: "1%", opacity: 0.1 }}
        width="68"
        height="112"
        alt="dots"
      />

      {/* Plus — top-left */}
      <img
        src="/icons/plus-accent.svg"
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
        alt="plus"
      />

      {/* Triangle — bottom-right */}
      <img
        src="/icons/triangle-accent.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "7%",
          opacity: 0.18,
          animation: "floatA 10s ease-in-out infinite 2s",
        }}
        width="56"
        height="56"
        alt="triangle"
      />
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
          <img src={svc.icon} alt={svc.title} />
        </span>
      </div>

      {/* Title */}
      <p
        style={{
          fontSize: "clamp(14px,1.6vw,16px)",
          fontWeight: 400,
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
                  fontWeight: 400,
                  fontSize: "14px",
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
                <HiArrowSmallRight size={16} />
              </a>
              <Link
                to={"/projects"}
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
                <Play size={14} style={{ color: "#2d7fff" }} />
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
