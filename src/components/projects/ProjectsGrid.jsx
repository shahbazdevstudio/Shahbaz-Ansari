/**
 * ProjectsGrid.jsx  — Component 2 / 3
 * Full filterable project grid — expanded cards with image, tech, detail panel.
 * Reuses same ProjectCard style as home MyProjects but with more data + filter.
 */

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// ─── Full Projects Data ───────────────────────────────────────────────────────

const ALL_PROJECTS = [
  {
    id: "01",
    title: "GrowMore Trading",
    category: "Full-Stack",
    description:
      "Advanced paper trading platform with portfolio tracking, analytics, and real-time market simulation. Users can manage positions, track P&L, and simulate real trades without risk.",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "JWT"],
    year: "2024",
  },
  {
    id: "02",
    title: "Sellit Marketplace",
    category: "Full-Stack",
    description:
      "Modern classified ads marketplace where users can post, manage, and promote listings. Features real-time search, image uploads, and a clean admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["React", "Express", "MongoDB", "Cloudinary"],
    year: "2024",
  },
  {
    id: "03",
    title: "Crypto Tracker",
    category: "React",
    description:
      "Portfolio tracker for crypto assets with live price feeds, interactive charts, profit/loss dashboards, and watchlist management across multiple wallets.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["Next.js", "Node.js", "Chart.js", "CoinGecko API"],
    year: "2023",
  },
  {
    id: "04",
    title: "Portfolio Website",
    category: "UI/UX",
    description:
      "High-end animated developer portfolio with premium dark UI, smooth CSS transitions, and modular React architecture. Built for performance and design impact.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2024",
  },
  {
    id: "05",
    title: "ShopEase E-Commerce",
    category: "Full-Stack",
    description:
      "Feature-complete e-commerce store with Stripe payments, inventory management, product filtering, order tracking, and a custom admin panel for merchants.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    year: "2023",
  },
  {
    id: "06",
    title: "TaskFlow SaaS",
    category: "Full-Stack",
    description:
      "Project management SaaS with real-time kanban boards, team collaboration, task assignments, time tracking, and Slack notifications via webhooks.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    year: "2023",
  },
  {
    id: "07",
    title: "NexBlog Platform",
    category: "Next.js",
    description:
      "Full-featured blogging CMS with MDX support, tag filtering, author profiles, newsletter integration, and a clean reading experience optimised for Core Web Vitals.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    year: "2022",
  },
  {
    id: "08",
    title: "DevAPI Gateway",
    category: "API",
    description:
      "RESTful API gateway with rate limiting, OAuth 2.0, Swagger docs, webhook delivery, and a developer dashboard for managing API keys and monitoring usage.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["Node.js", "Express", "Redis", "PostgreSQL", "Swagger"],
    year: "2023",
  },
  {
    id: "09",
    title: "LandingKit UI",
    category: "UI/UX",
    description:
      "Figma design system and React component library for SaaS landing pages. 40+ components, dark/light themes, and full Storybook documentation.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["React", "Figma", "Storybook", "Tailwind CSS"],
    year: "2022",
  },
];

const FILTER_MAP = {
  All: () => true,
  React: (p) => p.tech.some((t) => t === "React"),
  "Next.js": (p) => p.tech.some((t) => t.includes("Next")),
  "Full-Stack": (p) => p.category === "Full-Stack",
  "UI/UX": (p) => p.category === "UI/UX",
  API: (p) => p.category === "API",
};

// ─── Floating Shapes (distinct) ───────────────────────────────────────────────

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
      {/* 4-point star — top-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "44px",
          right: "5%",
          opacity: 0.1,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <defs>
          <linearGradient id="ggsg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M36 4 L40 32 L68 36 L40 40 L36 68 L32 40 L4 36 L32 32 Z"
          fill="url(#ggsg)"
        />
      </svg>
      {/* Concentric rings — left */}
      <svg
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
        viewBox="0 0 148 148"
        fill="none"
      >
        <defs>
          <linearGradient id="ggrg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <circle
          cx="74"
          cy="74"
          r="70"
          stroke="url(#ggrg)"
          strokeWidth="1.4"
          strokeDasharray="8 5"
        />
        <circle
          cx="74"
          cy="74"
          r="48"
          stroke="#6062ff"
          strokeWidth="0.8"
          strokeOpacity="0.28"
        />
        <circle
          cx="74"
          cy="74"
          r="28"
          stroke="#2d7fff"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />
        <circle cx="74" cy="4" r="4" fill="#2d7fff" />
        <circle cx="144" cy="74" r="4" fill="#6062ff" />
      </svg>
      {/* Diamond — bottom-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "60px",
          right: "6%",
          opacity: 0.09,
          animation: "floatB 10s ease-in-out infinite",
        }}
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
      >
        <defs>
          <linearGradient id="ggdg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6062ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d7fff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect
          x="37"
          y="3"
          width="50"
          height="50"
          rx="5"
          transform="rotate(45 37 3)"
          fill="url(#ggdg)"
        />
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
          <linearGradient id="ggdt" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#ggdt)"
              opacity={1 - i * 0.12}
            />
          )),
        )}
      </svg>
      {/* Plus — bottom-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "18%",
          left: "6%",
          opacity: 0.08,
          animation: "floatB 7s ease-in-out infinite 1s",
        }}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect x="12" y="0" width="8" height="32" rx="4" fill="#6062ff" />
        <rect x="0" y="12" width="32" height="8" rx="4" fill="#2d7fff" />
      </svg>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "18px",
        overflow: "hidden",
        border: `1px solid ${hovered ? "rgba(45,127,255,0.30)" : "rgba(255,255,255,0.07)"}`,
        cursor: "pointer",
        aspectRatio: "3/2",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-8px) scale(1.015)"
            : "translateY(0) scale(1)"
          : "translateY(30px)",
        transition: `opacity 0.6s ease ${0.06 + index * 0.07}s, transform 0.4s cubic-bezier(0.23,1,0.32,1), border-color 0.3s`,
      }}
    >
      {/* BG image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${project.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: hovered
            ? "brightness(0.14) saturate(0.2)"
            : "brightness(0.50) saturate(0.62)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "filter 0.7s ease, transform 0.7s ease",
        }}
      />

      {/* Hover glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(45,127,255,0.18), transparent 65%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: "none",
        }}
      />

      {/* Year badge */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          zIndex: 3,
          padding: "3px 10px",
          borderRadius: "100px",
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.10)",
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "9px",
          color: "rgba(255,255,255,0.40)",
          letterSpacing: "0.08em",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s",
        }}
      >
        {project.year}
      </div>

      {/* ID */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "14px",
          zIndex: 3,
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "10px",
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.28)",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s",
        }}
      >
        {project.id}
      </div>

      {/* Tech strip */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          padding: "10px 12px",
          background: "linear-gradient(to top,rgba(0,0,0,0.88),transparent)",
          display: "flex",
          flexWrap: "wrap",
          gap: "5px",
          opacity: hovered ? 0 : 1,
          transform: hovered ? "translateY(6px)" : "translateY(0)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "9px",
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.60)",
              padding: "2px 8px",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Hover panel */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(14px,4%,22px)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          transition:
            "opacity 0.45s ease, transform 0.45s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        {/* Category tag */}
        <span
          style={{
            fontFamily: "'Roboto Mono',monospace",
            fontSize: "9px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(45,127,255,0.80)",
            marginBottom: "8px",
            display: "block",
          }}
        >
          {project.category}
        </span>

        <h3
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: "clamp(14px,1.6vw,20px)",
            fontWeight: 600,
            color: "#fff",
            margin: "0 0 6px 0",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>

        {/* Gradient bar */}
        <div
          style={{
            width: "28px",
            height: "2px",
            borderRadius: "100px",
            background: "linear-gradient(90deg,#2d7fff,#6062ff)",
            marginBottom: "8px",
          }}
        />

        <p
          style={{
            fontFamily: "'Roboto Mono',monospace",
            fontSize: "clamp(9px,1vw,10.5px)",
            color: "rgba(255,255,255,0.42)",
            lineHeight: 1.75,
            margin: "0 0 16px 0",
          }}
        >
          {project.description}
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "8px" }}>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1,
              height: "34px",
              borderRadius: "100px",
              background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontFamily: "'Oswald',sans-serif",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              color: "#fff",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(45,127,255,0.30)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(45,127,255,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 14px rgba(45,127,255,0.30)";
            }}
          >
            <ExternalLink size={11} /> Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.70)",
              textDecoration: "none",
              transition:
                "border-color 0.25s, background 0.25s, color 0.25s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(45,127,255,0.50)";
              e.currentTarget.style.background = "rgba(45,127,255,0.12)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.color = "rgba(255,255,255,0.70)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaGithub size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectsGrid({ activeFilter }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [displayed, setDisplayed] = useState(ALL_PROJECTS);
  const [animKey, setAnimKey] = useState(0);

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

  // Filter with brief fade-out / fade-in
  useEffect(() => {
    setVisible(false);
    const t1 = setTimeout(() => {
      const fn = FILTER_MAP[activeFilter] || (() => true);
      setDisplayed(ALL_PROJECTS.filter(fn));
      setAnimKey((k) => k + 1);
    }, 200);
    const t2 = setTimeout(() => setVisible(true), 300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [activeFilter]);

  return (
    <section
      ref={ref}
      id="projects-grid"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding: "clamp(80px,10vw,120px) clamp(20px,5%,60px)",
      }}
    >
      <FloatingShapes />

      <div
        style={{ position: "relative", maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "clamp(32px,4vw,48px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s ease 0.05s",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "11px",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: "#2d7fff",
                margin: "0 0 6px 0",
              }}
            >
              // projects
            </p>
            <h2
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(26px,3.5vw,40px)",
                fontWeight: 400,
                color: "#fff",
                margin: 0,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              {activeFilter === "All"
                ? "All Projects"
                : `${activeFilter} Projects`}{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ({displayed.length})
              </span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "11px",
              color: "rgba(255,255,255,0.25)",
              letterSpacing: "0.06em",
            }}
          >
            Hover a card to explore →
          </p>
        </div>

        {/* Grid */}
        <div
          key={animKey}
          className="pg-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}
        >
          {displayed.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        {/* Empty state */}
        {displayed.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s",
            }}
          >
            <p
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "12px",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.08em",
              }}
            >
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @media(min-width:640px){ .pg-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(min-width:1024px){ .pg-grid{ grid-template-columns:repeat(3,1fr) !important; } }
        @media(min-width:1280px){ .pg-grid{ grid-template-columns:repeat(3,1fr) !important; } }
        @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(-5deg)}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `}</style>
    </section>
  );
}
