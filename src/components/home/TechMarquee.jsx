import React, { useRef, useEffect } from "react";

const SKILLS = [
  { name: "REACT JS" },
  { name: "NEXT JS" },
  { name: "MERN STACK" },
  { name: "UI/UX DESIGN" },
  { name: "FULL STACK" },
  { name: "NODE JS" },
  { name: "MONGODB" },
  { name: "TAILWIND CSS" },
  { name: "FRAMER MOTION" },
  { name: "TYPESCRIPT" },
];

export default function TechMarquee() {
  const marqueeRef = useRef(null);
  const isPaused = useRef(false);

  const items = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationFrame;

    const animate = () => {
      if (!isPaused.current) {
        marquee.scrollLeft += 0.8;

        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      aria-label="Technologies and Skills"
      className="relative overflow-hidden bg-black py-10"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-40 w-40 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* SEO Hidden */}
      <ul className="sr-only">
        {SKILLS.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>

      {/* Marquee */}
      <div
        ref={marqueeRef}
        className="scrollbar-hide flex overflow-x-auto whitespace-nowrap select-none cursor-pointer"
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
        onClick={() => (isPaused.current = !isPaused.current)} // click to toggle stop/start
      >
        <div className="flex min-w-max items-center gap-12 px-6">
          {items.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-12"
            >
              <span
                className="
                  text-lg md:text-2xl font-extrabold
                  tracking-[0.25em]
                  text-white
                  transition-all duration-300
                "
              >
                {skill.name}
              </span>

              <span className="text-2xl text-white md:text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </section>
  );
}
