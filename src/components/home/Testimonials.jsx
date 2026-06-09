// TestimonialsSection.jsx

import { useEffect, useRef } from "react";

const AVATAR_COLORS = [
  { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
  {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    text: "text-indigo-400",
  },
  { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400" },
  {
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-400",
  },
  { bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-400" },
];

const getColorClass = (name = "") =>
  AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];

const DUMMY_REVIEWS = [
  {
    _id: "1",
    name: "Arjun Mehta",
    createdAt: "2025-04-01",
    rating: 5,
    message:
      "Shahbaz delivered an absolutely stunning portfolio. The animations were silky smooth and the dark glassmorphism aesthetic was exactly what I wanted.",
  },
  {
    _id: "2",
    name: "Sara Khan",
    createdAt: "2025-05-01",
    rating: 5,
    message:
      "Working with Shahbaz was a fantastic experience. He understood my vision instantly and built a React dashboard that exceeded all my expectations. Clean code, great communication.",
  },
  {
    _id: "3",
    name: "Lucas Ferreira",
    createdAt: "2025-03-01",
    rating: 5,
    message:
      "The attention to detail in every component is remarkable. Framer Motion animations, responsive layout, everything pixel-perfect. Delivered ahead of schedule.",
  },
  {
    _id: "4",
    name: "Amna Rizvi",
    createdAt: "2025-05-20",
    rating: 5,
    message:
      "Professional, creative, and technically brilliant. My landing page conversion rate jumped 40% after Shahbaz rebuilt it. The UI is genuinely one of the best I've seen.",
  },
  {
    _id: "5",
    name: "David Osei",
    createdAt: "2025-01-10",
    rating: 5,
    message:
      "I've worked with many developers but Shahbaz stands out. His eye for design combined with solid React skills is rare. The dark theme he built for us is phenomenal.",
  },
  {
    _id: "6",
    name: "Fatima Zahra",
    createdAt: "2025-05-25",
    rating: 5,
    message:
      "Incredible work on our e-commerce frontend. Every hover state, every transition perfectly crafted. Our users have been loving the new experience.",
  },
  {
    _id: "7",
    name: "Noah Williams",
    createdAt: "2025-02-15",
    rating: 5,
    message:
      "Shahbaz rebuilt our entire component library in Tailwind. The system is clean, consistent, and our team is now shipping features twice as fast.",
  },
  {
    _id: "8",
    name: "Priya Sharma",
    createdAt: "2025-05-08",
    rating: 5,
    message:
      "Exceptional frontend work. The scroll-triggered animations on my portfolio are getting so many compliments from recruiters and hiring managers.",
  },
];

function ReviewCard({ review }) {
  const color = getColorClass(review.name);
  const initial = review.name?.charAt(0).toUpperCase() || "?";

  return (
    <div
      className="
      w-[300px] flex-shrink-0 rounded-2xl p-6
      bg-white/[0.03] border border-white/[0.07]
      hover:bg-[#2d7fff]/[0.06] hover:border-[#2d7fff]/25
      hover:-translate-y-0.5 transition-all duration-300
      relative overflow-hidden cursor-default
    "
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#6062ff]/40 to-transparent" />

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`
            w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
            ${color.bg} border ${color.border}
            font-cinzel font-semibold text-sm ${color.text}
          `}
          >
            {initial}
          </div>
          <div>
            <p className="font-oswald text-sm text-white tracking-wider leading-tight">
              {review.name}
            </p>
            <p className="font-mono text-[10px] text-white/30 mt-0.5 tracking-wide">
              2 months ago
            </p>
          </div>
        </div>

        {/* Google Icon */}
        <svg
          className="w-5 h-5 opacity-70 flex-shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.35 11.1H12v2.98h5.35C16.8 16.2 14.67 17.6 12 17.6c-3.09 0-5.6-2.51-5.6-5.6s2.51-5.6 5.6-5.6c1.47 0 2.8.56 3.81 1.48l2.11-2.11C16.38 4.38 14.32 3.5 12 3.5 7.31 3.5 3.5 7.31 3.5 12s3.81 8.5 8.5 8.5c4.9 0 8.15-3.44 8.15-8.28 0-.56-.06-1.09-.15-1.62z"
            fill="#4285f4"
          />
        </svg>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-sm ${i < review.rating ? "text-[#2d7fff]" : "text-white/15"}`}
          >
            ★
          </span>
        ))}
        <span className="ml-2 text-[#6062ff]">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6.4 13l1.5-1.5 2.2 2.2 4.8-4.8 1.5 1.5-6.3 6.3z" />
          </svg>
        </span>
      </div>

      {/* Text */}
      <p className="font-mono text-[11px] text-white/50 leading-relaxed tracking-wide">
        <span className="text-2xl text-[#2d7fff]/40 font-serif leading-none align-[-6px] mr-0.5">
          "
        </span>
        {review.message}"
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  const row1 = [...DUMMY_REVIEWS, ...DUMMY_REVIEWS];
  const row2 = [
    ...DUMMY_REVIEWS.slice(3),
    ...DUMMY_REVIEWS.slice(0, 3),
    ...DUMMY_REVIEWS.slice(3),
    ...DUMMY_REVIEWS.slice(0, 3),
  ];

  return (
    <section className="bg-black py-20 w-full overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(45,127,255,0.08),transparent)] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-14 px-4">
        <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#2d7fff] mb-4">
          // testimonials
        </p>
        <h2 className="font-cinzel text-4xl md:text-5xl font-normal text-white mb-4 leading-tight">
          What <span className="text-[#6062ff]">Clients</span> Say
        </h2>
        <p className="font-mono text-xs text-white/35 max-w-md mx-auto leading-relaxed tracking-wide">
          A selection of kind words from people I've had the pleasure of working
          with.
        </p>
      </div>

      {/* Scrolling Rows */}
      <div className="flex flex-col gap-6">
        {/* Row 1 — left scroll */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 w-max animate-scroll-left hover:[animation-play-state:paused]">
            {row1.map((r, i) => (
              <ReviewCard key={`r1-${i}`} review={r} />
            ))}
          </div>
        </div>

        {/* Row 2 — right scroll */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 w-max animate-scroll-right hover:[animation-play-state:paused]">
            {row2.map((r, i) => (
              <ReviewCard key={`r2-${i}`} review={r} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex items-center justify-center gap-12 mt-14 flex-wrap px-4">
        {[
          ["50+", "Projects Shipped"],
          ["5.0", "Avg. Rating"],
          ["3yr", "Experience"],
        ].map(([num, label], i) => (
          <>
            {i > 0 && (
              <div key={`div-${i}`} className="w-px h-10 bg-white/10" />
            )}
            <div key={label} className="text-center">
              <div className="font-cinzel text-3xl font-semibold text-[#2d7fff]">
                {num}
              </div>
              <div className="font-mono text-[10px] text-white/35 tracking-[0.12em] uppercase mt-2">
                {label}
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
