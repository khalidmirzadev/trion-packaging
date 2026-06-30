import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability | Trion Packaging",
  description: "Learn about our commitment to eco-friendly materials and sustainable manufacturing practices.",
};

export default function SustainabilityPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Sustainability at Trion Packaging
      </h1>
      <p className="mt-4 text-lg text-slate-600 max-w-md">
        Committed to environmental responsibility and eco-friendly solutions.
      </p>
    </main>
  );
}
