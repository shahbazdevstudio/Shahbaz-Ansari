/**
 * TestimonialsSection.jsx
 *
 * Dependencies:
 *   npm install swiper
 *
 * Usage: import TestimonialsSection from "./TestimonialsSection";
 *
 * To fetch real reviews swap DEMO_REVIEWS with an API call:
 *   axios.get("/api/reviews").then(res => setReviews(res.data))
 */

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// ─── Demo data (replace with API call) ────────────────────────────────────────

// ─── Data ─────────────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    _id: "1",
    name: "Ahmed Raza",
    title: "Startup Founder",
    profilePic: "/reviews-pfp/person-1.png",
    rating: 5,
    createdAt: "2025-11-10",
    platform: "fiverr",
    message:
      "Found Shahbaz on Fiverr and ordered the Professional package. Great communication, clean React website, and delivered on time. Very happy with the result.",
  },
  {
    _id: "2",
    name: "Faraz Ali ",
    title: "E-commerce Store Owner",
    profilePic: "/reviews-pfp/person-2.png",
    rating: 5,
    createdAt: "2025-09-22",
    platform: "google",
    message:
      "We only needed a e-commerce so we went with the Starter package. Clean design, fast loading and looks great on mobile. Small changes were done quickly. Definitely recommended.",
  },
  {
    _id: "3",
    name: "Muskan Zahid",
    title: "Marketplace Founder",
    profilePic: "/reviews-pfp/person-3.png",
    rating: 5,
    createdAt: "2025-08-05",
    platform: "upwork",
    message:
      "Worked with Shahbaz through Upwork for our dashboard project. He finished the frontend before the deadline and the code was easy for our backend developer to continue working with.",
  },
  {
    _id: "4",
    name: "Daniel Khan",
    title: "Small Business Owner",
    profilePic: "/reviews-pfp/person-4.png",
    rating: 5,
    createdAt: "2025-06-18",
    platform: "google",
    message:
      "Our old website looked outdated. Shahbaz redesigned everything and also improved the speed. Visitors have already started spending more time on the site. Good experience overall.",
  },
  {
    _id: "5",
    name: "Hassan Sardar",
    title: "Agency Director",
    profilePic: "/reviews-pfp/person-5.png",
    rating: 5,
    createdAt: "2025-04-30",
    platform: "linkedin",
    message:
      "We've worked with many freelancers before, but Shahbaz was one of the easiest to work with. Quick replies, understood feedback, and delivered a professional website for our client.",
  },
  {
    _id: "6",
    name: "Jack Carter",
    title: "Fitness Coach",
    profilePic: "/reviews-pfp/person-6.png",
    rating: 5,
    createdAt: "2025-02-14",
    platform: "fiverr",
    message:
      "Booked the Starter package on Fiverr for my business website. Everything was delivered on time and the contact form works perfectly. I'll come back for future updates.",
  },
  {
    _id: "7",
    name: "Andrew Collins",
    title: "SaaS Founder",
    profilePic: "/reviews-pfp/person-7.png",
    rating: 5,
    createdAt: "2025-01-08",
    platform: "upwork",
    message:
      "Hired Shahbaz for the Professional package. Login system, admin panel and API integration were all completed without any issues. Really satisfied with the quality.",
  },
  {
    _id: "8",
    name: "Priya Sharma",
    title: "Marketing Consultant",
    profilePic: "/reviews-pfp/person-8.png",
    rating: 5,
    createdAt: "2024-12-17",
    platform: "google",
    message:
      "I mainly cared about design and responsiveness. The website looks premium on both desktop and mobile. Clients have already complimented the new design.",
  },
];

const PLATFORM_ICONS = {
  google: "https://cdn.trustindex.io/assets/platform/Google/icon.svg",
  fiverr: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg",
  upwork: "https://cdn.worldvectorlogo.com/logos/upwork-2.svg",
  linkedin: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

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

// ─── Floating Shapes (unique — star / sparkle motif) ─────────────────────────

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
          top: "-90px",
          left: "-120px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(45,127,255,0.11) 0%,transparent 62%)",
          filter: "blur(55px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-70px",
          right: "-100px",
          width: "460px",
          height: "460px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(96,98,255,0.11) 0%,transparent 62%)",
          filter: "blur(50px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "230px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse,rgba(45,127,255,0.03) 0%,transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(45,127,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(45,127,255,0.022) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 4-point star — top-right */}
      <img
        src="/icons/star-cross.svg"
        alt="star"
        className="hidden lg:block absolute top-[48px] right-[5.5%] opacity-20 animate-floatA"
      />

      {/* Quote mark — top-left */}
      <img
        src="/icons/abstract-duo.svg"
        alt="quote-mark"
        className="hidden lg:block absolute top-[52px] left-[5%] opacity-20 animate-floatB"
      />

      {/* Dashed ring — left mid */}
      <img
        src="/icons/dashed-circle.svg"
        className="hidden xl:block"
        style={{
          position: "absolute",
          top: "36%",
          left: "-44px",
          opacity: 0.1,
          animation: "floatA 13s ease-in-out infinite reverse",
        }}
        width="100"
        height="100"
        alt="ring"
      />

      {/* Small 6-point star — bottom-left */}
      <img
        src="/icons/star-cross.svg"
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: "70px",
          left: "7%",
          opacity: 0.2,
          animation: "floatB 9s ease-in-out infinite 1s",
        }}
        width="74"
        height="74"
        alt="star"
      />

      {/* Gradient dot cluster — right */}
      <img
        src="/icons/dots.svg"
        className="hidden xl:block"
        style={{ position: "absolute", top: "25%", right: "1%", opacity: 0.2 }}
        width="68"
        height="112"
      />
    </div>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────────

function ReviewCard({ rev }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = rev.message.length > 180;
  const initial = rev.name?.charAt(0).toUpperCase() || "?";
  const initColor = getInitColor(rev.name);

  return (
    <div className="rev-card">
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
          {/* Avatar */}
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
                background: `linear-gradient(135deg, ${initColor} 0%, #6062ff 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Cinzel', serif",
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
                fontFamily: "'Roboto Mono', monospace",
                fontSize: "10px",
                color: "rgba(255,255,255,0.28)",
                margin: 0,
              }}
            >
              {rev.title} · {timeAgo(rev.createdAt)}
            </p>
          </div>
        </div>

        {/* Platform icon */}
        {PLATFORM_ICONS[rev.platform] && (
          <img
            src={PLATFORM_ICONS[rev.platform]}
            alt={rev.platform}
            style={{
              width: "20px",
              height: "20px",
              opacity: 0.7,
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
        {[0, 1, 2, 3, 4].map((i) => (
          <img
            key={i}
            src={
              i < rev.rating
                ? "/icons/star-filled.svg"
                : "/icons/star-empty.svg"
            }
            alt="star"
            style={{ width: "14px", height: "14px" }}
          />
        ))}

        {/* Verified */}
        <img
          src="/icons/check-circle-blue.svg"
          alt="verified"
          style={{
            width: "14px",
            height: "14px",
            marginLeft: "6px",
          }}
        />
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          marginBottom: "12px",
          background:
            "linear-gradient(90deg, rgba(45,127,255,0.28), rgba(96,98,255,0.12), transparent)",
        }}
      />

      {/* Review */}
      <p
        style={{
          fontFamily: "'Roboto Mono', monospace",
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
            fontFamily: "'Roboto Mono', monospace",
            fontSize: "10px",
            color: "#2d7fff",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            transition: "color 0.2s",
          }}
        >
          {expanded ? "Show less ↑" : "Read more ↓"}
        </button>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState(REVIEWS);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  // Optional — swap DEMO_REVIEWS with real API:
  // useEffect(() => {
  //   setLoading(true);
  //   axios.get("https://your-api.com/api/reviews/all")
  //     .then(r => setReviews(r.data.data || []))
  //     .finally(() => setLoading(false));
  // }, []);

  const sectionRef = (el) => {
    if (!el) return;
    new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.06 },
    ).observe(el);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
        padding: "clamp(80px,10vw,130px) 0",
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
            marginBottom: "clamp(40px,6vw,64px)",
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
              fontSize: "clamp(32px,4.5vw,52px)",
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
              color: "rgba(255,255,255,0.30)",
              maxWidth: "420px",
              margin: "0 auto",
              lineHeight: 1.8,
              letterSpacing: "0.02em",
            }}
          >
            Real feedback from clients about their experience working with me.
          </p>
        </div>

        {/* ── Loading ── */}
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "60px 0",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "2px solid rgba(45,127,255,0.15)",
                borderTopColor: "#2d7fff",
                animation: "spin 0.8s linear infinite",
              }}
            />
          </div>
        )}

        {/* ── Swiper ── */}
        {!loading && reviews.length > 0 && (
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={reviews.length > 2}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              coverflowEffect={{
                rotate: 0,
                stretch: 40, // gap effect
                depth: 120,
                modifier: 2,
                slideShadows: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1.8,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="rev-swiper"
            >
              {reviews.map((rev) => (
                <SwiperSlide key={rev._id} className="rev-slide">
                  <ReviewCard rev={rev} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
}
