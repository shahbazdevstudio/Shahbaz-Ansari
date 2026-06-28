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
    title: "Spike Family",
    description:
      "A modern corporate website designed to showcase business services, company information, and brand credibility through a clean and professional user experience.",
    image: "/project-thumnails/project-1.png",
    demo: "https://shahbaz-project-1.vercel.app/",
    github: "https://github.com/shahbazansari-dev/shahbaz-project-1",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: "02",
    title: "Health Monitor",
    description:
      "A healthcare management platform focused on presenting medical services, health resources, and patient information in a clear and accessible way.",
    image: "/project-thumnails/project-2.png",
    demo: "https://shahbaz-project-2.vercel.app/",
    github: "https://github.com/shahbazansari-dev/shahbaz-project-2",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: "03",
    title: "HealthCentreApp",
    description:
      "A healthcare startup website built to highlight medical solutions, services, and company offerings with a modern and user-friendly design.",
    image: "/project-thumnails/project-3.png",
    demo: "https://github.com/shahbazansari-dev/shahbaz-project-3",
    github: "https://shahbaz-project-3.vercel.app/",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: "04",
    title: "GYMSTER",
    description:
      "A fitness and gym website created to promote training programs, membership plans, and wellness services with an engaging online presence.",
    image: "/project-thumnails/project-4.png",
    demo: "https://shahbaz-project-4.vercel.app/",
    github: "https://github.com/shahbazansari-dev/shahbaz-project-4",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: "05",
    title: "Angel Launchpad Ventures",
    description:
      "A startup investment platform that connects entrepreneurs with investors while presenting funding opportunities and venture-related information.",
    image: "/project-thumnails/project-5.png",
    demo: "https://shahbaz-project-5.vercel.app/",
    github: "https://github.com/shahbazansari-dev/shahbaz-project-5",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: "06",
    title: "Angel Launchpad Ventures",
    description:
      "A startup investment platform that connects entrepreneurs with investors while presenting funding opportunities and venture-related information.",
    image: "/project-thumnails/project-6.png",
    demo: "https://shahbaz-project-6.vercel.app/",
    github: "https://github.com/shahbazansari-dev/shahbaz-project-6",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: "07",
    title: "Global CareGivers",
    description:
      "A caregiver database platform designed to help users explore caregiver profiles, services, and healthcare support resources efficiently.",
    image: "/project-thumnails/project-7.png",
    demo: "https://shahbaz-project-7.vercel.app/",
    github: "https://github.com/shahbazansari-dev/shahbaz-project-7",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: "08",
    title: "Fatography",
    description:
      "A photography portfolio website built to showcase creative work, highlight services, and help potential clients connect with the photographer.",
    image: "/project-thumnails/project-8.png",
    demo: "/https://fatography.co/",
    github: "https://github.com/shahbazansari-dev/shahbaz-project-8",
    tech: ["Rect", "Tailwind", "Express", "MongoDb"],
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
            fontSize: "clamp(14px,1.6vw,20px)",
            fontWeight: 400,
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
            fontSize: "clamp(9px,1.2vw,13px)",
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
        {/* ── Section Header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px, 6vw, 72px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.05s",
          }}
        >
          <p
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#2d7fff",
              margin: "0 0 10px 0",
            }}
          >
            // my work
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 16px 0",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            All {" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.30)",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            A showcase of web applications built with modern tools and attention
            to detail.
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
