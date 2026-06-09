import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [imageHover, setImageHover] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300);
    };

    const addHoverEvents = () => {
      const hoverElements = document.querySelectorAll(
        "a, button, .cursor-hover",
      );

      const imageElements = document.querySelectorAll("img, .cursor-image");

      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });

      imageElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setImageHover(true));
        el.addEventListener("mouseleave", () => setImageHover(false));
      });
    };

    addHoverEvents();

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999]
        flex items-center justify-center
        rounded-full backdrop-blur-md
        transition-all duration-200 ease-out
        ${
          imageHover
            ? "w-24 h-24 bg-red-500/90 text-white"
            : hovering
              ? "w-16 h-16 bg-red-500/30 border border-red-500"
              : "w-6 h-6 bg-red-500"
        }
        ${clicked ? "scale-75" : "scale-100"}
      `}
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      >
        {imageHover && (
          <span className="text-xs font-semibold uppercase tracking-widest">
            View
          </span>
        )}
      </div>

      <div
        className="fixed top-0 left-0 w-10 h-10 border border-red-500 rounded-full pointer-events-none z-[9998] transition-all duration-300"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
