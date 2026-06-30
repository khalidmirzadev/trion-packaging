"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { INDUSTRY_TAXONOMY } from "@/lib/data/catalog-taxonomy";
import {
  ArrowRight,
  ChevronRight,
  ShoppingBag,
  Cpu,
  Sparkles,
  Coffee,
  HeartPulse,
  Leaf,
  Shirt,
  Car,
  Flame,
  Cannabis,
  Candy,
  Gift,
  Wrench,
  Gem,
  Package,
  Truck,
  Droplets,
  UtensilsCrossed,
  Dumbbell,
  PenLine,
  FlaskConical,
  Cigarette,
  BookMarked,
  Tag,
  BadgeCheck,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─── Animation Variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 110, damping: 22 },
  },
};

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ───────────────────────────────────────────── */
type FilterKey = "All" | "Food & Beverage" | "Beauty & Wellness" | "Retail & Gift" | "Industrial" | "Specialty";

interface Industry {
  name: string;
  slug: string;
  desc: string;
  icon: React.ElementType;
  filter: Exclude<FilterKey, "All">;
}

const INDUSTRIES: Industry[] = [
  {
    name: "Apparel Boxes",
    slug: "apparel",
    desc: "Retail garment packaging, folding cartons, and branded tissue-lined boxes for fashion brands.",
    icon: Shirt,
    filter: "Retail & Gift",
  },
  {
    name: "Auto Parts Packaging",
    slug: "auto-parts",
    desc: "Heavy-duty corrugated cartons engineered for automotive components and industrial hardware.",
    icon: Car,
    filter: "Industrial",
  },
  {
    name: "Bottle Packaging",
    slug: "bottle",
    desc: "Custom inserts, cell dividers, and outer cartons protecting glass and plastic bottles in transit.",
    icon: FlaskConical,
    filter: "Food & Beverage",
  },
  {
    name: "Candle Boxes",
    slug: "candle",
    desc: "Premium rigid setup boxes and folding cartons showcasing luxury candles on retail shelves.",
    icon: Flame,
    filter: "Retail & Gift",
  },
  {
    name: "CBD Packaging",
    slug: "cbd",
    desc: "Compliant, child-resistant retail cartons for CBD oils, tinctures, gummies, and topicals.",
    icon: Cannabis,
    filter: "Specialty",
  },
  {
    name: "Chocolate Boxes",
    slug: "chocolate",
    desc: "Luxury gift trays with custom dividers and foil-stamped lids for premium confectionery brands.",
    icon: Candy,
    filter: "Food & Beverage",
  },
  {
    name: "Christmas Packaging",
    slug: "christmas",
    desc: "Festive holiday gift sets, seasonal mailer boxes, and custom printed Christmas packaging runs.",
    icon: Gift,
    filter: "Retail & Gift",
  },
  {
    name: "Cigarette Boxes",
    slug: "cigarette",
    desc: "Precision-tolerance sliding drawer and flip-top boxes for tobacco and cigarette products.",
    icon: Cigarette,
    filter: "Specialty",
  },
  {
    name: "Coffee Packaging",
    slug: "coffee",
    desc: "Subscription boxes, retail cartons, and protective shipper cases for specialty coffee brands.",
    icon: Coffee,
    filter: "Food & Beverage",
  },
  {
    name: "Cosmetic Boxes",
    slug: "cosmetic",
    desc: "SBS paperboard boxes with soft-touch lamination, UV spot coating, and gold foil stamping.",
    icon: Sparkles,
    filter: "Beauty & Wellness",
  },
  {
    name: "Electronics Packaging",
    slug: "electronics",
    desc: "Rigid setup boxes with precision foam inserts, anti-static liners, and telescope closures.",
    icon: Cpu,
    filter: "Industrial",
  },
  {
    name: "Food Packaging",
    slug: "food",
    desc: "FDA-compliant food-grade paperboard with grease-resistant barrier liners for safe food transit.",
    icon: UtensilsCrossed,
    filter: "Food & Beverage",
  },
  {
    name: "Gift Boxes",
    slug: "gift",
    desc: "Elegant two-piece rigid boxes, magnetic lid closures, and ribbon-lift pull tabs for gifting.",
    icon: Gift,
    filter: "Retail & Gift",
  },
  {
    name: "Hardware Packaging",
    slug: "hardware",
    desc: "Durable corrugated cartons with custom foam inserts for tools, fasteners, and hardware parts.",
    icon: Wrench,
    filter: "Industrial",
  },
  {
    name: "Health & Pharma",
    slug: "pharma",
    desc: "Child-resistant folding cartons, serialized barcoding, and sterile-compliant substrate boards.",
    icon: HeartPulse,
    filter: "Beauty & Wellness",
  },
  {
    name: "Hemp Packaging",
    slug: "hemp",
    desc: "Eco-certified kraft and SBS cartons for hemp-derived products with compliance labeling fields.",
    icon: Leaf,
    filter: "Specialty",
  },
  {
    name: "Jewelry Boxes",
    slug: "jewelry",
    desc: "Velvet-lined slide drawers, magnetic rigid setups, and soft-suede-wrapped luxury jewelry boxes.",
    icon: Gem,
    filter: "Retail & Gift",
  },
  {
    name: "Retail Packaging",
    slug: "retail",
    desc: "Vibrant folding cartons, hanging shelf packs, and POP display trays for retail store environments.",
    icon: ShoppingBag,
    filter: "Retail & Gift",
  },
  {
    name: "Shipping Boxes",
    slug: "shipping",
    desc: "Industrial double-wall RSC corrugated master shippers rated for freight pallet stacking loads.",
    icon: Truck,
    filter: "Industrial",
  },
  {
    name: "Soap Boxes",
    slug: "soap",
    desc: "Eco-friendly natural kraft sleeves and folding cartons for artisan and commercial soap bars.",
    icon: Droplets,
    filter: "Beauty & Wellness",
  },
  {
    name: "Spice Packaging",
    slug: "spice",
    desc: "Counter display trays and retail cartons engineered for spice pouches, tins, and jars.",
    icon: UtensilsCrossed,
    filter: "Food & Beverage",
  },
  {
    name: "Sports Packaging",
    slug: "sports",
    desc: "Heavy-duty custom boxes for sports equipment, supplements, and athletic gear shipping.",
    icon: Dumbbell,
    filter: "Industrial",
  },
  {
    name: "Stationery Boxes",
    slug: "stationery",
    desc: "Clean elegant folding cartons, magnetic boxes, and sleeves for premium office stationery.",
    icon: PenLine,
    filter: "Retail & Gift",
  },
  {
    name: "Tea Packaging",
    slug: "tea",
    desc: "Custom tea chest boxes, individual sachet cartons, and windowed gift sets for specialty teas.",
    icon: BookMarked,
    filter: "Food & Beverage",
  },
  {
    name: "Vape Boxes",
    slug: "vape",
    desc: "Precision-fit sliding drawer boxes and child-resistant sleeves for vape pens and cartridges.",
    icon: Package,
    filter: "Specialty",
  },
];

const FILTERS: FilterKey[] = [
  "All",
  "Food & Beverage",
  "Beauty & Wellness",
  "Retail & Gift",
  "Industrial",
  "Specialty",
];

const FILTER_COLORS: Record<Exclude<FilterKey, "All">, string> = {
  "Food & Beverage": "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
  "Beauty & Wellness": "text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/20",
  "Retail & Gift": "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20",
  Industrial: "text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/20",
  Specialty: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
};

const FEATURED_INDUSTRIES = [
  {
    name: "Cosmetic & Beauty",
    slug: "cosmetic",
    desc: "From soft-touch matte lamination to gold foil stamping and magnetic rigid lids — we engineer packaging that communicates luxury the moment it's seen. Our SBS substrate selection delivers flawless color reproduction for skincare, fragrance, and makeup brands.",
    features: ["Soft-touch & gloss laminations", "Hot foil stamping & spot UV", "Custom velvet inserts", "Rigid & folding carton options"],
    icon: Sparkles,
    accent: "from-violet-600/20 to-violet-600/5",
    border: "border-violet-500/20",
    badge: "text-violet-600 bg-violet-500/10 border-violet-500/20",
  },
  {
    name: "Food & Beverage",
    slug: "food",
    desc: "FDA-compliant grease-resistant barrier liners, custom cell dividers for bottle protection, and high-burst corrugated shippers for produce and specialty food transit. We ensure your packaging meets food safety compliance without sacrificing brand presentation.",
    features: ["FDA food-grade barrier liners", "Grease-resistant coatings", "Custom bottle cell dividers", "Moisture-controlled corrugated"],
    icon: Coffee,
    accent: "from-amber-600/20 to-amber-600/5",
    border: "border-amber-500/20",
    badge: "text-amber-600 bg-amber-500/10 border-amber-500/20",
  },
  {
    name: "Luxury & Retail",
    slug: "gift",
    desc: "Premium two-piece rigid setup boxes, magnetic lid closures, and ribbon pull tabs crafted for high-end retail gifting. Every surface is an opportunity to reinforce brand value through tactile finishes, foil-embossed logos, and structural precision.",
    features: ["Two-piece rigid setup boxes", "Magnetic lid closures", "Ribbon lift & ribbon pull tabs", "Embossing & debossing available"],
    icon: Gift,
    accent: "from-rose-600/20 to-rose-600/5",
    border: "border-rose-500/20",
    badge: "text-rose-600 bg-rose-500/10 border-rose-500/20",
  },
  {
    name: "Health & Pharma",
    slug: "pharma",
    desc: "Compliant child-resistant cartons, exact caliper tolerances for medication inserts, and serialized barcode fields. We manufacture pharma-grade packaging that satisfies regulatory requirements while maintaining professional brand aesthetics.",
    features: ["Child-resistant closure cartons", "Serialized barcode compliance fields", "Exact ±0.5mm caliper tolerances", "Sterile-compatible substrates"],
    icon: HeartPulse,
    accent: "from-sky-600/20 to-sky-600/5",
    border: "border-sky-500/20",
    badge: "text-sky-600 bg-sky-500/10 border-sky-500/20",
  },
];

const WHY_PROPS = [
  {
    icon: Tag,
    title: "Brand Differentiation",
    desc: "Industry-specific packaging reinforces your brand identity at the point of sale. Custom structural forms and print finishes set your product apart from generic competitors on store shelves.",
  },
  {
    icon: Shield,
    title: "Product Protection",
    desc: "Each industry has unique mechanical requirements. Electronics need foam inserts and anti-static barriers. Food needs grease-resistant liners. We engineer to your product's exact protection spec.",
  },
  {
    icon: Star,
    title: "Marketing & Shelf Impact",
    desc: "Packaging is the first physical brand touchpoint. Industry-aligned aesthetics — from clinical pharma whites to luxury cosmetic metallics — create instant market credibility with buyers and consumers.",
  },
  {
    icon: Users,
    title: "Customer Experience",
    desc: "The unboxing moment drives repeat purchases and social sharing. Thoughtful structural details like magnetic lids, ribbon pulls, and peel-and-seal closures transform delivery into a brand experience.",
  },
];

/* ─── Industry Card ──────────────────────────────────── */
function IndustryCard({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  const colorCls = FILTER_COLORS[industry.filter];
  const industryCategory = INDUSTRY_TAXONOMY.find((ind) => ind.slug === industry.slug);
  const img = industryCategory?.img || "/images/industries/placeholder_packaging.png";

  return (
    <motion.div variants={cardReveal}>
      <Link
        href={`/industries/${industry.slug}`}
        className="group flex flex-col h-full bg-background border border-border/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-accent/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        aria-label={`View ${industry.name} packaging solutions`}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={img}
            alt={industry.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Floating Icon */}
          <div className="absolute top-3 left-3">
            <div
              className={cn(
                "size-8 rounded-lg flex items-center justify-center border bg-background/90 shadow-sm",
                colorCls
              )}
            >
              <Icon className="size-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Name */}
          <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
            {industry.name}
          </h3>

          {/* Desc */}
          <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-2">
            {industry.desc}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            View Solutions
            <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Main Component ──────────────────────────────────── */
export function IndustriesClient() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const filtered =
    activeFilter === "All"
      ? INDUSTRIES
      : INDUSTRIES.filter((i) => i.filter === activeFilter);

  return (
    <div className="bg-background">

      {/* ── 1. Hero ───────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-24 border-b border-border/40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.18)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 -z-10 size-80 rounded-full bg-accent/8 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 -z-10 size-64 rounded-full bg-primary/6 blur-[80px] pointer-events-none" />

        <div className="container relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-accent/10 text-accent uppercase tracking-wider mb-6 border border-accent/20"
            >
              <BadgeCheck className="size-3.5" />
              25+ Industry Sectors Served
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] mb-5"
            >
              Packaging Solutions{" "}
              <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                by Industry
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Every industry has its own structural requirements, regulatory standards, and brand expectations. We engineer custom packaging that meets all three — from FDA-compliant food-grade liners to luxury rigid setup boxes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/quote"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "group/btn cursor-pointer font-medium tracking-wide flex items-center gap-2"
                )}
              >
                Get a Custom Quote
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "cursor-pointer font-medium tracking-wide"
                )}
              >
                Browse All Products
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="grid grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40 shadow-sm mt-16"
          >
            {[
              { value: "25+", label: "Industries Served" },
              { value: "10M+", label: "Units Manufactured" },
              { value: "24 hrs", label: "Dieline Turnaround" },
            ].map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center bg-background py-6 px-4 hover:bg-secondary/20 transition-colors"
              >
                <span className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                  {s.value}
                </span>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground uppercase font-bold tracking-wider mt-1.5">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. Industry Grid ──────────────────────────── */}
      <section id="industries-grid" className="py-24 border-b border-border/40">
        <div className="container max-w-7xl">

          {/* Section header */}
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                All Industries
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground">
                Find Your Industry
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground sm:text-right leading-relaxed">
              Showing{" "}
              <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
              of {INDUSTRIES.length} industries
            </motion.p>
          </AnimatedSection>

          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <motion.button
                  key={filter}
                  variants={fadeUp}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background border-border/50 text-muted-foreground hover:border-accent/40 hover:text-foreground hover:bg-secondary/20"
                  )}
                >
                  {filter}
                </motion.button>
              );
            })}
          </AnimatedSection>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              <AnimatedSection className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filtered.map((industry) => (
                  <IndustryCard key={industry.slug} industry={industry} />
                ))}
              </AnimatedSection>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 3. Featured Industries ────────────────────── */}
      <section className="py-24 border-b border-border/40 bg-secondary/5">
        <div className="container max-w-6xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              High-Volume Sectors
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Industry Solutions
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Deep-dive into our most specialized packaging verticals — each with dedicated engineering expertise and curated substrate selections.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_INDUSTRIES.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardReveal}
                  className={cn(
                    "group relative bg-background border rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300",
                    ind.border
                  )}
                >
                  {/* Gradient accent top stripe */}
                  <div className={cn("h-1.5 w-full bg-gradient-to-r", ind.accent.replace("/5", "").replace("/20", ""))} />

                  <div className="p-7 sm:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className={cn("size-10 rounded-xl flex items-center justify-center border", ind.badge)}>
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-foreground leading-tight">
                            {ind.name}
                          </h3>
                          <span className={cn("text-[10px] font-bold uppercase tracking-wider border rounded-full px-2 py-0.5 mt-1 inline-block", ind.badge)}>
                            Featured
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {ind.desc}
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-2 mb-7">
                      {ind.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className={cn("size-1.5 rounded-full flex-shrink-0", ind.badge.replace("text-", "bg-").split(" ")[0])} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/industries/${ind.slug}`}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "cursor-pointer font-medium tracking-wide flex items-center gap-2 group/link w-full sm:w-auto justify-center"
                      )}
                    >
                      View {ind.name} Packaging
                      <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. Why Industry-Specific Packaging ───────── */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-6xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              The Business Case
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Industry-Specific Packaging Matters
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Generic packaging is a missed opportunity. Industry-aligned structures communicate expertise, protect your product, and convert browsers into buyers.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_PROPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardReveal}
                  className="group flex flex-col bg-background border border-border/40 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  <div className="size-11 rounded-xl bg-secondary flex items-center justify-center text-accent border border-border/30 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors mb-5">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </AnimatedSection>

          {/* Internal links bar */}
          <AnimatedSection className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-10 border-t border-border/30">
            <motion.p variants={fadeUp} className="text-xs text-muted-foreground w-full text-center sm:w-auto">
              Explore our full offering:
            </motion.p>
            {[
              { href: "/products", label: "All Products" },
              { href: "/materials", label: "Substrate Materials" },
              { href: "/printing", label: "Printing Methods" },
              { href: "/finishes", label: "Surface Finishes" },
              { href: "/gallery", label: "Gallery" },
            ].map((link) => (
              <motion.div key={link.href} variants={fadeUp}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  <ChevronRight className="size-3" />
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5. Final CTA ──────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[500px] rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">
                Industry-Specific Packaging
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl max-w-2xl mx-auto mb-6 leading-tight">
                Get Custom Packaging for Your Industry
              </h2>

              <p className="text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
                Submit your industry requirements and product dimensions. Our structural engineers will return a custom CAD dieline and a full unit cost matrix within 24 hours — at no charge.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/quote"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "group/cta cursor-pointer font-medium tracking-wide flex items-center gap-2 w-full sm:w-auto"
                  )}
                >
                  Get a Free Quote
                  <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "cursor-pointer font-medium tracking-wide border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                  )}
                >
                  Talk to an Engineer
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
