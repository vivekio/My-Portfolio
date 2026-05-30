"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "TaxiTime",
      subtitle: "Real-time Taxi Booking Platform",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Socket.IO"],
      overview:
        "A comprehensive real-time taxi booking platform enabling users to request rides and drivers to accept them instantly.",
      features: [
        "Real-time location tracking",
        "Live ride status updates",
        "Driver matching algorithm",
        "Secure payment gateway integration",
      ],
      challenges:
        "Handling real-time bidirectional data flow efficiently without overwhelming the server.",
      solution:
        "Implemented Socket.IO for low-latency WebSockets communication, ensuring instant ride updates.",
      architecture:
        "Microservices-inspired architecture separating the core API from the real-time websocket server.",
      impact:
        "Reduced ride matching time by 40% and improved driver-user communication reliability.",
      image: "/taxitime.png",
    },
    {
      title: "H Cart",
      subtitle: "Inventory & Sales Management System",
      tech: ["Next.js", "Node.js", "MySQL"],
      overview:
        "An enterprise-level inventory and sales management dashboard for businesses to track stock and revenue.",
      features: [
        "Real-time inventory tracking",
        "Sales analytics dashboard",
        "Role-based access control",
        "Automated low-stock alerts",
      ],
      challenges:
        "Managing complex relational data for thousands of products while keeping the dashboard fast.",
      solution:
        "Optimized MySQL queries and implemented server-side rendering with Next.js for instant page loads.",
      architecture:
        "Monolithic Node.js backend with Next.js serving as a dynamic frontend.",
      impact:
        "Streamlined inventory operations, reducing stock discrepancies by over 80%.",
      image: "/Hcart.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 relative overflow-hidden bg-background"
    >
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
              Featured Work
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
            CASE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
              STUDIES
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(idx)}
            >
              {/* Background Cover */}
              <div
                className="absolute inset-0 bg-muted/20 group-hover:scale-105 transition-transform duration-700 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-3xl font-bold text-white mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Expanded View */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="
          relative
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-y-auto
          rounded-[32px]
          bg-white
          dark:bg-black
          border
          border-black/10
          dark:border-white/10
          shadow-[0_20px_80px_rgba(0,0,0,0.2)]
          dark:shadow-[0_20px_80px_rgba(255,255,255,0.05)]
        "
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="
            absolute
            top-5
            right-5
            z-20
            p-3
            rounded-full
            bg-white/10
            backdrop-blur-md
            hover:scale-110
            transition-all
          "
              >
                <X className="w-5 h-5" />
              </button>

              {/* Hero Image */}
              <div className="relative h-[280px] md:h-[380px] overflow-hidden">
                <img
                  src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <h2 className="text-4xl md:text-6xl font-black text-white">
                    {projects[selectedProject].title}
                  </h2>

                  <p className="text-white/80 text-lg mt-2">
                    {projects[selectedProject].subtitle}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {projects[selectedProject].tech.map((tech, index) => (
                    <span
                      key={index}
                      className="
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  border
                  border-black/10
                  dark:border-white/10
                  bg-black/[0.03]
                  dark:bg-white/[0.05]
                "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Overview */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">Project Overview</h3>

                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {projects[selectedProject].overview}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-5">Key Features</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    {projects[selectedProject].features.map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="
                    p-4
                    rounded-2xl
                    border
                    border-black/10
                    dark:border-white/10
                    bg-black/[0.02]
                    dark:bg-white/[0.02]
                  "
                        >
                          ✓ {feature}
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Architecture */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">Architecture</h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {projects[selectedProject].architecture}
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div
                  className="
              grid
              md:grid-cols-2
              gap-6
              mb-12
              p-8
              rounded-3xl
              border
              border-black/10
              dark:border-white/10
              bg-black/[0.02]
              dark:bg-white/[0.03]
            "
                >
                  <div>
                    <h4 className="text-xl font-bold mb-3">Challenge</h4>

                    <p className="text-muted-foreground">
                      {projects[selectedProject].challenges}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3">Solution</h4>

                    <p className="text-muted-foreground">
                      {projects[selectedProject].solution}
                    </p>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">Impact</h3>

                  <div
                    className="
                p-6
                rounded-2xl
                border-l-4
                border-black
                dark:border-white
                bg-black/[0.03]
                dark:bg-white/[0.03]
              "
                  >
                    <p className="font-medium">
                      {projects[selectedProject].impact}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    className="
                flex items-center gap-2
                px-6 py-3
                rounded-full
                font-semibold
                bg-black
                text-white
                dark:bg-white
                dark:text-black
                hover:scale-105
                transition-all
              "
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>

                  <button
                    className="
                flex items-center gap-2
                px-6 py-3
                rounded-full
                border
                border-black/10
                dark:border-white/10
                hover:bg-black/5
                dark:hover:bg-white/5
                transition-all
              "
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
