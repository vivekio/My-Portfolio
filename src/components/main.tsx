"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";

export default function Main() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-center min-h-[95vh] px-6 py-20 max-w-7xl mx-auto overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-white opacity-[0.02] dark:opacity-[0.03] rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-foreground opacity-[0.03] dark:opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full lg:w-[60%] flex flex-col justify-center space-y-8 z-10 mt-12 lg:mt-0"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2"
        >
          <span className="w-12 h-[2px] bg-foreground" />
          <h2 className="text-sm md:text-base font-semibold tracking-widest uppercase text-muted-foreground">
            Vivek Pankhaniya
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-tight break-words">
            I build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
              AI-powered systems
            </span>{" "}
            that cut real business costs
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl font-light leading-relaxed text-muted-foreground"
        >
          Like the automation platform that reduced manual data entry by 80% at Actowiz — I solve hard engineering problems with MERN stack, Next.js, and AI.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start gap-4 pt-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <a
              href="#projects"
              className="hover-target group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:scale-105 transition-transform"
            >
              See My Work
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Vivek Pankhaniya.pdf"
              download
              className="hover-target flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 glass border border-border text-foreground font-semibold rounded-full hover:bg-muted transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
          <p className="text-xs text-muted-foreground/80 font-medium pl-2">
            Currently available for freelance & full-time opportunities
          </p>
        </motion.div>
      </motion.div>

      {/* Right Content / Abstract Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="relative w-full lg:w-[40%] flex justify-center items-center z-10"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
          {/* Outer Ring */}
          <div className="absolute inset-0 border border-border rounded-full animate-[spin_20s_linear_infinite] group-hover:border-foreground transition-colors duration-500" />
          <div className="absolute inset-4 border border-dashed border-border rounded-full animate-[spin_30s_linear_infinite_reverse] opacity-50" />

          {/* Center Image */}
          <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-foreground transition-all duration-700 shadow-2xl">
            <Image
              src="/profile.png"
              alt="Vivek Pankhaniya"
              width={400}
              height={400}
              className="object-cover w-full h-full scale-110 hover:scale-100 transition-transform duration-700"
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/yQABAgEBAQEBAQAAAAAAAAAAAAAAAAACAQMF/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA="
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
