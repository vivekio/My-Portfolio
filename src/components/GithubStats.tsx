"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Star, GitCommit, GitPullRequest } from "lucide-react";

export default function GithubStats() {
  // Using a placeholder username since the user didn't provide one
  const username = "vivekpankhaniya"; 

  return (
    <section className="py-24 relative overflow-hidden bg-background">
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
              Open Source
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
            GITHUB <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
              STATISTICS
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Top Languages / Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-3xl border border-border flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
              <Github className="w-10 h-10 text-foreground" />
              <div>
                <h4 className="text-2xl font-bold text-foreground">@{username}</h4>
                <p className="text-muted-foreground">Building in public</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <GitCommit className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <h5 className="text-2xl font-black text-foreground">1.2k+</h5>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Commits</p>
              </div>
              <div className="text-center">
                <Star className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <h5 className="text-2xl font-black text-foreground">45</h5>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Stars</p>
              </div>
              <div className="text-center">
                <GitPullRequest className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
                <h5 className="text-2xl font-black text-foreground">120+</h5>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">PRs</p>
              </div>
            </div>
          </motion.div>

          {/* GitHub Graph Representation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-6 md:p-8 rounded-3xl border border-border overflow-hidden flex items-center justify-center min-h-[250px]"
          >
            <picture>
              <img src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=00000000`} alt={`${username} GitHub stats`} className="w-full max-w-md transition-all duration-500" />
            </picture>
          </motion.div>
        </div>
        
        {/* Streak Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-6 md:p-8 rounded-3xl border border-border overflow-hidden flex items-center justify-center"
        >
          <picture>
            <img src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&background=00000000`} alt="GitHub Streak" className="w-full max-w-3xl transition-all duration-500" />
          </picture>
        </motion.div>
      </div>
    </section>
  );
}
