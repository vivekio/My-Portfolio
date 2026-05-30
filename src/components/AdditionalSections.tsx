"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Quote } from "lucide-react";

export default function AdditionalSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What technologies do you specialize in?",
      a: "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js for scalable web applications. I also have strong expertise in AI integration (OpenAI/Gemini APIs) and DevOps (AWS, Docker, CI/CD).",
    },
    {
      q: "Are you available for freelance work?",
      a: "Yes, I take on select freelance projects that align with my expertise in Full Stack Development, SaaS architecture, and AI automation.",
    },
    {
      q: "What is your approach to building enterprise APIs?",
      a: "I focus on security, scalability, and performance. This includes robust authentication (OAuth/JWT), rate limiting, comprehensive error handling, and optimized database queries.",
    },
  ];

  // const certifications = [
  //   {
  //     name: "AWS Certified Developer – Associate",
  //     issuer: "Amazon Web Services",
  //   },
  //   { name: "Advanced React Patterns", issuer: "Frontend Masters" },
  //   { name: "Node.js Enterprise Application Development", issuer: "Udemy" },
  // ];

  const testimonials = [
    {
      text: "Vivek's ability to architect complex backend systems while ensuring a seamless frontend experience is truly impressive. He delivered our API hub ahead of schedule.",
      author: "Technical Director",
      company: "Actowiz Solutions",
    },
    {
      text: "The AI automation platform Vivek built for us reduced our manual data entry by 80%. Highly recommended for any complex full-stack projects.",
      author: "R&D Manager",
      company: "Actowiz Solutions",
    },
  ];

  return (
    <>
      {/* Testimonials */}
      <section className="py-20 relative overflow-hidden bg-muted/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground">
              CLIENT <span className="text-muted-foreground">TESTIMONIALS</span>
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="glass p-8 rounded-3xl border border-border relative"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-muted-foreground/20" />
                <p className="text-muted-foreground font-light text-lg italic mb-6 relative z-10">
                  &quot;{t.text}&quot;
                </p>
                <div>
                  <h5 className="text-foreground font-bold">{t.author}</h5>
                  <p className="text-sm text-muted-foreground">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="py-24 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground">
              CERTIFICATIONS
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl border border-border flex items-center gap-4 hover:border-foreground transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h5 className="text-foreground font-bold leading-tight mb-1">
                    {cert.name}
                  </h5>
                  <p className="text-xs text-muted-foreground uppercase">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden bg-muted/5 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground">
              FREQUENTLY ASKED{" "}
              <span className="text-muted-foreground">QUESTIONS</span>
            </h3>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-bold text-foreground text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-foreground transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-muted-foreground font-light leading-relaxed border-t border-border/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
