/**
 * AboutStory.jsx  — Component 2 / 3
 * My Story · Journey timeline · Core values grid
 */

import { useEffect, useRef, useState } from "react";
import ValueCard from "./ValueCard";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "2021",
    title: "Getting Started",
    desc: "Started learning HTML, CSS, and JavaScript. Built small static websites and explored how web development works.",
  },
  {
    year: "2022",
    title: "Learning & Practice",
    desc: "Improved JavaScript skills and focused on real projects. Built interactive websites and started understanding APIs and DOM deeply.",
  },
  {
    year: "2023",
    title: "React & Freelance Work",
    desc: "Moved into React and started building modern UI-based applications. Completed first freelance projects for local clients.",
  },
  {
    year: "2024",
    title: "Full-Stack Development",
    desc: "Learned Node.js, Express, and MongoDB. Built full-stack apps with authentication, dashboards, and APIs.",
  },
  {
    year: "2025",
    title: "Professional Experience",
    desc: "Worked in a professional environment on real-world projects, improving performance, scalability, and clean architecture practices.",
  },
  {
    year: "2026 →",
    title: "Shahbaz Dev Studio",
    desc: "Now working with freelance clients and a small team, helping businesses build and grow modern web products with Next.js and TypeScript.",
  },
];

const VALUES = [
  {
    icon: "/icons/code.svg",
    title: "Clean Code",
    desc: "Readable, scalable, and maintainable — code I'd be proud to hand off to another developer.",
  },
  {
    icon: "/icons/globe-accent.svg",
    title: "Pixel Perfect",
    desc: "Design fidelity matters. I translate Figma/mockups to browser with obsessive precision.",
  },
  {
    icon: "/icons/lightning-accent.svg",
    title: "Fast Delivery",
    desc: "I respect your timeline. Milestone-based planning means you always know where we stand.",
  },
  {
    icon: "/icons/users-accent.svg",
    title: "Client-First",
    desc: "Async updates, clear communication, and a genuine interest in making your business succeed.",
  },
  {
    icon: "/icons/shield-accent.svg",
    title: "Security Minded",
    desc: "Auth, validation, and environment hygiene built in from day one — not bolted on later.",
  },
  {
    icon: "/icons/settings-accent.svg",
    title: "Performance",
    desc: "Lighthouse scores matter. Every project ships optimised for speed, SEO, and Core Web Vitals.",
  },
];

// ─── Floating Shapes (story/timeline motif — different from Hero) ─────────────

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
          bottom: "-60px",
          left: "-100px",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(45,127,255,0.09) 0%,transparent 62%)",
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

      {/* Triangle — top-right */}
      <img
        src="/icons/triangle-accent.svg"
        alt="triangle"
        className="hidden lg:block absolute top-[52px] right-[5%] opacity-10 animate-floatB"
      />

      {/* Concentric rings — left mid */}
      <img
        src="/icons/rings.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "38%",
          left: "-48px",
          opacity: 0.11,
          animation: "floatA 12s ease-in-out infinite reverse",
        }}
        width="148"
        height="148"
        alt="ring"
      />

      {/* Diamond — bottom-right */}
      <img
        src="icons/geometric-shape.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "28px",
          right: "6%",
          opacity: 0.08,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="74"
        height="74"
        alt="geometric-shape"
      />

      {/* Dot grid — right */}
      <img
        src="icons/dots.svg"
        className="hidden xl:block"
        style={{ position: "absolute", top: "20%", right: "1%", opacity: 0.09 }}
        width="68"
        height="112"
        alt="dots"
      />

      {/* Plus — top-left */}
      <img
        src="icons/plus-accent.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "14%",
          left: "8%",
          opacity: 0.1,
          animation: "floatB 8s ease-in-out infinite 0.5s",
        }}
        width="34"
        height="34"
        alt="plus"
      />
    </div>
  );
}

// ─── Timeline Item ─────────────────────────────────────────────────────────────

function TimelineItem({ item, index, visible, isLast }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        gap: "20px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 0.6s ease ${0.15 + index * 0.08}s, transform 0.6s ease ${0.15 + index * 0.08}s`,
      }}
    >
      {/* Left: year + line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            flexShrink: 0,
            background: hovered
              ? "rgba(45,127,255,0.15)"
              : "rgba(45,127,255,0.07)",
            border: `1px solid ${hovered ? "rgba(45,127,255,0.40)" : "rgba(45,127,255,0.18)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#2d7fff,#6062ff)",
            }}
          />
        </div>
        {!isLast && (
          <div
            style={{
              width: "1px",
              flex: 1,
              minHeight: "32px",
              marginTop: "6px",
              background:
                "linear-gradient(to bottom, rgba(45,127,255,0.25), rgba(96,98,255,0.05))",
            }}
          />
        )}
      </div>

      {/* Right: content */}
      <div style={{ paddingBottom: isLast ? "0" : "28px" }}>
        <p
          style={{
            fontFamily: "'Roboto Mono',monospace",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: hovered ? "#2d7fff" : "rgba(45,127,255,0.60)",
            margin: "8px 0 4px 0",
            transition: "color 0.3s",
          }}
        >
          {item.year}
        </p>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "#fff",
            margin: "0 0 6px 0",
          }}
        >
          {item.title}
        </p>
        <p
          style={{
            fontFamily: "'Roboto Mono',monospace",
            fontSize: "11.5px",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.38)",
            margin: 0,
          }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutStory() {
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
      id="about-story"
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
        {/* ── Section header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px,6vw,72px)",
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
            // my story
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
            The{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Journey
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.30)",
              maxWidth: "400px",
              margin: "0 auto",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            From first{" "}
            <code style={{ color: "rgba(45,127,255,0.70)", fontSize: "11px" }}>
              &lt;div&gt;
            </code>{" "}
            to full-stack products — five years of building things for the web.
          </p>
        </div>

        {/* ── Two-column: timeline left, quote/image right ── */}
        <div
          className="as-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(40px,6vw,72px)",
            marginBottom: "clamp(64px,8vw,96px)",
            alignItems: "start",
          }}
        >
          {/* Timeline */}
          <div>
            {TIMELINE.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                index={i}
                visible={visible}
                isLast={i === TIMELINE.length - 1}
              />
            ))}
          </div>

          {/* Right — quote card + tech stack */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(28px)",
              transition: "all 0.8s ease 0.25s",
            }}
          >
            {/* Big quote */}
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
                padding: "clamp(24px,4%,36px)",
                marginBottom: "20px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20px",
                  right: "20px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg,transparent,rgba(45,127,255,0.40),transparent)",
                }}
              />
              {/* Large quote mark */}
              <img
                src="/icons/abstract-duo.svg"
                width="40"
                height="32"
                viewBox="0 0 64 52"
                fill="none"
                style={{ marginBottom: "16px", opacity: 0.35 }}
              />
              <p
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: "clamp(16px,2vw,20px)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.80)",
                  lineHeight: 1.6,
                  letterSpacing: "0.01em",
                  margin: "0 0 16px 0",
                  fontStyle: "italic",
                }}
              >
                "I don't just write code. I build products I'd be proud to use
                myself."
              </p>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "1px",
                    background: "linear-gradient(90deg,#2d7fff,#6062ff)",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Roboto Mono',monospace",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.30)",
                    margin: 0,
                    letterSpacing: "0.08em",
                  }}
                >
                  SHAHBAZ ANSARI
                </p>
              </div>
            </div>

            {/* Tech stack badges */}
            <div
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.02)",
                padding: "clamp(20px,4%,28px)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20px",
                  right: "20px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg,transparent,rgba(96,98,255,0.38),transparent)",
                }}
              />
              <p
                style={{
                  fontFamily: "'Roboto Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#2d7fff",
                  margin: "0 0 16px 0",
                }}
              >
                Core Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Tailwind CSS",
                  "Framer Motion",
                  "REST APIs",
                  "Git",
                ].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'Roboto Mono',monospace",
                      fontSize: "10px",
                      letterSpacing: "0.06em",
                      padding: "5px 12px",
                      borderRadius: "100px",
                      border: "1px solid rgba(45,127,255,0.20)",
                      background: "rgba(45,127,255,0.05)",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Values grid ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.20s",
          }}
        >
          {/* ── Section header ── */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(48px,6vw,72px)",
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
              // what i stand for
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
              Core{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Values
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "13px",
                color: "rgba(255,255,255,0.30)",
                maxWidth: "400px",
                margin: "0 auto",
                lineHeight: 1.8,
                letterSpacing: "0.02em",
              }}
            >
              Clean code, strong performance, and thoughtful design in every
              project I build.
            </p>
          </div>

          <div
            className="values-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "10px",
            }}
          >
            {VALUES.map((v, i) => (
              <ValueCard key={i} v={v} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
