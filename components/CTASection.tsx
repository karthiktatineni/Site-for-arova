"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CTASection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-[120px] md:py-[160px] px-6 md:px-margin-page text-center relative overflow-hidden bg-surface-container-low">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[140px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-label-sm font-label text-primary tracking-[0.2em] uppercase mb-6 block"
        >
          START YOUR PROJECT
        </motion.span>

        <h2 className="font-display text-[32px] md:text-display-xl text-on-surface mb-8 leading-tight">
          Let&apos;s Create Your <br />
          <span className="italic font-extralight">Dream Space</span>
        </h2>

        <p className="text-body-lg text-on-surface-variant mb-12 max-w-lg mx-auto">
          Limited availability for private residential projects this season.
          Begin your journey with a complimentary consultation.
        </p>

        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex-grow flex flex-col items-start bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-outline-variant/10"
              >
                <label className="text-[10px] font-label text-primary tracking-widest px-4 pt-2 uppercase">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. JULIAN SCHMIDT"
                  required
                  className="w-full bg-transparent px-4 pb-3 pt-1 text-label-sm tracking-widest outline-none"
                />
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex-grow flex flex-col items-start bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-outline-variant/10"
              >
                <label className="text-[10px] font-label text-primary tracking-widest px-4 pt-2 uppercase">Email Address</label>
                <input
                  type="email"
                  placeholder="hello@studio.com"
                  required
                  className="w-full bg-transparent px-4 pb-3 pt-1 text-label-sm tracking-widest outline-none"
                />
              </motion.div>

              <motion.button
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-6 bg-primary text-on-primary text-label-sm font-label tracking-[0.2em] shadow-xl shadow-primary/20 smooth-ease shrink-0"
              >
                SCHEDULE
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 border border-primary/20 bg-white shadow-xl text-primary font-label tracking-[0.2em]"
            >
              THANK YOU. WE WILL BE IN TOUCH SOON.
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
