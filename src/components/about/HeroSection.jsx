/**
 * AboutHero.jsx  — Component 1 / 3
 * Full-width hero for the About page.
 * Theme: black bg · #2d7fff / #6062ff gradient · Cinzel / Oswald / Roboto Mono
 */

import { useEffect, useRef, useState } from "react";
import ProfileCard from "../react-bits/ProfileCard";
import { Link } from "react-router";
import { HiArrowSmallRight } from "react-icons/hi2";
import { PlayIcon } from "lucide-react";
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
          top: "-100px",
          left: "-120px",
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
          top: "30%",
          right: "25%",
          width: "300px",
          height: "300px",
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

      {/* Hexagon — top-right */}
      <img
        src="icons/geometric-shape.svg"
        style={{
          position: "absolute",
          top: "120px",
          right: "3%",
          opacity: 0.12,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="60"
        height="60"
        alt="geometric-shape"
      />

      {/* Dashed ring — left */}
      <img
        src="/icons/rings.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "20%",
          left: "-50px",
          opacity: 0.12,
          animation: "floatA 13s ease-in-out infinite reverse",
        }}
        width="160"
        height="160"
        alt="rings"
      />

      {/* Dot cluster — right */}
      <img
        src="/icons/dots.svg"
        className="hidden xl:block"
        style={{ position: "absolute", top: "32%", right: "1%", opacity: 0.09 }}
        width="68"
        height="112"
        alt="dots"
      />

      {/* Plus — bottom-right */}
      <img
        src="/icons/plus-accent.svg"
        alt="plus"
        className="hidden lg:block absolute bottom-[18%] right-[9%] opacity-[0.08] animate-floatB"
      />
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({ value, label, delay, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 130px",
        padding: "20px 16px",
        borderRadius: "16px",
        border: `1px solid ${hovered ? "rgba(45,127,255,0.30)" : "rgba(255,255,255,0.07)"}`,
        background: hovered
          ? "rgba(45,127,255,0.06)"
          : "rgba(255,255,255,0.025)",
        textAlign: "center",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.4s ease ${delay}s, border-color 0.3s, background 0.3s`,
      }}
    >
      <p
        style={{
          fontSize: "clamp(24px,3vw,36px)",
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
          fontSize: "12px",
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

export default function AboutHeroSection() {
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
      id="about-hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding: "clamp(90px,12vw,140px) clamp(20px,5%,60px)",
      }}
    >
      <FloatingShapes />

      <div
        style={{ position: "relative", maxWidth: "1140px", margin: "0 auto" }}
      >
        {/* ── Two-column: text left, image right ── */}
        <div
          className="ah-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(48px,6vw,80px)",
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-28px)",
              transition: "all 0.8s ease 0.1s",
            }}
          >
            <p className="!mt-10 md:!mt-0"
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "11px",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: "#2d7fff",
                margin: "0 0 16px 0",
              }}
            >
              // about me
            </p>

            <h1
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(34px,5vw,64px)",
                fontWeight: 400,
                color: "#fff",
                margin: "0 0 8px 0",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Shahbaz Ansari
            </h1>
            <h1
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(34px,5vw,40px)",
                fontWeight: 400,
                margin: "0 0 28px 0",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Full-Stack Developer
            </h1>

            <p
              style={{
                // fontFamily: "'Oswald',sans-serif",
                fontWeight: 300,
                fontSize: "clamp(14px,1.6vw,16px)",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.42)",
                letterSpacing: "0.025em",
                margin: "0 0 14px 0",
                maxWidth: "520px",
              }}
            >
              Hi, I'm{" "}
              <strong
                style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}
              >
                Shahbaz Ansari
              </strong>
              , a Full-Stack{" "}
              <strong style={{ color: "#2d7fff", fontWeight: 600 }}>
                Web Developer
              </strong>{" "}
              from Gujrat, Pakistan. I build modern websites and web applications that combine clean
              design, strong performance, and a seamless user experience.
            </p>

            {/* CTA row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 28px",
                  borderRadius: "100px",
                  background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "12px",
                  fontWeight: 400,
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
                Hire Me
                <HiArrowSmallRight />
              </a>
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
                  textDecoration: "none",
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
                <PlayIcon color="#2d7fff" size={12} />
                View Work
              </Link>
            </div>
          </div>

          {/* RIGHT — image card */}
          <div className="px-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "all 0.8s ease 0.3s",
              display: "flex",
              justifyContent: "center",
            }}
          >
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

        {/* ── Stat strip ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "clamp(48px,6vw,72px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s ease 0.5s",
          }}
        >
          <StatCard
            value="5+"
            label="Years Experience"
            delay={0.55}
            visible={visible}
          />
          <StatCard
            value="50+"
            label="Projects Delivered"
            delay={0.62}
            visible={visible}
          />
          <StatCard
            value="100%"
            label="Client Satisfaction"
            delay={0.69}
            visible={visible}
          />
          <StatCard
            value="24/7"
            label="Support Available"
            delay={0.76}
            visible={visible}
          />
        </div>
      </div>

      <style>{`

      `}</style>
    </section>
  );
}
