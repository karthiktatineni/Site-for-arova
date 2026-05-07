import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectShowcase from "@/components/ProjectShowcase";
import PhilosophySection from "@/components/PhilosophySection";
import CTASection from "@/components/CTASection";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const projects = await client.fetch(projectsQuery);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects initialProjects={projects} />
      <ProjectShowcase />
      <PhilosophySection />
      <CTASection />
    </>
  );
}
