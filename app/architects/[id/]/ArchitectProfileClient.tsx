"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { urlForImage } from "@/sanity/lib/image";

export default function ArchitectProfileClient({ architect }: { architect: any }) {
  // Helper to get image URL whether it's a Sanity object or a string
  const getImageUrl = (image: any) => {
    if (!image) return "";
    if (typeof image === 'string') return image;
    return urlForImage(image).url();
  };

  return (
    <div className="pt-32 pb-24 bg-[#faf9f6] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin-page">
        {/* Header Breadcrumb */}
        <Link href="/architects" className="inline-flex items-center gap-2 text-[10px] font-label text-primary tracking-[0.3em] uppercase mb-12 hover:opacity-70 smooth-ease">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          Back to Team
        </Link>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Main Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-4">
              <span className="text-label-sm font-label text-primary tracking-[0.3em] uppercase">{architect.role}</span>
              <h1 className="text-[48px] md:text-[64px] font-display leading-[1.1] text-on-surface">
                {architect.name.split(' ')[0]} <br />
                <span className="italic font-extralight text-primary/80">{architect.name.split(' ').slice(1).join(' ')}</span>
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-outline-variant/10">
              <div className="space-y-1">
                <p className="text-[10px] font-label text-on-surface-variant/60 uppercase tracking-widest">Experience</p>
                <p className="text-body-md font-medium">{architect.experience}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-label text-on-surface-variant/60 uppercase tracking-widest">Registration</p>
                <p className="text-body-md font-medium">{architect.registration}</p>
              </div>
            </div>

            <p className="text-body-lg text-on-surface-variant leading-relaxed italic">
              {architect.bio}
            </p>

            <button className="flex items-center gap-6 bg-primary text-on-primary px-8 py-4 rounded-full hover:bg-on-surface transition-all group w-fit shadow-lg shadow-primary/20">
              <span className="font-label tracking-[0.2em] text-label-sm uppercase">Request Portfolio PDF</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">download</span>
            </button>
          </motion.div>

          {/* Centered Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 flex items-start justify-center"
          >
            <div className="w-full max-w-[320px] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700">
              <img src={getImageUrl(architect.image)} alt={architect.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>

          {/* Expertise Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 space-y-12 bg-white p-10 rounded-3xl border border-outline-variant/10 shadow-sm"
          >
            <div>
              <h3 className="text-label-sm font-label text-on-surface tracking-[0.3em] uppercase mb-8">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {architect.expertise?.map((item: string) => (
                  <span key={item} className="px-4 py-2 bg-[#faf9f6] border border-outline-variant/20 rounded-lg text-[12px] font-medium text-on-surface-variant">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6 border-t border-outline-variant/10 pt-8">
              <h3 className="text-label-sm font-label text-on-surface tracking-[0.3em] uppercase">Education</h3>
              {architect.qualifications?.map((q: any) => (
                <div key={q.detail} className="space-y-1">
                  <p className="text-[10px] font-label text-primary">{q.year}</p>
                  <p className="text-body-sm text-on-surface-variant">{q.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Editorial Portfolio Grid */}
        <section className="space-y-12">
          <div className="flex items-end justify-between border-b border-outline-variant/10 pb-8">
            <h2 className="text-headline-lg font-headline">Selected Projects</h2>
            <p className="text-body-sm text-on-surface-variant max-w-[240px] text-right">A curation of personal works and artistic explorations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architect.portfolio?.map((project: any, i: number) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-surface-container"
              >
                <img src={getImageUrl(project.mainImage)} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white/60 text-[10px] font-label tracking-[0.2em] uppercase mb-2">{project.category}</p>
                  <h4 className="text-white text-headline-sm font-headline">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
