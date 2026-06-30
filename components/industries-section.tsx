"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Cpu, Sparkles, Coffee, HeartPulse, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const INDUSTRIES = [
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    desc: "Optimized for parcel post durability, secure tape seals, and premium double-sided interior prints for memorable customer unboxings.",
    link: "/industries#ecommerce",
  },
  {
    icon: Cpu,
    title: "Electronics & Tech",
    desc: "Custom shock-absorbent cardboard fitments, anti-static barriers, and sleek custom rigid folding configurations for high-end devices.",
    link: "/industries#tech",
  },
  {
    icon: Sparkles,
    title: "Cosmetics & Luxury",
    desc: "Sleek rigid setups, soft-touch lamination, metallic foil stamps, and magnetic closures designed to emphasize elegance.",
    link: "/industries#luxury",
  },
  {
    icon: Coffee,
    title: "Food & Beverage",
    desc: "FDA-compliant grease-resistant liners, insulated corrugated boxes, and moisture-controlled kraft structures for freshness.",
    link: "/industries#food",
  },
  {
    icon: HeartPulse,
    title: "Medical & Pharma",
    desc: "Sterile protective packaging, child-resistant folding cartons, exact sizing tolerances, and integrated barcoding fields.",
    link: "/industries#medical",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
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
      damping: 20,
    },
  },
};

export function IndustriesSection() {
  return (
    <section className="bg-secondary/20 py-24 border-t border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Custom B2B packaging solutions engineered for industry-specific requirements, prioritizing structural protection and brand value.
          </p>
        </div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                variants={cardVariants}
                className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-background/50 p-8 shadow-sm transition-all hover:bg-background hover:shadow-md hover:border-border cursor-default"
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/5 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors mb-6">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-1">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>
                <Link
                  href={ind.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors self-start mt-auto"
                >
                  View Solutions
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
