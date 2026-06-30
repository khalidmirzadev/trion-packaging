"use client";

import { motion } from "framer-motion";
import { Sparkles, Sun, Crop, Paintbrush, ArrowRight } from "lucide-react";
import Link from "next/link";

const FINISHES = [
  {
    icon: Sun,
    name: "Gloss Highlights (Spot UV)",
    aesthetic: "Shiny, raised gloss on logos or text",
    durability: "Excellent moisture & rub resistance",
    desc: "A clear gloss layer applied selectively to make your logo or design pattern stand out with a beautiful shine.",
  },
  {
    icon: Sparkles,
    name: "Shiny Foil Stamping",
    aesthetic: "Metallic gold, silver, copper, or rose gold highlights",
    durability: "Highly durable, zero peeling",
    desc: "Uses heat and pressure to stamp metallic foils directly onto the box, creating custom shiny details that won't peel.",
  },
  {
    icon: Paintbrush,
    name: "Velvet Matte & Gloss Finishes",
    aesthetic: "Velvety-soft matte or high-shine glass look",
    durability: "Protects against scuffing, cracking, and moisture",
    desc: "A thin protective coating applied to the box. This prevents corners from scuffing, keeps ink from cracking, and makes the box feel premium.",
  },
  {
    icon: Crop,
    name: "Raised & Pressed Details",
    aesthetic: "Raised 3D feel or sunken texture",
    durability: "Permanent texture built into the paper",
    desc: "Presses your logo or text directly into the paper, creating a distinct, touchable 3D texture you can feel.",
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export function FinishesSection() {
  return (
    <section className="bg-background py-24 border-t border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Custom Finishing Options
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Add special touches to make your box stand out. These finishes help your products catch eyes on store shelves and look great when unboxed.
          </p>
        </div>

        {/* Finishes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {FINISHES.map((finish) => {
            const Icon = finish.icon;
            return (
              <motion.div
                key={finish.name}
                variants={cardVariants}
                className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-secondary/10 p-8 hover:bg-secondary/20 hover:border-border transition-all cursor-default"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex items-center justify-center size-10 rounded-lg bg-background border border-border/40 text-primary group-hover:text-accent transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {finish.name}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {finish.desc}
                  </p>

                  {/* Spec Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border/30 pt-4 mb-6">
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Visual Effect</span>
                      <span className="text-xs text-foreground font-semibold mt-1 block">{finish.aesthetic}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Protection Rating</span>
                      <span className="text-xs text-foreground font-semibold mt-1 block">{finish.durability}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/finishes"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors uppercase tracking-wider self-start mt-4"
                >
                  View Finishes Gallery
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
