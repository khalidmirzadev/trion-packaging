import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/gallery-client";

export const metadata: Metadata = {
  title: "Packaging Gallery & Showroom | Trion Packaging",
  description:
    "Browse Trion Packaging's portfolio of custom packaging solutions — cosmetic boxes, rigid setup boxes, e-commerce mailers, food packaging, luxury retail, and more. 10M+ units produced across 25+ industries.",
  openGraph: {
    title: "Packaging Gallery & Showroom | Trion Packaging",
    description:
      "Real packaging solutions delivered to brands across cosmetics, food, retail, luxury, and e-commerce. Offset litho-lamination, spot UV, foil stamping, and custom CAD structures.",
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <main className="flex-1 flex flex-col">
      <GalleryClient />
    </main>
  );
}
