"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.5,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="https://lh3.googleusercontent.com/aida-public/AB6AXuCFHRtejjfvL122QSTRisuJhpRINO-4f8VNgtbI-4WzXFLAlqbq7x5LmCwFGnQK8ixp-W2NX2YzjVg0Te1FFoKk9bjjEn-T_FOsCLp6iejjY-iBEZXnGpbV-5FNVnt7L5EMxmRk0UuGXL2nP2rDQ3Y5fcm4oNb2LgB-NKPCZicx2OmXkyj7dsqskJVOsdj2zUmcxm5FqWrKKNa9liR49Uen_1tSF_WztXhH9QxPBIzxd1d2cun6QZjxeNmR5Sxrf3bQw61LDzAhkAU"
        >
          <source src="/Room_transformation_luxury_interior_202605072129.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />
        <div className="absolute inset-0 grain-overlay opacity-30 z-20 pointer-events-none" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-30 max-w-[1440px] mx-auto px-6 md:px-margin-page text-center text-white"
      >
        <p className="text-label-sm font-label tracking-[0.5em] uppercase mb-8 text-white/80">
          ATELIER OF SPACE
        </p>

        <h1 className="font-display text-[54px] sm:text-[72px] md:text-[100px] lg:text-[130px] leading-[0.85] mb-10 tracking-tighter">
          LUMIÈRE <br />
          <span className="italic font-extralight opacity-90">ARCHITECTS</span>
        </h1>

        <p className="text-body-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Defining the intersection of light, material, and human experience through 
          high-end architectural visualization and curated interior design.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group px-12 py-5 bg-white text-black text-label-sm font-label tracking-[0.2em] hover:bg-primary hover:text-on-primary smooth-ease active:scale-95">
            VIEW PORTFOLIO
          </button>
          <button className="px-12 py-5 border border-white/30 text-white text-label-sm font-label tracking-[0.2em] hover:bg-white/10 smooth-ease">
            THE ATELIER
          </button>
        </div>
      </div>

      {/* Stats / Detail Footer */}
      <div className="absolute bottom-12 left-0 right-0 z-30 px-6 md:px-margin-page">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex items-center gap-8">
            <div className="text-left">
              <p className="text-[24px] font-display text-white mb-0">15+</p>
              <p className="text-[10px] font-label text-white/50 tracking-widest uppercase">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-left">
              <p className="text-[24px] font-display text-white mb-0">218+</p>
              <p className="text-[10px] font-label text-white/50 tracking-widest uppercase">Happy Clients</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] font-label tracking-[0.3em] text-white/40 uppercase">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-12 bg-white/30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
