"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    quote:
      "The way they manipulate light transformed our residence into a sanctuary. LUMIÈRE doesn't just design rooms; they curate atmospheres.",
    name: "Evelyn Voss",
    title: "Founder, Maven Gallery",
  },
  {
    quote:
      "Impeccable precision. The Scandinavian minimalism combined with rich textures created an intellectual space that feels profoundly personal.",
    name: "Julian Thorne",
    title: "Lead Architect, Archi-Group",
  },
  {
    quote:
      "The process was as serene as the final result. Their commitment to 'Light Luxury' is evident in every tactile detail and hidden light source.",
    name: "Clara Dupont",
    title: "Interior Curator",
  },
  {
    quote:
      "ARCHA transformed our brutalist loft into a sanctuary of calm. Their understanding of light, shadow, and negative space is unparalleled.",
    name: "E. Kensington",
    title: "Residential Client",
  },
];

export default function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <section className="py-stack-lg relative overflow-hidden">
      {/* Section Header */}
      <div className="px-6 md:px-margin-page max-w-[1440px] mx-auto mb-stack-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto"
        >
          <span className="text-label-sm font-label text-primary tracking-[0.2em] mb-4 block">
            VOICES OF HARMONY
          </span>
          <h2 className="font-headline text-headline-lg text-on-surface mb-stack-sm">
            The LUMIÈRE Experience
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Defining architectural silence and tactile warmth through the eyes of
            our distinguished clients.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-6 px-6 md:px-margin-page pb-8"
      >
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center glass-card border border-outline-variant/30 p-8 flex flex-col justify-between min-h-[320px] shadow-[0_40px_40px_-10px_rgba(0,0,0,0.04)] hover:border-primary/40 smooth-ease group relative overflow-hidden"
          >
            <div>
              <span className="material-symbols-outlined text-primary mb-6 block text-[32px]">
                format_quote
              </span>
              <p className="text-body-lg italic text-on-surface leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
            <div className="mt-8 border-t border-outline-variant/20 pt-6">
              <p className="text-label-sm font-label tracking-[0.1em] text-primary uppercase">
                {testimonial.name}
              </p>
              <p className="text-xs text-on-surface-variant mt-1">
                {testimonial.title}
              </p>
            </div>

            {/* Hover accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary smooth-ease group-hover:w-full" />
          </motion.div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, i) => {
          const opacity = useTransform(
            scrollXProgress,
            [
              (i - 0.5) / testimonials.length,
              i / testimonials.length,
              (i + 0.5) / testimonials.length,
            ],
            [0.3, 1, 0.3]
          );
          const scale = useTransform(
            scrollXProgress,
            [
              (i - 0.5) / testimonials.length,
              i / testimonials.length,
              (i + 0.5) / testimonials.length,
            ],
            [1, 1.5, 1]
          );

          return (
            <motion.span
              key={i}
              style={{ opacity, scale }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          );
        })}
      </div>
    </section>
  );
}
