"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="py-section-gap px-6 md:px-margin-page max-w-[1440px] mx-auto relative overflow-hidden">
      {/* Philosophy Statement */}
      <div className="text-center flex flex-col items-center mb-stack-lg">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-label-sm font-label text-primary tracking-[0.2em] uppercase mb-stack-md"
        >
          Our Philosophy
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[32px] md:text-display-xl text-on-surface max-w-4xl leading-tight mb-stack-lg"
        >
          We believe in the power of &apos;Silent Luxury&apos;—spaces that speak
          through meticulous restraint.
        </motion.h2>

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-px h-24 bg-outline-variant/50 mb-stack-lg origin-top"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-body-lg text-on-surface-variant max-w-2xl"
        >
          True elegance is found in the subtraction of the unnecessary. By
          focusing on raw materiality, precise proportions, and the interplay of
          light and shadow, we curate environments that offer sanctuary in an
          increasingly loud world.
        </motion.p>
      </div>

      {/* Editorial Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-[4/5] bg-surface-container relative overflow-hidden group"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuAPBXevFK-_uk7yD-V7uu_dBmZJsY494yo4ZTj6R0rVRM-6QA-EcStTqznUJMouI9rz-I2JzLKAQ9x9Qnx12q-mMJvJ0kD2izrN82WmWAf2JTD3yckfFpmFLDsSWsiN-_PClpc7CAMtM8xikJbtpuSJaZ8O0hjBX2N4d2ToQVlDHULVEx2MRIOE-MlMfvQ_2hLVpGAT_Gn869YtsbTQx-QtJoqd6F2YHTwBe8fGjuJfDqmRidKthtnw4iZdyh_nvLCkD6-qX0ZMU"
            alt="Serene minimalist interior with linen sofa and travertine table"
            fill
            className="object-cover smooth-ease-slow group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 smooth-ease" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="aspect-[4/5] flex flex-col justify-center px-6 md:px-12 bg-surface-container-lowest border border-outline-variant/10"
        >
          <span className="text-label-sm font-label text-primary tracking-[0.2em] mb-6">
            ATMOSPHERE
          </span>
          <h3 className="font-headline text-headline-md mb-stack-sm leading-tight text-on-surface">
            Curating the invisible elements of design.
          </h3>
          <p className="text-body-md text-on-surface-variant mb-8">
            We believe that luxury is not what you see, but what you feel. The
            warmth of a texture, the silence of a well-placed wall, the rhythm of
            morning light.
          </p>
          <a className="inline-flex items-center gap-2 text-label-sm font-label text-primary border-b border-primary/30 pb-1 w-fit hover:border-primary smooth-ease group/link cursor-pointer">
            EXPLORE COLLECTIONS
            <span className="material-symbols-outlined text-[14px] group-hover/link:translate-x-1 smooth-ease">
              north_east
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
