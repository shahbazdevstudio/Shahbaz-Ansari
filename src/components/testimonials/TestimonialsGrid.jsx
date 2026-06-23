/**
 * TestimonialsGrid.jsx  — Component 3 / 3
 * Full masonry-style reviews grid + leave a review CTA + bottom banner.
 */

import { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ALL_REVIEWS = [
  {
    _id: "r1",
    name: "Sarah Mitchell",
    title: "Product Manager",
    profilePic: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    createdAt: "2025-11-10",
    platform: "google",
    message:
      "Shahbaz built our entire SaaS dashboard from scratch — clean code, pixel-perfect UI, delivered ahead of schedule. Genuinely one of the best developers I've hired.",
  },
  {
    _id: "r2",
    name: "Arjun Mehta",
    title: "Founder, E-Commerce",
    profilePic: "https://i.pravatar.cc/150?img=68",
    rating: 5,
    createdAt: "2025-09-22",
    platform: "google",
    message:
      "Outstanding attention to detail. The landing page he built converted at 3× our previous rate. He understood our brand immediately.",
  },
  {
    _id: "r3",
    name: "Emily Torres",
    title: "CEO, Marketplace",
    profilePic: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    createdAt: "2025-08-05",
    platform: "fiverr",
    message:
      "Responsive, professional, and incredibly fast. Shahbaz redesigned our marketplace in under two weeks and the result looks like it cost 10×. Highly recommended to anyone serious about quality.",
  },
  {
    _id: "r4",
    name: "Daniel Park",
    title: "CTO, FinTech",
    profilePic: "",
    rating: 5,
    createdAt: "2025-06-18",
    platform: "upwork",
    message:
      "Top-tier full-stack work. He built our REST API, integrated payments, and polished the React frontend — all with zero major bugs at launch.",
  },
  {
    _id: "r5",
    name: "Nadia Al-Hassan",
    title: "Director, Agency",
    profilePic: "https://i.pravatar.cc/150?img=25",
    rating: 5,
    createdAt: "2025-04-30",
    platform: "linkedin",
    message:
      "Shahbaz has a rare combination of strong engineering skills and great design taste. Our app looks and feels premium now. Communication was excellent throughout.",
  },
  {
    _id: "r6",
    name: "Lucas Brennan",
    title: "Freelance Client",
    profilePic: "https://i.pravatar.cc/150?img=51",
    rating: 5,
    createdAt: "2025-02-14",
    platform: "fiverr",
    message:
      "Delivered a complex multi-step form flow with animations and mobile-first layout in record time. Code quality was excellent — well-structured and easy to maintain.",
  },
  {
    _id: "r7",
    name: "Priya Sharma",
    title: "Startup Founder",
    profilePic: "https://i.pravatar.cc/150?img=9",
    rating: 5,
    createdAt: "2024-12-01",
    platform: "google",
    message:
      "We needed a complete rebrand of our web app and Shahbaz delivered beyond expectations. The new UI is modern, fast, and our users love it. Couldn't be happier.",
  },
  {
    _id: "r8",
    name: "James O'Brien",
    title: "E-Learning Platform",
    profilePic: "https://i.pravatar.cc/150?img=60",
    rating: 5,
    createdAt: "2024-10-20",
    platform: "upwork",
    message:
      "Built our entire LMS from scratch — video player, progress tracking, quiz system. Every feature worked on the first review. Exceptional work ethic.",
  },
  {
    _id: "r9",
    name: "Hana Kobayashi",
    title: "Marketing Director",
    profilePic: "https://i.pravatar.cc/150?img=19",
    rating: 5,
    createdAt: "2024-09-05",
    platform: "fiverr",
    message:
      "Fast, clean, and professional. The landing page Shahbaz built for our product launch was exactly what we envisioned — and it went live 3 days early.",
  },
];

const PLATFORM_ICONS = {
  google: "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
  fiverr: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg",
  upwork: "https://cdn.worldvectorlogo.com/logos/upwork-2.svg",
  linkedin: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
};

const INIT_COLORS = [
  "#2d7fff",
  "#6062ff",
  "#38bdf8",
  "#a78bfa",
  "#34d399",
  "#fb923c",
];
const getInitColor = (name = "") =>
  INIT_COLORS[name.charCodeAt(0) % INIT_COLORS.length];
const timeAgo = (dateStr) => {
  const days = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
  if (days < 30) return `${days || 1}d ago`;
  const m = Math.floor(days / 30);
  if (m < 12) return `${m}mo ago`;
  return `${Math.floor(m / 12)}y ago`;
};

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
          left: "-110px",
          width: "460px",
          height: "460px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(45,127,255,0.09) 0%,transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-100px",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(96,98,255,0.09) 0%,transparent 62%)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(45,127,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.018) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 4-point star — top-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "44px",
          right: "5.5%",
          opacity: 0.1,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
      >
        <defs>
          <linearGradient id="tgsg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M33 3 L37 29 L63 33 L37 37 L33 63 L29 37 L3 33 L29 29 Z"
          fill="url(#tgsg)"
        />
      </svg>

      {/* Dashed ring — left */}
      <svg
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "30%",
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
          <linearGradient id="tgrg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <circle
          cx="74"
          cy="74"
          r="70"
          stroke="url(#tgrg)"
          strokeWidth="1.4"
          strokeDasharray="8 5"
        />
        <circle
          cx="74"
          cy="74"
          r="48"
          stroke="#2d7fff"
          strokeWidth="0.7"
          strokeOpacity="0.28"
        />
        <circle cx="74" cy="4" r="4" fill="#2d7fff" />
        <circle cx="144" cy="74" r="4" fill="#6062ff" />
      </svg>

      {/* Diamond — bottom-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "68px",
          left: "5%",
          opacity: 0.09,
          animation: "floatB 10s ease-in-out infinite",
        }}
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <defs>
          <linearGradient id="tgdg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6062ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d7fff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect
          x="36"
          y="3"
          width="48"
          height="48"
          rx="5"
          transform="rotate(45 36 3)"
          fill="url(#tgdg)"
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
          <linearGradient id="tgdt" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#tgdt)"
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
          animation: "floatB 8s ease-in-out infinite 1s",
        }}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect x="12" y="0" width="8" height="32" rx="4" fill="#2d7fff" />
        <rect x="0" y="12" width="32" height="8" rx="4" fill="#6062ff" />
      </svg>
    </div>
  );
}

// ─── Single Review Card ───────────────────────────────────────────────────────

function GridReviewCard({ rev, index, visible }) {
  const [hov, setHov] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isLong = rev.message.length > 160;
  const initial = rev.name?.charAt(0).toUpperCase() || "?";
  const initColor = getInitColor(rev.name);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: "18px",
        overflow: "hidden",
        position: "relative",
        border: `1px solid ${hov ? "rgba(45,127,255,0.28)" : "rgba(255,255,255,0.07)"}`,
        background: hov ? "rgba(45,127,255,0.045)" : "rgba(255,255,255,0.025)",
        padding: "clamp(18px,3%,24px)",
        display: "flex",
        flexDirection: "column",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hov
            ? "translateY(-3px)"
            : "translateY(0)"
          : "translateY(20px)",
        transition: `opacity 0.6s ease ${0.06 + index * 0.06}s, transform 0.3s ease, border-color 0.3s, background 0.3s`,
        cursor: "default",
      }}
    >
      {/* Top shimmer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "14px",
          right: "14px",
          height: "1px",
          background: hov
            ? "linear-gradient(90deg,transparent,rgba(45,127,255,0.50),transparent)"
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
            "radial-gradient(ellipse at top left,rgba(45,127,255,0.06) 0%,transparent 55%)",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {rev.profilePic ? (
            <img
              src={rev.profilePic}
              alt={rev.name}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
                border: `1px solid ${hov ? "rgba(45,127,255,0.35)" : "rgba(45,127,255,0.20)"}`,
                transition: "border-color 0.3s",
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                flexShrink: 0,
                background: `linear-gradient(135deg,${initColor} 0%,#6062ff 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Cinzel',serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              {initial}
            </div>
          )}
          <div>
            <p
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: hov ? "#fff" : "rgba(255,255,255,0.85)",
                margin: "0 0 2px 0",
                transition: "color 0.3s",
              }}
            >
              {rev.name}
            </p>
            <p
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "9.5px",
                color: "rgba(255,255,255,0.25)",
                margin: 0,
              }}
            >
              {rev.title} · {timeAgo(rev.createdAt)}
            </p>
          </div>
        </div>
        {PLATFORM_ICONS[rev.platform] && (
          <img
            src={PLATFORM_ICONS[rev.platform]}
            alt={rev.platform}
            style={{
              width: "18px",
              height: "18px",
              opacity: hov ? 0.85 : 0.55,
              flexShrink: 0,
              transition: "opacity 0.3s",
            }}
            onError={(e) => (e.target.style.display = "none")}
          />
        )}
      </div>

      {/* Stars + verified */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2px",
          marginBottom: "10px",
          position: "relative",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill={i < rev.rating ? "#f4b400" : "rgba(255,255,255,0.12)"}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
        <svg
          viewBox="0 0 24 24"
          width="12"
          height="12"
          fill="#4285f4"
          style={{ marginLeft: "5px" }}
        >
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6.4 13l1.5-1.5 2.2 2.2 4.8-4.8 1.5 1.5-6.3 6.3z" />
        </svg>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          marginBottom: "10px",
          position: "relative",
          background:
            "linear-gradient(90deg,rgba(45,127,255,0.25),rgba(96,98,255,0.10),transparent)",
        }}
      />

      {/* Text */}
      <p
        style={{
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "11px",
          lineHeight: 1.85,
          color: "rgba(255,255,255,0.38)",
          letterSpacing: "0.02em",
          margin: 0,
          flex: 1,
          position: "relative",
        }}
      >
        "{expanded || !isLong ? rev.message : rev.message.slice(0, 160) + "…"}"
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded((e) => !e)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "7px 0 0 0",
            fontFamily: "'Roboto Mono',monospace",
            fontSize: "10px",
            color: hov ? "#2d7fff" : "rgba(45,127,255,0.65)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            transition: "color 0.3s",
            position: "relative",
          }}
        >
          {expanded ? "Show less ↑" : "Read more ↓"}
        </button>
      )}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TestimonialsGrid() {
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
      id="testimonials-grid"
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
            marginBottom: "clamp(40px,5vw,60px)",
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
            // all reviews
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(30px,4vw,48px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 14px 0",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Every{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Review
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.28)",
              maxWidth: "380px",
              margin: "0 auto",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            {ALL_REVIEWS.length} verified reviews across Google, Fiverr, Upwork,
            and LinkedIn.
          </p>
        </div>

        {/* ── Reviews grid ── */}
        <div
          className="tg-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "12px",
            marginBottom: "clamp(48px,6vw,72px)",
          }}
        >
          {ALL_REVIEWS.map((rev, i) => (
            <GridReviewCard
              key={rev._id}
              rev={rev}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        {/* ── Leave a review CTA ── */}
        <div
          style={{
            display: "grid",
            gap: "12px",
            marginBottom: "clamp(24px,3vw,36px)",
          }}
          className="tg-cta-grid"
        >
          {/* Leave review card */}
          <div
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
              padding: "clamp(24px,4%,36px)",
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.60s",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "16px",
                right: "16px",
                height: "1px",
                background:
                  "linear-gradient(90deg,transparent,rgba(96,98,255,0.40),transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(ellipse at 50% 0%,rgba(96,98,255,0.06) 0%,transparent 60%)",
              }}
            />

            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                margin: "0 auto 16px",
                background: "rgba(45,127,255,0.08)",
                border: "1px solid rgba(45,127,255,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2d7fff",
                position: "relative",
              }}
            >
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <p
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(18px,2.5vw,24px)",
                fontWeight: 400,
                color: "#fff",
                margin: "0 0 8px 0",
                position: "relative",
              }}
            >
              Worked With Me?
            </p>
            <p
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.28)",
                margin: "0 0 22px 0",
                lineHeight: 1.8,
                position: "relative",
              }}
            >
              I'd love to hear your feedback. Leave a review on Google or any
              platform you prefer.
            </p>
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                borderRadius: "100px",
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "'Oswald',sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                boxShadow: "0 4px 20px rgba(45,127,255,0.28)",
                position: "relative",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 28px rgba(45,127,255,0.42)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(45,127,255,0.28)";
              }}
            >
              Leave a Review
              <svg
                width="12"
                height="12"
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
          </div>

          {/* Hire Me card */}
          <div
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(45,127,255,0.22)",
              background: "rgba(45,127,255,0.04)",
              padding: "clamp(24px,4%,36px)",
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.68s",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "16px",
                right: "16px",
                height: "1px",
                background:
                  "linear-gradient(90deg,transparent,rgba(45,127,255,0.50),transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(ellipse at 50% 0%,rgba(45,127,255,0.08) 0%,transparent 60%)",
              }}
            />

            <p
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "10px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#2d7fff",
                margin: "0 0 10px 0",
                position: "relative",
              }}
            >
              // next project
            </p>
            <p
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(18px,2.5vw,24px)",
                fontWeight: 400,
                color: "#fff",
                margin: "0 0 8px 0",
                position: "relative",
                lineHeight: 1.2,
              }}
            >
              Ready to join this list?
            </p>
            <p
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.28)",
                margin: "0 0 22px 0",
                lineHeight: 1.8,
                position: "relative",
              }}
            >
              Let's build something you'll want to rave about.
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                borderRadius: "100px",
                border: "1px solid rgba(45,127,255,0.35)",
                background: "rgba(45,127,255,0.06)",
                color: "#2d7fff",
                textDecoration: "none",
                fontFamily: "'Oswald',sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                position: "relative",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(45,127,255,0.14)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "rgba(45,127,255,0.60)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(45,127,255,0.06)";
                e.currentTarget.style.color = "#2d7fff";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(45,127,255,0.35)";
              }}
            >
              Start a Project
              <svg
                width="12"
                height="12"
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
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:640px){ .tg-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(min-width:1024px){ .tg-grid{ grid-template-columns:repeat(3,1fr) !important; } }
        @media(min-width:640px){ .tg-cta-grid{ grid-template-columns:1fr 1fr !important; } }
        @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(-5deg)}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `}</style>
    </section>
  );
}
