"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [intent, setIntent] = useState<"freelance" | "fulltime">("freelance");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setLoading(true);
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setLoading(false);
    if (res.ok) {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 justify-center w-full">
            <span className="w-8 h-[2px] bg-foreground" />
            <h2 className="text-sm md:text-base font-semibold tracking-widest uppercase text-muted-foreground">
              Get In Touch
            </h2>
            <span className="w-8 h-[2px] bg-foreground" />
          </div>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
            LET&apos;S WORK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
              TOGETHER
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <h4 className="text-2xl font-bold  mb-6">Start a conversation</h4>
              <p className="text-muted-foreground font-light leading-relaxed max-w-md">
                I&apos;m currently available for freelance projects and
                full-time opportunities. If you&apos;re looking for a developer
                to build robust applications or solve complex technical
                challenges, let&apos;s connect.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:pankhaniyavivek10@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-lg text-foreground font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground transition-all">
                    pankhaniyavivek10@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/919510558572"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-foreground fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.62.962 3.376 1.47 5.358 1.47 5.58 0 10.121-4.544 10.125-10.13.002-2.707-1.043-5.251-2.946-7.158C17.28 1.43 14.74 0.38 12.007 0.38c-5.586 0-10.126 4.544-10.13 10.13-.001 2.01.522 3.977 1.517 5.714l-.992 3.624 3.709-.972zm11.666-6.028c-.303-.151-1.793-.885-2.071-.985-.278-.1-.48-.15-.68.15-.2.3-.777.985-.953 1.185-.177.2-.353.226-.656.075-3.04-1.52-3.79-2.228-5.15-4.57-.363-.62.363-.576.953-1.758.1-.2.05-.375-.025-.526-.075-.15-.68-1.637-.932-2.246-.247-.592-.497-.512-.68-.522-.177-.008-.38-.01-.58-.01-.2 0-.527.075-.803.375-.278.3-.803.785-.803 1.91 0 1.125.82 2.21 1.932 2.36 1.113.15 4.302 3.314 5.928 3.93.387.147.74.237 1.01.32.39.125.746.107 1.026.066.313-.047 1.793-.735 2.047-1.442.253-.708.253-1.314.177-1.442-.076-.127-.278-.203-.58-.354z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    WhatsApp
                  </p>
                  <p className="text-lg text-foreground font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-muted-foreground transition-all">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-lg text-foreground font-medium">
                    Ahmedabad, Gujarat
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/vivekpankhaniya"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-pankhaniya-011556223/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form & Call Booking */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Calendly CTA Card */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white/[0.02] p-8 shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/[0.02] rounded-full blur-2xl pointer-events-none" />
              <h4 className="text-xl font-bold text-foreground mb-2">
                Prefer a quick call?
              </h4>
              <p className="text-muted-foreground text-sm font-light mb-6">
                Book a free 30-minute intro call to discuss your project.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-bold hover:opacity-90 transition-opacity text-sm"
              >
                Schedule a Call &rarr;
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="glass p-8 md:p-10 rounded-3xl border border-border space-y-6 relative overflow-hidden"
            >
              {/* Form Background Blur effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-foreground opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

              {/* Intent Toggle */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground ml-1">
                  I want to discuss:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setIntent("freelance")}
                    className={`py-3 px-4 rounded-xl border font-semibold text-sm transition-all cursor-pointer ${
                      intent === "freelance"
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background text-foreground hover:bg-white/5"
                    }`}
                  >
                    Freelance Project
                  </button>
                  <button
                    type="button"
                    onClick={() => setIntent("fulltime")}
                    className={`py-3 px-4 rounded-xl border font-semibold text-sm transition-all cursor-pointer ${
                      intent === "fulltime"
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background text-foreground hover:bg-white/5"
                    }`}
                  >
                    Full-time Opportunity
                  </button>
                </div>
                <p className="text-sm text-muted-foreground font-light italic mt-2 ml-1">
                  {intent === "freelance"
                    ? "Tell me about your project — timeline, tech stack, and goals."
                    : "I'm open to full-time roles. Share the JD or company details."}
                </p>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground ml-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all placeholder:text-muted-foreground"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground ml-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all placeholder:text-muted-foreground"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-foreground focus:ring-1 focus:ring-foreground outline-none transition-all resize-none placeholder:text-muted-foreground"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-foreground text-background font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
