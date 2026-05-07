"use client";

import { motion } from "framer-motion";

export default function ExperienceHero() {
  return (
    <section className="pt-32 pb-stack-md px-6 md:px-margin-page text-center relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-primary-container/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[200px] h-[200px] bg-secondary-container/10 rounded-full blur-[80px] -z-10" />

      <div className="max-w-xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-label-sm font-label text-primary tracking-[0.2em] mb-6 block"
        >
          VOICES OF HARMONY
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[40px] md:text-display-xl text-on-surface mb-stack-sm leading-tight"
        >
          The AROVA <br />
          <span className="italic font-extralight">Experience</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-body-lg text-on-surface-variant"
        >
          Defining architectural silence and tactile warmth through the eyes of
          our distinguished clients.
        </motion.p>
      </div>
    </section>
  );
}
