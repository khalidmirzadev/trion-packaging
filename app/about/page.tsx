import type { Metadata } from "next";
import { AboutClient } from "@/components/about/about-client";

export const metadata: Metadata = {
  title: "About Us | Trion Packaging",
  description:
    "Learn how Trion Packaging's 50,000 sq ft Newark facility combines CAD structural engineering with high-fidelity printing to deliver premium B2B custom packaging with ±0.5mm tolerances and 24-hour dieline turnaround.",
  openGraph: {
    title: "About Us | Trion Packaging",
    description:
      "Premier B2B manufacturer of custom industrial and retail packaging boxes — merging structural CAD engineering with high-fidelity printing.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col">
      <AboutClient />
    </main>
  );
}
