import { useEffect, useRef, useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";

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
          right: "-100px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(96,98,255,0.10) 0%,transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "20%",
          width: "280px",
          height: "280px",
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
          backgroundImage: `linear-gradient(rgba(45,127,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.025) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diamond — bottom-left */}
      <img
        src="/icons/diamond.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "72px",
          left: "4.5%",
          opacity: 0.05,
          animation: "floatB 9s ease-in-out infinite",
        }}
        width="84"
        height="84"
        alt="diamond"
      />

      {/* Dashed ring + orbit dots — left mid */}
      <img
        src="/icons/rings.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "35%",
          left: "-46px",
          opacity: 0.2,
          animation: "floatA 14s ease-in-out infinite reverse",
        }}
        width="150"
        height="150"
        alt="ring"
      />

      {/* Dot cluster — right */}
      <img
        src="/icons/dots.svg"
        className="hidden xl:block"
        style={{ position: "absolute", top: "28%", right: "1%", opacity: 0.2 }}
        width="68"
        height="112"
        alt="dots"
      />

      {/* Plus — top-left area */}
      <img
        src="/icons/plus-accent.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          opacity: 0.1,
          animation: "floatB 8s ease-in-out infinite 1s",
        }}
        width="34"
        height="34"
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
          opacity: 0.1,
          animation: "floatA 10s ease-in-out infinite 2s",
        }}
        width="56"
        height="56"
        alt="triangle"
      />
    </div>
  );
}

// ─── Stat Badge ───────────────────────────────────────────────────────────────

function StatBadge({ value, label, delay, visible }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: "1 1 120px",
        padding: "18px 14px",
        borderRadius: "14px",
        textAlign: "center",
        cursor: "default",
        border: `1px solid ${hov ? "rgba(45,127,255,0.30)" : "rgba(255,255,255,0.07)"}`,
        background: hov ? "rgba(45,127,255,0.06)" : "rgba(255,255,255,0.025)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.4s ease ${delay}s, border-color 0.3s, background 0.3s`,
      }}
    >
      <p
        style={{
          fontSize: "clamp(22px,2.8vw,34px)",
          fontWeight: 600,
          background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: "0 0 4px 0",
        }}
      >
        {value}
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
        {label}
      </p>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicesHeroSection() {
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
      id="services-hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding:
          "clamp(100px,12vw,150px) clamp(20px,5%,60px) clamp(80px,10vw,120px)",
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
            maxWidth: "780px",
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
            // what i offer
          </p>

          <h1
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(36px,6vw,72px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 8px 0",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Services Built
          </h1>
          <h1
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(36px,6vw,72px)",
              fontWeight: 400,
              margin: "0 0 28px 0",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            For Results.
          </h1>

          <p
            style={{
              fontWeight: 300,
              fontSize: "clamp(15px,1.5vw,13px)",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.40)",
              letterSpacing: "0.025em",
              margin: "0 auto 40px",
              maxWidth: "560px",
            }}
          >
            From landing pages to full-stack web applications, I build fast,
            scalable, and user-focused digital products that help businesses
            grow online.
          </p>

          {/* CTA row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            <a
              href="#services-list"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "100px",
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                boxShadow: "0 4px 24px rgba(45,127,255,0.28)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(45,127,255,0.42)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(45,127,255,0.28)";
              }}
            >
              Explore Services
              <HiArrowSmallRight size={18} />
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                backdropFilter: "blur(8px)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.20)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
              }}
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* ── Divider with label ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            margin: "clamp(56px,7vw,80px) 0 clamp(40px,5vw,56px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition: "all 0.7s ease 0.45s",
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
              fontSize: "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(45, 125, 255, 0.65)",
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

        {/* ── Stats strip ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.5s",
          }}
        >
          <StatBadge
            value="5+"
            label="Years Experience"
            delay={0.62}
            visible={visible}
          />
          <StatBadge
            value="50+"
            label="Projects Delivered"
            delay={0.55}
            visible={visible}
          />
          <StatBadge
            value="35+"
            label="Happy Clients"
            delay={0.69}
            visible={visible}
          />
          <StatBadge
            value="100%"
            label="On-Time Delivery"
            delay={0.76}
            visible={visible}
          />
        </div>
      </div>
    </section>
  );
}
