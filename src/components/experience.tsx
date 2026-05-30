"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Actowiz Solutions Pvt. Ltd.",
      role: "Full Stack Developer",
      date: "Jun 2025 - Present",
      responsibilities: [
        "Enterprise API Development",
        "API Hub Systems",
        "Automation Platforms",
        "Dashboard Development",
        "Backend Architecture",
        "Data Delivery Optimization",
        "Third Party API Integration",
      ],
    },
    {
      company: "Hexagon Infosoft Solutions",
      role: "Full Stack Developer",
      date: "Jan 2025 - Jun 2025",
      responsibilities: [
        "Assisted in full stack web application development",
        "Worked on backend API integrations and frontend user interfaces",
      ],
    },
    {
      company: "Angel Infotech LLP",
      role: "Frontend Developer Intern",
      date: "Jun 2024",
      responsibilities: [
        "Developed responsive frontend components",
        "Collaborated with the design team to implement UI/UX best practices",
      ],
    },
  ];

  return (
    <section id="experience" className="py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-foreground" />
            <h2 className="text-sm md:text-base font-semibold tracking-widest uppercase text-muted-foreground">
              Career Path
            </h2>
            <span className="w-8 h-[2px] bg-foreground" />
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
            PROFESSIONAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
              EXPERIENCE
            </span>
          </h3>
        </motion.div>

        <div className="relative border-l-2 border-border ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-12 relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 rounded-full bg-foreground left-[-9px] top-1 border-4 border-background" />

              <div className="glass p-8 rounded-3xl border border-border group hover:border-foreground/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h4 className="text-2xl font-bold text-foreground">
                    {exp.role}
                  </h4>
                  <span className="px-4 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <h5 className="text-lg text-muted-foreground font-semibold mb-6">
                  {exp.company}
                </h5>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-3 font-light"
                    >
                      <span className=" mt-1.5 opacity-90">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
