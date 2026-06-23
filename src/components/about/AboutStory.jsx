/**
 * AboutStory.jsx  — Component 2 / 3
 * My Story · Journey timeline · Core values grid
 */

import { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    year: "2019",
    title: "First Line of Code",
    desc: "Started with HTML & CSS — built my first static site for a local business. Immediately hooked.",
  },
  {
    year: "2020",
    title: "JavaScript Deep Dive",
    desc: "Spent the year mastering vanilla JS, DOM manipulation, and async programming. First freelance gig landed.",
  },
  {
    year: "2021",
    title: "React & Node.js",
    desc: "Jumped into the React ecosystem and built my first full-stack app with Node/Express/MongoDB. Everything clicked.",
  },
  {
    year: "2022",
    title: "Freelance Full-Time",
    desc: "Left part-time work to freelance full-time. Delivered 12+ projects across e-commerce, SaaS, and marketing sites.",
  },
  {
    year: "2023",
    title: "Shahbaz Dev Studio",
    desc: "Launched my own brand. Expanded into Next.js, TypeScript, and performance-first development.",
  },
  {
    year: "2024 →",
    title: "Now",
    desc: "Working with international clients. Building tools, dashboards, and digital experiences people love to use.",
  },
];

const VALUES = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Clean Code",
    desc: "Readable, scalable, and maintainable — code I'd be proud to hand off to another developer.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
    title: "Pixel Perfect",
    desc: "Design fidelity matters. I translate Figma/mockups to browser with obsessive precision.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast Delivery",
    desc: "I respect your timeline. Milestone-based planning means you always know where we stand.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Client-First",
    desc: "Async updates, clear communication, and a genuine interest in making your business succeed.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Security Minded",
    desc: "Auth, validation, and environment hygiene built in from day one — not bolted on later.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93A10 10 0 1 0 4.93 19.07 10 10 0 0 0 19.07 4.93" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.22" y1="4.22" x2="7.05" y2="7.05" />
        <line x1="16.95" y1="16.95" x2="19.78" y2="19.78" />
      </svg>
    ),
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
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "52px",
          right: "5%",
          opacity: 0.1,
          animation: "floatB 10s ease-in-out infinite",
        }}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <defs>
          <linearGradient id="ast1" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <polygon points="40,4 76,72 4,72" fill="url(#ast1)" />
      </svg>

      {/* Concentric rings — left mid */}
      <svg
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
        viewBox="0 0 148 148"
        fill="none"
      >
        <defs>
          <linearGradient id="asrg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <circle
          cx="74"
          cy="74"
          r="70"
          stroke="url(#asrg)"
          strokeWidth="1.4"
          strokeDasharray="8 5"
        />
        <circle
          cx="74"
          cy="74"
          r="50"
          stroke="#6062ff"
          strokeWidth="0.8"
          strokeOpacity="0.35"
        />
        <circle
          cx="74"
          cy="74"
          r="30"
          stroke="#2d7fff"
          strokeWidth="0.6"
          strokeOpacity="0.20"
        />
        <circle cx="74" cy="4" r="4" fill="#2d7fff" />
        <circle cx="144" cy="74" r="4" fill="#6062ff" />
      </svg>

      {/* Diamond — bottom-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "68px",
          right: "6%",
          opacity: 0.09,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="74"
        height="74"
        viewBox="0 0 74 74"
        fill="none"
      >
        <defs>
          <linearGradient id="asd1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect
          x="37"
          y="3"
          width="49"
          height="49"
          rx="5"
          transform="rotate(45 37 3)"
          fill="url(#asd1)"
        />
      </svg>

      {/* Dot grid — right */}
      <svg
        className="hidden xl:block"
        style={{ position: "absolute", top: "20%", right: "1%", opacity: 0.09 }}
        width="68"
        height="112"
        viewBox="0 0 68 112"
        fill="none"
      >
        <defs>
          <linearGradient id="asdg" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#asdg)"
              opacity={1 - i * 0.12}
            />
          )),
        )}
      </svg>

      {/* Plus — top-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "14%",
          left: "8%",
          opacity: 0.08,
          animation: "floatB 8s ease-in-out infinite 0.5s",
        }}
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
      >
        <rect x="13" y="0" width="8" height="34" rx="4" fill="#2d7fff" />
        <rect x="0" y="13" width="34" height="8" rx="4" fill="#6062ff" />
      </svg>
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
            fontFamily: "'Oswald',sans-serif",
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

// ─── Value Card ────────────────────────────────────────────────────────────────

function ValueCard({ v, index, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "22px 20px",
        borderRadius: "16px",
        border: `1px solid ${hovered ? "rgba(45,127,255,0.28)" : "rgba(255,255,255,0.06)"}`,
        background: hovered
          ? "rgba(45,127,255,0.05)"
          : "rgba(255,255,255,0.02)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-3px)"
            : "translateY(0)"
          : "translateY(20px)",
        transition: `opacity 0.6s ease ${0.3 + index * 0.06}s, transform 0.3s ease, border-color 0.3s, background 0.3s`,
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
            "radial-gradient(ellipse at top left, rgba(45,127,255,0.06) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      <span
        style={{
          color: "#2d7fff",
          display: "block",
          marginBottom: "12px",
          position: "relative",
        }}
      >
        {v.icon}
      </span>
      <p
        style={{
          fontFamily: "'Oswald',sans-serif",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "#fff",
          margin: "0 0 6px 0",
          position: "relative",
        }}
      >
        {v.title}
      </p>
      <p
        style={{
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "11px",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.32)",
          margin: 0,
          position: "relative",
        }}
      >
        {v.desc}
      </p>
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
              <svg
                width="40"
                height="32"
                viewBox="0 0 64 52"
                fill="none"
                style={{ marginBottom: "16px", opacity: 0.25 }}
              >
                <path
                  d="M0 32 C0 14 10 4 26 0 L30 8 C20 12 16 18 16 24 L28 24 L28 52 L0 52 Z"
                  fill="#2d7fff"
                />
                <path
                  d="M36 32 C36 14 46 4 62 0 L64 8 C54 12 52 18 52 24 L64 24 L64 52 L36 52 Z"
                  fill="#6062ff"
                  fillOpacity="0.6"
                />
              </svg>
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
                    fontSize: "10px",
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
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
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
            <h3
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(24px,3vw,38px)",
                fontWeight: 400,
                color: "#fff",
                margin: 0,
                lineHeight: 1.2,
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
            </h3>
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

      <style>{`
        @media(min-width:900px){ .as-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(min-width:768px){ .values-grid{ grid-template-columns:repeat(3,1fr) !important; } }
        @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(-5deg)}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `}</style>
    </section>
  );
}
