/**
 * ServicesList.jsx  — Component 2 / 3
 * Main services grid — detailed cards with icons, features, and CTA.
 */

import { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "01",
    title: "Frontend Development",
    tagline: "Interfaces people love",
    desc: "Pixel-perfect React & Next.js UIs with smooth animations, responsive layouts, and performance scores that actually matter.",
    features: [
      "React / Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "SEO Optimised",
      "Accessibility",
    ],
    icon: "/icons/code.svg",
    accent: "#2d7fff",
  },
  {
    id: "02",
    title: "Full-Stack Web Apps",
    tagline: "End-to-end solutions",
    desc: "Complete web applications from database schema to polished UI — Node.js, Express, MongoDB, and React working in harmony.",
    features: [
      "Node.js / Express",
      "MongoDB / Mongoose",
      "REST APIs",
      "Auth & JWT",
      "File Uploads",
      "Cloud Deploy",
    ],
    icon: "/icons/ball.svg",
    accent: "#6062ff",
  },
  {
    id: "03",
    title: "UI / UX Design",
    tagline: "Design that converts",
    desc: "Figma wireframes to production-ready components. I design for clarity first, aesthetics second — the two rarely conflict.",
    features: [
      "Figma Design",
      "Component Systems",
      "Design Tokens",
      "User Flows",
      "Prototyping",
      "Handoff-Ready",
    ],
    icon: "/icons/ball.svg",
    accent: "#2d7fff",
  },
  {
    id: "04",
    title: "E-Commerce Stores",
    tagline: "Stores built to sell",
    desc: "Custom storefronts with cart, checkout, payment integration, and inventory management — fast, secure, and conversion-focused.",
    features: [
      "Stripe / PayPal",
      "Product Catalog",
      "Cart & Checkout",
      "Order Management",
      "Admin Dashboard",
      "Mobile First",
    ],
    icon: "/icons/ecommerce-cart.svg",
    accent: "#6062ff",
  },
  {
    id: "05",
    title: "Landing Pages",
    tagline: "First impressions count",
    desc: "High-converting landing pages built for speed and impact — A/B-ready, analytics-ready, and live within days.",
    features: [
      "Fast Turnaround",
      "CTA Optimised",
      "GTM / Analytics",
      "A/B Ready",
      "Core Web Vitals",
      "Multi-section",
    ],
    icon: "/icons/bolt-accent.svg",
    accent: "#2d7fff",
  },
  {
    id: "06",
    title: "API Development",
    tagline: "Reliable backends",
    desc: "Clean, documented REST APIs with proper error handling, rate limiting, authentication, and scalable architecture.",
    features: [
      "RESTful APIs",
      "JWT / OAuth",
      "Rate Limiting",
      "Swagger Docs",
      "Webhook Support",
      "Postman Collections",
    ],
    icon: "/icons/analytics-bars.svg",
    accent: "#6062ff",
  },
];

// ─── Floating Shapes ──────────────────────────────────────────────────────────

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
          right: "-110px",
          width: "460px",
          height: "460px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(96,98,255,0.09) 0%,transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-100px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(45,127,255,0.08) 0%,transparent 62%)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(45,127,255,0.020) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.020) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hexagon — top-right */}
      <img
        src="/icons/geometric-shape.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "40px",
          right: "5%",
          opacity: 0.05,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="96"
        height="96"
        alt="geometric-shape"
      />

      {/* Dashed ring — left */}
      <img
        src="/icons/rings.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "32%",
          left: "-46px",
          opacity: 0.11,
          animation: "floatA 13s ease-in-out infinite reverse",
        }}
        width="148"
        height="148"
        alt="ring"
      />
      {/* Diamond — bottom-right */}
      <img
        src="/icons/diamond.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "60px",
          right: "6%",
          opacity: 0.05,
          animation: "floatB 11s ease-in-out infinite",
        }}
        width="74"
        height="74"
        alt="diamond"
      />

      {/* Dot grid — right */}
      <img
        src="/icons/dots.svg"
        className="hidden xl:block"
        style={{ position: "absolute", top: "22%", right: "1%", opacity: 0.09 }}
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
          left: "7%",
          opacity: 0.08,
          animation: "floatB 8s ease-in-out infinite 0.5s",
        }}
        width="32"
        height="32"
        alt="plus"
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
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        border: `1px solid ${hovered ? "rgba(45,127,255,0.30)" : "rgba(255,255,255,0.07)"}`,
        background: hovered
          ? "rgba(45,127,255,0.05)"
          : "rgba(255,255,255,0.025)",
        padding: "clamp(22px,3.5%,32px)",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-5px)"
            : "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.6s ease ${0.1 + index * 0.08}s, transform 0.35s cubic-bezier(0.23,1,0.32,1), border-color 0.3s, background 0.3s`,
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}
    >
      {/* Top shimmer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "18px",
          right: "18px",
          height: "1px",
          background: hovered
            ? "linear-gradient(90deg,transparent,rgba(45,127,255,0.55),transparent)"
            : "linear-gradient(90deg,transparent,rgba(45,127,255,0.22),transparent)",
          transition: "all 0.4s",
        }}
      />

      {/* Inner glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at top left, rgba(45,127,255,0.07) 0%, transparent 55%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "18px",
          position: "relative",
        }}
      >
        {/* Icon box */}
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "14px",
            flexShrink: 0,
            background: hovered
              ? "rgba(45,127,255,0.14)"
              : "rgba(45,127,255,0.07)",
            border: `1px solid ${hovered ? "rgba(45,127,255,0.38)" : "rgba(45,127,255,0.18)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#2d7fff",
            transition: "all 0.3s",
          }}
        >
          <img src={svc.icon} alt={svc.title} />
        </div>
        {/* ID */}
        <span
          style={{
            fontFamily: "'Roboto Mono',monospace",
            fontSize: "11px",
            color: hovered ? "rgba(45,127,255,0.60)" : "rgba(255,255,255,0.15)",
            letterSpacing: "0.10em",
            transition: "color 0.3s",
            marginTop: "4px",
          }}
        >
          {svc.id}
        </span>
      </div>

      {/* Title + tagline */}
      <p
        style={{
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "10px",
          letterSpacing: "0.20em",
          textTransform: "uppercase",
          color: hovered ? "#2d7fff" : "rgba(45,127,255,0.50)",
          margin: "0 0 6px 0",
          transition: "color 0.3s",
          position: "relative",
        }}
      >
        {svc.tagline}
      </p>
      <h3
        style={{
          fontSize: "clamp(17px,2vw,22px)",
          fontWeight: 400,
          color: "#fff",
          margin: "0 0 14px 0",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
          position: "relative",
        }}
      >
        {svc.title}
      </h3>

      {/* Gradient divider */}
      <div
        style={{
          height: "1px",
          marginBottom: "14px",
          position: "relative",
          background: hovered
            ? "linear-gradient(90deg,rgba(45,127,255,0.40),rgba(96,98,255,0.20),transparent)"
            : "linear-gradient(90deg,rgba(45,127,255,0.18),rgba(96,98,255,0.08),transparent)",
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "12px",
          lineHeight: 1.85,
          color: "rgba(255,255,255,0.38)",
          letterSpacing: "0.02em",
          margin: "0 0 10px 0",
          position: "relative",
          flex: 1,
        }}
      >
        {svc.desc}
      </p>

      {/* Feature tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "7px",
          position: "relative",
        }}
      >
        {svc.features.map((f) => (
          <span
            key={f}
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "9.5px",
              letterSpacing: "0.05em",
              padding: "4px 10px",
              borderRadius: "100px",
              border: `1px solid ${hovered ? "rgba(45,127,255,0.25)" : "rgba(255,255,255,0.08)"}`,
              background: hovered
                ? "rgba(45,127,255,0.07)"
                : "rgba(255,255,255,0.03)",
              color: hovered
                ? "rgba(255,255,255,0.60)"
                : "rgba(255,255,255,0.35)",
              transition: "all 0.3s",
            }}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesList() {
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
      id="services-list"
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
        {/* ── Header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px,6vw,68px)",
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
            // services
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
            What I{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Deliver
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
            Six core services, each executed with the same obsession for quality
            and detail.
          </p>
        </div>

        {/* ── 3-col card grid ── */}
        <div
          className="sl-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} index={i} visible={visible} />
          ))}
        </div>
      </div>

      <style>{`
        @media(min-width:640px){ .sl-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(min-width:1024px){ .sl-grid{ grid-template-columns:repeat(3,1fr) !important; } }
        @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(-5deg)}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `}</style>
    </section>
  );
}
