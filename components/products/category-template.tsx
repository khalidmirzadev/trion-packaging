"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Package, Tag, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProductCategory, Subcategory } from "@/lib/data/product-taxonomy";

/* ─── Variants ───────────────────────────────────────── */
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
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

/* ─── Sub-category Card ──────────────────────────────── */
function SubcategoryCard({
  sub,
  categorySlug,
}: {
  sub: Subcategory;
  categorySlug: string;
}) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        href={`/products/${categorySlug}/${sub.slug}`}
        className="group flex flex-col h-full bg-background border border-border/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:border-accent/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        aria-label={`View ${sub.name}`}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={sub.img}
            alt={sub.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Badge */}
          {sub.badge && (
            <div className="absolute top-3 left-3">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent text-accent-foreground border border-accent/20 shadow-sm">
                {sub.badge}
              </span>
            </div>
          )}
          {/* View arrow on hover */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="size-8 rounded-full bg-white/90 flex items-center justify-center text-foreground shadow-sm">
              <ArrowRight className="size-3.5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
            {sub.name}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed flex-1">
            {sub.desc}
          </p>
          <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-accent">
            View Options
            <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Main Template ──────────────────────────────────── */
export function CategoryTemplate({ category }: { category: ProductCategory }) {
  return (
    <main className="flex-1 flex flex-col bg-background">

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-background py-16 lg:py-24 border-b border-border/40">
        {/* Grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
                <Link href="/products" className="hover:text-foreground transition-colors">
                  Products
                </Link>
                <ChevronRight className="size-3 flex-shrink-0" />
                <span className="font-semibold text-foreground">{category.name}</span>
              </nav>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-semibold tracking-wider uppercase mb-6"
              >
                <Package className="size-3.5" />
                {category.badge}
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-none mb-6"
              >
                {category.headline}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25 }}
                className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
              >
                {category.desc}
              </motion.p>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-3 gap-px bg-border/40 rounded-xl overflow-hidden border border-border/40 shadow-sm w-full max-w-md mb-8 text-xs"
              >
                {[
                  { label: "Styles", value: `${category.subcategories.length}` },
                  { label: "MOQ From", value: "100 Units" },
                  { label: "Dielines", value: "24 Hours" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center text-center bg-background py-4 px-3">
                    <span className="text-base font-black text-foreground">{s.value}</span>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5">{s.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.38 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Link
                  href={`/quote?category=${category.slug}`}
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "group/btn cursor-pointer font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
                  )}
                >
                  Get a Quote
                  <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <Link
                  href={`/contact?request=dieline-${category.slug}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "cursor-pointer font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
                  )}
                >
                  <FileText className="size-4" />
                  Request CAD Dieline
                </Link>
              </motion.div>
            </div>

            {/* Hero image */}
            <div className="lg:col-span-5 relative w-full flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
                className="relative w-full aspect-[4/3] max-w-lg bg-gradient-to-tr from-secondary/50 to-secondary/10 rounded-3xl border border-border/40 p-4 shadow-xl overflow-hidden"
              >
                <Image
                  src={category.img}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm border border-border/40 px-3 py-1.5 rounded-lg text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                  {category.subcategories.length} styles available
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sub-category Grid ─────────────────────────── */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-7xl">

          {/* Section header */}
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-2">
                <Tag className="size-3.5 text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Browse Styles
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground">
                Select a Style
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground sm:text-right leading-relaxed">
              <span className="font-semibold text-foreground">{category.subcategories.length}</span> packaging styles in {category.name}
            </motion.p>
          </AnimatedSection>

          {/* Grid — 3 columns desktop, 2 tablet, 1 mobile */}
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subcategories.map((sub) => (
              <SubcategoryCard
                key={sub.slug}
                sub={sub}
                categorySlug={category.slug}
              />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Related categories ────────────────────────── */}
      <section className="py-16 border-b border-border/40 bg-secondary/5">
        <div className="container max-w-7xl">
          <AnimatedSection>
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-5">
              Also Explore
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {[
                { href: "/products/custom-boxes", label: "Custom Boxes" },
                { href: "/products/mailer-boxes", label: "Mailer Boxes" },
                { href: "/products/folding-cartons", label: "Folding Cartons" },
                { href: "/products/rigid-boxes", label: "Rigid Boxes" },
                { href: "/products/corrugated-boxes", label: "Corrugated Boxes" },
                { href: "/industries", label: "Industries We Serve" },
                { href: "/gallery", label: "Gallery" },
              ]
                .filter((l) => !l.href.includes(category.slug))
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-border/50 bg-background text-muted-foreground hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-all duration-200"
                  >
                    <ChevronRight className="size-3" />
                    {link.label}
                  </Link>
                ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[400px] rounded-full bg-accent/20 blur-[80px] pointer-events-none" />
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">
                Ready to Start?
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl max-w-xl mx-auto mb-5 leading-tight">
                Configure Your {category.name}
              </h2>
              <p className="text-sm sm:text-base text-primary-foreground/80 max-w-lg mx-auto mb-8 leading-relaxed">
                Submit your product dimensions and our structural engineers will return a custom CAD dieline with a full pricing proposal within 24 hours — at no charge.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href={`/quote?category=${category.slug}`}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "group/cta cursor-pointer font-semibold flex items-center gap-2 w-full sm:w-auto"
                  )}
                >
                  Get a Custom Quote
                  <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "cursor-pointer font-semibold border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                  )}
                >
                  Talk to an Engineer
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

    </main>
  );
}
