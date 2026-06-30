import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Printing Services | Trion Packaging",
  description: "High-fidelity industrial printing capabilities: Offset lithography, flexography, digital printing, and UV curing.",
};

export default function PrintingPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-background">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Custom Printing Services
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-md">
        State-of-the-art printing technologies that make your brand artwork stand out.
      </p>
    </main>
  );
}
