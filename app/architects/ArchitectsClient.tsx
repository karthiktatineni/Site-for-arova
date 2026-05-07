"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { urlForImage } from "@/sanity/lib/image";

export default function ArchitectsClient({ initialArchitects }: { initialArchitects: any[] }) {
  // If no architects in CMS, use the static ones as fallback or show empty
  const architects = initialArchitects.length > 0 ? initialArchitects : [];

  return (
    <div className="pt-16 pb-stack-md min-h-screen bg-[#faf9f6]">
      <section className="px-6 md:px-margin-page mb-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[8px] font-label text-primary tracking-[0.4em] uppercase mb-1"
          >
            THE STUDIO
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-[24px] md:text-[32px] leading-tight text-on-surface mb-1"
          >
            Meet Our <br />
            <span className="italic font-extralight text-primary/80">Architects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] text-on-surface-variant max-w-md mx-auto"
          >
            A collective of visionaries dedicated to the intellectual pursuit of beauty.
          </motion.p>
        </div>
      </section>

      <section className="px-6 md:px-margin-page">
        <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          {architects.map((architect, i) => (
            <motion.div 
              key={architect._id || architect.slug} 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <Link href={`/architects/${architect.slug}`} className="block overflow-hidden rounded-lg bg-white shadow-sm border border-outline-variant/10 hover:shadow-md transition-all duration-500">
                <div className="aspect-square relative overflow-hidden bg-surface-container">
                  {architect.image && (
                    <img
                      src={urlForImage(architect.image).url()}
                      alt={architect.name}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-headline text-body-md text-on-surface group-hover:text-primary transition-colors duration-300">
                      {architect.name}
                    </h3>
                    <p className="text-[9px] text-on-surface-variant uppercase tracking-wider">
                      {architect.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full group-hover:bg-primary transition-all duration-300 group/btn">
                    <span className="text-[9px] font-label tracking-[0.2em] text-primary group-hover:text-white uppercase">Profile</span>
                    <span className="material-symbols-outlined text-[14px] text-primary group-hover:text-white">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
