"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Eye,
  Layers,
  Paintbrush,
  Sparkles,
  Shield,
  Award,
  Images,
  ZoomIn,
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
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
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

/* ─── Types ──────────────────────────────────────────── */
type FilterKey = "All" | "Cosmetic" | "Food" | "Retail" | "Luxury" | "Shipping";

interface GalleryItem {
  id: number;
  title: string;
  category: Exclude<FilterKey, "All">;
  desc: string;
  img: string;
  productSlug: string;
  span?: "wide" | "tall" | "normal";
}

/* ─── Data ───────────────────────────────────────────── */
const FEATURED_WORK = [
  {
    title: "Luxury Cosmetic Box Set",
    desc: "SBS paperboard with soft-touch matte lamination, debossed brand mark, and gold hot-foil stamping. Engineered for a premium beauty brand's flagship retail launch.",
    img: "/images/cosmetic_box.png",
    tag: "Cosmetic · Offset Litho",
    href: "/products/cosmetic-boxes",
  },
  {
    title: "Rigid Setup Box Collection",
    desc: "Thick 2.0mm grey chipboard wrapped in 128g art paper liner with gloss UV coating. Slow-suction telescope closure for an Apple-quality unboxing experience.",
    img: "/images/rigid_box.png",
    tag: "Luxury · Rigid Board",
    href: "/products/rigid-boxes",
  },
  {
    title: "Food Packaging Series",
    desc: "FDA-compliant SBS cartons with grease-resistant barrier coating. Custom window die-cuts and vibrant flexographic print for a specialty food brand's retail range.",
    img: "/images/folding_carton.png",
    tag: "Food · Folding Carton",
    href: "/products/folding-cartons",
  },
  {
    title: "E-Commerce Mailer Range",
    desc: "E-flute corrugated mailers with full-bleed interior digital print. Peel-and-seal closure with dual tape strip for secure outbound and easy customer returns.",
    img: "/images/mailer_box.png",
    tag: "Shipping · E-Flute",
    href: "/products/mailer-boxes",
  },
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Velvet Cosmetic Drawer Box",
    category: "Cosmetic",
    desc: "Slide-out drawer with velvet lining and gold foil brand stamp",
    img: "/images/cosmetic_box.png",
    productSlug: "cosmetic-boxes",
    span: "wide",
  },
  {
    id: 2,
    title: "Rigid Presentation Set",
    category: "Luxury",
    desc: "Two-piece rigid box with slow-suction lid and ribbon pull",
    img: "/images/rigid_box.png",
    productSlug: "rigid-boxes",
    span: "tall",
  },
  {
    id: 3,
    title: "Subscription Mailer Box",
    category: "Shipping",
    desc: "E-flute corrugated with full interior print and peel seal",
    img: "/images/mailer_box.png",
    productSlug: "mailer-boxes",
  },
  {
    id: 4,
    title: "Retail Folding Carton",
    category: "Retail",
    desc: "Clay-coated SBS with PMS offset litho and spot UV finish",
    img: "/images/folding_carton.png",
    productSlug: "folding-cartons",
  },
  {
    id: 5,
    title: "Premium Gift Packaging",
    category: "Luxury",
    desc: "Magnetic lid rigid box with embossed logo on art-wrapped liner",
    img: "/images/custom_box.png",
    productSlug: "custom-boxes",
    span: "wide",
  },
  {
    id: 6,
    title: "Corrugated Shipper Case",
    category: "Shipping",
    desc: "Double-wall RSC corrugated with flexographic outer brand print",
    img: "/images/corrugated_box.png",
    productSlug: "corrugated-boxes",
  },
  {
    id: 7,
    title: "Skincare Folding Carton",
    category: "Cosmetic",
    desc: "Tuck-top carton with soft-touch lamination and flood UV coat",
    img: "/images/cosmetic_box.png",
    productSlug: "cosmetic-boxes",
  },
  {
    id: 8,
    title: "Specialty Food Carton",
    category: "Food",
    desc: "FDA food-grade SBS with die-cut window and grease barrier liner",
    img: "/images/folding_carton.png",
    productSlug: "food",
    span: "tall",
  },
  {
    id: 9,
    title: "Luxury Rigid Collectable",
    category: "Luxury",
    desc: "1800 GSM chipboard with debossed logo, satin ribbon, and tissue wrap",
    img: "/images/rigid_box.png",
    productSlug: "rigid-boxes",
  },
  {
    id: 10,
    title: "DTC E-Commerce Shipper",
    category: "Shipping",
    desc: "White E-flute mailer with vibrant inside digital print",
    img: "/images/mailer_box.png",
    productSlug: "mailer-boxes",
  },
  {
    id: 11,
    title: "Boutique Retail Sleeve",
    category: "Retail",
    desc: "Wrap-around kraft sleeve with selective spot UV brand mark",
    img: "/images/custom_box.png",
    productSlug: "retail",
  },
  {
    id: 12,
    title: "Confectionery Gift Box",
    category: "Food",
    desc: "Custom cell divider tray inside rigid lid box for chocolates",
    img: "/images/rigid_box.png",
    productSlug: "chocolate",
    span: "wide",
  },
  {
    id: 13,
    title: "Fragrance Carton Set",
    category: "Cosmetic",
    desc: "High-gloss SBS folding carton with Pantone PMS colour match",
    img: "/images/cosmetic_box.png",
    productSlug: "cosmetic-boxes",
  },
  {
    id: 14,
    title: "Heavy-Duty Shipping Carton",
    category: "Shipping",
    desc: "BC double-wall corrugated rated ECT-44 for industrial freight",
    img: "/images/corrugated_box.png",
    productSlug: "corrugated-boxes",
  },
  {
    id: 15,
    title: "Luxury Candle Box",
    category: "Luxury",
    desc: "Rigid setup box with foil embossed lid and velvet base insert",
    img: "/images/custom_box.png",
    productSlug: "candle",
  },
  {
    id: 16,
    title: "Pharmacy Folding Carton",
    category: "Retail",
    desc: "Child-resistant folding carton with serialized barcode field",
    img: "/images/folding_carton.png",
    productSlug: "pharma",
  },
  {
    id: 17,
    title: "Tea Gift Chest Box",
    category: "Food",
    desc: "Kraft-covered rigid box with custom compartment dividers for tea",
    img: "/images/custom_box.png",
    productSlug: "tea",
  },
  {
    id: 18,
    title: "Premium Packaging Collection",
    category: "Luxury",
    desc: "Mixed premium structures photographed for brand catalogue shoot",
    img: "/images/hero_packaging.png",
    productSlug: "custom-boxes",
    span: "wide",
  },
];

const FILTERS: FilterKey[] = ["All", "Cosmetic", "Food", "Retail", "Luxury", "Shipping"];

const FILTER_STYLES: Record<Exclude<FilterKey, "All">, string> = {
  Cosmetic: "text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/20",
  Food: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
  Retail: "text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/20",
  Luxury: "text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/20",
  Shipping: "text-slate-600 dark:text-slate-400 bg-slate-500/10 border-slate-500/20",
};

const WHY_FEATURES = [
  {
    icon: Layers,
    title: "Premium Substrates",
    desc: "Every project starts with FSC-certified SBS paperboard, rigid chipboard, or corrugated flute selected for your product's weight, dimension, and shelf position requirements.",
  },
  {
    icon: Paintbrush,
    title: "Custom Design Capability",
    desc: "Our Newark CAD lab drafts fully custom structural dielines — zero templates — and delivers print-ready Illustrator vector artwork within 24 hours of spec submission.",
  },
  {
    icon: Sparkles,
    title: "Brand-First Aesthetics",
    desc: "From soft-touch matte lamination to gold hot-foil stamping and selective spot UV, every finish decision is aligned to your brand identity and target consumer perception.",
  },
  {
    icon: Award,
    title: "Precision Print & Finishes",
    desc: "Offset litho-lamination at 600 line screens, Pantone PMS colour matching, and ±0.5mm die-cut tolerance — delivering print quality that matches the world's leading brands.",
  },
];

/* ─── Lightbox State ─────────────────────────────────── */
interface LightboxState {
  open: boolean;
  item: GalleryItem | null;
}

/* ─── Gallery Card ───────────────────────────────────── */
function GalleryCard({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}) {
  const tagStyle = FILTER_STYLES[item.category];

  return (
    <motion.div
      variants={cardReveal}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/40 bg-muted shadow-xs cursor-pointer",
        item.span === "wide" && "md:col-span-2",
        item.span === "tall" ? "aspect-[3/4]" : "aspect-square"
      )}
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(item);
      }}
    >
      {/* Image */}
      <Image
        src={item.img}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay — always present, deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-400" />

      {/* Category tag — top left */}
      <div className="absolute top-3 left-3 z-10">
        <span
          className={cn(
            "text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-sm",
            tagStyle
          )}
        >
          {item.category}
        </span>
      </div>

      {/* Zoom icon — top right */}
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="size-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
          <ZoomIn className="size-3.5" />
        </div>
      </div>

      {/* Text — bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-sm font-bold text-white leading-tight mb-1">
          {item.title}
        </h3>
        <p className="text-[11px] text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Lightbox ───────────────────────────────────────── */
function Lightbox({
  state,
  onClose,
}: {
  state: LightboxState;
  onClose: () => void;
}) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (state.open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [state.open, onClose]);

  return (
    <AnimatePresence>
      {state.open && state.item && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`View: ${state.item.title}`}
        >
          <motion.div
            key="lightbox-content"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-background rounded-2xl overflow-hidden shadow-2xl border border-border/60 max-w-3xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full bg-muted flex-shrink-0">
              <Image
                src={state.item.img}
                alt={state.item.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
              {/* Close btn */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 size-9 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 hover:bg-black/70 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Close lightbox"
              >
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Meta */}
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-2 inline-block", FILTER_STYLES[state.item.category])}>
                  {state.item.category}
                </span>
                <h2 className="text-lg font-bold text-foreground mt-1">
                  {state.item.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {state.item.desc}
                </p>
              </div>
              <Link
                href={`/products/${state.item.productSlug}`}
                className={cn(
                  buttonVariants({ variant: "default", size: "sm" }),
                  "cursor-pointer flex-shrink-0 flex items-center gap-1.5 group/lb"
                )}
                onClick={onClose}
              >
                View Product
                <ArrowRight className="size-3.5 transition-transform group-hover/lb:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Component ──────────────────────────────────── */
export function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const [lightbox, setLightbox] = useState<LightboxState>({ open: false, item: null });

  const filtered =
    activeFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === activeFilter);

  const openLightbox = React.useCallback((item: GalleryItem) => {
    setLightbox({ open: true, item });
  }, []);

  const closeLightbox = React.useCallback(() => {
    setLightbox({ open: false, item: null });
  }, []);

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
              <Images className="size-3.5" />
              Packaging Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] mb-5"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                Packaging Work
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Real packaging solutions delivered to brands across cosmetics, food, retail, luxury, and e-commerce industries — each engineered from structural CAD design through to finished production run.
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
                Browse Products
              </Link>
            </motion.div>
          </motion.div>

          {/* Stat bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="grid grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40 shadow-sm mt-16"
          >
            {[
              { value: "10M+", label: "Units Produced" },
              { value: "25+", label: "Industries Served" },
              { value: "600 lpi", label: "Offset Resolution" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-background py-6 px-4 hover:bg-secondary/20 transition-colors">
                <span className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">{s.value}</span>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground uppercase font-bold tracking-wider mt-1.5">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. Featured Work ──────────────────────────── */}
      <section className="py-24 border-b border-border/40 bg-secondary/5">
        <div className="container max-w-7xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Highlighted Projects
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Work
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Selected packaging projects that best represent our structural engineering, print quality, and finishing capabilities.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_WORK.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardReveal}
                className="group flex flex-col bg-background border border-border/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Tag */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-white/90 backdrop-blur-sm border border-white/10">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    View Product
                    <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3 + 4. Gallery Grid + Filter ─────────────── */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-7xl">

          {/* Section header */}
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                Full Portfolio
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground">
                Gallery Showroom
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground sm:text-right leading-relaxed">
              <span className="font-semibold text-foreground">{filtered.length}</span> items · Click any card to expand
            </motion.p>
          </AnimatedSection>

          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              const tagStyle = filter !== "All" ? FILTER_STYLES[filter] : "";
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
                      : filter === "All"
                        ? "bg-background border-border/50 text-muted-foreground hover:border-accent/40 hover:text-foreground hover:bg-secondary/20"
                        : cn("bg-background border-border/50 hover:bg-secondary/20", tagStyle.replace(/border-\S+/, "").replace(/bg-\S+/, ""))
                  )}
                >
                  {filter}
                </motion.button>
              );
            })}
          </AnimatedSection>

          {/* Masonry-style grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              <AnimatedSection className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                {filtered.map((item) => (
                  <GalleryCard key={item.id} item={item} onOpen={openLightbox} />
                ))}
              </AnimatedSection>

              {filtered.length === 0 && (
                <div className="col-span-full text-center py-20 text-sm text-muted-foreground">
                  No items in this category yet.
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* View all products link */}
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "cursor-pointer font-medium tracking-wide inline-flex items-center gap-2 group/va"
              )}
            >
              <Eye className="size-4" />
              Explore Full Product Range
              <ArrowRight className="size-4 transition-transform group-hover/va:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Why Our Packaging Stands Out ─────────── */}
      <section className="py-24 border-b border-border/40 bg-secondary/5">
        <div className="container max-w-6xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Our Craft
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Our Packaging Stands Out
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Every piece in this gallery represents the intersection of structural engineering, material science, and brand-driven design.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_FEATURES.map((item, idx) => {
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

          {/* Internal links */}
          <AnimatedSection className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-10 border-t border-border/30">
            <motion.p variants={fadeUp} className="text-xs text-muted-foreground w-full text-center sm:w-auto">
              Learn more about our process:
            </motion.p>
            {[
              { href: "/materials", label: "Substrate Materials" },
              { href: "/printing", label: "Printing Methods" },
              { href: "/finishes", label: "Surface Finishes" },
              { href: "/industries", label: "Industries We Serve" },
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

      {/* ── 6. Final CTA ──────────────────────────────── */}
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
                Start Your Project
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl max-w-2xl mx-auto mb-6 leading-tight">
                Want Packaging Like This?
              </h2>

              <p className="text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
                Submit your product dimensions and brand guidelines. Our structural engineers will return custom CAD dielines and a full unit cost proposal within 24 hours — at no charge.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/quote"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "group/cta cursor-pointer font-medium tracking-wide flex items-center gap-2 w-full sm:w-auto"
                  )}
                >
                  Get a Custom Quote
                  <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "cursor-pointer font-medium tracking-wide border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                  )}
                >
                  Talk to a Specialist
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────── */}
      <Lightbox state={lightbox} onClose={closeLightbox} />
    </div>
  );
}
