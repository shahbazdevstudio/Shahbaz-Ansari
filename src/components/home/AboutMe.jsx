import { useEffect, useRef, useState } from "react";
import ProfileCard from "../react-bits/ProfileCard";

const skills = [
  { name: "React / Next.js", pct: 95, icon: "⚛" },
  { name: "UI / UX Design", pct: 88, icon: "✦" },
  { name: "Node.js / APIs", pct: 82, icon: "⬡" },
  { name: "TypeScript", pct: 80, icon: "TS" },
  { name: "Tailwind CSS", pct: 92, icon: "◈" },
];

const highlights = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    label: "40+ Projects",
    sub: "Delivered worldwide",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    label: "Fast Delivery",
    sub: "On-time, every time",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    label: "Pixel Perfect",
    sub: "Detail-obsessed design",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: "Clean Code",
    sub: "Scalable & maintainable",
  },
];

export default function AboutMe() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-black px-[5%] py-[120px]"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45,127,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45,127,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue glow left */}
      <div
        className="pointer-events-none absolute -left-[150px] top-[10%] h-[600px] w-[600px] rounded-full blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(45,127,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Purple glow right */}
      <div
        className="pointer-events-none absolute -right-[100px] bottom-[10%] h-[500px] w-[500px] rounded-full blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(96,98,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1140px]">
        {/* Heading  */}
        <div className="text-center max-w-4xl mx-auto mb-14">

          <p className="mt-2 max-w-2xl mx-auto text-base md:text-lg text-zinc-400 leading-relaxed"></p>
        </div>
        <div className="text-center mb-14 px-4">
          <p className="font-mono text-sm tracking-[0.35em] uppercase text-primary mb-2">
            testimonials
          </p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-normal text-white mb-2 leading-tight">
            Why <span className="text-primary">Choose</span> Me
          </h2>
          <p className="font-mono text-base text-white/35 max-w-lg mx-auto leading-relaxed tracking-wide">
            I create modern, fast, and scalable web experiences with a strong
            businesses stand out online.
          </p>
        </div>
        {/* Main grid */}
        <div className="flex items-center flex-col lg:flex-row  md:gap-[80px]">
          {/* LEFT */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.8s ease 0.1s",
            }}
          >
            {/* Heading */}
            <h2
              className="m-0 mb-2 text-white"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(30px, 3.8vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Crafting Digital
            </h2>
            <h2
              className="m-0 mb-7"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(30px, 3.8vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                background: "linear-gradient(135deg, #2d7fff 0%, #6062ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Experiences
            </h2>

            <p
              className="mb-3.5 mt-0"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "1.9",
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.03em",
              }}
            >
              I'm a full-stack web developer with a passion for building fast,
              accessible, and visually stunning digital products. I bridge the
              gap between engineering and design — ensuring every interface not
              only works flawlessly but feels exceptional. a full-stack web
              developer with a passion for building fast, accessible, and
              engineering and design — ensuring every interface not only works
              flawlessly but feels exceptional.
            </p>
            <p
              className="mb-12 mt-0"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "1.9",
                color: "rgba(255,255,255,0.28)",
                letterSpacing: "0.03em",
              }}
            >
              From landing pages that convert to complex web apps that scale — I
              bring ideas to life with clean code and thoughtful interaction
              design.
            </p>

            {/* Highlights grid */}
            <div className="mb-[52px] grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="highlight-card flex cursor-default items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(15px)",
                    transition:
                      "border-color 0.3s, background 0.3s, transform 0.2s",
                    transitionDelay: `${0.3 + i * 0.08}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(45,127,255,0.35)";
                    e.currentTarget.style.background = "rgba(45,127,255,0.05)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span className="mt-px shrink-0 text-[#2d7fff]">
                    {h.icon}
                  </span>
                  <div>
                    <p
                      className="mb-0.5 mt-0 text-white"
                      style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {h.label}
                    </p>
                    <p
                      className="m-0"
                      style={{
                        fontFamily: "'Roboto Mono', monospace",
                        fontSize: "10.5px",
                        color: "rgba(255,255,255,0.28)",
                      }}
                    >
                      {h.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - ProfileCard */}
          <div
            className="flex flex-col items-center justify-center gap-8 pt-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.3s",
            }}
          >
            <div className="relative flex items-center justify-center">
              {/* Outer glow */}
              <div
                className="pointer-events-none absolute -inset-[30px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(45,127,255,0.08) 0%, transparent 70%)",
                }}
              />
              <ProfileCard
                name="Shahbaz Ansari"
                title="Web Developer"
                handle="javicodes"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/me.png"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
                behindGlowColor="rgba(17, 17, 17, 0.67)"
                iconUrl="/iconpattern.png"
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#2d7fff2b 0%,#6063ff37 100%)"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
