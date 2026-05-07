import { client } from "@/sanity/lib/client";
import { architectByIdQuery } from "@/sanity/lib/queries";
import ArchitectProfileClient from "./ArchitectProfileClient";

export const dynamic = "force-dynamic";

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
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
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

  return <ArchitectProfileClient architect={architect} />;
}
