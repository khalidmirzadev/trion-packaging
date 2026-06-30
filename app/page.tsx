import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { CategoriesSection } from "@/components/categories-section";
import { IndustriesSection } from "@/components/industries-section";
import { MaterialsSection } from "@/components/materials-section";
import { PrintingSection } from "@/components/printing-section";
import { FinishesSection } from "@/components/finishes-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Premium B2B Corporate Packaging | Trion Packaging",
  description: "Trion Packaging provides high-quality, custom structural corporate packaging designed to elevate your brand value and optimize logistics safety.",
};

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <CategoriesSection />
      <IndustriesSection />
      <MaterialsSection />
      <PrintingSection />
      <FinishesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
