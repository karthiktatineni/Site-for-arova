"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const showcaseProjects = [
  {
    title: "The Nordic Pavilion",
    location: "Oslo, Norway",
    tag: "Residential",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjtBgPOMNQp3aSn6U2TfDnF4uji7fjzixEWBZG8fvnRZ2Ts852Glfpei5GoE4H6ufKEmyUAYiFP2g9KnrYrQwmOz66m1USDDQkHJsDXnmA4BhyV3tf06VCBTlcM7brwMrcvDXW2KY5BxMuprN5ZnqUYjrBy7sMXmQOOUfgfR1vo5TwXn8J58TmyUPZSymkXMNVgjCbjhyTgSJ9leo4kqYZyHFYPDnIMdgEN3lklujyf85qOjC0eajjxz1YrR4-75fDRUrVVswp2Yw",
    alt: "Serene minimalist bedroom in Oslo with Nordic light",
  },
  {
    title: "Maison Blanc",
    location: "Paris, France",
    tag: "Heritage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9UYvkc7IDxMiCLqDJQM0SJtkLEqE_-W-NtJhTsrXW8w6wb2cjaX777fsuCrYr-ttFHMQiTf7UQntr9jq_W-qsq6SK-N59Zdset3QvP7Kz5TiN-OeVxTbEPdmEU4QFR4z3oSTJfG7jgC4VuRzA6a8HqcW1Y-gmv3e7j8Ob5biZJ4V-VBz39k3w6r7rncOWFhLLwsu0-tNfyI_Q-TlFnnHnh8WzmRf-ytb7Bb3hr69KNZLD-GuoB_S2ndyQqHRdL7AHxIl76-UsKts",
    alt: "Chic minimalist Parisian apartment with herringbone floors",
  },
  {
    title: "Villa Serene",
    location: "Mallorca, Spain",
    tag: "Hospitality",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDILCox9FPOiV1b5XVaEWC8jMK3i957TZjLwHJ6ysksHW8ROz3yVfEuUhrbAGJxVg4Q3n2FC5gHDvHS-_sqY7GLP-QXPHMA9QJSPc824_0N3h1n6DhHe7gVkhdaZCf51s3Xt-XgmwEDm8dNJuiEL4ZWPZf2TYBI49RJ5mRQDY-v-ptmx_kNNF2EU10g-_IF_ZZ89XLqfPAWtVpXTACuQOGPCkFkkO9yRq0kuzzptyPPo-n6HY3tGLGezkWsyF4_kxVPu4-tsTlnI8A",
    alt: "Luxurious coastal villa kitchen with travertine and gold accents",
  },
];

export default function ProjectShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = scrollContainerRef.current;
      const section = sectionRef.current;
      if (!container || !section) return;

      // GSAP horizontal scroll animation
      const totalScroll = container.scrollWidth - container.clientWidth;

      gsap.to(container, {
        scrollLeft: totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 20%",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-stack-lg relative overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-margin-page max-w-[1440px] mx-auto mb-stack-lg flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-label-sm font-label text-primary tracking-[0.15em] uppercase mb-4">
            PORTFOLIO
          </p>
          <h2 className="font-headline text-headline-lg text-on-surface">
            Selected Works
          </h2>
        </motion.div>
        <div className="flex gap-4">
          <button
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
              }
            }}
            className="w-12 h-12 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary smooth-ease"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
              }
            }}
            className="w-12 h-12 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary smooth-ease"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Cards */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-gutter px-6 md:px-margin-page pb-stack-md no-scrollbar snap-x snap-mandatory"
      >
        {showcaseProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="min-w-[85vw] md:min-w-[600px] flex-shrink-0 snap-start bg-surface-container-lowest border border-outline-variant/30 p-1 shadow-[0_8px_32px_rgba(0,0,0,0.02)] group hover:shadow-[0_16px_48px_rgba(0,0,0,0.04)] smooth-ease-slow"
          >
            <div className="h-[350px] md:h-[400px] w-full relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover group-hover:scale-105 smooth-ease-slow"
                sizes="(max-width: 768px) 85vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 smooth-ease" />
            </div>
            <div className="p-6 md:p-10 flex justify-between items-start">
              <div>
                <h3 className="font-headline text-headline-md text-on-surface mb-2 group-hover:text-primary smooth-ease">
                  {project.title}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {project.location}
                </p>
              </div>
              <span className="text-label-sm font-label text-primary border border-primary/20 px-4 py-2 tracking-[0.1em] uppercase">
                {project.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
