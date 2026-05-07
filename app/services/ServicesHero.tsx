"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] pt-32 pb-stack-lg px-6 md:px-margin-page flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM7XYZKpnVeBOFrc7ZyvlL52d-pwFFq9DECgIBnGYwV2RNPUsonYzoCxdHPo3zx53iOI95fH9a9LnFVPAYm6kcet6ZNbZ6uu9uXTzAOXkLlzsg0Nukxq_vHqI0hn0rsnXa9LP4xU_6Q5xD_YPK_l7-YH_URMrq2IPzOi7ot2_ekXS_ttJRquTwyazdLrLaSTlZkrqm_12Ra8gFXjoA0WfhZcE282nSLMZeivMGRTCuxbghb5-xl0fZuJ1xYcF2gyBMxg1lFZ8inlc"
          alt="Luxury minimalist interior"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-label-sm font-label text-primary tracking-[0.2em] uppercase mb-6">
            OUR SERVICES
          </p>
          <h1 className="font-display text-[40px] md:text-display-xl leading-tight text-on-surface mb-8">
            Elevating the <br />
            <span className="italic font-extralight">Art of Living.</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-lg">
            Bespoke interior solutions that harmonize architecture with the human
            experience. Every space tells a story of intention.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
