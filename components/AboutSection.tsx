"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "architecture",
    title: "The Philosophy",
    description:
      "We believe in the intellectual pursuit of beauty. LUMIÈRE transforms environments into sensory narratives, where every material choice and structural line serves a purpose of serenity.",
    link: "LEARN MORE",
    span: 2,
  },
  {
    icon: "auto_awesome",
    title: "Precision",
    description:
      "Hand-selected materials meet exact architectural execution.",
    span: 1,
  },
];

const stats = [
  { value: "120+", label: "Projects Curated" },
  { value: "8", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function AboutSection() {
  return (
    <section className="py-stack-lg px-6 md:px-margin-page relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-stack-lg">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${
                card.span === 2 ? "md:col-span-2" : ""
              } glass-card p-8 md:p-stack-lg border border-outline-variant/20 flex flex-col justify-between group hover:shadow-lg hover:shadow-primary/5 smooth-ease`}
            >
              <div>
                <span className="material-symbols-outlined text-primary text-[40px] mb-stack-md block">
                  {card.icon}
                </span>
                <h3
                  className={`font-headline ${
                    card.span === 2 ? "text-headline-lg" : "text-headline-md"
                  } text-on-surface mb-stack-sm`}
                >
                  {card.title}
                </h3>
                <p
                  className={`${
                    card.span === 2 ? "text-body-lg" : "text-body-md"
                  } text-on-surface-variant ${
                    card.span === 2 ? "max-w-xl" : ""
                  } ${card.span === 1 ? "text-center" : ""}`}
                >
                  {card.description}
                </p>
              </div>
              {card.link && (
                <a className="mt-stack-md text-label-sm font-label text-primary flex items-center gap-2 group/link cursor-pointer">
                  {card.link}
                  <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 smooth-ease">
                    arrow_forward
                  </span>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-gutter">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center py-stack-md border-t border-outline-variant/20"
            >
              <div className="font-display text-headline-lg text-on-surface mb-2">
                {stat.value}
              </div>
              <div className="text-label-sm font-label text-on-surface-variant tracking-[0.15em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
