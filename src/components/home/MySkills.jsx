import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt />, level: 75 },
  { name: "JavaScript", icon: <FaJs />, level: 70 },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 85 },
  { name: "React", icon: <FaReact />, level: 80 },
  { name: "Tailwind", icon: <SiTailwindcss />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs />, level: 75 },
  { name: "Express.js", icon: <SiExpress />, level: 85 },
  { name: "MongoDB", icon: <SiMongodb />, level: 75 },
  { name: "Next.js", icon: <SiNextdotjs />, level: 70 },
];

const MySkills = () => {
  return (
    <section className="relative px-6 md:px-10 py-24 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full"></div>

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
          ✦ My Expertise
        </span>

        <h2 className="mt-4 text-4xl md:text-6xl font-black">
          Skills & <span className="text-primary">Experience</span>
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-zinc-400 text-lg">
          Crafting modern digital experiences with clean code, scalable
          architecture, and beautiful user interfaces.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 relative z-10">
        {/* Skills */}
        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-2xl">
                    {skill.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <p className="text-zinc-500 text-sm">Professional</p>
                  </div>
                </div>

                <span className="font-bold text-primary">{skill.level}%</span>
              </div>

              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Building Fast &
              <span className="text-primary"> Scalable Products</span>
            </h3>

            <p className="text-zinc-400 leading-relaxed">
              I specialize in creating responsive websites and full-stack
              applications using React, Next.js, Node.js, Express, and MongoDB.
              My focus is on performance, clean architecture, and exceptional
              user experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 my-10">
            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-5 text-center">
              <h4 className="text-4xl font-black text-primary">5+</h4>
              <p className="text-zinc-400">Years Experience</p>
            </div>

            <div className="rounded-2xl bg-primary/10 border border-primary/20 p-5 text-center">
              <h4 className="text-4xl font-black text-primary">100+</h4>
              <p className="text-zinc-400">Projects Done</p>
            </div>
          </div>

          <button className="w-full py-4 rounded-2xl bg-primary text-white font-semibold hover:scale-[1.02] transition-all duration-300">
            Hire Me →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
