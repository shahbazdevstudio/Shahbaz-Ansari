import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";

// ── IMAGE POOLS ──────────────────────────────────────────────────────────────
const col1Images = [
  "/hero-images/bg-1.jpg",
  "/hero-images/bg-2.jpg",
  "/hero-images/bg-3.jpg",
  "/hero-images/bg-4.jpg",
];

const col2Images = [
  "/hero-images/bg-5.jpg",
  "/hero-images/bg-6.jpg",
  "/hero-images/bg-7.jpg",
  "/hero-images/bg-8.jpg",
];

const col3Images = [
  "/hero-images/bg-9.jpg",
  "/hero-images/bg-10.jpg",
  "/hero-images/bg-11.jpg",
  "/hero-images/bg-12.png",
];

const col4Images = [
  "/hero-images/bg-13.jpg",
  "/hero-images/bg-14.jpg",
  "/hero-images/bg-15.jpg",
  "/hero-images/bg-16.jpg",
];

// ── STATS ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "50+", label: "Projects Done" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];
// ── IMAGE COLUMN COMPONENT ──────────────────────────────────────────────────
const ImageColumn = ({ images, duration = 28, direction = "down" }) => {
  const repeated = [...images, ...images, ...images];

  return (
    <div className="relative overflow-hidden flex-1 min-h-[100vh]">
      <motion.div
        className="flex flex-col gap-4"
        animate={
          direction === "down"
            ? { y: ["0%", "-33.33%"] }
            : { y: ["-33.33%", "0%"] }
        }
        transition={{
          ease: "linear",
          duration,
          repeat: Infinity,
        }}
      >
        {repeated.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="w-full rounded-xl overflow-hidden border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex-shrink-0"
            style={{ aspectRatio: "9/6" }}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover brightness-[0.8] contrast-[1.1] saturate-[0.7]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ── HERO SECTION ─────────────────────────────────────────────────────────────
const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* ── ANIMATED BACKGROUND GRID ── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
        style={{
          transform: "rotate(10deg) scale(1.5)",
          transformOrigin: "center center",
        }}
      >
        <div className="flex gap-4 w-full h-full" style={{ height: "130vh" }}>
          {/* Column 1 - Always visible */}
          <div className="flex-1 min-w-0">
            <ImageColumn images={col1Images} duration={30} direction="down" />
          </div>

          {/* Column 2 - Always visible */}
          <div className="flex-1 min-w-0">
            <ImageColumn images={col2Images} duration={24} direction="up" />
          </div>

          {/* Column 3 - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:flex flex-1 min-w-0">
            <ImageColumn images={col3Images} duration={34} direction="down" />
          </div>

          {/* Column 4 - Hidden on tablet, visible on desktop */}
          <div className="hidden lg:flex flex-1 min-w-0">
            <ImageColumn images={col4Images} duration={27} direction="up" />
          </div>
        </div>
      </div>

      {/* ── OVERLAY GRADIENTS ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03040a9c] via-transparent to-[#03040a9c] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#03040a9c] via-transparent to-[#03040a9c] z-10 pointer-events-none" />

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 70% at 50% 50%, rgba(3, 4, 10, 0) 0%, transparent 100%)",
        }}
      />

      {/* ── AMBIENT GLOW ── */}
      <div className="absolute z-10 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-black/10 blur-[120px]" />
      <div className="absolute z-10 pointer-events-none top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-black/80 blur-[80px]" />

      {/* ── Foreground content ──────────────────────────────────────────────── */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* ── "Available" badge ── */}
        <div className="hero-badge inline-flex items-center  lg:mt-10 gap-2.5 mt-6 mb-7 px-5 py-2 rounded-full bg-primary/8 border border-primary/20 backdrop-blur-md">
          <span
            className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
            style={{ boxShadow: "0 0 6px 2px #2d7dffbc" }}
          />
          <span className="text-primary/60 text-[10px]  md:text-xs font-semibold tracking-[0.2em] uppercase">
            Professional Web Developer
          </span>
        </div>

        {/* ── Main heading — SEO: h1, clear name + role ── */}
        <h1
          className="hero-h1 text-7xl md:text-7xl lg:text-8xl font-black uppercase sm:leading-tight font-oswald"
          style={{ letterSpacing: "0.02em" }}
        >
          Shahbaz{" "}
          <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent block">
            Ansari
          </span>
        </h1>

        {/* ── Decorative divider ── */}
        <div className="hero-divider mt-8 flex items-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/60" />
          <div
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
            style={{ boxShadow: "0 0 6px 2px rgba(96,165,250,.7)" }}
          />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500/60" />
        </div>

        {/* ── Description — SEO: keyword-rich, descriptive ── */}
        <p className="hero-para text-sm mt-7 text-white/45 md:text-base md:text-lg max-w-xl leading-relaxed font-light">
          I design and develop modern websites and web applications that help
          businesses grow, attract customers, and increase conversions.
        </p>

        {/* ── CTA Buttons ── */}
        <div className="hero-btns mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="group py-3 px-8 text-[12px] md:px-8 md:py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold lg:text-sm tracking-widest uppercase shadow-lg shadow-blue-500/25 hover:shadow-blue-500/45 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            Start Project
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>

          <Link
            to="/projects"
            className="group py-3 px-8 text-[12px] md:px-8 md:py-4 lg:text-sm rounded-full border border-white/12 bg-white/4 hover:bg-white/8 hover:border-white/20 text-white/70 hover:text-white hover:-translate-y-1 transition-all duration-300 font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2.5 backdrop-blur-sm"
          >
            <Play size={14} className="text-blue-400" />
            View Portfolio
          </Link>
        </div>

        {/* ── Stats — desktop only ── */}
        <div className="hero-stats mt-16 hidden lg:flex items-center gap-10 xl:gap-14">
          {STATS.map((s, i) => (
            <React.Fragment key={s.label}>
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-white/35 text-xs tracking-widest uppercase font-medium mt-1">
                  {s.label}
                </div>
              </div>
              {i < STATS.length - 1 && (
                <div className="w-px h-10 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;