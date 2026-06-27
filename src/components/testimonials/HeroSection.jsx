import { useEffect, useRef, useState } from "react";
import { LiaStarSolid } from "react-icons/lia";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "50+", label: "Projects Delivered", icon: "◈" },
  { value: "35+", label: "Happy Clients", icon: "◈" },
  { value: "5.0", label: "Average Rating", icon: "★" },
  { value: "100%", label: "Client Satisfaction", icon: "◈" },
];

const PLATFORMS = [
  {
    name: "Google",
    logo: "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
    filled: true,
  },
  {
    name: "Fiverr",
    logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg",
    filled: true,
  },
  {
    name: "Upwork",
    logo: "https://cdn.worldvectorlogo.com/logos/upwork-2.svg",
    filled: true,
  },
  {
    name: "LinkedIn",
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    filled: true,
  },
];

// ─── Floating Shapes (unique — star / quote motif) ────────────────────────────

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
          top: "-110px",
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
          top: "42%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "240px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse,rgba(45,127,255,0.04) 0%,transparent 70%)",
          filter: "blur(60px)",
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

      {/* 4-point star — top-right */}
      <img
        src="/icons/star-cross.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "148px",
          right: "5.5%",
          opacity: 0.13,
          animation: "floatA 8s ease-in-out infinite",
        }}
        width="80"
        height="80"
        alt="star"
      />

      {/* Dashed ring + 3 orbit dots — left mid */}
      <img
        src="/icons/rings.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "30%",
          left: "-48px",
          opacity: 0.13,
          animation: "floatA 14s ease-in-out infinite reverse",
        }}
        width="156"
        height="156"
        alt="ring"
      />

      {/* 6-point star — bottom-left */}
      <img
        src="/icons/star-cross.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "128px",
          left: "6%",
          opacity: 0.15,
          animation: "floatB 9s ease-in-out infinite 1s",
        }}
        width="54"
        height="54"
        alt="star"
      />

      {/* Gradient dot cluster — right */}
      <img
        src="/icons/dots.svg"
        className="hidden xl:block"
        style={{ position: "absolute", top: "24%", right: "1%", opacity: 0.11 }}
        width="68"
        height="112"
        alt="dots"
      />

      {/* Plus — top-left inner */}
      <img
        src="/icons/plus-accent.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "16%",
          left: "14%",
          opacity: 0.08,
          animation: "floatA 7s ease-in-out infinite 0.5s",
        }}
        width="52"
        height="52"
        alt="plus"
      />

      {/* Triangle — bottom-right */}
      <img
        src="/icons/triangle-accent.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "14%",
          right: "8%",
          opacity: 0.09,
          animation: "floatB 11s ease-in-out infinite 2s",
        }}
        width="66"
        height="66"
        alt="triangle"
      />
    </div>
  );
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({ stat, index, visible }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: "1 1 130px",
        padding: "22px 18px",
        borderRadius: "16px",
        textAlign: "center",
        cursor: "default",
        border: `1px solid ${hov ? "rgba(45,127,255,0.30)" : "rgba(255,255,255,0.07)"}`,
        background: hov ? "rgba(45,127,255,0.06)" : "rgba(255,255,255,0.025)",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${0.45 + index * 0.08}s, transform 0.4s ease ${0.45 + index * 0.08}s, border-color 0.3s, background 0.3s`,
      }}
    >
      {/* Top shimmer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "12px",
          right: "12px",
          height: "1px",
          background: hov
            ? "linear-gradient(90deg,transparent,rgba(45,127,255,0.50),transparent)"
            : "linear-gradient(90deg,transparent,rgba(45,127,255,0.18),transparent)",
          transition: "all 0.4s",
        }}
      />
      <p
        style={{
          fontSize: "clamp(26px,3.2vw,30px)",
          fontWeight: 600,
          background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: "0 0 4px 0",
        }}
      >
        {stat.value}
      </p>
      <p
        style={{
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "10px",
          color: "rgba(255,255,255,0.28)",
          margin: 0,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TestimonialsHeroSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="testimonials-hero"
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
            // client stories
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
            Real Words From
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
            Real Clients.
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
            Feedback from clients I've worked with on freelance platforms and
            direct projects. Their experience, in their own words.
          </p>

          {/* Star row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              marginBottom: "28px",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <LiaStarSolid size={22} color="#f4b400" />
            ))}
            <span
              style={{
                fontSize: "18px",
                fontWeight: 400,
                color: "#fff",
                marginLeft: "10px",
              }}
            >
              5.0
            </span>
            <span
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.30)",
                marginLeft: "6px",
              }}
            >
              / 5.0 average
            </span>
          </div>

          {/* Platform badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {PLATFORMS.map((p) => (
              <div
                key={p.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "7px 16px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{
                    width: "16px",
                    height: "16px",
                    objectFit: "contain",
                    opacity: 0.75,
                  }}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <span
                  style={{
                    fontFamily: "'Roboto Mono',monospace",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {p.name}
                </span>
              </div>
            ))}
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
            transition: "all 0.7s ease 0.42s",
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
              color: "rgba(45,127,255,0.65)",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            by the numbers
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

        {/* ── Stats ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}