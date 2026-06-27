import { useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What services do you offer?",
    a: "I design and develop modern websites, web applications, and full-stack solutions tailored to business needs.",
  },
  {
    q: "What technologies do you use?",
    a: "I work with React, Next.js, Node.js, Express, MongoDB, and modern UI tools to build fast and scalable applications.",
  },
  {
    q: "Are you available for freelance or remote work?",
    a: "Yes, I’m open to freelance, remote, and long-term collaboration opportunities worldwide.",
  },
  {
    q: "How long does a project usually take?",
    a: "It depends on the scope. Simple websites take a few days, while full web applications may take a few weeks.",
  },
  {
    q: "Can you build both frontend and backend?",
    a: "Yes, I specialize in full-stack development, handling both frontend UI and backend systems.",
  },
  {
    q: "Do you work with clients internationally?",
    a: "Yes, I work with clients globally using online communication and flexible time coordination.",
  },
  {
    q: "Do you provide support after project delivery?",
    a: "Yes, I offer post-launch support to fix bugs and ensure everything runs smoothly.",
  },
  {
    q: "Can you improve or redesign an existing website?",
    a: "Yes, I can redesign and optimize existing websites for better performance, design, and user experience.",
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
      <img
        src="/icons/code-brackets.svg"
        alt="code-brackets"
        className="hidden lg:block absolute top-[44px] right-[5%] opacity-30 animate-floatA"
      />

      {/* ── Question mark outline — bottom-left ── */}
      <img
        src="/icons/curved-path-node.svg"
        alt="question-mark"
        className="hidden lg:block absolute bottom-[64px] left-[4%] opacity-30 animate-floatB"
      />

      {/* ── Dashed ring + 3 orbit dots — left mid ── */}
      <img
        src="/icons/rings.svg"
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
        alt="ring"
      />

      {/* ── Gradient dot cluster — bottom-center-left ── */}
      <img
        src="icons/star-cross.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          bottom: "8%",
          right: "8%",
          opacity: 0.1,
        }}
        width="88"
        height="22"
        alt="star"
      />

      {/* ── Gradient dot cluster — bottom-center-left ── */}
      <img
        src="icons/ball.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "8%",
          left: "8%",
          opacity: 0.1,
        }}
        width="88"
        height="22"
        alt="star"
      />
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

export default function FAQSection() {
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
          <HiArrowSmallRight size={18}/>
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
