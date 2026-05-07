"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "AROVA transformed our residence into a sanctuary of light. Their architectural precision is unparalleled.",
    name: "Evelyn Voss",
    title: "Gallery Director"
  },
  {
    quote: "The intersection of material and shadow in their work creates a profoundly personal atmosphere.",
    name: "Julian Thorne",
    title: "Lead Architect"
  },
  {
    quote: "A seamless process from vision to execution. The AROVA team defines what true luxury should feel like.",
    name: "Clara Dupont",
    title: "Interior Curator"
  }
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-24 px-6 md:px-margin-page bg-[#faf9f6]">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-label-sm font-label text-primary tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="font-display text-[32px] md:text-headline-lg mt-4">The AROVA Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white border border-outline-variant/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="material-symbols-outlined text-primary text-[32px] mb-6">format_quote</span>
              <p className="text-body-md text-on-surface italic leading-relaxed mb-8">"{t.quote}"</p>
              <div className="pt-6 border-t border-outline-variant/10">
                <p className="text-label-sm font-label text-on-surface uppercase tracking-widest">{t.name}</p>
                <p className="text-[12px] text-on-surface-variant/70">{t.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
