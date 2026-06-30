"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Compass,
  Factory,
  Printer,
  Shield,
  CheckCircle,
  Briefcase,
  ArrowRight,
  ShoppingBag,
  Cpu,
  Sparkles,
  Coffee,
  HeartPulse,
  Layers,
  Ruler,
  FlaskConical,
  Zap,
  Award,
  Clock,
  Users,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─── Animation Variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

/* ─── Animated Section Wrapper ───────────────────────── */
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
const stats = [
  { value: "10M+", label: "Units Manufactured" },
  { value: "50,000 sq ft", label: "Newark Facility" },
  { value: "±0.5mm", label: "CAD Tolerance" },
  { value: "24 Hours", label: "Dieline Delivery" },
];

const principles = [
  {
    icon: Ruler,
    title: "Zero-Defect Tolerances",
    desc: "Executing scores and cuts to ±0.5mm limits to guarantee clean automated fold-line assemblies.",
  },
  {
    icon: FlaskConical,
    title: "Sustainably Sourced",
    desc: "FSC-certified substrate stocks, organic natural kraft fibers, and water-based soy inks.",
  },
  {
    icon: Clock,
    title: "24-Hour Dielines",
    desc: "Print-ready Illustrator vector dielines drafted and delivered to your inbox within one business day.",
  },
  {
    icon: Award,
    title: "ISO 9001 & 14001",
    desc: "Quality and environmental management systems certified to international manufacturing standards.",
  },
];

const features = [
  {
    icon: Compass,
    title: "CAD Structural Laboratory",
    desc: "Our Newark laboratory drafts custom 2D vector dielines and folds structural configurations tailored to your products, avoiding generic templates.",
  },
  {
    icon: Factory,
    title: "Advanced Die-Cutting",
    desc: "Equipped with automatic platens and high-speed CAD digital sample tables, executing clean crease and score runs with extreme precision.",
  },
  {
    icon: Printer,
    title: "High-Fidelity Printing",
    desc: "Supports high-resolution digital print runs, flexography with soy-based inks, and museum-grade offset litho-lamination.",
  },
  {
    icon: Shield,
    title: "Transit Performance Checks",
    desc: "All structures are subjected to drop and compression simulations. We ensure master cases satisfy freight transport standards.",
  },
  {
    icon: Layers,
    title: "Custom Structural Engineering",
    desc: "Every box starts with a blank canvas — no forced templates. Our engineers design around your product geometry.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    desc: "Physical sample boxes cut on digital tables within days, validating product fitment before full production runs.",
  },
];

const manufacturingLines = [
  {
    title: "Digital Sample Table Plotter",
    desc: "For rapid prototype sample routing. Cuts paperboard and corrugated fluting without requiring steel die tooling setup costs.",
    spec: "Max caliper: 48pt SBS | E-Flute | B-Flute",
    badge: "Prototyping",
  },
  {
    title: "Rotary Flexographic Press",
    desc: "Enables fast, low-unit-cost outer branding logos and compliance warning grids directly onto thick corrugated cartons.",
    spec: "Capacity: 10,000 runs/hr | Water-based inks",
    badge: "Print",
  },
  {
    title: "Offset Litho-Laminators",
    desc: "Laminates printed fine art liners onto corrugated cores. Delivers rich graphics contrast for premium cosmetics packaging.",
    spec: "Resolution: up to 600 line screens | Matte/Gloss",
    badge: "Lamination",
  },
  {
    title: "Automatic Flat-Bed Die Press",
    desc: "Steel rule dies register exact crease and cut geometry on each run. Ensures consistent fold quality at volume.",
    spec: "Sheet size: up to 52″ × 80″ | Auto-feeding",
    badge: "Die-Cut",
  },
];

const industries = [
  { icon: ShoppingBag, name: "E-Commerce & DTC", spec: "RETT mailers with dual peel-and-seal tape return lines." },
  { icon: Cpu, name: "Consumer Electronics", spec: "Rigid setup boxes with slow-suction telescope seals." },
  { icon: Sparkles, name: "Cosmetics & Beauty", spec: "Magnetic lids, gold foil stamping, and velvet inserts." },
  { icon: Coffee, name: "Food & Confectionery", spec: "FDA-compliant barrier liners and grease-resistant coatings." },
  { icon: HeartPulse, name: "Medical & Pharma", spec: "Child-resistant cartons with sterile protective liners." },
  { icon: Briefcase, name: "Corporate & Retail", spec: "Premium gift sets, branded tissue inserts, and rigid lids." },
];

const workflow = [
  {
    step: "01",
    title: "Specification Intake",
    desc: "Our team reviews your product dimensions, substrate thickness, and print requirements.",
  },
  {
    step: "02",
    title: "Vector CAD Drafting",
    desc: "We draft print-ready Illustrator vector dielines and structural templates within 24 hours.",
  },
  {
    step: "03",
    title: "Physical Prototyping",
    desc: "A structural sample box is cut on digital tables to verify product fitment before production.",
  },
  {
    step: "04",
    title: "Industrial Print Run",
    desc: "Steel plates are set and high-speed runs compile your boxes flat for freight shipping.",
  },
];

/* ─── Component ──────────────────────────────────────── */
export function AboutClient() {
  return (
    <div className="bg-background">

      {/* ── 1. Hero ───────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-24 border-b border-border/40">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.18)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 -z-10 size-80 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 -z-10 size-64 rounded-full bg-primary/8 blur-[80px] pointer-events-none" />

        <div className="container relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-accent/10 text-accent uppercase tracking-wider mb-6 border border-accent/20"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              Newark Manufacturing Facility
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
            >
              Engineered to Protect.{" "}
              <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                Designed to Impress.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
            >
              Trion Packaging is a premier B2B manufacturer of custom industrial and retail packaging boxes. We merge structural CAD engineering with high-fidelity printing inside our 50,000 sq ft Newark facility.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
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
                Explore Products
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40 shadow-sm"
          >
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center bg-background py-6 px-4 hover:bg-secondary/20 transition-colors"
              >
                <span className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                  {s.value}
                </span>
                <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-wider mt-1.5">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. Company Story ──────────────────────────── */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: Story Text */}
            <AnimatedSection className="lg:col-span-7 space-y-6">
              <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent">
                Our History & Vision
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Precision B2B Structural Packaging, Since Day One
              </motion.h2>
              <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed">
                Founded with a focus on structural packaging engineering, Trion Packaging operates a high-capacity custom box manufacturing facility in Newark, New Jersey. We identified a critical bottleneck in the B2B packaging space: companies were forced to choose between slow structural design iterations and weak, off-the-shelf templates.
              </motion.p>
              <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed">
                By investing heavily in our Newark CAD laboratory, digital sample plotters, and automatic die presses, we unified structural engineering with production. Today, we deliver custom vector dielines within 24 hours, manufacture physical prototypes in days, and run high-volume offset, flexo, and digital boxes with strict ±0.5mm tolerances across every run.
              </motion.p>

              {/* Timeline pills */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
                {["Founded in Newark, NJ", "50,000 sq ft Facility", "ISO 9001 & 14001 Certified", "10M+ Units Delivered"].map((t) => (
                  <span key={t} className="text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full bg-secondary border border-border/40 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </motion.div>
            </AnimatedSection>

            {/* Right: Core Principles Card */}
            <AnimatedSection className="lg:col-span-5">
              <motion.div
                variants={fadeUp}
                className="bg-secondary/20 border border-border/50 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm"
              >
                <h3 className="text-sm font-bold text-foreground flex items-center gap-2 border-b border-border/30 pb-4">
                  <Users className="size-4 text-accent" />
                  Core Principles
                </h3>
                <div className="grid grid-cols-1 gap-5">
                  {principles.map((p, idx) => {
                    const Icon = p.icon;
                    return (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 size-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent border border-accent/20 mt-0.5">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-foreground mb-0.5">{p.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 3. Why Choose Trion ───────────────────────── */}
      <section className="py-24 border-b border-border/40 bg-secondary/5 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,oklch(var(--accent)/0.04)_0%,transparent_60%)] pointer-events-none" />

        <div className="container max-w-6xl relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Core Competencies
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Brands Choose Trion
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Engineered for transit performance and retail shelf impact — every capability built in-house.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardReveal}
                  className="group flex gap-4 p-6 rounded-2xl bg-background border border-border/40 shadow-xs hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 size-10 rounded-xl bg-secondary flex items-center justify-center text-accent border border-border/30 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1.5">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. Manufacturing Capabilities ────────────── */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-6xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Technical Infrastructure
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Advanced Machinery & Press Lines
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Our 50,000 sq ft facility houses a complete suite of industrial packaging machinery under one roof.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {manufacturingLines.map((line, idx) => (
              <motion.div
                key={idx}
                variants={cardReveal}
                className="group border border-border/50 bg-background rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-border transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-sm font-bold text-foreground">{line.title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/20 flex-shrink-0 ml-3">
                    {line.badge}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-5">{line.desc}</p>
                <div className="border-t border-border/30 pt-3 text-[10px] font-mono text-accent leading-none uppercase tracking-wider">
                  {line.spec}
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5. Industries Served ──────────────────────── */}
      <section className="py-24 border-b border-border/40 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(var(--accent)/0.04)_0%,transparent_60%)] pointer-events-none" />

        <div className="container max-w-6xl relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Target Markets
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Packaging Across Key Sectors
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Industry-specific structural requirements met with precision manufacturing and material science.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardReveal}
                  className="group bg-background border border-border/40 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  <div className="size-10 rounded-xl bg-secondary flex items-center justify-center text-accent border border-border/30 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{ind.name}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{ind.spec}</p>
                </motion.div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ── 6. Process Overview ───────────────────────── */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-6xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Execution Path
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Packaging Engineering Flow
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              From specification to doorstep — a transparent, four-phase process built for B2B precision.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((flow, idx) => (
              <motion.div
                key={idx}
                variants={cardReveal}
                className="relative group bg-background border border-border/50 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-accent/30 transition-all duration-300"
              >
                {/* Connector line between steps (desktop) */}
                {idx < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border/60 z-10" />
                )}
                <span className="text-4xl font-black text-accent/15 leading-none block mb-4 group-hover:text-accent/25 transition-colors">
                  {flow.step}
                </span>
                <h3 className="text-sm font-bold text-foreground mb-2">{flow.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{flow.desc}</p>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Quote Button below process */}
          <AnimatedSection className="mt-12 text-center">
            <motion.div variants={fadeUp}>
              <Link
                href="/quote"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "cursor-pointer font-medium tracking-wide inline-flex items-center gap-2 group/link"
                )}
              >
                Start Your Project
                <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 7. Final CTA ──────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* CAD Overlay grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
            >
              {/* Glow orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[500px] rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">
                Ready to Start Your Project?
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl max-w-2xl mx-auto mb-6 leading-tight">
                Get Custom Dielines &amp; Prototype Pricing
              </h2>

              <p className="text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
                Configure your custom box dimensions with our CAD engineers. Receive a production price sheet and vector structural dielines within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/quote"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "group/cta cursor-pointer font-medium tracking-wide flex items-center gap-2 w-full sm:w-auto"
                  )}
                >
                  Request a Custom Quote
                  <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "cursor-pointer font-medium tracking-wide border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                  )}
                >
                  Contact Specialists
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
