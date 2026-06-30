import type { Metadata } from "next";
import { BlogClient } from "@/components/blog/blog-client";

export const metadata: Metadata = {
  title: "Packaging Insights & Resources | Trion Packaging Blog",
  description:
    "Expert guides on packaging design, substrate materials, printing methods, sustainability, and B2B industry trends — written by Trion Packaging's structural engineers and production specialists.",
  openGraph: {
    title: "Packaging Insights & Resources | Trion Packaging Blog",
    description:
      "In-depth articles on custom packaging design, materials, offset and digital printing, and supply chain trends from the Trion Packaging engineering team.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="flex-1 flex flex-col">
      <BlogClient />
    </main>
  );
}
