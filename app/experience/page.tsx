import type { Metadata } from "next";
import { Suspense } from "react";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactForm from "@/components/ContactForm";
import PhilosophySection from "@/components/PhilosophySection";
import ExperienceHero from "./ExperienceHero";

export const metadata: Metadata = {
  title: "AROVA | Experience & Contact",
  description:
    "Hear from our distinguished clients and begin your own journey with AROVA. Schedule a consultation for curated interior solutions.",
};

export default function ExperiencePage() {
  return (
    <main className="bg-[#faf9f6]">
      <Suspense fallback={<div className="h-screen flex items-center justify-center font-label tracking-widest animate-pulse">LOADING EXPERIENCE...</div>}>
        <ExperienceHero />
        <PhilosophySection />
        <TestimonialsCarousel />
        <ContactForm />
      </Suspense>
    </main>
  );
}
