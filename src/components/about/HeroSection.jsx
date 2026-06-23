/**
 * AboutHero.jsx  — Component 1 / 3
 * Full-width hero for the About page.
 * Theme: black bg · #2d7fff / #6062ff gradient · Cinzel / Oswald / Roboto Mono
 */

import { useEffect, useRef, useState } from "react";
import ProfileCard from "../react-bits/ProfileCard";
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
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "60px",
          right: "6%",
          opacity: 0.12,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
      >
        <defs>
          <linearGradient id="ahh1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <polygon
          points="55,5 100,30 100,80 55,105 10,80 10,30"
          fill="url(#ahh1)"
        />
        <polygon
          points="55,18 88,36 88,74 55,92 22,74 22,36"
          fill="none"
          stroke="#6062ff"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
      </svg>

      {/* Dashed ring — left */}
      <svg
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
        viewBox="0 0 160 160"
        fill="none"
      >
        <defs>
          <linearGradient id="ahrg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <circle
          cx="80"
          cy="80"
          r="76"
          stroke="url(#ahrg)"
          strokeWidth="1.5"
          strokeDasharray="8 5"
        />
        <circle
          cx="80"
          cy="80"
          r="52"
          stroke="#2d7fff"
          strokeWidth="0.7"
          strokeOpacity="0.30"
        />
        <circle cx="80" cy="4" r="4.5" fill="#2d7fff" />
        <circle cx="156" cy="80" r="4.5" fill="#6062ff" />
      </svg>

      {/* Diamond — bottom-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "80px",
          left: "5%",
          opacity: 0.1,
          animation: "floatB 10s ease-in-out infinite",
        }}
        width="82"
        height="82"
        viewBox="0 0 82 82"
        fill="none"
      >
        <defs>
          <linearGradient id="ahd1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6062ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d7fff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect
          x="41"
          y="3"
          width="54"
          height="54"
          rx="5"
          transform="rotate(45 41 3)"
          fill="url(#ahd1)"
        />
        <rect
          x="41"
          y="14"
          width="36"
          height="36"
          rx="3"
          transform="rotate(45 41 14)"
          fill="none"
          stroke="#2d7fff"
          strokeWidth="0.8"
          strokeOpacity="0.45"
        />
      </svg>

      {/* Dot cluster — right */}
      <svg
        className="hidden xl:block"
        style={{ position: "absolute", top: "32%", right: "1%", opacity: 0.09 }}
        width="68"
        height="112"
        viewBox="0 0 68 112"
        fill="none"
      >
        <defs>
          <linearGradient id="ahdg" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#ahdg)"
              opacity={1 - i * 0.12}
            />
          )),
        )}
      </svg>

      {/* Plus — bottom-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "18%",
          right: "9%",
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
          fontFamily: "'Cinzel',serif",
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
          fontSize: "10px",
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
              I Build Things
            </h1>
            <h1
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(34px,5vw,64px)",
                fontWeight: 400,
                margin: "0 0 28px 0",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              For the Web.
            </h1>

            <p
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontWeight: 300,
                fontSize: "clamp(14px,1.6vw,16px)",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.42)",
                letterSpacing: "0.025em",
                margin: "0 0 14px 0",
                maxWidth: "520px",
              }}
            >
              Hey, I'm{" "}
              <strong
                style={{ color: "rgba(255,255,255,0.75)", fontWeight: 400 }}
              >
                Shahbaz Ansari
              </strong>{" "}
              — a full-stack web developer from Sahiwal, Pakistan, building
              under the brand{" "}
              <strong style={{ color: "#2d7fff", fontWeight: 400 }}>
                Shahbaz Dev Studio
              </strong>
              . I specialise in React, Next.js, Node.js, and crafting UI that
              feels as good as it performs.
            </p>
            <p
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontWeight: 300,
                fontSize: "clamp(14px,1.6vw,16px)",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.26)",
                letterSpacing: "0.025em",
                margin: "0 0 40px 0",
                maxWidth: "520px",
              }}
            >
              I treat every project as a product — not just a deliverable. Clean
              architecture, accessible markup, and interaction design that
              respects the user's time.
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
                  fontFamily: "'Oswald',sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
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
                href="#projects"
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
                  fontFamily: "'Oswald',sans-serif",
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
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2d7fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                View Work
              </a>
            </div>
          </div>

          {/* RIGHT — image card */}
          <div
            className="ah-img-col"
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
            value="40+"
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
        @media(min-width:1024px){
          .ah-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:1023px){
          .ah-img-col { max-width: 340px; margin: 0 auto; }
        }
        @keyframes floatA{0%,100%{transform:translateY(0px) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatB{0%,100%{transform:translateY(0px) rotate(0deg)}50%{transform:translateY(-10px) rotate(-5deg)}}
        @keyframes pulse-dot{0%,100%{opacity:1;box-shadow:0 0 6px #22c55e}50%{opacity:0.5;box-shadow:0 0 12px #22c55e}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `}</style>
    </section>
  );
}
