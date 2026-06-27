import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";

// ── IMAGE POOLS ───────────────────────────────────────────────────────────────
// Desktop: 4 cols (all arrays used) | Mobile: 2 cols (col1 + col2 only)
const col1Images = [
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=70", // Website Design
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=70", // Coding
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=70", // Web Development
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=70", // Responsive Design
];

const col2Images = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=70", // Dashboard UI
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&q=70", // Website Mockup
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=70", // Laptop Website
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=70", // Web Project
];

const col3Images = [
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=70", // UI Design
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=70", // Code Editor
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&q=70", // Programming
  "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=400&q=70", // Macbook Website
];

const col4Images = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=70", // Frontend Dev
  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=400&q=70", // Modern Website
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=70", // Team Project
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=70", // Web Agency
];

// ── STATS DATA ─────────────────────────────────────────────────────────────────
const STATS = [
  { value: "50+", label: "Projects Done" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

// ── IMAGE COLUMN ───────────────────────────────────────────────────────────────
// Each column renders images × 3 for a seamless infinite scroll loop.
const ImageColumn = ({ images, duration, direction }) => {
  const repeated = [...images, ...images, ...images];
  const animClass = direction === "down" ? "col-scroll-down" : "col-scroll-up";

  return (
    <div className="flex-1 overflow-hidden">
      <div
        className={`flex flex-col gap-3 ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {repeated.map((src, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 rounded-lg overflow-hidden border border-white/5"
            style={{ aspectRatio: "3/2" }}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              className="w-full h-full object-cover brightness-50 contrast-[1.1] saturate-75"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// ── HERO SECTION ───────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section
    className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden"
    aria-label="Hero — Shahbaz Ansari, Professional Web Developer"
  >

    {/* ── BG: Scrolling image grid ────────────────────────────────────────── */}
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none opacity-40"
      style={{
        transform: "rotate(10deg) scale(1.6)",
        transformOrigin: "center center",
      }}
    >
      <div className="flex gap-3 w-full h-full">
        {/* Always visible (mobile + desktop) */}
        <ImageColumn images={col1Images} duration={30} direction="down" />
        <ImageColumn images={col2Images} duration={24} direction="up" />

        {/* Desktop only — hidden on mobile to save render cost */}
        <div className="hidden md:contents">
          <ImageColumn images={col3Images} duration={34} direction="down" />
          <ImageColumn images={col4Images} duration={27} direction="up" />
        </div>
      </div>
    </div>

    {/* ── Overlay: edge fades (top/bottom + left/right) ───────────────────── */}
    <div
      aria-hidden="true"
      className="absolute inset-0 z-10 pointer-events-none"
      style={{
        background:
          "linear-gradient(to bottom, rgba(3, 4, 10, 0.301) 0%, transparent 35%, rgba(3, 4, 10, 0.295) 100%)," +
          "linear-gradient(to right,  rgba(3, 4, 10, 0.342) 0%, transparent 35%, rgba(3, 4, 10, 0.342) 100%)",
      }}
    />

    {/* ── Ambient dark glow behind text ───────────────────────────────────── */}
    <div
      aria-hidden="true"
      className="absolute z-10 pointer-events-none top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-black/75 blur-[90px]"
    />

    {/* ── Foreground content ──────────────────────────────────────────────── */}
    <div className="relative z-20 text-center max-w-5xl mx-auto px-6 flex flex-col items-center">
      {/* ── "Available" badge ── */}
      <div className="hero-badge inline-flex items-center gap-2.5 mt-6 mb-7 px-5 py-2 rounded-full bg-primary/8 border border-primary/20 backdrop-blur-md">
        <span
          className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
          style={{ boxShadow: "0 0 6px 2px #2d7dffbc" }}
        />
        <span className="text-primary/60 text-xs font-semibold tracking-[0.2em] uppercase">
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
      <p className="hero-para mt-7 text-white/45 text-base md:text-lg max-w-xl leading-relaxed font-light">
        I design and develop modern websites and web applications that help
        businesses grow, attract customers, and increase conversions.
      </p>

      {/* ── CTA Buttons ── */}
      <div className="hero-btns mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-sm tracking-widest uppercase shadow-lg shadow-blue-500/25 hover:shadow-blue-500/45 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2.5"
        >
          Start Project
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </a>

        <Link
          to="/projects"
          className="group px-8 py-4 rounded-full border border-white/12 bg-white/4 hover:bg-white/8 hover:border-white/20 text-white/70 hover:text-white hover:-translate-y-1 transition-all duration-300 font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-2.5 backdrop-blur-sm"
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

export default HeroSection;