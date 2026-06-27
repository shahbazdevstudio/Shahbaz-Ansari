
import { Timeline } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { HiArrowSmallRight } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { PiClockFill } from "react-icons/pi";

// ─── Data ─────────────────────────────────────────────────────────────────────

const INFO_CARDS = [
  {
    icon: <MdEmail size={22} />,
    label: "Email",
    value: "shahbaz@example.com",
    link: "mailto:shahbaz@example.com",
  },
  {
    icon: <FaWhatsapp size={22} />,
    label: "WhatsApp",
    value: "+92 300 123 4567",
    link: "https://wa.me/923001234567",
  },
  {
    icon: <HiLocationMarker size={22} />,
    label: "Location",
    value: "Sahiwal, Punjab, Pakistan",
    link: null,
  },
  {
    icon: <PiClockFill size={22} />,
    label: "Response Time",
    value: "Within 24 Hours",
    link: null,
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/shahbaz-ansari",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shahbaz-ansari",
    icon: <FaLinkedin />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/shahbazansari",
    icon: <FiInstagram />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923001234567",
    icon: <BsWhatsapp />,
  },
];

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
          left: "-130px",
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
          width: "490px",
          height: "490px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(96,98,255,0.10) 0%,transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "22%",
          width: "260px",
          height: "260px",
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
          backgroundImage: `linear-gradient(rgba(45,127,255,0.024) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.024) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Dashed ring + orbit dots — left mid */}
      <img
      src="/icons/rings.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "30%",
          left: "-46px",
          opacity: 0.12,
          animation: "floatA 14s ease-in-out infinite reverse",
        }}
        width="152"
        height="152"
        alt="ring"
      />


      {/* Mail — top-left area */}
      <img
        src="/icons/mail-envelope.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "138px",
          left: "5%",
          opacity: 0.15,
          animation: "floatB 9s ease-in-out infinite 0.5s",
        }}
        width="80"
        height="80"
        alt="mail"
      />

      {/* Plus — bottom-left */}
      <img
        src="/icons/plus-accent.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "24%",
          left: "8%",
          opacity: 0.08,
          animation: "floatA 8s ease-in-out infinite 2s",
        }}
        width="34"
        height="34"
        alt="plus"
      />

      {/* Gradient dot grid — right */}
      <img
        src="/icons/dots.svg"
        className="hidden xl:block"
        style={{ position: "absolute", top: "16%", right: "1%", opacity: 0.15 }}
        width="68"
        height="112"
        alt="dots"
      />

      {/* Small hexagon — bottom-centre */}
      <img
        src="/icons/geometric-shape.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "40%",
          right: "4%",
          opacity: 0.1,
          animation: "floatB 11s ease-in-out infinite 1.5s",
        }}
        width="72"
        height="72"
        alt="geometric"
      />
    </div>
  );
}

// ─── Info Card ────────────────────────────────────────────────────────────────

function InfoCard({ card, index, visible }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        border: `1px solid ${hov ? "rgba(45,127,255,0.30)" : "rgba(255,255,255,0.07)"}`,
        background: hov ? "rgba(45,127,255,0.05)" : "rgba(255,255,255,0.025)",
        padding: "22px 20px",
        display: "flex",
        alignItems: "flex-start",
        gap: "14px",
        cursor: card.link ? "pointer" : "default",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hov
            ? "translateY(-3px)"
            : "translateY(0)"
          : "translateY(20px)",
        transition: `opacity 0.6s ease ${0.15 + index * 0.08}s, transform 0.3s ease, border-color 0.3s, background 0.3s`,
      }}
      onClick={() => card.link && window.open(card.link, "_blank")}
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
            : "linear-gradient(90deg,transparent,rgba(45,127,255,0.18),transparent)",
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
            "radial-gradient(ellipse at top left, rgba(45,127,255,0.07) 0%, transparent 55%)",
          opacity: hov ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          flexShrink: 0,
          background: hov ? "rgba(45,127,255,0.14)" : "rgba(45,127,255,0.07)",
          border: `1px solid ${hov ? "rgba(45,127,255,0.38)" : "rgba(45,127,255,0.18)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#2d7fff",
          transition: "all 0.3s",
          position: "relative",
        }}
      >
        {card.icon}
      </div>

      {/* Text */}
      <div style={{ position: "relative", minWidth: 0 }}>
        <p
          style={{
            fontFamily: "'Roboto Mono',monospace",
            fontSize: "10px",
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: hov ? "rgba(45,127,255,0.70)" : "rgba(255,255,255,0.25)",
            margin: "0 0 4px 0",
            transition: "color 0.3s",
          }}
        >
          {card.label}
        </p>
        <p
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: "15px",
            fontWeight: 400,
            letterSpacing: "0.03em",
            color: "#fff",
            margin: "0 0 3px 0",
            wordBreak: "break-word",
          }}
        >
          {card.value}
        </p>  
      </div>

      {/* Arrow — only for clickable */}
      {card.link && (
        <div
          style={{
            marginLeft: "auto",
            flexShrink: 0,
            alignSelf: "center",
            color: hov ? "#2d7fff" : "rgba(255,255,255,0.18)",
            transition: "color 0.3s, transform 0.3s",
            transform: hov ? "translateX(2px)" : "translateX(0)",
            position: "relative",
          }}
        >
          <HiArrowSmallRight/>
        </div>
      )}
    </div>
  );
}

// ─── Social Button ────────────────────────────────────────────────────────────

function SocialBtn({ label, href, icon, filled }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "9px 16px",
        borderRadius: "10px",
        border: `1px solid ${hov ? "rgba(45,127,255,0.30)" : "rgba(255,255,255,0.08)"}`,
        background: hov ? "rgba(45,127,255,0.08)" : "rgba(255,255,255,0.03)",
        textDecoration: "none",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        transition: "all 0.22s ease",
      }}
    >

        {icon}
      <span
        style={{
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "10px",
          letterSpacing: "0.06em",
          color: hov ? "#fff" : "rgba(255,255,255,0.45)",
          transition: "color 0.22s",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </a>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactHeroSection() {
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
      id="contact-hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding:
          "clamp(100px,12vw,150px) clamp(20px,5%,60px) clamp(80px,10vw,110px)",
      }}
    >
      <FloatingShapes />

      <div
        style={{ position: "relative", maxWidth: "1140px", margin: "0 auto" }}
      >
        {/* ── Centered hero copy ── */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s ease 0.05s",
          }}
        >
          <p
            className="!mt-10 md:!mt-0"
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#2d7fff",
              margin: "0 0 16px 0",
            }}
          >
            // get in touch
          </p>
          <h1
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(36px,6vw,70px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 8px 0",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Let's Build
          </h1>
          <h1
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(36px,6vw,70px)",
              fontWeight: 400,
              margin: "0 0 24px 0",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Something Great.
          </h1>
          <p
            style={{
              fontWeight: 300,
              fontSize: "clamp(15px,1.8vw,14px)",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.38)",
              letterSpacing: "0.025em",
              margin: "0 auto 36px",
              maxWidth: "500px",
            }}
          >
            Whether you have a project in mind, a question, or need my help —
            I'm always available. I reply within 24 hours.
          </p>

          {/* Availability badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "100px",
              border: "1px solid rgba(34,197,94,0.25)",
              background: "rgba(34,197,94,0.05)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px #22c55e",
                animation: "pulse-dot 2s ease-in-out infinite",
                display: "block",
              }}
            />
            <span
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.08em",
              }}
            >
              Available for new projects
            </span>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            margin: "clamp(56px,7vw,80px) 0 clamp(36px,5vw,52px)",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.40s",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg,transparent,rgba(45,127,255,0.25))",
            }}
          />
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(45,127,255,0.45)",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            contact details
          </p>
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg,rgba(45,127,255,0.25),transparent)",
            }}
          />
        </div>

        {/* ── Info cards grid ── */}
        <div
          className="ch-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "10px",
            marginBottom: "clamp(36px,5vw,56px)",
          }}
        >
          {INFO_CARDS.map((card, i) => (
            <InfoCard key={i} card={card} index={i} visible={visible} />
          ))}
        </div>

        {/* ── Socials ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.7s ease 0.55s",
          }}
        >
          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background:
                  "linear-gradient(90deg,transparent,rgba(45,127,255,0.18))",
              }}
            />
            <p
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(45,127,255,0.40)",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              find me on
            </p>
            <div
              style={{
                flex: 1,
                height: "1px",
                background:
                  "linear-gradient(90deg,rgba(45,127,255,0.18),transparent)",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {SOCIALS.map((s) => (
              <SocialBtn key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width:640px){ .ch-cards-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(min-width:1024px){ .ch-cards-grid{ grid-template-columns:repeat(4,1fr) !important; } }
      `}</style>
    </section>
  );
}
