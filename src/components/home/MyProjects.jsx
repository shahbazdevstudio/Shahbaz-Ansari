import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "GrowMore Trading",
    description:
      "Advanced paper trading platform with portfolio tracking, analytics, and real-time market simulation.",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "02",
    title: "Sellit Marketplace",
    description:
      "Modern marketplace where users can post, manage, and promote classified ads seamlessly.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    id: "03",
    title: "Crypto Tracker",
    description:
      "Track investments, profits, losses, and monitor your financial growth with interactive dashboards.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["Next.js", "Node.js", "Chart.js"],
  },
  {
    id: "04",
    title: "Portfolio Website",
    description:
      "High-end animated developer portfolio with premium UI, smooth transitions, and modern interactions.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900",
    demo: "#",
    github: "#",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
};

const MyProjects = () => {
  return (
    <section className="relative overflow-hidden py-24 px-4 md:px-10 bg-[#000000]">
      {/* Ambient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase">
          ✦ My Work
        </span>
        <h2 className="mt-5 text-5xl md:text-7xl font-black font-syne leading-none tracking-tight">
          Selected <span className="text-primary">Projects</span>
        </h2>
        <p className="mt-3 font-mono text-zinc-500 text-xs tracking-widest">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quo quos a.
        </p>
      </div>

      {/* 4-card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-[1400px] mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative rounded-[20px] overflow-hidden border border-white/[0.07] bg-[#111116] cursor-pointer"
            style={{ aspectRatio: "3/2" }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
            }}
          >
            {/* BG Image — darkens on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700
                         brightness-[0.55] saturate-[0.7]
                         group-hover:scale-[1.08] group-hover:brightness-[0.18] group-hover:saturate-[0.2]"
              style={{ backgroundImage: `url('${project.image}')` }}
            />

            {/* Indigo ambient glow */}
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_100%,rgba(99,102,241,0.18),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Tech strip (visible when not hovered) */}
            <div className="absolute bottom-0 left-0 right-0 z-[3] p-3 flex flex-wrap gap-1.5 bg-gradient-to-t from-black/90 to-transparent transition-all duration-400 group-hover:opacity-0 group-hover:translate-y-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full border border-white/10 bg-white/[0.07] font-mono text-[9px] text-white/70 tracking-widest"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Hover Reveal Panel */}
            <div className="absolute inset-0 z-[4] flex flex-col justify-center p-6 opacity-0 translate-y-4 transition-all duration-[450ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-100 group-hover:translate-y-0">
              <h3 className="font-syne font-black text-xl md:text-2xl leading-tight tracking-tight text-white mb-3">
                {project.title}
              </h3>
              <div className="w-8 h-0.5 bg-primary rounded-full mb-3" />
              <p className="font-mono text-[11px] text-zinc-400 leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 h-10 rounded-full bg-primary flex items-center justify-center gap-1.5 font-syne text-xs font-bold tracking-wider transition-all duration-200 hover:bg-indigo-400 hover:scale-[1.04]"
                >
                  <ExternalLink size={13} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.06] flex items-center justify-center transition-all duration-200 hover:border-primary hover:bg-primary/15 hover:scale-[1.08]"
                  aria-label="GitHub"
                >
                  <FaGithub size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-14 relative z-10"
      >
        <button className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full border border-primary/40 text-primary font-syne font-bold text-sm tracking-wider transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:text-white hover:-translate-y-1">
          View All Projects
        </button>
      </motion.div>
    </section>
  );
};

export default MyProjects;
