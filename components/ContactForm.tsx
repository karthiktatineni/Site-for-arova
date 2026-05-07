"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-margin-page bg-white">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-label-sm font-label text-primary tracking-[0.3em] uppercase">Connect With Us</span>
          <h2 className="font-display text-[32px] md:text-headline-lg mt-4">Begin Your Journey</h2>
          <p className="text-body-md text-on-surface-variant mt-4">
            For curated interior solutions and architectural consultations at AROVA, please reach out via our digital atelier.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-label-sm font-label text-on-surface-variant uppercase tracking-widest">Full Name</label>
                <input type="text" required className="w-full bg-[#faf9f6] border border-outline-variant/30 rounded-lg p-4 focus:border-primary outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-label-sm font-label text-on-surface-variant uppercase tracking-widest">Email Address</label>
                <input type="email" required className="w-full bg-[#faf9f6] border border-outline-variant/30 rounded-lg p-4 focus:border-primary outline-none transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-label-sm font-label text-on-surface-variant uppercase tracking-widest">Message</label>
              <textarea rows={6} required className="w-full bg-[#faf9f6] border border-outline-variant/30 rounded-lg p-4 focus:border-primary outline-none transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full py-5 bg-primary text-on-primary font-label tracking-[0.2em] rounded-lg hover:bg-on-surface transition-colors shadow-lg shadow-primary/10">
              REQUEST CONSULTATION
            </button>
          </form>
        ) : (
          <div className="text-center py-20 bg-[#faf9f6] rounded-2xl border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-[64px] mb-6 block">check_circle</span>
            <h3 className="font-headline text-headline-md text-on-surface">Thank You</h3>
            <p className="text-body-md text-on-surface-variant mt-2">Your request has been received. We'll be in touch within 48 hours.</p>
          </div>
        )}
      </div>
    </section>
  );
}
