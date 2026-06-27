import { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { HiArrowSmallRight } from "react-icons/hi2";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

// ─── Data ─────────────────────────────────────────────────────────────────────

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt />, level: 75 },
  { name: "JavaScript", icon: <FaJs />, level: 70 },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 85 },
  { name: "React", icon: <FaReact />, level: 80 },
  { name: "Tailwind", icon: <SiTailwindcss />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs />, level: 75 },
  { name: "Express.js", icon: <SiExpress />, level: 85 },
  { name: "MongoDB", icon: <SiMongodb />, level: 75 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 70 },
];

const stats = [
  { value: "50+", label: "Projects Done" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

// ─── Floating Decorative Shapes ───────────────────────────────────────────────

function FloatingShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Ambient orbs ── */}
      {/* Large indigo orb — top-left */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-100px",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(96,98,255,0.11) 0%, transparent 60%)",
          filter: "blur(55px)",
        }}
      />
      {/* Blue orb — bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-80px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,127,255,0.11) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />
      {/* Small warm accent orb — centre-right */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "18%",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(96,98,255,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Grid overlay ── */}
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

      {/* ── Gradient-filled hexagon — top-right (unique to Skills) ── */}
      <img
        src="/icons/geometric-shape.svg"
        className="hidden lg:block absolute opacity-[0.13]"
        style={{ top: "30px", right: "5%" }}
      />
      {/* ── Gradient diamond — bottom-left ── */}
      <img
        src="/icons/diamond.svg"
        className="hidden lg:block absolute"
        style={{ bottom: "60px", left: "3.5%", opacity: 0.15 }}
      />

      {/* ── Glowing circle ring — left mid ── */}
      <img
        src="/icons/dashed-circle.svg"
        className="hidden xl:block absolute opacity-10"
        style={{ top: "38%", left: "-36px" }}
        alt="ring"
      />
    </div>
  );
}

// ─── Skill Card ───────────────────────────────────────────────────────────────

function SkillCard({ skill, index, sectionVisible }) {
  const barRef = useRef(null);
  const [barFilled, setBarFilled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!sectionVisible) return;
    const timer = setTimeout(() => setBarFilled(true), 200 + index * 60);
    return () => clearTimeout(timer);
  }, [sectionVisible, index]);

  const cardVisible = sectionVisible;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: cardVisible ? 1 : 0,
        transform: cardVisible
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(20px)",
        transition: `opacity 0.55s ease ${0.1 + index * 0.05}s, transform 0.3s ease`,
        borderRadius: "16px",
        border: `1px solid ${hovered ? "rgba(45,127,255,0.28)" : "rgba(255,255,255,0.06)"}`,
        background: hovered
          ? "rgba(45,127,255,0.05)"
          : "rgba(255,255,255,0.025)",
        padding: "16px",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hover inner glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at top left, rgba(45,127,255,0.06) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          borderRadius: "inherit",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "14px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Icon box */}
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "rgba(45,127,255,0.08)",
              border: "1px solid rgba(45,127,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "#2d7fff",
              transition: "background 0.3s, border-color 0.3s",
              ...(hovered
                ? {
                    background: "rgba(45,127,255,0.14)",
                    borderColor: "rgba(45,127,255,0.35)",
                  }
                : {}),
            }}
          >
            {skill.icon}
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                color: "#fff",
                margin: "0 0 2px 0",
              }}
            >
              {skill.name}
            </p>
            <p
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.28)",
                margin: 0,
              }}
            >
              Professional
            </p>
          </div>
        </div>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: hovered ? "#2d7fff" : "rgba(255,255,255,0.45)",
            transition: "color 0.3s",
          }}
        >
          {skill.level}%
        </span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          height: "3px",
          borderRadius: "100px",
          background: "rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div
          ref={barRef}
          style={{
            height: "100%",
            borderRadius: "100px",
            background: "linear-gradient(90deg, #2d7fff 0%, #6062ff 100%)",
            width: barFilled ? `${skill.level}%` : "0%",
            transition: "width 1.4s cubic-bezier(0.25, 1, 0.5, 1)",
            boxShadow: hovered ? "0 0 8px rgba(45,127,255,0.5)" : "none",
          }}
        />
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MySkills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
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
        style={{ position: "relative", maxWidth: "1140px", margin: "0 auto" }}
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
            // my expertise
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
            Skills &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Experience
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.32)",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            Using modern technologies to create responsive, high-performance,
            and scalable web applications.
          </p>
        </div>

        {/* ── Two Column Grid ── */}
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "start",
          }}
        >
          {/* LEFT — Skill Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "10px",
            }}
          >
            {skills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={i}
                sectionVisible={visible}
              />
            ))}
          </div>

          {/* RIGHT — Info Panel */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(28px)",
              transition: "all 0.8s ease 0.25s",
            }}
          >
            {/* Panel card */}
            <div
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
                padding: "clamp(24px, 4vw, 36px)",
                backdropFilter: "blur(12px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Inner gradient accent */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "260px",
                  height: "260px",
                  background:
                    "radial-gradient(circle at top right, rgba(45,127,255,0.07) 0%, transparent 65%)",
                  pointerEvents: "none",
                }}
              />

              {/* Heading */}
              <h3
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(22px, 2.8vw, 34px)",
                  fontWeight: 400,
                  color: "#fff",
                  margin: "0 0 16px 0",
                  lineHeight: 1.2,
                  position: "relative",
                }}
              >
                Building Fast & Scalable
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {" "}
                  Web Applications
                </span>
              </h3>

              <p
                style={{
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.38)",
                  letterSpacing: "0.025em",
                  margin: "0 0 32px 0",
                  position: "relative",
                }}
              >
                I work with modern web technologies to develop fast, responsive,
                and scalable applications. From frontend UI to backend logic, I
                make sure everything works smoothly, performs well, and delivers
                a clean user experience that supports real business goals.
              </p>

              {/* Stats 2×2 */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  marginBottom: "28px",
                  position: "relative",
                }}
              >
                {stats.map((s, i) => (
                  <StatBox key={i} stat={s} index={i} visible={visible} />
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "14px 24px",
                  borderRadius: "100px",
                  background:
                    "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  boxShadow: "0 4px 24px rgba(45,127,255,0.28)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  position: "relative",
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
                Hire Me
                <HiArrowSmallRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stat Box ─────────────────────────────────────────────────────────────────

function StatBox({ stat, index, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "14px",
        border: `1px solid ${hovered ? "rgba(45,127,255,0.30)" : "rgba(45,127,255,0.14)"}`,
        background: hovered ? "rgba(45,127,255,0.08)" : "rgba(45,127,255,0.04)",
        padding: "18px 14px",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.55s ease ${0.4 + index * 0.07}s, transform 0.3s ease, border-color 0.3s, background 0.3s`,
        cursor: "default",
      }}
    >
      <p
        style={{
          fontSize: "clamp(22px, 2.5vw, 30px)",
          fontWeight: 600,
          background: "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: "0 0 4px 0",
        }}
      >
        {stat.value}
      </p>
      <p
        style={{
          fontSize: "10px",
          color: "rgba(255,255,255,0.30)",
          margin: 0,
          letterSpacing: "0.04em",
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}
