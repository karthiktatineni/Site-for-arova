"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    label: "DISCOVERY",
    title: "Immersive Consultation",
    description:
      "We begin by understanding your rhythm of life, aesthetic sensibilities, and the functional soul of your space.",
  },
  {
    number: "02",
    label: "CONCEPTION",
    title: "The Narrative Board",
    description:
      "Translating abstract ideas into a visual and tactile language of textures, tones, and architectural sketches.",
  },
  {
    number: "03",
    label: "REFINEMENT",
    title: "Precision Detailing",
    description:
      "Selection of artisanal materials and bespoke furniture crafting, ensuring every detail meets our standard of excellence.",
  },
  {
    number: "04",
    label: "REALIZATION",
    title: "Curation & Reveal",
    description:
      "The final installation where your sanctuary is meticulously staged and unveiled in its complete, harmonious form.",
  },
];

export default function ProcessTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!lineRef.current || !timelineRef.current) return;

      // Animate the vertical line drawing
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="py-stack-lg px-6 md:px-margin-page">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-label-sm font-label text-primary tracking-[0.15em] mb-4">
            THE PROCESS
          </p>
          <h2 className="font-headline text-headline-lg text-on-surface">
            The Journey of Creation
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative space-y-16 md:space-y-20">
          {/* Animated Vertical Line */}
          <div className="absolute left-[11px] md:left-[15px] top-0 bottom-0 w-px bg-outline-variant/20">
            <div
              ref={lineRef}
              className="absolute inset-0 w-full bg-primary origin-top"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-12 md:pl-16 group"
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1 top-1 w-[24px] h-[24px] bg-background border-2 border-outline-variant/40 rounded-full flex items-center justify-center group-hover:border-primary smooth-ease">
                <div className="w-2 h-2 bg-outline-variant/50 rounded-full group-hover:bg-primary smooth-ease" />
              </div>

              <div className="max-w-lg">
                <p className="text-label-sm font-label text-primary mb-2 tracking-[0.15em]">
                  {step.number} {step.label}
                </p>
                <h4 className="font-headline text-headline-md text-on-surface mb-3 group-hover:text-primary smooth-ease">
                  {step.title}
                </h4>
                <p className="text-body-md text-on-surface-variant">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
