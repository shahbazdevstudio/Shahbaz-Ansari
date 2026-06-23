/**
 * ContactHero.jsx  — Component 1 / 2
 * Hero banner + contact info cards + social links for Contact page.
 * Theme: black · #2d7fff / #6062ff · Cinzel / Oswald / Roboto Mono
 */

import { useEffect, useRef, useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const INFO_CARDS = [
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
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "shahbaz@example.com",
    link: "mailto:shahbaz@example.com",
    sub: "Best for project inquiries",
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
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+92 300 123 4567",
    link: "https://wa.me/923001234567",
    sub: "Quick questions welcome",
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
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Sahiwal, Punjab, Pakistan",
    link: null,
    sub: "Available for remote work worldwide",
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
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Response Time",
    value: "Within 24 Hours",
    link: null,
    sub: "Mon – Sat, 9 AM – 10 PM PKT",
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/javicodes",
    icon: (
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    ),
    filled: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shahbaz-ansari",
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    filled: false,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/javicodes",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    filled: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/javicodes",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
    filled: false,
  },
  {
    label: "Fiverr",
    href: "https://fiverr.com/javicodes",
    icon: <path d="M16.25 16.25v-7.5h-7.5M8.75 16.25V8.75l7.5 7.5" />,
    filled: false,
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

      {/* Envelope outline — top-right (contact motif) */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "52px",
          right: "5.5%",
          opacity: 0.11,
          animation: "floatA 10s ease-in-out infinite",
        }}
        width="110"
        height="78"
        viewBox="0 0 110 78"
        fill="none"
      >
        <defs>
          <linearGradient id="cheg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="106"
          height="74"
          rx="10"
          stroke="url(#cheg)"
          strokeWidth="1.6"
          fill="rgba(45,127,255,0.03)"
        />
        <polyline
          points="2,2 55,46 108,2"
          stroke="url(#cheg)"
          strokeWidth="1.6"
          fill="none"
        />
        <line
          x1="2"
          y1="76"
          x2="38"
          y2="44"
          stroke="#6062ff"
          strokeWidth="1"
          strokeOpacity="0.40"
        />
        <line
          x1="108"
          y1="76"
          x2="72"
          y2="44"
          stroke="#6062ff"
          strokeWidth="1"
          strokeOpacity="0.40"
        />
      </svg>

      {/* Dashed ring + orbit dots — left mid */}
      <svg
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
        viewBox="0 0 152 152"
        fill="none"
      >
        <defs>
          <linearGradient id="chrg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <circle
          cx="76"
          cy="76"
          r="72"
          stroke="url(#chrg)"
          strokeWidth="1.5"
          strokeDasharray="8 5"
        />
        <circle
          cx="76"
          cy="76"
          r="50"
          stroke="#2d7fff"
          strokeWidth="0.7"
          strokeOpacity="0.30"
        />
        <circle cx="76" cy="4" r="4.5" fill="#2d7fff" />
        <circle cx="148" cy="76" r="4.5" fill="#6062ff" />
        <circle cx="76" cy="148" r="3" fill="#2d7fff" fillOpacity="0.50" />
      </svg>

      {/* Signal arcs — bottom-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "68px",
          right: "7%",
          opacity: 0.11,
          animation: "floatB 12s ease-in-out infinite 1s",
        }}
        width="72"
        height="62"
        viewBox="0 0 72 62"
        fill="none"
      >
        <defs>
          <linearGradient id="chsg" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <path
          d="M36 54 C36 54 10 32 36 8"
          stroke="url(#chsg)"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M36 54 C36 54 62 32 36 8"
          stroke="url(#chsg)"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M36 54 C36 54 2 26 36 2"
          stroke="url(#chsg)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          strokeOpacity="0.35"
        />
        <path
          d="M36 54 C36 54 70 26 36 2"
          stroke="url(#chsg)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          strokeOpacity="0.35"
        />
        <circle cx="36" cy="56" r="3.5" fill="#2d7fff" />
      </svg>

      {/* Diamond — top-left area */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "58px",
          left: "5%",
          opacity: 0.1,
          animation: "floatB 9s ease-in-out infinite 0.5s",
        }}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <defs>
          <linearGradient id="chdg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6062ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d7fff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect
          x="40"
          y="3"
          width="54"
          height="54"
          rx="5"
          transform="rotate(45 40 3)"
          fill="url(#chdg)"
        />
        <rect
          x="40"
          y="15"
          width="34"
          height="34"
          rx="3"
          transform="rotate(45 40 15)"
          fill="none"
          stroke="#6062ff"
          strokeWidth="0.9"
          strokeOpacity="0.45"
        />
      </svg>

      {/* Plus — bottom-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "8%",
          opacity: 0.08,
          animation: "floatA 8s ease-in-out infinite 2s",
        }}
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
      >
        <rect x="13" y="0" width="8" height="34" rx="4" fill="#2d7fff" />
        <rect x="0" y="13" width="34" height="8" rx="4" fill="#6062ff" />
      </svg>

      {/* Gradient dot grid — right */}
      <svg
        className="hidden xl:block"
        style={{ position: "absolute", top: "24%", right: "1%", opacity: 0.09 }}
        width="68"
        height="112"
        viewBox="0 0 68 112"
        fill="none"
      >
        <defs>
          <linearGradient id="chdtg" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#chdtg)"
              opacity={1 - i * 0.12}
            />
          )),
        )}
      </svg>

      {/* Small hexagon — bottom-centre */}
      <svg
        className="hidden xl:block"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "44%",
          opacity: 0.07,
          animation: "floatB 11s ease-in-out infinite 1.5s",
        }}
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
      >
        <defs>
          <linearGradient id="chhg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <polygon points="26,3 48,15 48,37 26,49 4,37 4,15" fill="url(#chhg)" />
        <polygon
          points="26,11 41,19.5 41,32.5 26,41 11,32.5 11,19.5"
          fill="none"
          stroke="#6062ff"
          strokeWidth="0.8"
          strokeOpacity="0.45"
        />
      </svg>
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
        <p
          style={{
            fontFamily: "'Roboto Mono',monospace",
            fontSize: "10px",
            color: "rgba(255,255,255,0.25)",
            margin: 0,
            letterSpacing: "0.04em",
          }}
        >
          {card.sub}
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
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
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
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        {...(filled
          ? { fill: hov ? "#fff" : "rgba(255,255,255,0.50)" }
          : {
              fill: "none",
              stroke: hov ? "#fff" : "rgba(255,255,255,0.50)",
              strokeWidth: 1.8,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })}
        style={{ transition: "all 0.22s", flexShrink: 0 }}
      >
        {icon}
      </svg>
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
              fontFamily: "'Oswald',sans-serif",
              fontWeight: 300,
              fontSize: "clamp(15px,1.8vw,17px)",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.38)",
              letterSpacing: "0.025em",
              margin: "0 auto 36px",
              maxWidth: "500px",
            }}
          >
            Whether you have a project in mind, a question, or just want to say
            hello — my inbox is always open. I reply within 24 hours.
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
              Currently available for new projects
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
        @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(-5deg)}}
        @keyframes pulse-dot{0%,100%{opacity:1;box-shadow:0 0 8px #22c55e}50%{opacity:0.5;box-shadow:0 0 16px #22c55e}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
      `}</style>
    </section>
  );
}
