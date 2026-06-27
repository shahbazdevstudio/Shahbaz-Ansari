/**
 * Footer.jsx — Fully responsive layout
 *
 * Mobile: Centered single column (logo, description, badge, nav rows, social, email)
 * Desktop (≥1024px): Grid layout with brand, pages, services, connect columns
 *
 * Dependencies: react-icons (already in project)
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbArrowUp } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { LuCopyright } from "react-icons/lu";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const SERVICES = [
  "Web Development",
  "UI/UX Design",
  "React Development",
  "API Integration",
  "Responsive Design",
  "Freelance Work",
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/shahbaz-ansari",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shahbaz-ansari",
    Icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/shahbazansari",
    Icon: FaInstagram,
  },
  { label: "WhatsApp", href: "https://wa.me/923001234567", Icon: FaWhatsapp },
];

// ─── Scroll-to-top button ──────────────────────────────────────────────────────

function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label="Back to top"
      title="Back to top"
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "12px",
        border: `1px solid ${hov ? "rgba(45,127,255,0.60)" : "rgba(45,127,255,0.25)"}`,
        background: hov
          ? "linear-gradient(135deg,rgba(45,127,255,0.22) 0%,rgba(96,98,255,0.18) 100%)"
          : "rgba(45,127,255,0.07)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexShrink: 0,
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.30s cubic-bezier(0.34,1.56,0.64,1)",
        boxShadow: hov ? "0 8px 22px rgba(45,127,255,0.24)" : "none",
      }}
    >
      <TbArrowUp
        size={18}
        color={hov ? "#fff" : "rgba(45,127,255,0.85)"}
        style={{ transition: "color 0.25s" }}
      />
    </button>
  );
}

// ─── Social icon button ───────────────────────────────────────────────────────

function SocialIcon({ label, href, Icon }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "11px",
        border: `1px solid ${hov ? "rgba(45,127,255,0.38)" : "rgba(255,255,255,0.09)"}`,
        background: hov ? "rgba(45,127,255,0.10)" : "rgba(255,255,255,0.03)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        color: hov ? "#fff" : "rgba(255,255,255,0.52)",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.22s cubic-bezier(0.34,1.56,0.64,1)",
        boxShadow: hov ? "0 6px 18px rgba(45,127,255,0.18)" : "none",
      }}
    >
      <Icon size={16} />
    </a>
  );
}

// ─── Nav link (with dot prefix) ─────────────────────────────────────────────

function NavLinkWithDot({ label, href = "#" }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
    to={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontFamily: "'Roboto Mono',monospace",
        fontSize: "11px",
        color: hov ? "#fff" : "rgba(255,255,255,0.45)",
        textDecoration: "none",
        transition: "color 0.22s ease",
        letterSpacing: "0.04em",
      }}
    >
      <span
        style={{
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: hov ? "#2d7fff" : "rgba(45,127,255,0.40)",
          transition: "background 0.22s ease",
          flexShrink: 0,
        }}
      />
      {label}
    </Link>
  );
}

// ─── Nav link (centered, with underline) ─────────────────────────────────────

function NavLinkCentered({ label, to }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'Roboto Mono',monospace",
        fontSize: "11px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: hov ? "#fff" : "rgba(255,255,255,0.40)",
        textDecoration: "none",
        transition: "color 0.22s ease",
        position: "relative",
        paddingBottom: "2px",
      }}
    >
      {label}
      <span
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1px",
          width: hov ? "100%" : "0%",
          background: "linear-gradient(90deg,#2d7fff,#6062ff)",
          borderRadius: "100px",
          transition: "width 0.28s ease",
        }}
      />
    </Link>
  );
}

// ─── Divider dot ─────────────────────────────────────────────────────────────

const Dot = () => (
  <span
    style={{
      width: "3px",
      height: "3px",
      borderRadius: "50%",
      background: "rgba(45,127,255,0.40)",
      display: "inline-block",
      flexShrink: 0,
    }}
  />
);

// ─── Section title ──────────────────────────────────────────────────────────

function SectionTitle({ children }) {
  return (
    <p
      style={{
        fontFamily: "'Oswald',sans-serif",
        fontSize: "14px",
        fontWeight: 300,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.35)",
        marginBottom: "16px",
      }}
    >
      {children}
    </p>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const [emailHov, setEmailHov] = useState(false);
  const firstRow = NAV_LINKS.slice(0, 3);
const secondRow = NAV_LINKS.slice(3);

  return (
    <footer
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Top gradient glow line ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "1px",
          background:
            "linear-gradient(90deg,transparent,rgba(45,127,255,0.40),rgba(96,98,255,0.30),transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse,rgba(45,127,255,0.05) 0%,transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Main container ── */}
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "clamp(52px,7vw,80px) clamp(20px,5%,60px) 0",
        }}
      >
        {/* ─── DESKTOP GRID LAYOUT (≥1024px) ─── */}
        <div
          className="desktop-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(26px,3vw,32px)",
                fontWeight: 400,
                color: "#fff",
                letterSpacing: "0.06em",
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              Shahbaz
            </div>
            <p
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "12px",
                color: "rgba(255,255,255,0.30)",
                lineHeight: 1.85,
                letterSpacing: "0.025em",
                maxWidth: "330px",
                marginBottom: "20px",
              }}
            >
              I design and develop modern websites and web applications that
              help businesses grow, attract customers, and increase conversions.
            </p>
          </div>

          {/* Pages Column */}
          <div>
            <SectionTitle>Pages</SectionTitle>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {NAV_LINKS.map((link) => (
                <NavLinkWithDot
                  key={link.path}
                  label={link.label}
                  href={link.path}
                />
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <SectionTitle>Services</SectionTitle>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {SERVICES.map((label) => (
                <NavLinkWithDot key={label} label={label} href="#" />
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <SectionTitle>Connect</SectionTitle>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "20px",
              }}
            >
              {SOCIALS.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
            <p
              style={{
                fontFamily: "'Oswald',sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "5px",
              }}
            >
              Email
            </p>
            <a
              className="!mt-10"
              href="mailto:shahbazansari.coder@gmail.com"
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "color 0.22s ease",
                letterSpacing: "0.04em",
              }}
              onMouseEnter={() => setEmailHov(true)}
              onMouseLeave={() => setEmailHov(false)}
            >
              <span style={{ color: emailHov ? "#2d7fff" : "inherit" }}>
                shahbazansari.coder@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* ─── MOBILE CENTERED LAYOUT (≤1023px) ─── */}
        <div
          className="mobile-footer-content"
          style={{
            display: "none",
            textAlign: "center",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(26px,3.5vw,36px)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "0.06em",
              lineHeight: 1,
              marginBottom: "14px",
            }}
          >
            Shahbaz
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "11.5px",
              color: "rgba(255,255,255,0.30)",
              lineHeight: 1.85,
              letterSpacing: "0.025em",
              maxWidth: "380px",
              margin: "0 auto 22px",
            }}
          >
            I design and develop modern websites and web applications that help
            businesses grow, attract customers, and increase conversions.
          </p>

          {/* Availability badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "9px 18px",
              borderRadius: "100px",
              border: "1px solid rgba(34,197,94,0.20)",
              background: "rgba(34,197,94,0.04)",
              marginBottom: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg,transparent 0%,rgba(34,197,94,0.06) 50%,transparent 100%)",
                animation: "badgeSweep 3s ease-in-out infinite",
                pointerEvents: "none",
              }}
            />
            <span style={{ position: "relative", flexShrink: 0 }}>
              <span
                style={{
                  display: "block",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 0 0 rgba(34,197,94,0.6)",
                  animation: "ripple 2s ease-out infinite",
                }}
              />
            </span>
            <span
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "10px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                position: "relative",
              }}
            >
              Available for Projects
            </span>
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "rgba(34,197,94,0.50)",
                flexShrink: 0,
                position: "relative",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "12px",
            }}
          >
            {firstRow.map((link, index) => (
              <React.Fragment key={link.path}>
                <NavLinkCentered label={link.label} to={link.path} />
                {index !== firstRow.length - 1 && <Dot />}
              </React.Fragment>
            ))}
          </div>

          {/* Nav row 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "32px",
            }}
          >
            {secondRow.map((link, index) => (
              <React.Fragment key={link.path}>
                <NavLinkCentered label={link.label} to={link.path} />
                {index !== secondRow.length - 1 && <Dot />}
              </React.Fragment>
            ))}
          </div>

          {/* Social icons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "18px",
            }}
          >
            {SOCIALS.map((s) => (
              <SocialIcon key={s.label} {...s} />
            ))}
          </div>

          {/* Email */}
          <div style={{ marginBottom: "clamp(36px,5vw,52px)" }}>
            <a
              href="mailto:shahbazansari.coder@gmail.com"
              onMouseEnter={() => setEmailHov(true)}
              onMouseLeave={() => setEmailHov(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "12px",
                color: emailHov ? "#2d7fff" : "rgba(255,255,255,0.38)",
                letterSpacing: "0.04em",
                textDecoration: "none",
                transition: "color 0.22s ease",
              }}
            >
              <MdOutlineEmail
                size={15}
                color={emailHov ? "#2d7fff" : "rgba(255,255,255,0.35)"}
                style={{ transition: "color 0.22s", flexShrink: 0 }}
              />
              shahbazansari.coder@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      {/* ─── Bottom Bar ─── */}
      <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 border-t border-white/10 px-5 py-4 sm:px-8 lg:px-[60px]">
        <p className="flex flex-1 items-center gap-2 text-sm font-mono tracking-wide text-white/50">
          <LuCopyright className="h-4 w-4 shrink-0" />

          <span className="whitespace-nowrap">{new Date().getFullYear()}</span>

          <span className="font-semibold text-primary whitespace-nowrap">
            Shahbaz Ansari.
          </span>

          <span className="text-white/40">All Rights Reserved.</span>
        </p>

        <div className="shrink-0">
          <ScrollToTop />
        </div>
      </div>

      <style>{`
        @keyframes ripple {
          0%   { box-shadow: 0 0 0 0 rgba(34,197,94,0.55); }
          70%  { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }
        @keyframes badgeSweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

        /* ── Desktop: show grid, hide mobile ── */
        @media (min-width: 1024px) {
          .desktop-footer-grid {
            display: grid !important;
          }
          .mobile-footer-content {
            display: none !important;
          }
        }

        /* ── Tablet/Mobile: show mobile, hide desktop grid ── */
        @media (max-width: 1023px) {
          .desktop-footer-grid {
            display: none !important;
          }
          .mobile-footer-content {
            display: block !important;
          }
        }

        @media (max-width: 380px) {
          .mobile-footer-content div[style*="gap: 16px"] { gap: 10px !important; }
        }
      `}</style>
    </footer>
  );
}
