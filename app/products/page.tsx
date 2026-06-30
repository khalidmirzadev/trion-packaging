import type { Metadata } from "next";
import { PRODUCT_TAXONOMY } from "@/lib/data/product-taxonomy";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Packaging Products & Solutions | Trion Packaging",
  description:
    "Browse our extensive B2B catalog of premium corporate and industrial packaging solutions: mailer boxes, custom folding cartons, rigid setup boxes, shipping boxes, cosmetic boxes, and more.",
  openGraph: {
    title: "Packaging Products & Solutions | Trion Packaging",
    description:
      "Explore all B2B packaging solutions from Trion Packaging. Custom manufacturing with ±0.5mm tolerances and 24-hour CAD dieline turnaround.",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main className="flex-1 flex flex-col bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 border-b border-border/40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.18)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="container text-center max-w-4xl relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-accent/10 text-accent uppercase tracking-wider mb-6 border border-accent/20">
            Our Offerings
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] mb-5">
            Packaging{" "}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Explore our diverse range of premium, high-durability B2B packaging products. Select a category below to browse sub-categories and custom dieline configurations.
          </p>
          <Link
            href="/quote"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "group/btn font-medium tracking-wide flex items-center gap-2 mx-auto w-fit cursor-pointer"
            )}
          >
            Get a Custom Quote
            <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Product Category Grid */}
      <section className="py-20">
        <div className="container max-w-7xl">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              {PRODUCT_TAXONOMY.length} Categories
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Browse by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {PRODUCT_TAXONOMY.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group flex flex-col bg-background border border-border/40 rounded-2xl p-4 shadow-xs hover:shadow-md hover:border-accent/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 rounded-full px-2 py-0.5 mb-3 w-fit">
                  {category.badge}
                </span>
                <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-200 leading-snug">
                  {category.name}
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed flex-1 line-clamp-2">
                  {category.subcategories.length} sub-categories
                </p>
                <div className="flex items-center gap-1 mt-3 text-[11px] font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  View Category
                  <ArrowRight className="size-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border/40">
        <div className="container text-center max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
            Need custom structural engineering or dielines?
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Our engineers build structural B2B mockups matching your packaging requirements perfectly, with fast manufacturing turnaround times.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "cursor-pointer font-medium tracking-wide flex items-center gap-2"
              )}
            >
              Get a Custom Quote
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "cursor-pointer font-medium tracking-wide"
              )}
            >
              Talk to an Engineer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
