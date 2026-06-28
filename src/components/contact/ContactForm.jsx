/**
 * ContactForm.jsx  — Component 1 / 2
 * Full contact form (two-column) + quick FAQ strip + final CTA.
 * Theme: black · #2d7fff / #6062ff · Cinzel / Oswald / Roboto Mono
 */

import { PhoneCall, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiArrowSmallRight } from "react-icons/hi2";

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
      <img
        src="/icons/geometric-shape.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "48px",
          right: "5.5%",
          opacity: 0.05,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="96"
        height="96"
        alt="geometric"
      />

      {/* lightning  — left */}
      <img
        src="/icons/lightning.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "12%",
          left: "46px",
          opacity: 0.15,
          rotate: "-0deg",
          animation: "floatA 14s ease-in-out infinite reverse",
        }}
        width="148"
        height="148"
        alt="lightning"
      />

      {/* Diamond — bottom-left */}
      <img
        src="/icons/diamond.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "72px",
          left: "5%",
          opacity: 0.05,
          animation: "floatB 10s ease-in-out infinite",
        }}
        width="80"
        height="80"
        alt="diamond"
      />
      {/* 4-point star — bottom-right */}
      <img
        src="/icons/star-cross.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "12%",
          right: "8%",
          opacity: 0.14,
          animation: "floatB 8s ease-in-out infinite 1s",
        }}
        width="58"
        height="58"
        alt="star"
      />

      {/* Dot cluster — right */}
      <img
        src="/icons/dots.svg"
        className="hidden xl:block"
        style={{ position: "absolute", top: "20%", right: "1%", opacity: 0.09 }}
        width="68"
        height="112"
        alt="dots"
      />

      {/* Plus — top-left */}
      <img
        src="/icons/plus-accent.svg"
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
        alt="plus"
      />
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
          <FiChevronDown
            size={12}
            color={open ? "#2d7fff" : "rgba(255,255,255,0.40)"}
          />
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
    phone: "",
    website: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [fieldErrors, setFieldErrors] = useState({});

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
    setFieldErrors((er) => ({ ...er, [k]: "" }));
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

  const validatePhone = (phone) => {
    // Allow numbers, spaces, +, -, and parentheses
    const cleaned = phone.replace(/[\s\-()]/g, "");
    if (!cleaned) return true; // Required field, but empty will be caught by required check
    return /^[+]?[0-9]{7,15}$/.test(cleaned);
  };

  const handleSubmit = async () => {
    // Required fields
    const req = ["name", "phone", "website", "message"];
    const errs = {};
    const fieldErrs = {};
    let hasError = false;

    req.forEach((k) => {
      if (!form[k]?.trim()) {
        errs[k] = true;
        fieldErrs[k] = "This field is required";
        hasError = true;
      }
    });

    // Validate phone format if provided
    if (form.phone && !validatePhone(form.phone)) {
      errs.phone = true;
      fieldErrs.phone = "Please enter a valid phone number";
      hasError = true;
    }

    if (hasError) {
      setErrors(errs);
      setFieldErrors(fieldErrs);
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xbdvllgb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          website: form.website,
          budget: form.budget,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          phone: "",
          website: "",
          budget: "",
          message: "",
        });
        setErrors({});
        setFieldErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

const BUDGETS = [
  "Under 10,000 PKR",
  "10,000 – 20,000 PKR",
  "20,000 – 30,000 PKR",
  "30,000 – 40,000 PKR",
  "40,000+ PKR",
  "Let's Discuss",
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

            {status === "success" ? (
              <div className="h-full text-center flex justify-center items-center flex-col">
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    margin: "0 auto 16px",
                    background: "rgba(45,127,255,0.10)",
                    border: "1px solid rgba(45,127,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Send color="#2d7fff" size={20} />
                </div>
                <p
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "14px",
                    letterSpacing: "0.08em",
                    color: "#2d7fff",
                    margin: "0 0 6px 0",
                    textTransform: "uppercase",
                  }}
                >
                  Message Sent!
                </p>
                <p
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.28)",
                  }}
                >
                  I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div style={{ position: "relative" }}>
                {status === "error" && (
                  <p
                    style={{
                      fontFamily: "'Roboto Mono',monospace",
                      fontSize: "11px",
                      color: "rgba(239,68,68,0.85)",
                      marginBottom: "16px",
                      textAlign: "center",
                      padding: "10px",
                      borderRadius: "8px",
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.20)",
                    }}
                  >
                    Something went wrong. Please try again.
                  </p>
                )}

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

                {/* Name + Phone */}
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
                      placeholder="Your full name"
                      value={form.name}
                      onChange={set("name")}
                      onFocus={(e) => focus(e.target, false)}
                      onBlur={(e) => blur(e.target, errors.name)}
                    />
                    {fieldErrors.name && (
                      <span
                        style={{
                          fontFamily: "'Roboto Mono',monospace",
                          fontSize: "10px",
                          color: "rgba(239,68,68,0.80)",
                          marginTop: "4px",
                        }}
                      >
                        {fieldErrors.name}
                      </span>
                    )}
                  </Field>
                  <Field label="Phone Number" error={errors.phone}>
                    <input
                      style={baseInput(errors.phone)}
                      type="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={set("phone")}
                      onFocus={(e) => focus(e.target, false)}
                      onBlur={(e) => blur(e.target, errors.phone)}
                    />
                    {fieldErrors.phone && (
                      <span
                        style={{
                          fontFamily: "'Roboto Mono',monospace",
                          fontSize: "10px",
                          color: "rgba(239,68,68,0.80)",
                          marginTop: "4px",
                        }}
                      >
                        {fieldErrors.phone}
                      </span>
                    )}
                  </Field>
                </div>

                {/* Website + Budget */}
                <div
                  className="cf-row mt-5"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <Field label="Website Type" error={errors.website}>
                    <input
                      style={baseInput(errors.website)}
                      placeholder="Your website type"
                      value={form.website}
                      onChange={set("website")}
                      onFocus={(e) => focus(e.target, false)}
                      onBlur={(e) => blur(e.target, errors.website)}
                    />
                    {fieldErrors.website && (
                      <span
                        style={{
                          fontFamily: "'Roboto Mono',monospace",
                          fontSize: "10px",
                          color: "rgba(239,68,68,0.80)",
                          marginTop: "4px",
                        }}
                      >
                        {fieldErrors.website}
                      </span>
                    )}
                  </Field>

                  <Field label="Budget (PKR)" error={errors.budget}>
                    <select
                      style={{
                        ...baseInput(errors.budget),
                        appearance: "none",
                        background: errors.budget
                          ? "rgba(239,68,68,0.03)"
                          : "rgba(255,255,255,0.03)",
                        cursor: "pointer",
                        paddingRight: "36px",
                      }}
                      value={form.budget}
                      onChange={set("budget")}
                      onFocus={(e) => focus(e.target, false)}
                      onBlur={(e) => blur(e.target, errors.budget)}
                    >
                      <option value="" style={{ background: "#0a0a0a" }}>
                        Select budget range
                      </option>
                      {BUDGETS.map((b) => (
                        <option
                          key={b}
                          value={b}
                          style={{ background: "#0a0a0a" }}
                        >
                          {b}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.budget && (
                      <span
                        style={{
                          fontFamily: "'Roboto Mono',monospace",
                          fontSize: "10px",
                          color: "rgba(239,68,68,0.80)",
                          marginTop: "4px",
                        }}
                      >
                        {fieldErrors.budget}
                      </span>
                    )}
                  </Field>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "22px" }} className="mt-5">
                  <Field label="Message" error={errors.message}>
                    <textarea
                      className="!resize-none message-textarea"
                      style={{
                        ...baseInput(errors.message),
                        resize: "vertical",
                        lineHeight: 1.75,
                      }}
                      placeholder="Tell me about your project"
                      value={form.message}
                      onChange={set("message")}
                      onFocus={(e) => focus(e.target, false)}
                      onBlur={(e) => blur(e.target, errors.message)}
                    />
                    {fieldErrors.message && (
                      <span
                        style={{
                          fontFamily: "'Roboto Mono',monospace",
                          fontSize: "10px",
                          color: "rgba(239,68,68,0.80)",
                          marginTop: "4px",
                        }}
                      >
                        {fieldErrors.message}
                      </span>
                    )}
                  </Field>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "submitting"}
                  style={{
                    width: "100%",
                    padding: "14px 24px",
                    borderRadius: "12px",
                    background:
                      status === "submitting"
                        ? "rgba(45,127,255,0.40)"
                        : "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                    border: "none",
                    color: "#fff",
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                    fontSize: "13px",
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    boxShadow:
                      status === "submitting"
                        ? "none"
                        : "0 4px 22px rgba(45,127,255,0.28)",
                    transition:
                      "transform 0.22s, box-shadow 0.22s, background 0.22s",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "submitting") {
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
                  {status === "submitting" ? (
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
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
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
                <PhoneCall />
              </div>

              <p
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: "clamp(16px,2vw,25px)",
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
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.28)",
                  margin: "0 0 20px 0",
                  lineHeight: 1.8,
                  position: "relative",
                }}
              >
                Schedule a free 20-minute WhatsApp consultation. Let's discuss
                your project.
              </p>

              <a
                href="https://wa.me/923074963450"
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
                  fontSize: "11px",
                  fontWeight: 400,
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
                <HiArrowSmallRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
      .message-textarea{
      height: 115px;
      }
        @media(min-width:900px){
          .cf-grid{ grid-template-columns:1.4fr 1fr !important; }
          .message-textarea{height:220px;}
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
