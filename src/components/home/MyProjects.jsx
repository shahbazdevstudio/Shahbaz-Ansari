import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from "react-router";

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: "01",
    title: "Spike Family",
    description:
      "Corporate business website built with HTML, CSS, Bootstrap, and JavaScript.",
    image: "/project-1.png",
    demo: "https://shahbaz-project-1.vercel.app/",
    github: "https://github.com/shahbazansari-dev/shahbaz-project-1",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: "02",
    title: "Health Monitor ",
    description:
      "A healthcare management platform built with HTML, CSS, JavaScript, and Bootstrap 5.",
    image: "/project-2.png",
    demo: "https://shahbaz-project-2.vercel.app/",
    github: "https://github.com/shahbazansari-dev/shahbaz-project-2",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: "03",
    title: "HealthCentreApp ",
    description:
      "Healthcare startup website developed with HTML, CSS, JavaScript, and Bootstrap 5.",
    image: "/project-3.png",
    demo: "https://github.com/shahbazansari-dev/shahbaz-project-3",
    github: "https://shahbaz-project-3.vercel.app/",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: "04",
    title: "Angel Launchpad Ventures",
    description:
      "Startup investment platform website developed using HTML, CSS, JavaScript, and Bootstrap 5.",
    image: "/project-6.png",
    demo: "https://shahbaz-project-6.vercel.app/",
    github: "https://github.com/shahbazansari-dev/shahbaz-project-6",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
];

// ─── Floating Decorative Shapes ───────────────────────────────────────────────

function FloatingShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top-left blue orb */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-120px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,127,255,0.11) 0%, transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      {/* Bottom-right indigo orb */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          right: "-100px",
          width: "460px",
          height: "460px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(96,98,255,0.11) 0%, transparent 62%)",
          filter: "blur(50px)",
        }}
      />
      {/* Centre accent */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "260px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(45,127,255,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
          linear-gradient(rgba(45,127,255,0.022) 1px, transparent 1px),
          linear-gradient(90deg, rgba(45,127,255,0.022) 1px, transparent 1px)
        `,
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
          right: "4.5%",
          opacity: 0.2,
          animation: "floatA 8s ease-in-out infinite",
        }}
        width="100"
        height="100"
        alt="hexagon"
      />

      {/* Diamond — bottom-left */}
      <img
        src="/icons/geometric-shape.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "70px",
          left: "4%",
          opacity: 0.2,
          animation: "floatB 10s ease-in-out infinite",
        }}
        width="82"
        height="82"
        alt="geometric-shape"
      />

      {/* Dashed ring + dots — left mid */}
      <img
        src="/icons/rings.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "36%",
          left: "-42px",
          opacity: 0.2,
          animation: "floatA 12s ease-in-out infinite reverse",
        }}
        width="100"
        height="100"
      />

      {/* Gradient dot cluster — right */}
      <img
        src="/icons/dots.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "26%",
          right: "0.8%",
          opacity: 0.2,
        }}
        width="68"
        height="112"
        alt="dots"
      />
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index, sectionVisible }) {
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
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible
          ? hovered
            ? "translateY(-8px) scale(1.015)"
            : "translateY(0) scale(1)"
          : "translateY(30px)",
        transition: `opacity 0.6s ease ${0.1 + index * 0.1}s, transform 0.4s cubic-bezier(0.23,1,0.32,1), border-color 0.3s`,
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${project.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: hovered
            ? "brightness(0.15) saturate(0.5)"
            : "brightness(0.7) saturate(0.65)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "filter 0.7s ease, transform 0.7s ease",
        }}
      />

      {/* Indigo glow on hover */}
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

      {/* ID badge — always visible */}
      <div
        style={{
          position: "absolute",
          top: "14px",
          left: "14px",
          zIndex: 3,
          fontFamily: "'Roboto Mono', monospace",
          fontSize: "10px",
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.30)",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {project.id}
      </div>

      {/* Tech strip — hidden on hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          padding: "10px 12px",
          background: "linear-gradient(to top, rgba(0,0,0,0.88), transparent)",
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
              fontFamily: "'Roboto Mono', monospace",
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

      {/* Hover reveal panel */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(16px, 4%, 24px)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          transition:
            "opacity 0.45s ease, transform 0.45s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        <h3
          style={{
            // fontFamily: "'Cinzel', serif",
            fontSize: "clamp(14px, 1.6vw, 20px)",
            fontWeight: 400,
            color: "#fff",
            margin: "0 0 3px 0",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: "clamp(9px, 1vw, 11px)",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.75,
            margin: "0 0 8px 0",
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
              height: "36px",
              borderRadius: "100px",
              background: "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              color: "#fff",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(45,127,255,0.30)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow =
                "0 6px 22px rgba(45,127,255,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 16px rgba(45,127,255,0.30)";
            }}
          >
            <ExternalLink size={11} />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{
              width: "36px",
              height: "36px",
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

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MyProjects() {
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
      id="projects"
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding: "clamp(80px, 10vw, 130px) clamp(20px, 5%, 60px)",
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
            Featured{" "}
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

        {/* ── 4-card Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "12px",
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              sectionVisible={visible}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(40px, 5vw, 60px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition: "all 0.7s ease 0.55s",
          }}
        >
          <Link
            to="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 34px",
              borderRadius: "100px",
              border: "1px solid rgba(45,127,255,0.35)",
              background: "rgba(45,127,255,0.04)",
              color: "#2d7fff",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              textDecoration: "none",
              backdropFilter: "blur(8px)",
              transition: "all 0.28s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(45,127,255,0.10)";
              e.currentTarget.style.borderColor = "rgba(45,127,255,0.60)";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(45,127,255,0.04)";
              e.currentTarget.style.borderColor = "rgba(45,127,255,0.35)";
              e.currentTarget.style.color = "#2d7fff";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View All Projects
            <HiArrowSmallRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
