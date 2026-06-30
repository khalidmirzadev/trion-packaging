import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Finishes & Embellishments | Trion Packaging",
  description: "Specialized tactile and visual packaging finishes: Matte/gloss lamination, foil stamping, spot UV coating, embossing, and debossing.",
};

export default function FinishesPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-background">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Finishes &amp; Embellishments
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-md">
        Premium visual and tactile embellishments designed to give your packaging an Apple-quality luxury feel.
      </p>
    </main>
  );
}
