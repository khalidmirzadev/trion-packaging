"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Check,
  Settings,
  MessageSquare,
  Mail,
  Shield,
  Layout,
  Gem,
  Compass,
  Ruler,
  Hammer,
  Cpu,
  Box,
  Layers,
  Package,
  Leaf,
  Printer,
  Columns,
  Sun,
  Sparkles,
  Paintbrush,
  Crop,
  ShoppingBag,
  Coffee
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Icon Resolution Map for RSC boundary compatibility (avoids passing function objects)
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  shield: Shield,
  layout: Layout,
  gem: Gem,
  compass: Compass,
  ruler: Ruler,
  hammer: Hammer,
  cpu: Cpu,
  box: Box,
  layers: Layers,
  package: Package,
  leaf: Leaf,
  printer: Printer,
  columns: Columns,
  sun: Sun,
  sparkles: Sparkles,
  paintbrush: Paintbrush,
  crop: Crop,
  "shopping-bag": ShoppingBag,
  coffee: Coffee,
};

function getIcon(name: string): React.ComponentType<{ className?: string }> {
  return ICON_MAP[name.toLowerCase()] || Package;
}

// TS Interfaces for Parameterized Data
export interface HeroData {
  badge: string;
  badgeIcon: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
  moq: string;
  leadTime: string;
  cadTime: string;
  ecoStatus: string;
  benefits: string[];
  quoteLink: string;
  dielineLink: string;
  modelName: string;
  boardType: string;
}

export interface OverviewItem {
  icon: string;
  title: string;
  desc: string;
}

export interface OverviewData {
  tagline: string;
  title: string;
  description: string;
  items: OverviewItem[];
}

export interface StyleItem {
  icon: string;
  name: string;
  locks: string;
  bestFor: string;
  calipers: string;
  desc: string;
}

export interface StylesData {
  tagline: string;
  title: string;
  description: string;
  items: StyleItem[];
}

export interface MaterialItem {
  icon: string;
  name: string;
  thickness: string;
  eco: string;
  properties: string;
  useCase: string;
}

export interface MaterialsData {
  tagline: string;
  title: string;
  description: string;
  items: MaterialItem[];
}

export interface PrintMethod {
  icon: string;
  name: string;
  moq: string;
  setup: string;
  color: string;
  bestFor: string;
  desc: string;
  benefits: string[];
}

export interface PrintingData {
  tagline: string;
  title: string;
  description: string;
  items: PrintMethod[];
}

export interface FinishItem {
  icon: string;
  name: string;
  visual: string;
  protection: string;
  desc: string;
}

export interface FinishesData {
  tagline: string;
  title: string;
  description: string;
  items: FinishItem[];
}

export interface IndustryItem {
  icon: string;
  name: string;
  requirements: string;
  useCase: string;
  link: string;
}

export interface IndustriesData {
  tagline: string;
  title: string;
  description: string;
  items: IndustryItem[];
}

export interface GalleryItem {
  name: string;
  img: string;
  type: string;
  use: string;
  href: string;
}

export interface GalleryData {
  tagline: string;
  title: string;
  description: string;
  items: GalleryItem[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqData {
  tagline: string;
  title: string;
  description: string;
  items: FaqItem[];
}

export interface CtaData {
  tagline: string;
  title: string;
  description: string;
  quoteLink: string;
  contactLink: string;
}

export interface ProductPageConfig {
  hero: HeroData;
  overview: OverviewData;
  styles: StylesData;
  materials: MaterialsData;
  printing: PrintingData;
  finishes: FinishesData;
  industries: IndustriesData;
  gallery: GalleryData;
  faq: FaqData;
  cta: CtaData;
}

// Framer Motion Animation Settings
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: 0.1,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
    },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
    },
  },
};

// Sub-components
function ProductHero({ data }: { data: HeroData }) {
  const BadgeIcon = getIcon(data.badgeIcon);
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24 border-b border-border/40">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-semibold tracking-wider uppercase mb-6"
            >
              <BadgeIcon className="size-3.5" />
              {data.badge}
            </motion.div>
            <motion.h1
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-none mb-6"
            >
              {data.title}
            </motion.h1>
            <motion.p
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              {data.subtitle}
            </motion.p>
            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-y border-border/30 py-6 mb-8 text-xs"
            >
              <div>
                <span className="text-muted-foreground block font-medium">Minimum Order</span>
                <span className="font-bold text-foreground text-sm mt-1 block">{data.moq}</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-medium">Lead Time</span>
                <span className="font-bold text-foreground text-sm mt-1 block">{data.leadTime}</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-medium">CAD Prototyping</span>
                <span className="font-bold text-foreground text-sm mt-1 block">{data.cadTime}</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-medium">Sourcing Status</span>
                <span className="font-bold text-foreground text-sm mt-1 block">{data.ecoStatus}</span>
              </div>
            </motion.div>
            <motion.ul
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2.5 mb-8"
            >
              {data.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="size-4.5 text-accent flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href={data.quoteLink}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "group cursor-pointer font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
                )}
              >
                Configure &amp; Get Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={data.dielineLink}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "cursor-pointer font-semibold flex items-center justify-center gap-2 w-full sm:w-auto text-foreground border-border hover:bg-muted"
                )}
              >
                <FileText className="size-4" />
                Request CAD Dieline
              </Link>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="relative w-full aspect-[4/3] max-w-lg md:max-w-xl bg-gradient-to-tr from-secondary/50 to-secondary/10 rounded-3xl border border-border/40 p-4 shadow-xl overflow-hidden"
            >
              <div className="relative w-full h-full animate-float">
                <Image
                  src={data.image}
                  alt="Packaging Mockup Render"
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-xs border border-border/40 px-3 py-1.5 rounded-lg text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                Model: {data.modelName}
              </div>
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-xs border border-border/40 px-3 py-1.5 rounded-lg text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                Type: {data.boardType}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductOverview({ data }: { data: OverviewData }) {
  return (
    <section className="bg-secondary/10 py-24 border-b border-border/40">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              {data.tagline}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              {data.title}
            </h2>
          </div>
          <div className="lg:col-span-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
            {data.description}
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {data.items.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group flex gap-6 p-6 rounded-2xl border border-border/30 bg-background/60 shadow-xs hover:bg-background hover:border-border/60 hover:shadow-md transition-all cursor-default"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/5 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <Icon className="size-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProductStyles({ data }: { data: StylesData }) {
  return (
    <section className="bg-background py-24 border-b border-border/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            {data.tagline}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.items.map((style, idx) => {
            const Icon = getIcon(style.icon);
            return (
              <motion.div
                key={idx}
                variants={scaleVariants}
                className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-secondary/5 p-8 hover:bg-secondary/15 hover:border-border transition-all cursor-default"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex items-center justify-center size-10 rounded-lg bg-background border border-border/30 text-primary group-hover:text-accent transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-snug">
                      {style.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {style.desc}
                  </p>
                  <div className="flex flex-col gap-2 pt-4 border-t border-border/30 text-xs">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Joint Lock Style</span>
                      <span className="text-foreground font-medium">{style.locks}</span>
                    </div>
                    <div className="flex flex-col gap-0.5 mt-2">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Recommended Caliper</span>
                      <span className="text-foreground font-medium">{style.calipers}</span>
                    </div>
                    <div className="flex flex-col gap-0.5 mt-2">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Typical Industry Use</span>
                      <span className="text-foreground font-medium">{style.bestFor}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProductMaterials({ data }: { data: MaterialsData }) {
  return (
    <section className="bg-secondary/10 py-24 border-b border-border/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            {data.tagline}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {data.items.map((mat, idx) => {
            const Icon = getIcon(mat.icon);
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group flex flex-col sm:flex-row gap-6 rounded-2xl border border-border/50 bg-background p-8 hover:bg-background/80 hover:border-border transition-all cursor-default"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-secondary text-primary group-hover:text-accent transition-colors">
                    <Icon className="size-6" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {mat.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {mat.properties}
                    </p>
                    <div className="grid grid-cols-2 gap-4 border-t border-border/30 pt-4 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Caliper / Range</span>
                        <span className="text-foreground font-semibold mt-1 block">{mat.thickness}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Eco Certification</span>
                        <span className="text-foreground font-semibold mt-1 block">{mat.eco}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Standard Application</span>
                        <span className="text-foreground font-semibold mt-1 block">{mat.useCase}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/materials"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors uppercase tracking-wider self-start mt-6"
                  >
                    View Materials Board Specs
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProductPrinting({ data }: { data: PrintingData }) {
  return (
    <section className="bg-background py-24 border-b border-border/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            {data.tagline}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {data.items.map((method, idx) => {
            const Icon = getIcon(method.icon);
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-secondary/5 p-8 hover:bg-secondary/15 hover:border-border transition-all cursor-default"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex items-center justify-center size-10 rounded-lg bg-background border border-border/30 text-primary group-hover:text-accent transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-snug">
                      {method.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {method.desc}
                  </p>
                  <div className="flex flex-col gap-3 pt-4 border-t border-border/30 mb-6 text-xs">
                    <div className="flex justify-between">
                      <span className="font-medium text-muted-foreground">Minimum Setup MOQ</span>
                      <span className="font-bold text-foreground">{method.moq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-muted-foreground">Initial Setup Cost</span>
                      <span className="font-bold text-foreground">{method.setup}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-muted-foreground">Color Capability</span>
                      <span className="font-bold text-foreground text-right max-w-[150px] truncate">{method.color}</span>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2 mb-8">
                    {method.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-foreground">
                        <Check className="size-3.5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/printing"
                  className="inline-flex items-center justify-center w-full py-2.5 rounded-lg border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-all uppercase tracking-wider"
                >
                  View Print Guidelines
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProductFinishes({ data }: { data: FinishesData }) {
  return (
    <section className="bg-secondary/10 py-24 border-b border-border/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            {data.tagline}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {data.items.map((finish, idx) => {
            const Icon = getIcon(finish.icon);
            return (
              <motion.div
                key={idx}
                variants={scaleVariants}
                className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-background p-8 hover:bg-background/80 hover:border-border transition-all cursor-default"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex items-center justify-center size-10 rounded-lg bg-secondary text-primary group-hover:text-accent transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {finish.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {finish.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/30 pt-4 mb-6 text-xs">
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Visual Impact</span>
                      <span className="text-foreground font-semibold mt-1 block">{finish.visual}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Structural Protection</span>
                      <span className="text-foreground font-semibold mt-1 block">{finish.protection}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/finishes"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors uppercase tracking-wider self-start mt-6"
                >
                  View Embellishment Gallery
                  <ArrowRight className="size-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProductIndustries({ data }: { data: IndustriesData }) {
  return (
    <section className="bg-background py-24 border-b border-border/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            {data.tagline}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {data.items.map((ind, idx) => {
            const Icon = getIcon(ind.icon);
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-secondary/5 p-8 hover:bg-secondary/15 hover:border-border transition-all cursor-default"
              >
                <div>
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-background border border-border/30 text-primary group-hover:text-accent transition-colors mb-6">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {ind.name}
                  </h3>
                  <div className="flex flex-col gap-2.5 text-xs mb-6">
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Standard Requirements</span>
                      <span className="text-foreground font-semibold mt-1 block">{ind.requirements}</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Typical Applications</span>
                      <span className="text-foreground font-semibold mt-1 block">{ind.useCase}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={ind.link}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors uppercase tracking-wider self-start"
                >
                  View Industry Spec
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ProductGallery({ data }: { data: GalleryData }) {
  return (
    <section className="bg-secondary/10 py-24 border-b border-border/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            {data.tagline}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-background shadow-xs hover:shadow-md hover:border-border transition-all cursor-default"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted border-b border-border/30">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                  <span className="bg-background/90 backdrop-blur-xs text-[10px] font-bold text-foreground px-2 py-0.5 rounded-sm border border-border/40 shadow-xs uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    Best Use: {item.use}
                  </p>
                </div>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "w-full cursor-pointer flex items-center justify-center gap-1.5 font-medium group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors"
                  )}
                >
                  <Settings className="size-3.5" />
                  Configure Style
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProductFaq({ data }: { data: FaqData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  return (
    <section className="bg-background py-24 border-b border-border/40">
      <div className="container max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            {data.tagline}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {data.items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "rounded-xl border transition-all duration-200 bg-secondary/5 hover:bg-secondary/10",
                  isOpen ? "border-border/80 shadow-sm" : "border-border/40"
                )}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="flex items-center justify-between w-full p-6 text-left font-semibold text-foreground text-sm sm:text-base gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="size-5 text-accent flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                      isOpen && "rotate-180 text-accent"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/20 pl-14">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductCta({ data }: { data: CtaData }) {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[500px] rounded-full bg-accent/20 blur-[100px] pointer-events-none" />
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">
            {data.tagline}
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl max-w-2xl mx-auto mb-6 leading-tight">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href={data.quoteLink}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "group/cta cursor-pointer font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
              )}
            >
              Request a Custom Quote
              <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
            </Link>
            <Link
              href={data.contactLink}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "cursor-pointer font-semibold border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto flex items-center justify-center gap-2"
              )}
            >
              <MessageSquare className="size-4" />
              Speak with CAD Engineers
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ArrowUpRight inline icon
function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

// Master Wrapper
export function ProductTemplate({ config }: { config: ProductPageConfig }) {
  return (
    <main className="flex-1 flex flex-col">
      <ProductHero data={config.hero} />
      <ProductOverview data={config.overview} />
      <ProductStyles data={config.styles} />
      <ProductMaterials data={config.materials} />
      <ProductPrinting data={config.printing} />
      <ProductFinishes data={config.finishes} />
      <ProductIndustries data={config.industries} />
      <ProductGallery data={config.gallery} />
      <ProductFaq data={config.faq} />
      <ProductCta data={config.cta} />
    </main>
  );
}
