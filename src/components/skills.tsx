"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  Wrench,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building modern, responsive, and scalable user interfaces.",
      icon: Code2,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Material UI",
        "Bootstrap",
      ],
    },
    {
      title: "Backend Development",
      description: "Creating secure APIs and scalable backend systems.",
      icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "REST API",
        "GraphQL",
        "JWT",
        "OAuth",
        "Socket.IO",
      ],
    },
    {
      title: "Database Management",
      description: "Designing optimized and high-performance databases.",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    },
    {
      title: "DevOps & Cloud",
      description: "Deploying, managing, and scaling cloud infrastructure.",
      icon: Cloud,
      skills: [
        "AWS",
        "VPS Management",
        "Nginx",
        "PM2",
        "Docker",
        "CI/CD",
        "SSL Setup",
        "Domain Management",
        "Vercel",
        "Render",
      ],
    },
    {
      title: "AI & Automation",
      description: "Integrating AI solutions and workflow automation.",
      icon: BrainCircuit,
      skills: [
        "OpenAI API",
        "Gemini API",
        "LLM Integration",
        "AI Chatbots",
        "Prompt Engineering",
        "Workflow Automation",
        "AI Agents",
      ],
    },
    {
      title: "Tools & Collaboration",
      description: "Development tools, project management, and teamwork.",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Jira",
        "Team Collaboration",
        "Leadership",
        "Agile Development",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-10 overflow-hidden bg-background"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/[0.02] rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-[2px] bg-foreground" />
            <h2 className="text-sm md:text-base font-semibold tracking-widest uppercase text-muted-foreground">
              Technical Arsenal
            </h2>
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-none">
            SKILLS &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
              TECHNOLOGIES
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            A collection of technologies, frameworks, cloud platforms, AI tools,
            and development practices I use to build scalable digital products.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.08)] transition-all duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>

                    <p className="text-muted-foreground text-sm max-w-md">
                      {category.description}
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm font-medium text-muted-foreground hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                  <span className="text-sm text-muted-foreground">
                    {category.skills.length} Technologies
                  </span>

                  <span className="text-sm font-semibold text-foreground">
                    Advanced
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { value: "1.5+", label: "Years Experience" },
            { value: "20+", label: "Projects Built" },
            { value: "30+", label: "Technologies" },
            { value: "100%", label: "Dedication" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center border border-white/10 rounded-3xl p-6 bg-white/[0.02]"
            >
              <h3 className="text-3xl md:text-4xl font-black">{stat.value}</h3>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
