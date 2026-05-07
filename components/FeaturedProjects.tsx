"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: "1",
    title: "The Obsidian Kitchen",
    category: "Residential | Copenhagen",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrTWFhyC8Qri344Y7dVMQShmWzl7KK1VeZ70GB9sNRDLUFgIN_n6C33kKgYStc3uA0W9CpVqgodCTxMjJIqICpFwls_jicycloFmnUcuL5UISuYCoIvpb2bG16y8aWPO0Mzp--K0StOm4L9i-V0QnqS2k28-4_jvnpOkIQkVNgYIS1E0x7zkLaSrKIe_w_9yOtUJjoi2qw7CIPJaITXcq1C1vUA7ofAE-4YUQvbOj0l6KJ7usPsA3TMBfGivyZLQXjjNfFhX3SyL0",
    alt: "High-end modern kitchen with dark wood cabinetry and marble island",
    offset: false,
  },
  {
    id: "2",
    title: "Nordic Sanctuary",
    category: "Residential | Oslo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqjgIoFxxrQNJJ7Wmtwe0KO9OMPa4ASCVdTa4QCXEhY47OYTCkLyiKru92nfLl9DWZe3LWsmER8dxNvP94L1GOpkEb0_ZA1kNg1fmiRxcwDkFOGl77e7Zw2039AZRgyKpLzfUD84MEsiy9pXBZvlS8xGqatO510LrNmOEWPbyE-2lD1RHEYHE7OL5WZhs35nrK5HzDXpqjAaTfdAYnbO4bzk03rN8ET_CK4bzXmRsBxoNmNJlM1Ww6ifo7N5RyRYRq6DEDtPpfyXA",
    alt: "Spacious airy bedroom with floor-to-ceiling windows overlooking a forest",
    offset: true,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-stack-lg px-6 md:px-margin-page">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-lg gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-label-sm font-label text-primary tracking-[0.15em] uppercase mb-4">
              SELECTED WORKS
            </p>
            <h3 className="font-headline text-headline-lg text-on-surface">
              Curated Collections
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="#"
              className="text-label-sm font-label text-on-surface-variant border-b border-outline hover:text-primary smooth-ease tracking-[0.1em]"
            >
              VIEW ALL PROJECTS
            </Link>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group cursor-pointer ${
                project.offset ? "md:mt-24" : ""
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden mb-stack-sm relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 smooth-ease-slow"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 smooth-ease" />

                {/* Hover reveal label */}
                <motion.div
                  className="absolute bottom-4 left-4 text-label-sm font-label text-white/80 tracking-[0.15em] opacity-0 group-hover:opacity-100 smooth-ease translate-y-2 group-hover:translate-y-0"
                >
                  VIEW PROJECT
                </motion.div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline text-headline-md text-on-surface group-hover:text-primary smooth-ease">
                    {project.title}
                  </h4>
                  <p className="text-body-md text-on-surface-variant">
                    {project.category}
                  </p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 smooth-ease">
                  north_east
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
