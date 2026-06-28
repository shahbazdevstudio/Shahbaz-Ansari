import { Send } from "lucide-react";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import {
  MdLocationPin,
  MdOutlineAccessTime,
  MdOutlineEmail,
  MdOutlineSupportAgent,
  MdOutlineWorkOutline,
} from "react-icons/md";

// ─── Constants ────────────────────────────────────────────────────────────────

const FORMSPREE_URL = "https://formspree.io/f/xbdvllgb";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/shahbazansari-dev",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shahbaz-web-developer",
    icon: <FaLinkedin />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/shahbaz_ansari_dev/",
    icon: <FiInstagram />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923074963450",
    icon: <BsWhatsapp />,
  },
];

const CONTACT_INFO = [
  {
    label: "Email",
    value: "shahbazansari.coder@gmail.com",
    link: "mailto:shahbazansari.coder@gmail.com",
    icon: <MdOutlineEmail size={18} />,
  },
  {
    label: "WhatsApp",
    value: "Let's discuss your project.",
    link: "https://wa.me/923XXXXXXXXX",
    icon: <FaWhatsapp size={18} />,
  },
  {
    label: "Location",
    value: "Gujrat, Pakistan",
    icon: <MdLocationPin size={18} />,
  },
  {
    label: "Availability",
    value: "Open for New Projects",
    icon: <MdOutlineWorkOutline size={18} />,
  },
];

const INITIAL_FORM = {
  name: "",
  phone: "",
  website: "",
  budget: "",
  message: "",
};

// ─── Floating Shapes ──────────────────────────────────────────────────────────

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
          top: "-90px",
          left: "-130px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(45,127,255,0.11) 0%, transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-70px",
          right: "-110px",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(96,98,255,0.11) 0%, transparent 62%)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px",
          height: "220px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(45,127,255,0.03) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(45,127,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,127,255,0.022) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative SVG shapes */}
      <img
        src="/icons/mail-envelope.svg"
        alt=""
        className="hidden lg:block absolute top-[48px] right-[5%] opacity-30 animate-floatA"
      />
      <img
        src="/icons/star-cross.svg"
        alt=""
        className="hidden lg:block absolute bottom-[50px] left-[2%] opacity-20 animate-floatB"
      />
      <img
        src="/icons/rings.svg"
        alt=""
        className="hidden xl:block absolute top-[34%] left-[-70px] opacity-20 animate-floatA-reverse"
      />
      <img
        src="/icons/dots.svg"
        alt=""
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "22%",
          right: "0.8%",
          opacity: 0.2,
        }}
        width="68"
        height="112"
      />
    </div>
  );
}

// ─── Social Button ────────────────────────────────────────────────────────────

function SocialBtn({ label, href, icon }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        padding: "8px 12px",
        borderRadius: "10px",
        border: `1px solid ${hovered ? "rgba(45,127,255,0.30)" : "rgba(255,255,255,0.08)"}`,
        background: hovered
          ? "rgba(45,127,255,0.07)"
          : "rgba(255,255,255,0.03)",
        textDecoration: "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.2s ease",
      }}
    >
      {icon}
      <span
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: "10px",
          letterSpacing: "0.06em",
          color: hovered ? "#fff" : "rgba(255,255,255,0.50)",
          transition: "color 0.2s",
        }}
      >
        {label}
      </span>
    </a>
  );
}

// ─── Form Field Wrapper ───────────────────────────────────────────────────────

function Field({ label, children, error, fieldError }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        style={{
          fontFamily: "'Roboto Mono', monospace",
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: error ? "rgba(239,68,68,0.80)" : "rgba(255,255,255,0.35)",
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
      {fieldError && (
        <span
          style={{
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "10px",
            color: "rgba(239,68,68,0.80)",
            marginTop: "4px",
          }}
        >
          {fieldError}
        </span>
      )}
    </div>
  );
}

// ─── Input Base Style ─────────────────────────────────────────────────────────

const inputStyle = (hasError) => ({
  width: "100%",
  boxSizing: "border-box",
  background: hasError ? "rgba(239,68,68,0.03)" : "rgba(255,255,255,0.035)",
  border: `1px solid ${hasError ? "rgba(239,68,68,0.50)" : "rgba(255,255,255,0.09)"}`,
  borderRadius: "12px",
  padding: "11px 14px",
  fontFamily: "'Roboto Mono', monospace",
  fontSize: "11px",
  color: "#fff",
  outline: "none",
  transition: "border-color 0.2s, background 0.2s",
});

// ─── Shimmer Top Line ─────────────────────────────────────────────────────────

const ShimmerLine = ({ color = "rgba(45,127,255,0.40)" }) => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: "20px",
      right: "20px",
      height: "1px",
      background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
    }}
  />
);

// ─── Card Shell ───────────────────────────────────────────────────────────────

const Card = ({ children, shimmerColor, style = {} }) => (
  <div
    style={{
      position: "relative",
      borderRadius: "18px",
      border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(255,255,255,0.02)",
      overflow: "hidden",
      ...style,
    }}
  >
    <ShimmerLine color={shimmerColor} />
    {children}
  </div>
);

// ─── Contact Section ──────────────────────────────────────────────────────────

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [fieldErrors, setFieldErrors] = useState({});

  // Field change handler
  const handleChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: false }));
    setFieldErrors((prev) => ({ ...prev, [key]: "" }));
  };

  // Focus / blur styling for inputs
  const onFocus = (e, hasError = false) => {
    e.target.style.borderColor = hasError
      ? "rgba(239,68,68,0.70)"
      : "rgba(45,127,255,0.50)";
    e.target.style.background = hasError
      ? "rgba(239,68,68,0.03)"
      : "rgba(45,127,255,0.04)";
  };
  const onBlur = (e, hasError = false) => {
    e.target.style.borderColor = hasError
      ? "rgba(239,68,68,0.50)"
      : "rgba(255,255,255,0.09)";
    e.target.style.background = "rgba(255,255,255,0.035)";
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[\s\-()]/g, "");
    if (!cleaned) return true;
    return /^[+]?[0-9]{7,15}$/.test(cleaned);
  };

  // Form submission → Formspree
  const handleSubmit = async () => {
    // Client-side validation
    const newErrors = {};
    const newFieldErrors = {};
    let hasError = false;

    const requiredFields = ["name", "phone", "website", "message"];
    requiredFields.forEach((key) => {
      if (!form[key]?.trim()) {
        newErrors[key] = true;
        newFieldErrors[key] = "This field is required";
        hasError = true;
      }
    });

    // Validate phone format
    if (form.phone && !validatePhone(form.phone)) {
      newErrors.phone = true;
      newFieldErrors.phone = "Please enter a valid phone number";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      setFieldErrors(newFieldErrors);
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_URL, {
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

      if (res.ok) {
        setStatus("success");
        setForm(INITIAL_FORM);
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
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding: "clamp(80px,10vw,130px) clamp(20px,5%,60px)",
      }}
    >
      <FloatingShapes />

      <div
        style={{ position: "relative", maxWidth: "1060px", margin: "0 auto" }}
      >
        {/* ── Section Header ── */}
        <div
          style={{ textAlign: "center", marginBottom: "clamp(48px,6vw,68px)" }}
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
            // get in touch
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(32px,4.5vw,52px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 14px 0",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Get in{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Touch
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
            Available for freelance work, partnerships, and job opportunities.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(20px,3vw,32px)",
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Contact Info Card */}
            <Card
              shimmerColor="rgba(45,127,255,0.40)"
              style={{ padding: "clamp(20px,4%,28px)" }}
            >
              <p
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#2d7fff",
                  margin: "0 0 20px 0",
                }}
              >
                Contact Info
              </p>

              {CONTACT_INFO.map(({ label, value, link, icon }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Icon box */}
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      flexShrink: 0,
                      background: "rgba(45,127,255,0.07)",
                      border: "1px solid rgba(45,127,255,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2d7fff",
                      fontSize: "14px",
                    }}
                  >
                    {icon}
                  </div>

                  <div>
                    <p
                      style={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: "10px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.30)",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        margin: "0 0 -3px 0",
                      }}
                    >
                      {label}
                    </p>
                    {link ? (
                      <a
                        href={link}
                        className="!underline "
                        style={{
                          fontFamily: "'Roboto Mono', monospace",
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.65)",
                          textDecoration: "none",
                          letterSpacing: "0.04em",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#2d7fff")}
                        onMouseLeave={(e) =>
                          (e.target.style.color = "rgba(255,255,255,0.65)")
                        }
                      >
                        {value}
                      </a>
                    ) : (
                      <span
                        style={{
                          fontFamily: "'Roboto Mono', monospace",
                          fontSize: "11px",
                          color: "rgba(255,255,255,0.65)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </Card>

            {/* Socials Card */}
            <Card
              shimmerColor="rgba(96,98,255,0.40)"
              style={{ padding: "clamp(20px,4%,28px)" }}
            >
              <p
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "10px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#2d7fff",
                  margin: "0 0 16px 0",
                }}
              >
                Socials
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {SOCIALS.map((s) => (
                  <SocialBtn key={s.label} {...s} />
                ))}
              </div>
            </Card>
          </div>

          {/* ── RIGHT COLUMN — Form ── */}
          <Card
            shimmerColor="rgba(96,98,255,0.45)"
            style={{ padding: "clamp(20px,5%,32px)" }}
          >
            <p
              style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#2d7fff",
                margin: "0 0 22px 0",
              }}
            >
              Send a Message
            </p>

            {/* ── Success State ── */}
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
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
              <>
                {/* ── Error Banner ── */}
                {status === "error" && (
                  <p
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
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

                {/* ── Name + Phone row ── */}
                <div
                  className="form-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <Field
                    label="Full Name"
                    error={errors.name}
                    fieldError={fieldErrors.name}
                  >
                    <input
                      style={inputStyle(errors.name)}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange("name")}
                      onFocus={(e) => onFocus(e, false)}
                      onBlur={(e) => onBlur(e, errors.name)}
                    />
                  </Field>
                  <Field
                    label="Phone Number"
                    error={errors.phone}
                    fieldError={fieldErrors.phone}
                  >
                    <input
                      type="tel"
                      style={inputStyle(errors.phone)}
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={handleChange("phone")}
                      onFocus={(e) => onFocus(e, false)}
                      onBlur={(e) => onBlur(e, errors.phone)}
                    />
                  </Field>
                </div>

                {/* ── Website + Budget ── */}
                <div
                  className="form-row mt-5"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <Field
                    label="Website Type"
                    error={errors.website}
                    fieldError={fieldErrors.website}
                  >
                    <input
                      style={inputStyle(errors.website)}
                      placeholder="Your website type"
                      value={form.website}
                      onChange={handleChange("website")}
                      onFocus={(e) => onFocus(e, false)}
                      onBlur={(e) => onBlur(e, errors.website)}
                    />
                  </Field>
                  <Field
                    label="Budget (PKR)"
                    error={errors.budget}
                    fieldError={fieldErrors.budget}
                  >
                    <select
                      style={{
                        ...inputStyle(errors.budget),
                        appearance: "none",
                        cursor: "pointer",
                        paddingRight: "36px",
                      }}
                      value={form.budget}
                      onChange={handleChange("budget")}
                      onFocus={(e) => onFocus(e, false)}
                      onBlur={(e) => onBlur(e, errors.budget)}
                    >
                      <option value="" style={{ background: "#0a0a0a" }}>
                        Select Budget Range
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
                  </Field>
                </div>

                {/* ── Message ── */}
                <div style={{ marginBottom: "20px" }} className="mt-5">
                  <Field
                    label="Message"
                    error={errors.message}
                    fieldError={fieldErrors.message}
                  >
                    <textarea className="!resize-none"
                      style={{
                        ...inputStyle(errors.message),
                        minHeight: "130px",
                        resize: "vertical",
                        lineHeight: 1.7,
                      }}
                      placeholder="Tell me about your project.."
                      value={form.message}
                      onChange={handleChange("message")}
                      onFocus={(e) => onFocus(e, false)}
                      onBlur={(e) => onBlur(e, errors.message)}
                    />
                  </Field>
                </div>

                {/* ── Submit Button ── */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "submitting"}
                  style={{
                    width: "100%",
                    padding: "13px 24px",
                    borderRadius: "12px",
                    background:
                      status === "submitting"
                        ? "rgba(45,127,255,0.40)"
                        : "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",
                    border: "none",
                    color: "#fff",
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                    opacity: status === "submitting" ? 0.7 : 1,
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: "12px",
                    fontWeight: 500,
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
                    transition: "transform 0.22s ease, box-shadow 0.22s ease",
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
                  <Send size={18} style={{ marginTop: "2px" }} />
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
