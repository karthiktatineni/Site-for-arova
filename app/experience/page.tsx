import type { Metadata } from "next";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactForm from "@/components/ContactForm";
import PhilosophySection from "@/components/PhilosophySection";
import ExperienceHero from "./ExperienceHero";

export const metadata: Metadata = {
  title: "LUMIÈRE | Experience & Contact",
  description:
    "Hear from our distinguished clients and begin your own journey with LUMIÈRE. Schedule a consultation for curated interior solutions.",
};

export default function ExperiencePage() {
  return (
    <>
      <ExperienceHero />
      <TestimonialsCarousel />
      <ContactForm />
      <PhilosophySection />
    </>
  );
}
