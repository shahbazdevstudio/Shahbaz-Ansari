/**
 * TestimonialsSwiper.jsx  — Component 2 / 3
 * Coverflow Swiper carousel + featured large review card.
 * Dependency: npm install swiper
 */

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LiaStarSolid } from "react-icons/lia";

// ─── Data ─────────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    _id: "1",
    name: "Adeel Khan",
    title: "Startup Owner",
    profilePic: "/reviews-pfp/person-1.png",
    rating: 5,
    createdAt: "2025-11-10",
    platform: "fiverr",
    message:
      "I needed a clean website for my startup and Shahbaz understood the requirements quickly. Communication was easy throughout the project, and the final website was delivered on time. Happy with how everything turned out.",
  },
  {
    _id: "2",
    name: "Usman Tariq",
    title: "Online Store Owner",
    profilePic: "/reviews-pfp/person-2.png",
    rating: 5,
    createdAt: "2025-09-22",
    platform: "google",
    message:
      "The website looks clean and works well on mobile, which was important for my customers. Shahbaz also handled a few changes after delivery without making things complicated. Overall, a good experience.",
  },
  {
    _id: "3",
    name: "Ayesha Malik",
    title: "Business Founder",
    profilePic: "/reviews-pfp/person-3.png",
    rating: 5,
    createdAt: "2025-08-05",
    platform: "upwork",
    message:
      "We worked together on the frontend for a dashboard project. The work was completed before the deadline and the code was organised, which made it easier for our backend developer to continue with the project.",
  },
  {
    _id: "4",
    name: "Hamza Qureshi",
    title: "Small Business Owner",
    profilePic: "/reviews-pfp/person-4.png",
    rating: 5,
    createdAt: "2025-06-18",
    platform: "google",
    message:
      "Our previous website was old and difficult to use. Shahbaz redesigned it with a much cleaner layout and also improved the overall performance. The new version feels more professional and easier to navigate.",
  },
  {
    _id: "5",
    name: "Bilal Ahmed",
    title: "Creative Agency Owner",
    profilePic: "/reviews-pfp/person-5.png",
    rating: 5,
    createdAt: "2025-04-30",
    platform: "linkedin",
    message:
      "Easy to work with Shahbaz. He understood the feedback we shared during the project, and the final website matched what we were looking for. Would be happy to work together again.",
  },
  {
    _id: "6",
    name: "Michael Roberts",
    title: "Fitness Coach",
    profilePic: "/reviews-pfp/person-6.png",
    rating: 5,
    createdAt: "2025-02-14",
    platform: "fiverr",
    message:
      "I needed a simple website to present my services and give people an easy way to contact me. Shahbaz delivered everything on time and made sure the site worked properly on both desktop and mobile.",
  },
  {
    _id: "7",
    name: "Ryan Mitchell",
    title: "SaaS Founder",
    profilePic: "/reviews-pfp/person-7.png",
    rating: 5,
    createdAt: "2025-01-08",
    platform: "upwork",
    message:
      "Shahbaz helped us with the frontend side of our web application. He was responsive, followed the requirements carefully, and delivered the requested features without unnecessary delays. Good quality work.",
  },
  {
    _id: "8",
    name: "Neha Kapoor",
    title: "Marketing Consultant",
    profilePic: "/reviews-pfp/person-8.png",
    rating: 5,
    createdAt: "2024-12-17",
    platform: "google",
    message:
      "I wanted a website that looked professional without being overly complicated. The final design was clean, responsive, and easy to use. I especially liked how well it looks on mobile devices.",
  },
];

const PLATFORM_ICONS = {
  google: "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
  fiverr: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg",
  upwork: "https://cdn.worldvectorlogo.com/logos/upwork-2.svg",
  linkedin: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
};

const INIT_COLORS = [
  "#2d7fff",
  "#6062ff",
  "#38bdf8",
  "#a78bfa",
  "#34d399",
  "#fb923c",
];
const getInitColor = (name = "") =>
  INIT_COLORS[name.charCodeAt(0) % INIT_COLORS.length];
const timeAgo = (dateStr) => {
  const days = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
  if (days < 30) return `${days || 1}d ago`;
  const m = Math.floor(days / 30);
  if (m < 12) return `${m}mo ago`;
  return `${Math.floor(m / 12)}y ago`;
};

// ─── Floating Shapes ──────────────────────────────────────────────────────────

function FloatingShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-110px",
          width: "460px",
          height: "460px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(96,98,255,0.09) 0%,transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          right: "-100px",
          width: "440px",
          height: "440px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(45,127,255,0.09) 0%,transparent 62%)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(45,127,255,0.020) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.020) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hexagon — top-right */}
      <img
        src="/icons/geometric-shape.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: "44px",
          right: "5%",
          opacity: 0.05,
          animation: "floatA 9s ease-in-out infinite",
        }}
        width="96"
        height="96"
        alt="geometric"
      />

      {/* Concentric rings — left */}
      <img
        src="/icons/code-brackets.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "2%",
          left: "46px",
          opacity: 0.4,
          animation: "floatA 13s ease-in-out infinite reverse",
        }}
        width="88"
        height="88"
        alt="ring"
      />

      {/* Diamond — bottom-right */}
      <img
        src="/icons/diamond.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "134px",
          right: "7%",
          opacity: 0.05,
          animation: "floatB 10s ease-in-out infinite",
        }}
        width="70"
        height="70"
        alt=""
      />

      {/* Dot cluster — right */}
      <img
        src="/icons/dots.svg"
        className="hidden xl:block"
        style={{ position: "absolute", top: "18%", left: "1%", opacity: 0.15 }}
        width="68"
        height="112"
        alt="dots"
      />

      {/* Plus — bottom-left */}
      <img
        src="/icons/plus-accent.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "35%",
          right: "7%",
          opacity: 0.08,
          animation: "floatB 7s ease-in-out infinite 1s",
        }}
        width="52"
        height="52"
        alt="Plus"
      />
    </div>
  );
}

// ─── Review Card (swiper) ─────────────────────────────────────────────────────

function ReviewCard({ rev }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = rev.message.length > 180;
  const initial = rev.name?.charAt(0).toUpperCase() || "?";
  const initColor = getInitColor(rev.name);

  return (
    <div className="ts-rev-card">
      {/* Top row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
          {rev.profilePic ? (
            <img
              src={rev.profilePic}
              alt={rev.name}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "1px solid rgba(45,127,255,0.25)",
              }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                flexShrink: 0,
                background: `linear-gradient(135deg,${initColor} 0%,#6062ff 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Cinzel',serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              {initial}
            </div>
          )}
          <div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#fff",
                margin: "0 0 2px 0",
              }}
            >
              {rev.name}
            </p>
            <p
              style={{
                fontFamily: "'Roboto Mono',monospace",
                fontSize: "10px",
                color: "rgba(255,255,255,0.28)",
                margin: 0,
              }}
            >
              {rev.title} · {timeAgo(rev.createdAt)}
            </p>
          </div>
        </div>
        {PLATFORM_ICONS[rev.platform] && (
          <img
            src={PLATFORM_ICONS[rev.platform]}
            alt={rev.platform}
            style={{
              width: "20px",
              height: "20px",
              opacity: 0.65,
              flexShrink: 0,
            }}
            onError={(e) => (e.target.style.display = "none")}
          />
        )}
      </div>

      {/* Stars */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2px",
          marginBottom: "12px",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <LiaStarSolid
            key={i}
            size={13}
            color={i < rev.rating ? "#f4b400" : "rgba(255,255,255,0.12)"}
          />
        ))}
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          marginBottom: "12px",
          background:
            "linear-gradient(90deg,rgba(45,127,255,0.28),rgba(96,98,255,0.12),transparent)",
        }}
      />

      {/* Text */}
      <p
        style={{
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "11.5px",
          lineHeight: 1.85,
          color: "rgba(255,255,255,0.42)",
          letterSpacing: "0.02em",
          margin: 0,
          flex: 1,
        }}
      >
        "{expanded || !isLong ? rev.message : rev.message.slice(0, 180) + "…"}"
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded((e) => !e)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px 0 0 0",
            fontFamily: "'Roboto Mono',monospace",
            fontSize: "10px",
            color: "#2d7fff",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {expanded ? "Show less ↑" : "Read more ↓"}
        </button>
      )}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TestimonialSwiper() {
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
      id="testimonials-swiper"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding: "clamp(80px,10vw,120px) 0",
      }}
    >
      <FloatingShapes />

      <div
        style={{
          position: "relative",
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 clamp(20px,5%,60px)",
        }}
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
            // testimonials
          </p>
          <h2
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: "clamp(30px,4vw,50px)",
              fontWeight: 400,
              color: "#fff",
              margin: "0 0 14px 0",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            What{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#2d7fff 0%,#6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Clients
            </span>{" "}
            Say
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
            Real feedback from real clients — no edits, no filters.
          </p>
        </div>

        {/* ── Swiper ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.8s ease 0.20s",
          }}
        >
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop={REVIEWS.length > 2}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            navigation={false}
            coverflowEffect={{
              rotate: 0,
              stretch: 30,
              depth: 120,
              modifier: 2.2,
              slideShadows: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1.08, spaceBetween: 16 },
              640: { slidesPerView: 1.8, spaceBetween: 24 },
              1024: { slidesPerView: 2.6, spaceBetween: 32 },
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="ts-swiper"
          >
            {REVIEWS.map((rev) => (
              <SwiperSlide key={rev._id} className="ts-slide">
                <ReviewCard rev={rev} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ── Featured large quote ── */}
        <div
          style={{
            marginTop: "clamp(48px,6vw,72px)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.50s",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(45,127,255,0.22)",
              background: "rgba(45,127,255,0.04)",
              padding: "clamp(28px,5%,48px) clamp(24px,5%,52px)",
            }}
          >
            {/* Top shimmer */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "16px",
                right: "16px",
                height: "1px",
                background:
                  "linear-gradient(90deg,transparent,rgba(45,127,255,0.50),transparent)",
              }}
            />
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(ellipse at 50% 0%,rgba(45,127,255,0.07) 0%,transparent 60%)",
              }}
            />

            {/* Large quote SVG */}
            <img
              src="/icons/abstract-duo.svg"
              width="52"
              height="42"
              viewBox="0 0 72 58"
              fill="none"
              style={{
                marginBottom: "20px",
                opacity: 0.32,
                position: "relative",
              }}
              alt="quote"
            />

            <p
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: "clamp(18px,2.5vw,26px)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
                letterSpacing: "0.01em",
                margin: "0 0 24px 0",
                fontStyle: "italic",
                position: "relative",
              }}
            >
              "Easy to work with Shahbaz. He understood the feedback we shared
              during the project, and the final website matched what we were
              looking for. Would be happy to work together again. "
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                position: "relative",
              }}
            >
              <img
                src="/reviews-pfp/person-1.png"
                alt="Ahmed Raza"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "1px solid rgba(45,127,255,0.30)",
                }}
                onError={(e) => (e.target.style.display = "none")}
              />
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#fff",
                    margin: "0 0 2px 0",
                  }}
                >
                  Ahmed Raza
                </p>
                <p
                  style={{
                    fontFamily: "'Roboto Mono',monospace",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.30)",
                    margin: 0,
                  }}
                >
                  Startup Founder
                </p>
              </div>
              <div
                style={{
                  width: "32px",
                  height: "1px",
                  background: "linear-gradient(90deg,#2d7fff,#6062ff)",
                  margin: "0 4px",
                }}
              />
              <div style={{ display: "flex", gap: "5px" }}>
                {[...Array(5)].map((_, i) => (
                  <LiaStarSolid size={16} color="#f4b400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
