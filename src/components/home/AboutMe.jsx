import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import ProfileCard from "../react-bits/ProfileCard";
import { Link } from "react-router";

// ─── Data ─────────────────────────────────────────────────────────────────────
const highlights = [
  {
    icon: "/icons/projects.svg",
    label: "40+ Projects",
    sub: "Delivered worldwide",
  },
  {
    icon: "/icons/lightning.svg",
    label: "Fast Delivery",
    sub: "On-time, every time",
  },
  {
    icon: "/icons/ball.svg",
    label: "Pixel Perfect",
    sub: "Detail-obsessed design",
  },
  {
    icon: "/icons/code.svg",
    label: "Clean Code",
    sub: "Scalable & maintainable",
  },
];

// ─── Floating Decorative Shapes ───────────────────────────────────────────────

function FloatingShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Large blurred circle — top-left */}
      <div
        className="absolute -top-[120px] -left-[160px] w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(45,127,255,0.11) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Medium blurred circle — bottom-right */}
      <div
        className="absolute -bottom-[100px] -right-[120px] w-[440px] h-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(96,98,255,0.11) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(45,127,255,0.16) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Geometric shape — top-right diamond */}
      <img
        src="/icons/geometric-shape.svg"
        className="absolute top-[60px] right-[6%] opacity-[0.1] hidden lg:block"
        alt="icons"
      />

      {/* Small dot cluster — right side */}
      <img
        src="/icons/dots.svg"
        alt="dots"
        className="absolute top-[38%] right-[2%] opacity-[0.1] hidden xl:block"
      />
      {/* Thin ring — left mid */}

      <img
        src="/icons/rings.svg"
        alt="rings"
        className="absolute top-[42%] -left-[40px] opacity-[0.1] hidden lg:block"
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45,127,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,127,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

// ─── Highlight Card ───────────────────────────────────────────────────────────

function HighlightCard({ h, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-3px)"
            : "translateY(0)"
          : "translateY(16px)",
        transition: `opacity 0.6s ease ${0.35 + index * 0.07}s, transform 0.3s ease`,
        borderColor: hovered
          ? "rgba(45,127,255,0.30)"
          : "rgba(255,255,255,0.06)",
        background: hovered
          ? "rgba(45,127,255,0.06)"
          : "rgba(255,255,255,0.025)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "14px",
        padding: "14px 16px",
        cursor: "default",
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
      }}
    >
      <span style={{ color: "#2d7fff", marginTop: "2px", flexShrink: 0 }}>
        <img src={h.icon} alt="a" />
      </span>
      <div>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "#fff",
            margin: "0 0 3px 0",
          }}
        >
          {h.label}
        </p>
        <p
          style={{
            fontSize: "10px",
            color: "rgba(255,255,255,0.30)",
            margin: 0,
          }}
        >
          {h.sub}
        </p>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AboutMe() {
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
      id="about"
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
            // about me
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
            Why{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Choose
            </span>{" "}
            Me
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
            I build high-performance websites and web applications that help
            businesses grow.
          </p>
        </div>

        {/* ── Main Two-Column Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(40px, 6vw, 80px)",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* LEFT — Text Content */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-28px)",
              transition: "all 0.8s ease 0.1s",
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(26px, 3.2vw, 44px)",
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 6px 0",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Crafting Digital
            </h2>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(26px, 3.2vw, 44px)",
                fontWeight: 700,
                margin: "0 0 24px 0",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                background: "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Experiences
            </h2>

            <p
              style={{
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.42)",
                letterSpacing: "0.025em",
                margin: "0 0 12px 0",
              }}
            >
              Hi, I'm Shahbaz Ansari, a Full-Stack Web Developer from Gujrat,
              Pakistan.
            </p>
            <p
              style={{
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.42)",
                letterSpacing: "0.025em",
                margin: "0 0 12px 0",
              }}
            >
              I help businesses, startups, and individuals turn their ideas into
              modern, high-performing websites and web applications.
            </p>
            <p
              className="lg:text-[rgba(255,255,255,0.26)] text-[rgba(255,255,255,0.42)]"
              style={{
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: 1.9,
                letterSpacing: "0.025em",
                margin: "0 0 36px 0",
              }}
            >
              I work across both frontend and backend development, ensuring
              every project looks professional, performs smoothly, and scales as
              your needs grow. Whether it's a landing page, business website,
              portfolio, or a complete web application
            </p>

            {/* Highlights Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginBottom: "40px",
              }}
            >
              {highlights.map((h, i) => (
                <HighlightCard key={i} h={h} index={i} visible={visible} />
              ))}
            </div>

            {/* ── CTA Buttons ── */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "all 0.7s ease 0.6s",
              }}
            >
              <Link
                to="/about-me"
                className="btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 28px",
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
                Read More
                <ArrowRight size={14} />
              </Link>

              <Link
                to="/projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 28px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <Play size={12} style={{ color: "#2d7fff" }} />
                View Portfolio
              </Link>
            </div>
          </div>

          {/* RIGHT — ProfileCard */}
          <div
            className="about-card-col w-full flex items-center justify-center box-border overflow-hidden"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "all 0.8s ease 0.3s",
            }}
          >
            {/* Card wrapper with decorative elements — Controlled max width for absolute components */}
            <div
              className="relative w-full max-w-[390px] xs:max-w-[400px] sm:max-w-[330px] md:max-w-[400px] flex items-center justify-center box-border"
              style={{ position: "relative" }}
            >
              {/* Outer ambient glow */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset:
                    "-30px sm:-50px" /* Slightly scaled for small viewports */,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(45,127,255,0.10) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Decorative arc — top right of card (Preserved & Dynamically Positioned) */}
              <img
                src="/icons/dashed-circle.svg"
                alt="decorative circle"
                className="absolute opacity-[0.18] pointer-events-none hidden lg:block w-[70px] h-[70px]"
                style={{
                  top: "-28px",
                  right: "-28px",
                }}
              />

              {/* Decorative corner dots — bottom left (Restored and Responsive) */}
              <img
                src="/icons/corner-dots.svg"
                alt="decorative dots"
                className="absolute bottom-[-20px] left-[-24px] opacity-20 pointer-events-none hidden lg:block w-[48px] h-[48px]"
              />

              {/* Profile Card Main Body */}
              <div className="w-full relative z-[1]">
                <ProfileCard
                  name="Shahbaz Ansari"
                  title="Web Developer"
                  handle="javicodes"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/me.png"
                  showUserInfo={false}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log("Contact clicked")}
                  behindGlowColor="rgba(17, 17, 17, 0.67)"
                  iconUrl="/iconpattern.png"
                  behindGlowEnabled
                  innerGradient="linear-gradient(145deg,#2d7fff2b 0%,#6063ff37 100%)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
