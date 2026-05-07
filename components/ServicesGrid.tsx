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
    <section className="py-stack-lg px-6 md:px-margin-page bg-surface-container-lowest">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-stack-lg text-center"
        >
          <p className="text-label-sm font-label text-primary tracking-[0.15em] uppercase mb-4">
            OUR EXPERTISE
          </p>
          <h2 className="font-display text-[32px] md:text-headline-lg text-on-surface mx-auto max-w-lg">
            Elevating the Art of Living
          </h2>
          <p className="text-body-lg text-on-surface-variant mt-4 max-w-xl mx-auto">
            Bespoke interior solutions that harmonize architecture with the human
            experience at AROVA.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -5 }}
              className="group bg-white border border-outline-variant/20 p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer flex flex-col h-full relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-out" />
              
              <div className="mb-stack-md text-primary">
                <span
                  className="material-symbols-outlined text-[48px]"
                  style={{
                    fontVariationSettings: "'FILL' 0, 'wght' 100, 'GRAD' 0, 'opsz' 24",
                  }}
                >
                  {service.icon}
                </span>
              </div>

              <h3 className="font-headline text-headline-md text-on-surface mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-body-md text-on-surface-variant flex-grow leading-relaxed">
                {service.description}
              </p>

              {/* Animated arrow button */}
              <div className="mt-8 flex items-center gap-3 text-label-sm font-label text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                <span>LEARN MORE</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
