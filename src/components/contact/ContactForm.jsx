/**
 * ContactForm.jsx  — Component 2 / 2
 * Full contact form (two-column) + quick FAQ strip + final CTA.
 * Theme: black · #2d7fff / #6062ff · Cinzel / Oswald / Roboto Mono
 */

import { useEffect, useRef, useState } from "react";

// ─── Quick FAQs ───────────────────────────────────────────────────────────────

const QUICK_FAQS = [
  {
    q: "How fast do you reply?",
    a: "Within 24 hours on weekdays. Usually same-day.",
  },
  {
    q: "Do you work internationally?",
    a: "Yes — fully remote. Time zones are never a problem.",
  },
  {
    q: "Can I see your work first?",
    a: "Absolutely. Check the Projects section or ask for a portfolio PDF.",
  },
  {
    q: "What's your minimum project size?",
    a: "No minimum. I work on anything from a single page to a full platform.",
  },
];

// ─── Floating Shapes (distinct from ContactHero) ──────────────────────────────

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
          top: "-80px",
          right: "-110px",
          width: "460px",
          height: "460px",
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
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(45,127,255,0.09) 0%,transparent 62%)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "38%",
          right: "28%",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(45,127,255,0.04) 0%,transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(45,127,255,0.020) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.020) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hexagon — top-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "48px",
          right: "5.5%",
          opacity: 0.1,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
      >
        <defs>
          <linearGradient id="cfhg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <polygon points="48,4 90,26 90,70 48,92 6,70 6,26" fill="url(#cfhg)" />
        <polygon
          points="48,17 78,33 78,63 48,79 18,63 18,33"
          fill="none"
          stroke="#6062ff"
          strokeWidth="0.9"
          strokeOpacity="0.45"
        />
      </svg>

      {/* Concentric rings — left */}
      <svg
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "32%",
          left: "-46px",
          opacity: 0.11,
          animation: "floatA 14s ease-in-out infinite reverse",
        }}
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
      >
        <defs>
          <linearGradient id="cfrg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <circle
          cx="74"
          cy="74"
          r="70"
          stroke="url(#cfrg)"
          strokeWidth="1.4"
          strokeDasharray="8 5"
        />
        <circle
          cx="74"
          cy="74"
          r="50"
          stroke="#6062ff"
          strokeWidth="0.8"
          strokeOpacity="0.28"
        />
        <circle
          cx="74"
          cy="74"
          r="30"
          stroke="#2d7fff"
          strokeWidth="0.6"
          strokeOpacity="0.16"
        />
        <circle cx="74" cy="4" r="4" fill="#2d7fff" />
        <circle cx="144" cy="74" r="4" fill="#6062ff" />
      </svg>

      {/* Diamond — bottom-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "72px",
          left: "5%",
          opacity: 0.1,
          animation: "floatB 10s ease-in-out infinite",
        }}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <defs>
          <linearGradient id="cfdg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect
          x="40"
          y="3"
          width="54"
          height="54"
          rx="5"
          transform="rotate(45 40 3)"
          fill="url(#cfdg)"
        />
        <rect
          x="40"
          y="15"
          width="34"
          height="34"
          rx="3"
          transform="rotate(45 40 15)"
          fill="none"
          stroke="#2d7fff"
          strokeWidth="0.8"
          strokeOpacity="0.42"
        />
      </svg>

      {/* 4-point star — bottom-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "18%",
          right: "8%",
          opacity: 0.09,
          animation: "floatB 8s ease-in-out infinite 1s",
        }}
        width="58"
        height="58"
        viewBox="0 0 58 58"
        fill="none"
      >
        <defs>
          <linearGradient id="cfsg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6062ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d7fff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M29 3 L33 25 L55 29 L33 33 L29 55 L25 33 L3 29 L25 25 Z"
          fill="url(#cfsg)"
        />
      </svg>

      {/* Dot cluster — right */}
      <svg
        className="hidden xl:block"
        style={{ position: "absolute", top: "20%", right: "1%", opacity: 0.09 }}
        width="68"
        height="112"
        viewBox="0 0 68 112"
        fill="none"
      >
        <defs>
          <linearGradient id="cfdtg" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#cfdtg)"
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
          top: "13%",
          left: "8%",
          opacity: 0.08,
          animation: "floatA 7s ease-in-out infinite 0.5s",
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

// ─── Field wrapper ────────────────────────────────────────────────────────────

function Field({ label, error, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
      <label
        style={{
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.32)",
        }}
      >
        {label}
        {error && (
          <span style={{ color: "rgba(239,68,68,0.80)", marginLeft: "6px" }}>
            *required
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const baseInput = (err) => ({
  width: "100%",
  boxSizing: "border-box",
  background: "rgba(255,255,255,0.03)",
  border: `1px solid ${err ? "rgba(239,68,68,0.50)" : "rgba(255,255,255,0.09)"}`,
  borderRadius: "12px",
  padding: "12px 15px",
  fontFamily: "'Roboto Mono',monospace",
  fontSize: "11.5px",
  color: "#fff",
  outline: "none",
  transition: "border-color 0.22s, background 0.22s",
});

// ─── Quick FAQ Item ───────────────────────────────────────────────────────────

function QuickFaq({ item, index, visible }) {
  const [open, setOpen] = useState(false);
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: "14px",
        overflow: "hidden",
        border: `1px solid ${open ? "rgba(45,127,255,0.28)" : hov ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.06)"}`,
        background: open
          ? "rgba(45,127,255,0.045)"
          : hov
            ? "rgba(255,255,255,0.025)"
            : "rgba(255,255,255,0.018)",
        transition: "border-color 0.3s, background 0.3s",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${0.1 + index * 0.07}s`,
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          padding: "14px 18px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "0.03em",
            color: open ? "#fff" : "rgba(255,255,255,0.75)",
            transition: "color 0.25s",
          }}
        >
          {item.q}
        </span>
        {/* Chevron */}
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "8px",
            flexShrink: 0,
            border: `1px solid ${open ? "rgba(45,127,255,0.35)" : "rgba(255,255,255,0.09)"}`,
            background: open
              ? "rgba(45,127,255,0.12)"
              : "rgba(255,255,255,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? "#2d7fff" : "rgba(255,255,255,0.40)"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      <div
        style={{
          maxHeight: open ? "120px" : "0",
          overflow: "hidden",
          transition: "max-height 0.38s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div style={{ padding: "0 18px 14px 18px" }}>
          <div
            style={{
              height: "1px",
              marginBottom: "10px",
              background:
                "linear-gradient(90deg,rgba(45,127,255,0.25),rgba(96,98,255,0.10),transparent)",
            }}
          />
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "11.5px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.38)",
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

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactForm() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

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

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: false }));
  };

  const focus = (el, err) => {
    el.style.borderColor = err
      ? "rgba(239,68,68,0.70)"
      : "rgba(45,127,255,0.50)";
    el.style.background = err
      ? "rgba(239,68,68,0.03)"
      : "rgba(45,127,255,0.04)";
  };
  const blur = (el, err) => {
    el.style.borderColor = err
      ? "rgba(239,68,68,0.50)"
      : "rgba(255,255,255,0.09)";
    el.style.background = "rgba(255,255,255,0.03)";
  };

  const handleSubmit = () => {
    const req = ["name", "email", "subject", "message"];
    const errs = {};
    req.forEach((k) => {
      if (!form[k].trim()) errs[k] = true;
    });
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSending(true);
    // TODO: plug in EmailJS / backend here
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  const BUDGETS = [
    "< $500",
    "$500 – $1,000",
    "$1,000 – $3,000",
    "$3,000 – $5,000",
    "$5,000+",
    "Let's discuss",
  ];

  return (
    <section
      ref={ref}
      id="contact-form"
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
            marginBottom: "clamp(48px,6vw,68px)",
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
            // send a message
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
            Start a{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Conversation
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.28)",
              maxWidth: "400px",
              margin: "0 auto",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            Fill in the form and I'll get back to you with a plan, a quote, or
            just a chat.
          </p>
        </div>

        {/* ── Two-column: form left, FAQ right ── */}
        <div
          className="cf-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(24px,4vw,40px)",
          }}
        >
          {/* FORM CARD */}
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
              padding: "clamp(24px,5%,36px)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-24px)",
              transition: "all 0.8s ease 0.1s",
            }}
          >
            {/* Top shimmer */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "18px",
                right: "18px",
                height: "1px",
                background:
                  "linear-gradient(90deg,transparent,rgba(45,127,255,0.45),transparent)",
              }}
            />
            {/* Corner glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "200px",
                height: "200px",
                pointerEvents: "none",
                background:
                  "radial-gradient(circle at top left,rgba(45,127,255,0.07) 0%,transparent 60%)",
              }}
            />

            {sent ? (
              /* ── Success ── */
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 0",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    margin: "0 auto 20px",
                    background: "rgba(45,127,255,0.10)",
                    border: "1px solid rgba(45,127,255,0.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2d7fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: "'Cinzel',serif",
                    fontSize: "22px",
                    color: "#fff",
                    margin: "0 0 8px 0",
                  }}
                >
                  Message Sent!
                </p>
                <p
                  style={{
                    fontFamily: "'Roboto Mono',monospace",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.32)",
                    margin: "0 0 24px 0",
                    lineHeight: 1.8,
                  }}
                >
                  I'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({
                      name: "",
                      email: "",
                      budget: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  style={{
                    fontFamily: "'Roboto Mono',monospace",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#2d7fff",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <div style={{ position: "relative" }}>
                <p
                  style={{
                    fontFamily: "'Roboto Mono',monospace",
                    fontSize: "10px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#2d7fff",
                    margin: "0 0 24px 0",
                  }}
                >
                  Project Details
                </p>

                {/* Name + Email */}
                <div
                  className="cf-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <Field label="Full Name" error={errors.name}>
                    <input
                      style={baseInput(errors.name)}
                      placeholder="Shahbaz Ansari"
                      value={form.name}
                      onChange={set("name")}
                      onFocus={(e) => focus(e.target, false)}
                      onBlur={(e) => blur(e.target, errors.name)}
                    />
                  </Field>
                  <Field label="Email Address" error={errors.email}>
                    <input
                      style={baseInput(errors.email)}
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={set("email")}
                      onFocus={(e) => focus(e.target, false)}
                      onBlur={(e) => blur(e.target, errors.email)}
                    />
                  </Field>
                </div>

                {/* Subject + Budget */}
                <div
                  className="cf-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <Field label="Subject" error={errors.subject}>
                    <input
                      style={baseInput(errors.subject)}
                      placeholder="Project inquiry..."
                      value={form.subject}
                      onChange={set("subject")}
                      onFocus={(e) => focus(e.target, false)}
                      onBlur={(e) => blur(e.target, errors.subject)}
                    />
                  </Field>
                  <Field label="Budget Range">
                    <select
                      value={form.budget}
                      onChange={set("budget")}
                      style={{
                        ...baseInput(false),
                        cursor: "pointer",
                        color: form.budget ? "#fff" : "rgba(255,255,255,0.22)",
                      }}
                      onFocus={(e) => focus(e.target, false)}
                      onBlur={(e) => blur(e.target, false)}
                    >
                      <option value="" disabled style={{ background: "#111" }}>
                        Select budget
                      </option>
                      {BUDGETS.map((b) => (
                        <option
                          key={b}
                          value={b}
                          style={{ background: "#111", color: "#fff" }}
                        >
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "22px" }}>
                  <Field label="Message" error={errors.message}>
                    <textarea
                      style={{
                        ...baseInput(errors.message),
                        minHeight: "130px",
                        resize: "vertical",
                        lineHeight: 1.75,
                      }}
                      placeholder="Tell me about your project, timeline, or ask anything..."
                      value={form.message}
                      onChange={set("message")}
                      onFocus={(e) => focus(e.target, false)}
                      onBlur={(e) => blur(e.target, errors.message)}
                    />
                  </Field>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={sending}
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    borderRadius: "12px",
                    background: sending
                      ? "rgba(45,127,255,0.40)"
                      : "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                    border: "none",
                    color: "#fff",
                    cursor: sending ? "not-allowed" : "pointer",
                    fontFamily: "'Oswald',sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow: sending
                      ? "none"
                      : "0 4px 22px rgba(45,127,255,0.28)",
                    transition:
                      "transform 0.22s, box-shadow 0.22s, background 0.22s",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 30px rgba(45,127,255,0.42)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 22px rgba(45,127,255,0.28)";
                  }}
                >
                  {sending ? (
                    <>
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          border: "2px solid rgba(255,255,255,0.25)",
                          borderTopColor: "#fff",
                          animation: "spin 0.7s linear infinite",
                        }}
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>

                <p
                  style={{
                    fontFamily: "'Roboto Mono',monospace",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.20)",
                    textAlign: "center",
                    margin: "14px 0 0 0",
                    letterSpacing: "0.05em",
                  }}
                >
                  Your information is kept private and never shared.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT — Quick FAQ + CTA card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transition: "all 0.8s ease 0.25s",
            }}
          >
            {/* Quick FAQ */}
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
                  left: "18px",
                  right: "18px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg,transparent,rgba(96,98,255,0.40),transparent)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "180px",
                  height: "180px",
                  pointerEvents: "none",
                  background:
                    "radial-gradient(circle at top right,rgba(96,98,255,0.06) 0%,transparent 60%)",
                }}
              />

              <p
                style={{
                  fontFamily: "'Roboto Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#2d7fff",
                  margin: "0 0 18px 0",
                  position: "relative",
                }}
              >
                Quick Answers
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  position: "relative",
                }}
              >
                {QUICK_FAQS.map((item, i) => (
                  <QuickFaq key={i} item={item} index={i} visible={visible} />
                ))}
              </div>
            </div>

            {/* CTA card — book a call */}
            <div
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(45,127,255,0.22)",
                background: "rgba(45,127,255,0.04)",
                padding: "clamp(22px,4%,30px)",
                position: "relative",
                overflow: "hidden",
                textAlign: "center",
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
                    "radial-gradient(ellipse at 50% 0%,rgba(45,127,255,0.08) 0%,transparent 65%)",
                }}
              />

              {/* Pulsing icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  margin: "0 auto 14px",
                  background: "rgba(45,127,255,0.10)",
                  border: "1px solid rgba(45,127,255,0.28)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2d7fff",
                  position: "relative",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>

              <p
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: "clamp(16px,2vw,20px)",
                  fontWeight: 400,
                  color: "#fff",
                  margin: "0 0 8px 0",
                  lineHeight: 1.2,
                  position: "relative",
                }}
              >
                Prefer a{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Call?
                </span>
              </p>
              <p
                style={{
                  fontFamily: "'Roboto Mono',monospace",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.28)",
                  margin: "0 0 20px 0",
                  lineHeight: 1.8,
                  position: "relative",
                }}
              >
                Book a free 20-minute discovery call. No obligation — just a
                conversation.
              </p>

              <a
                href="https://wa.me/923001234567"
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
                Book via WhatsApp
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
      </div>

      <style>{`
        @media(min-width:900px){
          .cf-grid{ grid-template-columns:1.4fr 1fr !important; }
        }
        @media(max-width:540px){
          .cf-row{ grid-template-columns:1fr !important; }
        }
        input::placeholder,textarea::placeholder{ color:rgba(255,255,255,0.18); }
        select option{ background:#0a0a0a; }
        @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(-5deg)}}
        @keyframes spin{ to{ transform:rotate(360deg); } }
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `}</style>
    </section>
  );
}
