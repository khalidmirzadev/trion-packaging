import type { Metadata } from "next";
import { IndustriesClient } from "@/components/industries/industries-client";

export const metadata: Metadata = {
  title: "Packaging Solutions by Industry | Trion Packaging",
  description:
    "Custom packaging engineered for 25+ industry sectors — cosmetics, food, pharma, electronics, retail, and more. FDA-compliant substrates, premium finishes, and 24-hour CAD dieline turnaround from our Newark facility.",
  openGraph: {
    title: "Packaging Solutions by Industry | Trion Packaging",
    description:
      "Industry-specific custom packaging for cosmetics, food, pharma, electronics, retail, and specialty goods. B2B manufacturing with ±0.5mm tolerances and 24-hour quote turnaround.",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <main className="flex-1 flex flex-col">
      <IndustriesClient />
    </main>
  );
}
