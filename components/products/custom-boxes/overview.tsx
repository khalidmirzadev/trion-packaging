"use client";

import { motion } from "framer-motion";
import { Hammer, Ruler, Compass, Cpu } from "lucide-react";

const OVERVIEW_ITEMS = [
  {
    icon: Compass,
    title: "CAD Structural Engineering",
    desc: "Our structural packaging engineers draft CAD vector dielines customized to your products. We optimize crease and score lines to facilitate rapid manual folding or automated factory cartoning line assemblies.",
  },
  {
    icon: Ruler,
    title: "High-Precision Tolerancing",
    desc: "We enforce precise manufacturing tolerances of ±0.5mm. This guarantees that friction locks, tuck flaps, and double-walled containers slot together securely, eliminating loose play or product shifting.",
  },
  {
    icon: Hammer,
    title: "Molded Inserts & Dividers",
    desc: "For multi-component retail or luxury products, we build custom corrugated dividers, SBS partitions, or thermoformed EVA foam inserts to cradle and protect every element within the custom container.",
  },
  {
    icon: Cpu,
    title: "ISTA Drop & Transit Ready",
    desc: "All custom structures undergo digital finite element compression simulations. We ensure your custom shapes withstand vertical stacking pressure and impact hazards during shipping.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

export function CustomBoxOverview() {
  return (
    <section className="bg-secondary/10 py-24 border-b border-border/40">
      <div className="container">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Engineering Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
              Structural Packaging Engineered for B2B Performance
            </h2>
          </div>
          <div className="lg:col-span-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Every custom box shape requires thoughtful engineering. We don't believe in one-size-fits-all templates. Our team starts with your product's 3D CAD dimensions or physical footprints, selecting the exact paperboard caliper and lock configurations to ensure visual shelf dominance and transit safety.
          </div>
        </div>

        {/* Features list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {OVERVIEW_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
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
