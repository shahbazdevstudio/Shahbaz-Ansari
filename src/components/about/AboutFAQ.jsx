import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What technologies do you specialize in?",
    a: "I primarily work with React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS. For animations I use Framer Motion, and I'm comfortable working across the full stack — from database design to polished UI.",
  },
  {
    q: "Are you available for freelance projects?",
    a: "Yes, I'm currently open to freelance work. Whether it's a short-term feature build, a full website from scratch, or an ongoing retainer — I'm happy to discuss what fits your needs and timeline.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A landing page takes 3–5 days. A full web app typically takes 2–4 weeks. After our initial call I'll give you a detailed timeline with milestones.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. I work with clients worldwide via async communication and scheduled video calls. Time zones are never a blocker.",
  },
  {
    q: "What does your development process look like?",
    a: "Discovery → Design → Development → Delivery. I share iterative builds throughout, so you're never left waiting to see progress.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. I offer a 2-week post-launch bug-fix window at no extra charge. For ongoing work we can set up a monthly retainer or per-task arrangement.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Definitely. I can audit your current site, identify bottlenecks or design issues, and rebuild it to a significantly higher standard.",
  },
];

// ─── Floating Shapes (unique to FAQ — bracket / code motif) ──────────────────

function FloatingShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-110px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(96,98,255,0.11) 0%, transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-70px",
          right: "-100px",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,127,255,0.11) 0%, transparent 62%)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "220px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(45,127,255,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
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

      {/* ── Code bracket < > — top-right (unique: FAQ / Q&A motif) ── */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "44px",
          right: "5%",
          opacity: 0.3,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="90"
        height="70"
        viewBox="0 0 90 70"
        fill="none"
      >
        <defs>
          <linearGradient id="fbg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* < bracket */}
        <polyline
          points="32,8 8,35 32,62"
          stroke="url(#fbg1)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* > bracket */}
        <polyline
          points="58,8 82,35 58,62"
          stroke="url(#fbg1)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* ── Question mark outline — bottom-left ── */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "64px",
          left: "4%",
          opacity: 0.4,
          animation: "floatB 11s ease-in-out infinite",
        }}
        width="52"
        height="72"
        viewBox="0 0 52 72"
        fill="none"
      >
        <defs>
          <linearGradient id="fqg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6062ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d7fff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M14 18 C14 10 38 6 38 20 C38 30 26 30 26 42"
          stroke="url(#fqg)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="26" cy="56" r="3.5" fill="#6062ff" fillOpacity="0.7" />
      </svg>

      {/* ── Dashed ring + 3 orbit dots — left mid ── */}
      <svg
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "33%",
          left: "-44px",
          opacity: 0.12,
          animation: "floatA 13s ease-in-out infinite reverse",
        }}
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
      >
        <defs>
          <linearGradient id="frg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <circle
          cx="74"
          cy="74"
          r="70"
          stroke="url(#frg)"
          strokeWidth="1.4"
          strokeDasharray="8 5"
        />
        <circle
          cx="74"
          cy="74"
          r="48"
          stroke="#2d7fff"
          strokeWidth="0.7"
          strokeOpacity="0.32"
        />
        <circle cx="74" cy="4" r="4" fill="#2d7fff" />
        <circle cx="144" cy="74" r="4" fill="#6062ff" />
        <circle cx="74" cy="144" r="3" fill="#2d7fff" fillOpacity="0.5" />
      </svg>


      {/* ── Horizontal lines (FAQ list motif) — right mid ── */}
      <svg
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "30%",
          right: "2%",
          opacity: 0.08,
          animation: "floatA 10s ease-in-out infinite 1s",
        }}
        width="72"
        height="56"
        viewBox="0 0 72 56"
        fill="none"
      >
        <defs>
          <linearGradient id="fhg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="8"
          x2="72"
          y2="8"
          stroke="url(#fhg)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="22"
          x2="52"
          y2="22"
          stroke="url(#fhg)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="36"
          x2="62"
          y2="36"
          stroke="url(#fhg)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="50"
          x2="40"
          y2="50"
          stroke="url(#fhg)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* ── Gradient dot cluster — bottom-center-left ── */}
      <svg
        className="hidden xl:block"
        style={{
          position: "absolute",
          bottom: "8%",
          left: "38%",
          opacity: 0.1,
        }}
        width="88"
        height="22"
        viewBox="0 0 88 22"
        fill="none"
      >
        <defs>
          <linearGradient id="frdg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((j) => (
          <circle
            key={j}
            cx={j * 22 + 11}
            cy="11"
            r="2.2"
            fill="url(#frdg)"
            opacity={1 - j * 0.18}
          />
        ))}
      </svg>
    </div>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ item, index, isOpen, onToggle, totalVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        border: `1px solid ${isOpen ? "rgba(45,127,255,0.28)" : hovered ? "rgba(255,255,255,0.11)" : "rgba(255,255,255,0.07)"}`,
        background: isOpen
          ? "rgba(45,127,255,0.045)"
          : hovered
            ? "rgba(255,255,255,0.03)"
            : "rgba(255,255,255,0.02)",
        overflow: "hidden",
        transition: "border-color 0.3s ease, background 0.3s ease",
        opacity: totalVisible ? 1 : 0,
        transform: totalVisible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${0.08 + index * 0.06}s`,
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "clamp(16px, 2.5vw, 22px) clamp(18px, 3vw, 28px)",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Index + Question */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flex: 1,
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "16px",
              color: isOpen ? "#2d7fff" : "rgba(255,255,255,0.22)",
              letterSpacing: "0.10em",
              flexShrink: 0,
              transition: "color 0.3s",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontSize: "clamp(13px, 1.5vw, 16px)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: isOpen ? "#fff" : "rgba(255,255,255,0.78)",
              transition: "color 0.25s",
              lineHeight: 1.3,
            }}
          >
            {item.q}
          </span>
        </div>

        {/* Arrow icon */}
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "10px",
            flexShrink: 0,
            border: `1px solid ${isOpen ? "rgba(45,127,255,0.35)" : "rgba(255,255,255,0.09)"}`,
            background: isOpen
              ? "rgba(45,127,255,0.12)"
              : "rgba(255,255,255,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? "#2d7fff" : "rgba(255,255,255,0.45)"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "stroke 0.25s" }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Answer — CSS height transition */}
      <div
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          style={{
            padding: "0 clamp(18px,3vw,28px) clamp(16px,2.5vw,22px)",
            paddingLeft:
              "calc(clamp(18px,3vw,28px) + 10px + 16px)" /* align under question text past index */,
          }}
        >
          {/* Thin gradient divider */}
          <div
            style={{
              height: "1px",
              marginBottom: "16px",
              background:
                "linear-gradient(90deg, rgba(45,127,255,0.25), rgba(96,98,255,0.10), transparent)",
            }}
          />
          <p
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "12px",
              color: "rgba(255,255,255,0.42)",
              lineHeight: 1.85,
              letterSpacing: "0.025em",
              margin: 0,
            }}
          >
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AboutFAQSection() {
  const [open, setOpen] = useState(null);
  const [visible, setVisible] = useState(false);
  const ref = (el) => {
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.06 },
    );
    obs.observe(el);
  };

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section
      id="faq"
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding: "clamp(80px,10vw,130px) clamp(20px,5%,60px)",
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
            marginBottom: "clamp(48px,6vw,72px)",
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
            // faq
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(32px,4.5vw,52px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 16px 0",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Frequently{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Asked
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.30)",
              maxWidth: "400px",
              margin: "0 auto",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            Answers to the questions I get asked the most before starting a
            project.
          </p>
        </div>

        {/* ── FAQ List (full width) ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {FAQS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={open === i}
              onToggle={() => toggle(i)}
              totalVisible={visible}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(40px,5vw,60px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition: "all 0.7s ease 0.6s",
          }}
        >
          <p
            style={{
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "16px",
              color: "rgba(255,255,255,0.28)",
              marginBottom: "16px",
              letterSpacing: "0.04em",
            }}
          >
            Still have questions?
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 34px",
              borderRadius: "100px",
              background: "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",

              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 4px 22px rgba(45,127,255,0.28)",
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
                "0 4px 22px rgba(45,127,255,0.28)";
            }}
          >
            Get in Touch
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
        </div>
      </div>

      <style>{`
        @keyframes floatA {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-14px) rotate(4deg); }
        }
        @keyframes floatB {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-10px) rotate(-5deg); }
        }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
      `}</style>
    </section>
  );
}
