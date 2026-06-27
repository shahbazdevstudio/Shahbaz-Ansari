import React, { useState } from 'react'

const ValueCard = ({ v, index, visible }) => {
     const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "22px 20px",
        borderRadius: "16px",
        border: `1px solid ${hovered ? "rgba(45,127,255,0.28)" : "rgba(255,255,255,0.06)"}`,
        background: hovered
          ? "rgba(45,127,255,0.05)"
          : "rgba(255,255,255,0.02)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? "translateY(-3px)"
            : "translateY(0)"
          : "translateY(20px)",
        transition: `opacity 0.6s ease ${0.3 + index * 0.06}s, transform 0.3s ease, border-color 0.3s, background 0.3s`,
      }}
    >
      {/* Inner glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at top left, rgba(45,127,255,0.06) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      <span
        style={{
          color: "#2d7fff",
          display: "block",
          marginBottom: "12px",
          position: "relative",
        }}
      >
        <img src={v.icon} alt={v.title} />
      </span>
      <p
        style={{
          fontSize: "16px",
          fontWeight: 400,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "#dfdfdf",
          margin: "0 0 6px 0",
          position: "relative",
        }}
      >
        {v.title}
      </p>
      <p
        style={{
          fontFamily: "'Roboto Mono',monospace",
          fontSize: "12px",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.32)",
          margin: 0,
          position: "relative",
        }}
      >
        {v.desc}
      </p>
    </div>
  );
}

export default ValueCard