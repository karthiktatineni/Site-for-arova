"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const architectsData: Record<string, any> = {
  "vikram-malhotra": {
    name: "Vikram Malhotra",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    department: "Architectural Design & Urban Planning",
    experience: "15 Years",
    designation: "Managing Director – AROVA Studio",
    languages: "English, Hindi, Italian",
    registration: "COA-2009-AR8765",
    bio: "Vikram Malhotra is a highly experienced Architect with over 15 years of practice. He specializes in luxury residential architecture, sustainable urban planning, and the integration of smart home technologies with classic brutalist aesthetics.",
    qualifications: [
      { year: "2008", detail: "B.Arch — Indian Institute of Technology, Kharagpur" },
      { year: "2010", detail: "M.Arch — Politecnico di Milano, Italy" }
    ],
    expertise: ["Luxury Residential", "Brutalist Fusion", "Sustainable Sourcing", "BIM Modeling"],
    portfolio: [
      { title: "The Obsidian Kitchen", type: "Residential", image: "https://images.unsplash.com/photo-1556911220-e15224bbaf39?q=80&w=2070&auto=format&fit=crop", span: "row-span-2" },
      { title: "Maison Blanc", type: "Architectural", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", span: "col-span-1" },
      { title: "Azure Heights", type: "Concept", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", span: "col-span-1" }
    ]
  },
  "ananya-sharma": {
    name: "Ananya Sharma",
    role: "Senior Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    department: "Interior Design & Material Science",
    experience: "12 Years",
    designation: "Principal Designer – AROVA Studio",
    languages: "English, Hindi, French",
    registration: "ID-2012-IN4432",
    bio: "Ananya Sharma is a renowned interior designer known for her 'Tactile Minimalism' approach. She has curated over 100 high-end residential and commercial spaces across the globe.",
    qualifications: [
      { year: "2011", detail: "B.Des Interior Design — NID Ahmedabad" },
      { year: "2013", detail: "Material Science — ENSAD Paris" }
    ],
    expertise: ["Tactile Minimalism", "Bespoke Furniture", "Luminance Mapping", "Color Psychology"],
    portfolio: [
      { title: "Nordic Sanctuary", type: "Interior", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", span: "col-span-2" },
      { title: "Villa Serene", type: "Residential", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop", span: "col-span-1" },
      { title: "Oasis Loft", type: "Commercial", image: "https://images.unsplash.com/photo-1536376074432-bf121770998a?q=80&w=2070&auto=format&fit=crop", span: "col-span-1" }
    ]
  }
};

export default async function ArchitectProfilePage({ params }: { params: { id: string } }) {
  let architect = await client.fetch(architectByIdQuery, { slug: params.id });

  // FALLBACK: If architect is not found in CMS, provide a mock profile for demonstration
  if (!architect) {
    architect = {
      name: "Vikram Malhotra",
      role: "Lead Architect | Design Director",
      bio: "Vikram's design philosophy is rooted in the belief that architecture should be an extension of nature. With over 15 years of experience in luxury residential projects, he brings a unique perspective on the interplay of light and shadow.",
      department: "Architecture & Curation",
      experience: "15+ Years",
      languages: "English, Hindi, Italian",
      registration: "ARCH-7729-IN",
      image: { asset: { _ref: "fallback" }, url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" },
      expertise: ["Luxury Residential", "Biophilic Design", "Sustainable Materials", "Master Planning"],
      qualifications: [
        { year: "2008", detail: "Bachelor of Architecture, IIT Roorkee" },
        { year: "2012", detail: "Masters in Urban Planning, Politecnico di Milano" },
        { year: "2015", detail: "Fellowship in Sustainable Design, AA London" }
      ],
      portfolio: [
        { title: "The Obsidian Kitchen", category: "Residential", slug: "obsidian", mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrTWFhyC8Qri344Y7dVMQShmWzl7KK1VeZ70GB9sNRDLUFgIN_n6C33kKgYStc3uA0W9CpVqgodCTxMjJIqICpFwls_jicycloFmnUcuL5UISuYCoIvpb2bG16y8aWPO0Mzp--K0StOm4L9i-V0QnqS2k28-4_jvnpOkIQkVNgYIS1E0x7zkLaSrKIe_w_9yOtUJjoi2qw7CIPJaITXcq1C1vUA7ofAE-4YUQvbOj0l6KJ7usPsA3TMBfGivyZLQXjjNfFhX3SyL0" },
        { title: "Nordic Sanctuary", category: "Residential", slug: "nordic", mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqjgIoFxxrQNJJ7Wmtwe0KO9OMPa4ASCVdTa4QCXEhY47OYTCkLyiKru92nfLl9DWZe3LWsmER8dxNvP94L1GOpkEb0_ZA1kNg1fmiRxcwDkFOGl77e7Zw2039AZRgyKpLzfUD84MEsiy9pXBZvlS8xGqatO510LrNmOEWPbyE-2lD1RHEYHE7OL5WZhs35nrK5HzDXpqjAaTfdAYnbO4bzk03rN8ET_CK4bzXmRsBxoNmNJlM1Ww6ifo7N5RyRYRq6DEDtPpfyXA" }
      ]
    };
  }

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
                <span className="italic font-extralight text-primary/80">{architect.name.split(' ')[1]}</span>
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

            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              {architect.bio}
            </p>

            <button className="flex items-center gap-6 bg-primary text-on-primary px-8 py-4 rounded-full hover:bg-on-surface transition-all group w-fit">
              <span className="font-label tracking-[0.2em] text-label-sm uppercase">Request Portfolio PDF</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">download</span>
            </button>
          </motion.div>

          {/* Centered Photo (Smaller as requested) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 flex items-start justify-center"
          >
            <div className="w-full max-w-[320px] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700">
              <img src={architect.image} alt={architect.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>

          {/* Expertise Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 space-y-12 bg-white/50 backdrop-blur-sm p-10 rounded-3xl border border-outline-variant/10"
          >
            <div>
              <h3 className="text-label-sm font-label text-on-surface tracking-[0.3em] uppercase mb-8">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {architect.expertise.map((item: string) => (
                  <span key={item} className="px-4 py-2 bg-[#faf9f6] border border-outline-variant/20 rounded-lg text-[12px] font-medium text-on-surface-variant">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-label-sm font-label text-on-surface tracking-[0.3em] uppercase">Education</h3>
              {architect.qualifications.map((q: any) => (
                <div key={q.year} className="space-y-1">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
            {architect.portfolio.map((project: any, i: number) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative group overflow-hidden rounded-2xl ${project.span}`}
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white/60 text-[10px] font-label tracking-[0.2em] uppercase mb-2">{project.type}</p>
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
