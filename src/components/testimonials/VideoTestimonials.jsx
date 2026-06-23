/**
 * VideoTestimonials.jsx
 * Optimised video testimonials — lazy load, poster thumbnails, no autoplay.
 * Zero external dependencies beyond React.
 */

import { useEffect, useRef, useState, useCallback, memo } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const VIDEO_TESTIMONIALS = [
  {
    id: "v1",
    name: "Sarah Mitchell",
    title: "Product Manager, SaaS Co.",
    // Replace src with your actual video URLs (MP4 recommended for performance)
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://i.pravatar.cc/600?img=47",
    rating: 5,
    duration: "0:42",
    tag: "Full-Stack App",
  },
  {
    id: "v2",
    name: "Arjun Mehta",
    title: "Founder, E-Commerce Brand",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "https://i.pravatar.cc/600?img=68",
    rating: 5,
    duration: "0:38",
    tag: "Landing Page",
  },
  {
    id: "v3",
    name: "Emily Torres",
    title: "CEO, Marketplace Startup",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    poster: "https://i.pravatar.cc/600?img=32",
    rating: 5,
    duration: "0:55",
    tag: "UI Redesign",
  },
  {
    id: "v4",
    name: "Daniel Park",
    title: "CTO, FinTech Startup",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    poster: "https://i.pravatar.cc/600?img=60",
    rating: 5,
    duration: "1:02",
    tag: "API + Backend",
  },
  {
    id: "v5",
    name: "Nadia Al-Hassan",
    title: "Director, Digital Agency",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    poster: "https://i.pravatar.cc/600?img=25",
    rating: 5,
    duration: "0:47",
    tag: "Full-Stack App",
  },
  {
    id: "v6",
    name: "Lucas Brennan",
    title: "Freelance Client",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    poster: "https://i.pravatar.cc/600?img=51",
    rating: 5,
    duration: "0:33",
    tag: "React UI",
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
          top: "-80px",
          left: "-110px",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(45,127,255,0.09) 0%,transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-100px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(96,98,255,0.09) 0%,transparent 62%)",
          filter: "blur(50px)",
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(45,127,255,0.020) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.020) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Film strip lines — top-right (video motif) */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "44px",
          right: "5.5%",
          opacity: 0.1,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="72"
        height="100"
        viewBox="0 0 72 100"
        fill="none"
      >
        <defs>
          <linearGradient id="vfg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <rect
          x="2"
          y="2"
          width="68"
          height="96"
          rx="6"
          stroke="url(#vfg)"
          strokeWidth="1.5"
          fill="rgba(45,127,255,0.03)"
        />
        {[8, 24, 40, 56, 72, 88].map((y, i) => (
          <rect
            key={i}
            x="8"
            y={y}
            width="12"
            height="8"
            rx="2"
            fill="url(#vfg)"
            fillOpacity="0.5"
          />
        ))}
        {[8, 24, 40, 56, 72, 88].map((y, i) => (
          <rect
            key={`r${i}`}
            x="52"
            y={y}
            width="12"
            height="8"
            rx="2"
            fill="url(#vfg)"
            fillOpacity="0.5"
          />
        ))}
      </svg>

      {/* Play button outline — bottom-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "68px",
          left: "5%",
          opacity: 0.09,
          animation: "floatB 11s ease-in-out infinite",
        }}
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <defs>
          <linearGradient id="vpg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6062ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d7fff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <circle cx="36" cy="36" r="34" stroke="url(#vpg)" strokeWidth="1.5" />
        <polygon
          points="28,22 28,50 54,36"
          fill="url(#vpg)"
          fillOpacity="0.6"
        />
      </svg>

      {/* Dashed ring — left mid */}
      <svg
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "32%",
          left: "-46px",
          opacity: 0.11,
          animation: "floatA 14s ease-in-out infinite reverse",
        }}
        width="148"
        height="148"
        viewBox="0 0 148 148"
        fill="none"
      >
        <defs>
          <linearGradient id="vrrg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" />
            <stop offset="100%" stopColor="#6062ff" />
          </linearGradient>
        </defs>
        <circle
          cx="74"
          cy="74"
          r="70"
          stroke="url(#vrrg)"
          strokeWidth="1.4"
          strokeDasharray="8 5"
        />
        <circle
          cx="74"
          cy="74"
          r="48"
          stroke="#2d7fff"
          strokeWidth="0.7"
          strokeOpacity="0.28"
        />
        <circle cx="74" cy="4" r="4" fill="#2d7fff" />
        <circle cx="144" cy="74" r="4" fill="#6062ff" />
      </svg>

      {/* Dot cluster — right */}
      <svg
        className="hidden xl:block"
        style={{ position: "absolute", top: "24%", right: "1%", opacity: 0.09 }}
        width="68"
        height="112"
        viewBox="0 0 68 112"
        fill="none"
      >
        <defs>
          <linearGradient id="vdtg" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#vdtg)"
              opacity={1 - i * 0.12}
            />
          )),
        )}
      </svg>

      {/* Diamond — bottom-right */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "14%",
          right: "8%",
          opacity: 0.08,
          animation: "floatB 10s ease-in-out infinite 1s",
        }}
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
      >
        <defs>
          <linearGradient id="vdmg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2d7fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6062ff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect
          x="32"
          y="3"
          width="43"
          height="43"
          rx="4"
          transform="rotate(45 32 3)"
          fill="url(#vdmg)"
        />
      </svg>

      {/* Plus — top-left */}
      <svg
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "14%",
          left: "8%",
          opacity: 0.08,
          animation: "floatA 7s ease-in-out infinite 0.5s",
        }}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect x="12" y="0" width="8" height="32" rx="4" fill="#2d7fff" />
        <rect x="0" y="12" width="32" height="8" rx="4" fill="#6062ff" />
      </svg>
    </div>
  );
}

// ─── Video Card — memoised + lazy ─────────────────────────────────────────────

const VideoCard = memo(function VideoCard({ video, index, sectionVisible }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(true);

  // Lazy-load: only set src when card enters viewport
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && videoRef.current && !videoRef.current.src) {
          videoRef.current.src = video.src;
        }
      },
      { rootMargin: "200px", threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [video.src]);

  // Pause when card leaves viewport (save CPU)
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting && videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const onTimeUpdate = useCallback(() => {
    const v = videoRef.current;
    if (v && v.duration) setProgress((v.currentTime / v.duration) * 100);
  }, []);

  const onEnded = useCallback(() => {
    setPlaying(false);
    setProgress(0);
  }, []);

  const onScrub = useCallback((e) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = pct * v.duration;
    setProgress(pct * 100);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "18px",
        overflow: "hidden",
        position: "relative",
        border: `1px solid ${hovered ? "rgba(45,127,255,0.30)" : "rgba(255,255,255,0.07)"}`,
        background: "#000",
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${0.08 + index * 0.07}s, transform 0.5s ease ${0.08 + index * 0.07}s, border-color 0.3s`,
        boxShadow: hovered ? "0 20px 60px rgba(45,127,255,0.10)" : "none",
      }}
    >
      {/* Top shimmer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "14px",
          right: "14px",
          height: "1px",
          zIndex: 10,
          background: hovered
            ? "linear-gradient(90deg,transparent,rgba(45,127,255,0.55),transparent)"
            : "linear-gradient(90deg,transparent,rgba(45,127,255,0.20),transparent)",
          transition: "all 0.4s",
        }}
      />

      {/* Video */}
      <div
        style={{
          position: "relative",
          aspectRatio: "9/13",
          background: "#0a0a0a",
          cursor: "pointer",
        }}
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          poster={video.poster}
          muted={muted}
          playsInline
          preload="none"
          onTimeUpdate={onTimeUpdate}
          onEnded={onEnded}
          onCanPlay={() => setLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "filter 0.4s ease",
            filter: playing ? "brightness(1)" : "brightness(0.70)",
          }}
        />

        {/* Dark overlay when paused */}
        {!playing && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
            }}
          />
        )}

        {/* Duration badge */}
        {!playing && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              zIndex: 4,
              padding: "3px 9px",
              borderRadius: "100px",
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.10)",
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "9px",
              color: "rgba(255,255,255,0.60)",
              letterSpacing: "0.08em",
            }}
          >
            {video.duration}
          </div>
        )}

        {/* Tag badge */}
        {!playing && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              zIndex: 4,
              padding: "3px 10px",
              borderRadius: "100px",
              background: "rgba(45,127,255,0.18)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(45,127,255,0.30)",
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "9px",
              color: "rgba(255,255,255,0.70)",
              letterSpacing: "0.08em",
            }}
          >
            {video.tag}
          </div>
        )}

        {/* Play / Pause button */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5,
            opacity: playing ? (hovered ? 1 : 0) : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: playing
                ? "rgba(0,0,0,0.55)"
                : "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${playing ? "rgba(255,255,255,0.20)" : "rgba(45,127,255,0.50)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
              boxShadow: playing ? "none" : "0 8px 28px rgba(45,127,255,0.35)",
            }}
          >
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                style={{ marginLeft: "2px" }}
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </div>
        </div>

        {/* Progress bar — always at bottom of video */}
        <div
          onClick={(e) => e.stopPropagation()}
          onMouseDown={onScrub}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "rgba(255,255,255,0.12)",
            cursor: "pointer",
            zIndex: 6,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(90deg,#2d7fff,#6062ff)",
              transition: "width 0.1s linear",
              boxShadow: playing ? "0 0 6px rgba(45,127,255,0.60)" : "none",
            }}
          />
        </div>
      </div>

      {/* Card info */}
      <div style={{ padding: "14px 16px 16px", position: "relative" }}>
        {/* Stars */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            marginBottom: "8px",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="#f4b400"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Name */}
        <p
          style={{
            fontFamily: "'Oswald',sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#fff",
            margin: "0 0 2px 0",
          }}
        >
          {video.name}
        </p>
        <p
          style={{
            fontFamily: "'Roboto Mono',monospace",
            fontSize: "10px",
            color: "rgba(255,255,255,0.28)",
            margin: "0 0 12px 0",
          }}
        >
          {video.title}
        </p>

        {/* Thin gradient divider */}
        <div
          style={{
            height: "1px",
            marginBottom: "12px",
            background:
              "linear-gradient(90deg,rgba(45,127,255,0.25),rgba(96,98,255,0.10),transparent)",
          }}
        />

        {/* Mute toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMuted((m) => !m);
            if (videoRef.current) videoRef.current.muted = !muted;
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <div
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "8px",
              background: muted
                ? "rgba(255,255,255,0.05)"
                : "rgba(45,127,255,0.12)",
              border: `1px solid ${muted ? "rgba(255,255,255,0.10)" : "rgba(45,127,255,0.30)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s",
              color: muted ? "rgba(255,255,255,0.35)" : "#2d7fff",
            }}
          >
            {muted ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            )}
          </div>
          <span
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "10px",
              color: muted ? "rgba(255,255,255,0.28)" : "rgba(45,127,255,0.80)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "color 0.25s",
            }}
          >
            {muted ? "Unmute" : "Muted off"}
          </span>
        </button>
      </div>
    </div>
  );
});

// ─── Main Component ───────────────────────────────────────────────────────────

export default function VideoTestimonials() {
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
      id="video-testimonials"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding: "clamp(80px,10vw,120px) clamp(20px,5%,60px)",
      }}
    >
      <FloatingShapes />

      <div
        style={{ position: "relative", maxWidth: "1140px", margin: "0 auto" }}
      >
        {/* ── Header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px,5vw,60px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.05s",
          }}
        >
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "11px",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "#2d7fff",
              margin: "0 0 10px 0",
            }}
          >
            // video testimonials
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(30px,4.5vw,50px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 14px 0",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Hear It{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Directly.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "13px",
              color: "rgba(255,255,255,0.28)",
              maxWidth: "400px",
              margin: "0 auto",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            Unscripted, unedited video reviews from clients across the globe.
          </p>
        </div>

        {/* ── Grid ── */}
        <div
          className="vt-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "14px" }}
        >
          {VIDEO_TESTIMONIALS.map((video, i) => (
            <VideoCard
              key={video.id}
              video={video}
              index={i}
              sectionVisible={visible}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: "clamp(40px,5vw,60px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(14px)",
            transition: "all 0.7s ease 0.55s",
          }}
        >
          <p
            style={{
              fontFamily: "'Roboto Mono',monospace",
              fontSize: "11px",
              color: "rgba(255,255,255,0.25)",
              marginBottom: "16px",
              letterSpacing: "0.04em",
            }}
          >
            Want to be featured here?
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 32px",
              borderRadius: "100px",
              background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
              color: "#fff",
              textDecoration: "none",
              fontFamily: "'Oswald',sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              boxShadow: "0 4px 22px rgba(45,127,255,0.28)",
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
                "0 4px 22px rgba(45,127,255,0.28)";
            }}
          >
            Work With Me
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @media(min-width:480px){ .vt-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(min-width:900px){ .vt-grid{ grid-template-columns:repeat(3,1fr) !important; } }
        @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(-5deg)}}
        @media(prefers-reduced-motion:reduce){*{animation:none!important}}
        video::-webkit-media-controls{ display:none !important; }
        video::-webkit-media-controls-enclosure{ display:none !important; }
      `}</style>
    </section>
  );
}
