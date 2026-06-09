import React, { useRef, useEffect } from "react";

const skills = [
  "REACT JS",
  "NEXT JS",
  "MERN STACK",
  "UI/UX DESIGN",
  "FULL STACK",
  "NODE JS",
  "MONGODB",
  "TAILWIND CSS",
  "FRAMER MOTION",
  "TYPESCRIPT",
];

const TechMarquee = () => {
  const marqueeRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const items = [...skills, ...skills, ...skills, ...skills];

  useEffect(() => {
    const marquee = marqueeRef.current;

    let animationFrame;
    let speed = 1;

    const animate = () => {
      if (!isDown.current) {
        marquee.scrollLeft += speed;

        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - marqueeRef.current.offsetLeft;
    scrollLeft.current = marqueeRef.current.scrollLeft;
    marqueeRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    marqueeRef.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    isDown.current = false;
    marqueeRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;

    e.preventDefault();

    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;

    marqueeRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="relative bg-black py-10 overflow-hidden">
      {/* Top Line */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-32 w-32 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      {/* Marquee */}
      <div
        ref={marqueeRef}
        className="
          flex
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
          cursor-grab
          select-none
        "
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex items-center gap-10 min-w-max px-6">
          {items.map((skill, index) => (
            <div key={index} className="flex items-center gap-10">
              <span
                className="
                  text-white
                  text-xl
                  md:text-2xl
                  font-black
                  tracking-[0.25em]
                "
              >
                {skill}
              </span>

              <span
                className="
                  text-white/80
                  text-2xl
                  md:text-3xl
                "
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </section>
  );
};

export default TechMarquee;