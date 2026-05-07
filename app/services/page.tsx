import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServicesHero from "./ServicesHero";
import CTASection from "@/components/CTASection";
import ServicesPortfolio from "@/app/services/ServicesPortfolio";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

export const metadata = {
  title: "AROVA | Services & Portfolio",
  description: "Bespoke interior solutions and our portfolio of works. Discover our methodology.",
};

export default async function ServicesPage() {
  const projects = await client.fetch(projectsQuery);

  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesPortfolio initialProjects={projects} />
      <ServicesImageBreak />
      <ProcessTimeline />
      <CTASection />
    </>
  );
}

function ServicesImageBreak() {
  return (
    <section className="px-6 md:px-margin-page py-stack-md">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full aspect-[21/9] bg-surface-container overflow-hidden relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM90mpFk7Ke1FOlhrMRyBi584zgytLwF4MAByEIHfqRD3tQLPitfue-oRfNhv9PSI6oO5BxMX6Fc4oD5bxaVdqzqcRak8CL1pbCATZBeyTtQal0ixCRGo4SK-VUGvhaAGuSjaVyIEuMlNvxYJj9tNgE1NQIG70VV2rvSO90_WXTAmUJvHv6HGqGS00hcgN3zco3lQl0bWO377GkQAIaxcXU6hzzVED2SOBlregBGPV-bi1WwR-v188e6YQcur-Xs4nFL9y0K8anDE"
            alt="A serene minimalist living space with high ceilings and floor-to-ceiling windows"
            className="w-full h-full object-cover grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
