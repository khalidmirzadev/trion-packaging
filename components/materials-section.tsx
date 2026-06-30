"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Shield, Layers, Gem } from "lucide-react";
import Link from "next/link";

const MATERIALS = [
  {
    icon: Leaf,
    name: "Eco-Friendly Brown Kraft",
    caliper: "Natural organic cardstock",
    recycle: "100% Recycled & Biodegradable",
    bestFor: "Organic products, handmade brands, e-commerce",
    desc: "Provides a rustic, natural brown texture that is strong, durable, and fully recyclable.",
  },
  {
    icon: Gem,
    name: "Premium White Cardboard",
    caliper: "Smooth white cardstock",
    recycle: "100% Sustainably Sourced",
    bestFor: "Makeup boxes, retail packaging, premium products",
    desc: "A bright white, clay-coated paperboard that makes custom printed colors look sharp and vivid.",
  },
  {
    icon: Shield,
    name: "Thick Rigid Gift Board",
    caliper: "Extra-thick non-bendable board",
    recycle: "90% Recycled Materials",
    bestFor: "Luxury gift sets, electronics, watch boxes",
    desc: "Extra-thick board that doesn't bend, wrapped in premium paper for a high-end gift unboxing feel.",
  },
  {
    icon: Layers,
    name: "Sturdy Fluted Cardboard",
    caliper: "Standard corrugated shipping board",
    recycle: "70% - 95% Recycled Cardboard",
    bestFor: "Online shipping boxes, subscription box mailers",
    desc: "Built with a wave-like middle layer to absorb shock and protect your items during mailing.",
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export function MaterialsSection() {
  return (
    <section className="bg-background py-24 border-t border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Premium Box Materials
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Every box starts with the right material. We help you choose the best cardboard options to protect your products and showcase your custom prints.
          </p>
        </div>

        {/* Materials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {MATERIALS.map((mat) => {
            const Icon = mat.icon;
            return (
              <motion.div
                key={mat.name}
                variants={cardVariants}
                className="group flex flex-col md:flex-row gap-6 rounded-2xl border border-border/50 bg-secondary/10 p-8 hover:bg-secondary/20 hover:border-border/80 transition-all cursor-default"
              >
                {/* Left side: Icon */}
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-background border border-border/40 text-primary group-hover:text-accent transition-colors">
                    <Icon className="size-6" />
                  </div>
                </div>

                {/* Right side: Specifications */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {mat.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {mat.desc}
                    </p>
                    
                    {/* Technical spec sheets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 border-t border-border/30 pt-4 mb-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Thickness / Weight</span>
                        <span className="text-xs text-foreground font-medium mt-0.5">{mat.caliper}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Sourcing / Eco Status</span>
                        <span className="text-xs text-foreground font-medium mt-0.5">{mat.recycle}</span>
                      </div>
                      <div className="flex flex-col sm:col-span-2 mt-2">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Best Suited For</span>
                        <span className="text-xs text-foreground font-medium mt-0.5">{mat.bestFor}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/materials"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors uppercase tracking-wider self-start"
                  >
                    View Materials Specs
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
