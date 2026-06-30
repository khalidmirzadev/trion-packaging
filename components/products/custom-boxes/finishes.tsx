"use client";

import { motion } from "framer-motion";
import { Sparkles, Sun, Crop, Paintbrush, ArrowRight } from "lucide-react";
import Link from "next/link";

const FINISHES = [
  {
    icon: Sun,
    name: "Selective Spot UV",
    visual: "High-gloss glossy reflection against matte varnishes",
    protection: "Excellent moisture, fingerprint, and rub resistance",
    desc: "A liquid polymer coating cured under ultra-violet light. Selectively applied over logo details, lettering, or vector patterns to create a glossy, raised tactile feel against a velvet matte card base.",
  },
  {
    icon: Sparkles,
    name: "Hot Foil Stamping",
    visual: "Reflective metallic gold, silver, bronze, or holographics",
    protection: "Extremely durable, scratch-resistant brass die bond",
    desc: "Heat-stamps metallic foils directly into the paper fibers using custom brass dies and precise pressure. Yields a highly reflective luxury finish optimized for high-end consumer products.",
  },
  {
    icon: Paintbrush,
    name: "Soft-Touch Matte Lamination",
    visual: "Velvet tactile touch with zero glare reflections",
    protection: "Completely prevents ink cracking along folded scores",
    desc: "Applies a premium, microscopic plastic film layer onto the printed board. Highly recommended for custom boxes to prevent scuff marks and cracking along structural fold crease lines.",
  },
  {
    icon: Crop,
    name: "Embossing & Debossing",
    visual: "Raised (embossed) or pressed (debossed) 3D details",
    protection: "Permanent substrate fiber compression structural relief",
    desc: "A male-female metal die set presses the paper fibers to raise or depress specific artwork segments. Creates a premium 3D relief that invites potential buyers to touch the packaging.",
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
      stiffness: 100,
      damping: 20,
    },
  },
};

export function CustomBoxFinishes() {
  return (
    <section className="bg-secondary/10 py-24 border-b border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            Embellishments
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Luxury Finishing Options
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Elevate sensory appeal and structural durability. Embellishments differentiate your custom boxes on store shelving and retail display stands.
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
