"use client";

import { motion } from "framer-motion";
import { Maximize2, Layers, Package, Layout, Box } from "lucide-react";

const STYLES = [
  {
    icon: Box,
    name: "Tuck-Top & Auto-Bottom",
    locks: "Friction-lock top with pre-glued bottom flaps",
    bestFor: "Fast retail assembly lines, light to medium electronics, cosmetic bottles",
    calipers: "16pt - 24pt SBS Paperboard",
    desc: "The standard B2B workhorse. Features a fast-folding automatic bottom lock that snaps into place under light hand pressure, saving valuable packing time.",
  },
  {
    icon: Layout,
    name: "Telescope Box (2-Piece)",
    locks: "Air-suction tray with snug-fitting lid shell",
    bestFor: "Luxury unboxings, electronic devices, premium corporate gifts",
    calipers: "800 - 1500 GSM rigid chipboard wrapped in 120 GSM liner",
    desc: "Comprises an independent base and cover. Standard tolerances are engineered to generate minor air resistance during unboxing, creating an elegant slow-glide feel.",
  },
  {
    icon: Layers,
    name: "Slide Drawer & Sleeve",
    locks: "Inner drawer tray locked inside a rigid sleeve",
    bestFor: "Jewelry presentation boxes, cosmetics, high-end cannabis packaging",
    calipers: "18pt SBS or heavy rigid board configurations",
    desc: "Uses a sliding tray enclosed in a sleeve. Features a pull ribbon or finger notch, providing a tactile unboxing experience that keeps components securely tucked.",
  },
  {
    icon: Package,
    name: "Custom Cardboard Sleeves",
    locks: "Banded sleeve envelope with open ends",
    bestFor: "Frozen food trays, branding unprinted white mailers, apparel bundles",
    calipers: "14pt - 18pt clay-coated Kraft board",
    desc: "Open-ended paper wraps designed to slide over existing containers or products. An extremely cost-effective way to add premium high-end print logos to standard blanks.",
  },
  {
    icon: Maximize2,
    name: "Counter Displays (POP)",
    locks: "Fold-out header card with segmented bottom tray",
    bestFor: "Point-of-purchase retail zones, candy bars, cosmetics testers",
    calipers: "E-Flute corrugated board or heavy 28pt SBS",
    desc: "Shipped flat and converts into a sturdy display shelf with a header card. Engineered to sit at retail checkouts to capture impulse purchases.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 18,
    },
  },
};

export function CustomBoxStyles() {
  return (
    <section className="bg-background py-24 border-b border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            Structural Variety
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Available Structural Styles
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Configure your custom box run into any of our standard structural layouts. We also support custom CAD shape requests tailored to irregular products.
          </p>
        </div>

        {/* Styles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {STYLES.map((style) => {
            const Icon = style.icon;
            return (
              <motion.div
                key={style.name}
                variants={cardVariants}
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
