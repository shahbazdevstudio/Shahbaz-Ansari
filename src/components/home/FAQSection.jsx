import { useState } from "react";

const FAQS = [
  {
    q: "What technologies do you specialize in?",
    a: "I primarily work with React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS. For animations I use Framer Motion, and I'm comfortable working across the full stack — from database design to polished UI.",
  },
  {
    q: "Are you available for freelance projects?",
    a: "Yes, I'm currently open to freelance work. Whether it's a short-term feature build, a full website from scratch, or an ongoing retainer — I'm happy to discuss what fits your needs and timeline.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A landing page takes 3–5 days. A full web app typically takes 2–4 weeks. After our initial call I'll give you a detailed timeline with milestones.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. I work with clients worldwide via async communication and scheduled video calls. Time zones are never a blocker.",
  },
  {
    q: "What does your development process look like?",
    a: "Discovery → Design → Development → Delivery. I share iterative builds throughout, so you're never left waiting to see progress.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. I offer a 2-week post-launch bug-fix window at no extra charge. For ongoing work we can set up a monthly retainer or per-task arrangement.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Definitely. I can audit your current site, identify bottlenecks or design issues, and rebuild it to a significantly higher standard.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="bg-black py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(96,98,255,0.07),transparent)] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#2d7fff] mb-4">
            // faq
          </p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-normal text-white mb-3 leading-tight">
            Frequently <span className="text-[#6062ff]">Asked</span>
          </h2>
          <p className="font-mono text-xs text-white/35 max-w-sm mx-auto leading-relaxed tracking-wide">
            Answers to the questions I get asked the most before starting a
            project.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-300
                  ${
                    isOpen
                      ? "border-[#2d7fff]/25 bg-[#2d7fff]/[0.04]"
                      : "border-white/[0.07] bg-white/[0.025]"
                  }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`font-oswald text-[15px] font-normal tracking-wider transition-colors
                    ${isOpen ? "text-white" : "text-white/80"}`}
                  >
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0
                    border transition-all duration-300
                    ${
                      isOpen
                        ? "bg-[#2d7fff]/15 border-[#2d7fff]/30 rotate-45"
                        : "bg-white/[0.05] border-white/[0.09]"
                    }`}
                  >
                    <svg
                      className={`w-3 h-3 transition-colors ${isOpen ? "stroke-[#2d7fff]" : "stroke-white/50"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 overflow-hidden
                  ${isOpen ? "max-h-60" : "max-h-0"}`}
                >
                  <div className="px-6 pb-5 border-t border-white/[0.05]">
                    <p className="font-mono text-xs text-white/45 leading-relaxed tracking-wide pt-4">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
