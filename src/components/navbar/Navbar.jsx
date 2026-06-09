import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Service", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Project", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `
    relative px-6 py-3 rounded-full
    text-[16px] tracking-wide
    transition-all duration-300 
    ${
      isActive
        ? "bg-white text-black font-semibold shadow-lg"
        : "text-white/80 hover:text-white hover:bg-white/10"
    }
  `;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-5 left-0 right-0 z-50 px-4 md:px-8">
        <div
          className="
          max-w-7xl mx-auto
          h-[78px]
          bg-black/80
          backdrop-blur-2xl
          border border-white/10
          rounded-full
          px-4
          flex items-center justify-between
          shadow-[0_10px_40px_rgba(0,0,0,0.3)]
        "
        >
          {/* Left Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.slice(0, 3).map((link) => (
              <NavLink key={link.path} to={link.path} className={navItemClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="
              flex items-center gap-3
              px-5
            "
          >
            <h1
              className="
              font-cinzel
              text-white
              text-3xl
              tracking-wider
            "
            >
              Shahbaz
            </h1>
          </Link>

          {/* Right Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.slice(3).map((link) => (
              <NavLink key={link.path} to={link.path} className={navItemClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="
              lg:hidden
              w-11 h-11
              rounded-full
              bg-white/10
              flex items-center justify-center
              text-white
            "
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed inset-0
          bg-black/70
          backdrop-blur-sm
          z-[60]
          transition-all duration-500
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Mobile Menu */}
      <div
        className={`
        fixed top-0 right-0
        h-screen
        w-[320px]
        bg-[#090909]
        border-l border-white/10
        z-[70]
        transition-all duration-500
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between py-6 px-8 border-b border-white/10">
          <h2 className="font-cinzel text-white text-2xl">SHAHBAZ</h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="
              w-10 h-10
              rounded-full
              bg-white/10
              flex items-center justify-center
            "
          >
            <X className="text-white" />
          </button>
        </div>

        {/* Links */}
        <div className="p-6">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `
                  px-5 py-4 rounded-2xl
                  font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-white text-black"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }
                `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Socials */}
          <div className="mt-10">
            <p className="text-white/40 text-sm uppercase tracking-widest mb-5">
              Follow Me
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="
        w-11 h-11
        rounded-full
        bg-white/5
        border border-white/10
        flex items-center justify-center
        text-white/60
        hover:text-white
        hover:bg-white/10
        hover:border-white/30
        transition-all duration-300
      "
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="
        w-11 h-11
        rounded-full
        bg-white/5
        border border-white/10
        flex items-center justify-center
        text-white/60
        hover:text-white
        hover:bg-white/10
        hover:border-white/30
        transition-all duration-300
      "
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="
        w-11 h-11
        rounded-full
        bg-white/5
        border border-white/10
        flex items-center justify-center
        text-white/60
        hover:text-white
        hover:bg-white/10
        hover:border-white/30
        transition-all duration-300
      "
              >
                <FaFacebook size={22} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="
        w-11 h-11
        rounded-full
        bg-white/5
        border border-white/10
        flex items-center justify-center
        text-white/60
        hover:text-white
        hover:bg-white/10
        hover:border-white/30
        transition-all duration-300
      "
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              mt-10
              block
              text-center
              py-4
              rounded-full
              bg-white
              text-black
              font-semibold
            "
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
