import { client } from "@/sanity/lib/client";
import { architectsQuery } from "@/sanity/lib/queries";
import ArchitectsClient from "./ArchitectsClient";

export const metadata = {
  title: "Meet Our Architects | AROVA",
  description: "A collective of visionaries dedicated to the intellectual pursuit of beauty.",
};

export default async function ArchitectsPage() {
  const architects = await client.fetch(architectsQuery);

  return <ArchitectsClient initialArchitects={architects} />;
}
