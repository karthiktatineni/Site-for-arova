"use client";

import { motion } from "framer-motion";
import { urlForImage } from "@/sanity/lib/image";

export default function ServicesPortfolio({ initialProjects }: { initialProjects: any[] }) {
  // Use Sanity projects if available, otherwise use mock data for demo
  const projects = initialProjects.length > 0 ? initialProjects : [
    {
      _id: "m1",
      title: "The Minimalist Loft",
      category: "Residential | Paris",
      mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAM90mpFk7Ke1FOlhrMRyBi584zgytLwF4MAByEIHfqRD3tQLPitfue-oRfNhv9PSI6oO5BxMX6Fc4oD5bxaVdqzqcRak8CL1pbCATZBeyTtQal0ixCRGo4SK-VUGvhaAGuSjaVyIEuMlNvxYJj9tNgE1NQIG70VV2rvSO90_WXTAmUJvHv6HGqGS00hcgN3zco3lQl0bWO377GkQAIaxcXU6hzzVED2SOBlregBGPV-bi1WwR-v188e6YQcur-Xs4nFL9y0K8anDE",
      slug: "minimalist-loft"
    },
    {
      _id: "m2",
      title: "Zen Workspace",
      category: "Commercial | Tokyo",
      mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrTWFhyC8Qri344Y7dVMQShmWzl7KK1VeZ70GB9sNRDLUFgIN_n6C33kKgYStc3uA0W9CpVqgodCTxMjJIqICpFwls_jicycloFmnUcuL5UISuYCoIvpb2bG16y8aWPO0Mzp--K0StOm4L9i-V0QnqS2k28-4_jvnpOkIQkVNgYIS1E0x7zkLaSrKIe_w_9yOtUJjoi2qw7CIPJaITXcq1C1vUA7ofAE-4YUQvbOj0l6KJ7usPsA3TMBfGivyZLQXjjNfFhX3SyL0",
      slug: "zen-workspace"
    },
    {
      _id: "m3",
      title: "Travertine Villa",
      category: "Residential | Milan",
      mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqjgIoFxxrQNJJ7Wmtwe0KO9OMPa4ASCVdTa4QCXEhY47OYTCkLyiKru92nfLl9DWZe3LWsmER8dxNvP94L1GOpkEb0_ZA1kNg1fmiRxcwDkFOGl77e7Zw2039AZRgyKpLzfUD84MEsiy9pXBZvlS8xGqatO510LrNmOEWPbyE-2lD1RHEYHE7OL5WZhs35nrK5HzDXpqjAaTfdAYnbO4bzk03rN8ET_CK4bzXmRsBxoNmNJlM1Ww6ifo7N5RyRYRq6DEDtPpfyXA",
      slug: "travertine-villa"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-margin-page bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-label text-primary tracking-[0.4em] uppercase mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-[32px] md:text-[48px] text-on-surface"
          >
            Project Showcase
          </motion.h2>
          <div className="w-12 h-px bg-primary/30 mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden relative bg-surface-container rounded-sm shadow-sm">
                {project.mainImage && (
                  <img
                    src={typeof project.mainImage === 'string' ? project.mainImage : urlForImage(project.mainImage).url()}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                )}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="mt-8 text-center space-y-2">
                <p className="text-[9px] font-label text-primary tracking-[0.2em] uppercase">
                  {project.category}
                </p>
                <h4 className="font-headline text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
