"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Cloud, BrainCircuit, Database } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Full Stack Development",
      icon: <Server className="w-6 h-6" />,
      desc: "Next.js, React.js, Node.js, Express.js",
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      desc: "MongoDB, MySQL, PostgreSQL, Redis",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      desc: "AWS, Docker, CI/CD, Nginx, Linux",
    },
    {
      title: "AI & Automation",
      icon: <BrainCircuit className="w-6 h-6" />,
      desc: "OpenAI, Gemini API, AI Agents",
    },
  ];

  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-12 h-[2px] bg-foreground" />
            <h2 className="text-sm md:text-base font-semibold tracking-widest uppercase text-muted-foreground">
              About Me
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
            ENGINEERING SCALABLE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
              SOLUTIONS
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg font-light leading-relaxed"
          >
            <p>
              I am a Full Stack Developer specializing in building
              enterprise-grade applications, scalable backend architectures, and
              intelligent automation systems. My core focus lies in bridging the
              gap between complex technical requirements and seamless user
              experiences.
            </p>
            <p>
              Currently, I work at <strong>Actowiz Solutions</strong>, where I
              build robust enterprise API management systems, sophisticated
              automation platforms, and powerful dashboard applications that
              drive business efficiency.
            </p>
            <p>
              I thrive on solving intricate technical challenges, whether
              it&apos;s optimizing data delivery, integrating large language
              models (LLMs) to create AI-powered solutions, or architecting
              resilient cloud infrastructure.
            </p>

            <div className="pt-6 grid grid-cols-2 gap-6 border-t border-border mt-8">
              <div>
                <h4 className="text-3xl font-black text-foreground">1.5+</h4>
                <p className="text-sm uppercase tracking-wider mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-foreground">20+</h4>
                <p className="text-sm uppercase tracking-wider mt-1">
                  Projects Delivered
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl hover:bg-muted transition-colors duration-300 group border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-foreground">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
