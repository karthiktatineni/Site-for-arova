"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-margin-page py-stack-lg"
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-stack-md"
        >
          <span className="text-label-sm font-label text-primary tracking-[0.2em] mb-4 block">
            INQUIRY
          </span>
          <h2 className="font-headline text-headline-lg text-on-surface">
            Begin Your Journey
          </h2>
          <p className="text-body-md text-on-surface-variant mt-4">
            For curated interior solutions and architectural consultations,
            please reach out via our digital atelier.
          </p>
        </motion.div>

        {/* Form */}
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Full Name */}
              <div className="group relative">
                <label
                  className={`block text-label-sm font-label uppercase tracking-[0.1em] mb-2 smooth-ease ${
                    focusedField === "name"
                      ? "text-primary"
                      : "text-on-surface-variant"
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. MARCUS AURELIUS"
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary smooth-ease text-body-md text-on-surface placeholder:text-on-surface-variant/30 outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="group relative">
                <label
                  className={`block text-label-sm font-label uppercase tracking-[0.1em] mb-2 smooth-ease ${
                    focusedField === "email"
                      ? "text-primary"
                      : "text-on-surface-variant"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="hello@atelier.com"
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary smooth-ease text-body-md text-on-surface placeholder:text-on-surface-variant/30 outline-none"
                  required
                />
              </div>

              {/* Interest */}
              <div className="group relative">
                <label
                  className={`block text-label-sm font-label uppercase tracking-[0.1em] mb-2 smooth-ease ${
                    focusedField === "interest"
                      ? "text-primary"
                      : "text-on-surface-variant"
                  }`}
                >
                  Interest
                </label>
                <select
                  onFocus={() => setFocusedField("interest")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary smooth-ease text-body-md text-on-surface appearance-none outline-none cursor-pointer"
                >
                  <option>RESIDENTIAL CURATION</option>
                  <option>ARCHITECTURAL LIGHTING</option>
                  <option>FURNITURE COLLECTIONS</option>
                  <option>COMMERCIAL SPACES</option>
                </select>
              </div>

              {/* Message */}
              <div className="group relative">
                <label
                  className={`block text-label-sm font-label uppercase tracking-[0.1em] mb-2 smooth-ease ${
                    focusedField === "message"
                      ? "text-primary"
                      : "text-on-surface-variant"
                  }`}
                >
                  Message
                </label>
                <textarea
                  placeholder="DESCRIBE YOUR VISION..."
                  rows={4}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary smooth-ease text-body-md text-on-surface placeholder:text-on-surface-variant/30 resize-none outline-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-primary text-on-primary text-label-sm font-label tracking-[0.2em] shadow-lg shadow-primary/10 hover:shadow-primary/20 smooth-ease flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <span className="relative z-10">REQUEST CONSULTATION</span>
                  <span className="material-symbols-outlined text-[18px] relative z-10 group-hover:translate-x-1 smooth-ease">
                    arrow_forward
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#7a6a52] to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 smooth-ease" />
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center py-20"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="material-symbols-outlined text-primary text-[64px] mb-6 block"
              >
                check_circle
              </motion.span>
              <h3 className="font-headline text-headline-md text-on-surface mb-4">
                Thank You
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Your consultation request has been received. We&apos;ll be in touch
                within 48 hours.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
