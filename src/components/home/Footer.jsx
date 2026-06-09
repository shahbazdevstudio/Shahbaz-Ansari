const NAV_LINKS = ["Home", "About", "Projects", "Skills", "Contact"];
const SERVICES = [
  "Web Development",
  "UI / UX Design",
  "React Apps",
  "API Integration",
  "Freelance Work",
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/shahbaz-ansari",
    icon: (
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    ),
    filled: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shahbaz-ansari",
    icon: (
      <>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    filled: false,
  },
  {
    label: "Twitter",
    href: "https://x.com/shahbazansari",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    filled: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/shahbazansari",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
    filled: false,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923001234567",
    icon: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    ),
    filled: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] pt-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-cinzel text-xl font-semibold text-white tracking-widest mb-3">
              Shahbaz<span className="text-[#6062ff]">.</span>
            </div>
            <p className="font-mono text-[11px] text-white/30 leading-relaxed tracking-wide max-w-[240px] mb-5">
              Full-stack developer crafting premium digital experiences with
              React, Node.js, and a sharp eye for design.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
              bg-[#2d7fff]/[0.07] border border-[#2d7fff]/18
              font-mono text-[10px] text-[#2d7fff] tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2d7fff] animate-pulse" />
              Available for hire
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-oswald text-[11px] font-light tracking-[0.2em] uppercase text-white/35 mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="flex items-center gap-2 font-mono text-[11px] text-white/45
                    hover:text-white transition-colors tracking-wide group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#2d7fff]/40 group-hover:bg-[#2d7fff] transition-colors" />
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-oswald text-[11px] font-light tracking-[0.2em] uppercase text-white/35 mb-4">
              Services
            </p>
            <div className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex items-center gap-2 font-mono text-[11px] text-white/45
                    hover:text-white transition-colors tracking-wide group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#2d7fff]/40 group-hover:bg-[#2d7fff] transition-colors" />
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-oswald text-[11px] font-light tracking-[0.2em] uppercase text-white/35 mb-4">
              Connect
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {SOCIALS.map(({ label, href, icon, filled }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08]
                    flex items-center justify-center
                    hover:bg-[#2d7fff]/10 hover:border-[#2d7fff]/30
                    hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-[15px] h-[15px]"
                    {...(filled
                      ? { fill: "rgba(255,255,255,0.6)" }
                      : {
                          fill: "none",
                          stroke: "rgba(255,255,255,0.6)",
                          strokeWidth: 1.8,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        })}
                  >
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
            <p className="font-oswald text-[11px] font-light tracking-[0.2em] uppercase text-white/35 mb-2">
              Email
            </p>
            <a
              href="mailto:shahbaz@example.com"
              className="font-mono text-[11px] text-white/45 hover:text-[#2d7fff] transition-colors tracking-wide"
            >
              shahbaz@example.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] py-6 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-white/20 tracking-wider">
            © 2025 <span className="text-[#2d7fff]">Shahbaz Ansari</span>. All
            rights reserved.
          </p>
          <p className="font-mono text-[10px] text-white/18 tracking-wide">
            Built with <span className="text-[#6062ff]/70">♥</span> using React
            & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
