import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AROVA | Our Architects",
  description: "Meet the visionary architects behind AROVA Interiors. Dedicated to the intellectual pursuit of beauty and architectural precision.",
};

export default function ArchitectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
