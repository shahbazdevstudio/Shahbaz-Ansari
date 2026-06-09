import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

// ── IMAGE POOLS ──────────────────────────────────────────────────────────────
// Replace these with your actual project screenshots
const col1Images = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80",
  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=500&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80",
];
const col2Images = [
  "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
];
const col3Images = [
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80",
];
const col4Images = [
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=80",
  "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=500&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&q=80",
];

// ── SINGLE SCROLLING COLUMN ──────────────────────────────────────────────────
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
            key={i}
            className="w-full rounded-xl overflow-hidden border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex-shrink-0"
            style={{ aspectRatio: "9/6" }}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover brightness-[0.6] contrast-[1.1] saturate-[0.7]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ── STATS ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "50+", label: "Projects Done" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

// ── HERO SECTION ─────────────────────────────────────────────────────────────
const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center  text-white overflow-hidden">
      {/* ── ANIMATED 4-COLUMN GRID BACKGROUND ── */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
        style={{
          transform: "rotate(10deg) scale(1.5)",
          transformOrigin: "center center",
        }}
      >
        <div className="flex gap-4 w-full h-full" style={{ height: "130vh" }}>
          <ImageColumn images={col1Images} duration={30} direction="down" />
          <ImageColumn images={col2Images} duration={24} direction="up" />
          <ImageColumn images={col3Images} duration={34} direction="down" />
          <ImageColumn images={col4Images} duration={27} direction="up" />
        </div>
      </div>

      {/* ── OVERLAY GRADIENTS ── */}
      {/* Top & bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03040aa1] via-transparent to-[#03040a79] z-10 pointer-events-none" />
      {/* Side fades */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03040aa1] via-transparent to-[#03040a79] z-10 pointer-events-none" />
      {/* Center darkening vignette for text area */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 70% at 50% 50%, rgba(3, 4, 10, 0) 0%, transparent 100%)",
        }}
      />

      {/* ── BLUE AMBIENT GLOW ── */}
      <div className="absolute z-10 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-black/10 blur-[120px]" />
      <div className="absolute z-10 pointer-events-none top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-black/80 blur-[80px]" />

      {/* ── FOREGROUND CONTENT ── */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 mb-7 px-5 py-2 rounded-full bg-primary/8 border border-primary/20 backdrop-blur-md"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_2px_#2d7dffbc] animate-pulse" />
          <span className="text-primary/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Professional Web Developer
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.0] tracking-tight"
          style={{

            letterSpacing: "0.02em",
          }}
        >
          Shahbaz{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent block">
              Ansari
            </span>
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center gap-3"
        >
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-blue-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_2px_rgba(96,165,250,0.7)]" />
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-blue-500/60" />
        </motion.div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-7 text-white/45 text-base md:text-lg max-w-xl leading-relaxed font-light"
        >
          I design and develop modern websites, web apps, and digital
          experiences that help businesses grow, attract customers, and maximize
          conversions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/45 hover:-translate-y-1 flex items-center justify-center gap-2.5"
          >
            Start Project
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="#"
            className="group px-8 py-4 rounded-full border border-white/12 bg-white/4 hover:bg-white/8 hover:border-white/20 text-white/70 hover:text-white transition-all duration-300 font-semibold text-sm tracking-widest uppercase hover:-translate-y-1 flex items-center justify-center gap-2.5 backdrop-blur-sm"
          >
            <Play size={14} className="text-blue-400" />
            View Portfolio
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 flex items-center gap-8 md:gap-14"
        >
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              <div className="text-center">
                <div
                  className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  style={{ fontFamily: "'Bebas Neue', 'Anton', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-white/35 text-xs tracking-widest uppercase font-medium mt-0.5">
                  {s.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
