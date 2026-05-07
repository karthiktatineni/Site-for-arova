import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectShowcase from "@/components/ProjectShowcase";
import PhilosophySection from "@/components/PhilosophySection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <ProjectShowcase />
      <PhilosophySection />
      <CTASection />
    </>
  );
}
