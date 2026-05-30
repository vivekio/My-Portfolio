"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Layout,
  Database,
  Workflow,
  Cloud,
  ShieldCheck,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Full Stack Development",
      description:
        "End-to-end development of scalable web applications using the MERN stack and Next.js.",
      icon: <Layout className="w-8 h-8" />,
    },
    {
      title: "Enterprise API Systems",
      description:
        "Designing and building robust, secure RESTful and GraphQL APIs for seamless data flow.",
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: "AI Integration",
      description:
        "Implementing LLMs, AI agents, and custom AI solutions to automate business workflows.",
      icon: <Workflow className="w-8 h-8" />,
    },
    {
      title: "SaaS Architecture",
      description:
        "Building scalable backend architectures and SaaS platforms capable of handling high traffic.",
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Deploying and managing applications on AWS, Vercel, and Render with CI/CD pipelines.",
      icon: <Cloud className="w-8 h-8" />,
    },
    {
      title: "API Hubs & Security",
      description:
        "Building API hubs with secure authentication (OAuth, JWT), rate limiting, and optimization.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-10 relative overflow-hidden bg-muted/20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 justify-start w-full">
            <span className="w-8 h-[2px] bg-foreground" />
            <h2 className="text-sm md:text-base font-semibold tracking-widest uppercase text-muted-foreground">
              What I Do
            </h2>
            <span className="w-8 h-[2px] bg-foreground" />
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
            PREMIUM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
              SERVICES
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-border group hover:border-foreground transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 w-16 h-16 rounded-2xl bg-foreground text-background flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h4>
              <p className=" font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
