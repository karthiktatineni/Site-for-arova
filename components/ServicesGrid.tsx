"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "architecture",
    title: "Architectural Curation",
    description:
      "Structural refinements and spatial planning that define the flow and light of your sanctuary.",
  },
  {
    icon: "chair",
    title: "Bespoke Interiors",
    description:
      "Custom furniture selection and material palettes curated to reflect individual heritage and taste.",
  },
  {
    icon: "lightbulb",
    title: "Luminance Design",
    description:
      "Advanced lighting schemes that transform ambiance through the subtle interplay of shadow and brilliance.",
  },
  {
    icon: "countertops",
    title: "Modular Kitchens",
    description:
      "Precision-engineered culinary spaces prioritizing hidden functionality and clean planes.",
  },
  {
    icon: "weekend",
    title: "Living Room Design",
    description:
      "Curated focal spaces utilizing ambient lighting, tactile fabrics, and architectural discipline.",
  },
  {
    icon: "handyman",
    title: "Custom Furniture",
    description:
      "Bespoke casegoods and seating crafted from premium timber, stone, and woven textiles.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-stack-lg px-6 md:px-margin-page">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-stack-lg"
        >
          <p className="text-label-sm font-label text-primary tracking-[0.15em] uppercase mb-4">
            OUR EXPERTISE
          </p>
          <h2 className="font-headline text-headline-lg text-on-surface max-w-lg">
            Elevating the Art of Living
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-4 max-w-xl">
            Bespoke interior solutions that harmonize architecture with the human
            experience.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-surface-container-lowest border border-outline-variant/30 p-8 md:p-10 hover:shadow-lg hover:shadow-primary/5 smooth-ease cursor-pointer flex flex-col h-full"
            >
              <div className="mb-stack-md text-primary">
                <span
                  className="material-symbols-outlined text-[40px]"
                  style={{
                    fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24",
                  }}
                >
                  {service.icon}
                </span>
              </div>

              <h3 className="font-headline text-headline-md text-on-surface mb-3 group-hover:text-primary smooth-ease">
                {service.title}
              </h3>

              <p className="text-body-md text-on-surface-variant flex-grow">
                {service.description}
              </p>

              {/* Animated underline */}
              <div className="mt-6 h-px w-8 bg-outline-variant group-hover:w-full group-hover:bg-primary-container smooth-ease-slow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
