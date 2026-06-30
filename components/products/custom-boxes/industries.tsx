"use client";

import { motion } from "framer-motion";
import { Cpu, Sparkles, ShoppingBag, Coffee, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const INDUSTRIES = [
  {
    icon: Sparkles,
    name: "Luxury Cosmetics & Skincare",
    requirements: "Sleek rigid setups, soft-touch lamination, gold foil stamps, custom inserts",
    useCase: "Perfume vials, anti-aging serums, cosmetic palettes, premium oils",
    link: "/industries#luxury",
  },
  {
    icon: Cpu,
    name: "Premium Consumer Electronics",
    requirements: "Telescope structural lids, shock-absorbing EVA foam, custom locking flaps",
    useCase: "Smartphones, premium headphones, camera lenses, hardware accessories",
    link: "/industries#tech",
  },
  {
    icon: ShoppingBag,
    name: "B2B Subscription & Retail",
    requirements: "Crush-resistant fluting, double-sided printing, tape strip seal seals",
    useCase: "Apparel presentation boxes, subscription boxes, boutique gift sets",
    link: "/industries#ecommerce",
  },
  {
    icon: Coffee,
    name: "Specialty Food & Spirits",
    requirements: "Grease-resistant barrier liners, bottle divider cell matrices, windows",
    useCase: "Spirits gift bottles, luxury chocolate selections, tea leaf sampler chest",
    link: "/industries#food",
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

export function CustomBoxIndustries() {
  return (
    <section className="bg-background py-24 border-b border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            Target Markets
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Industries Utilizing Custom Boxes
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Every market has unique mechanical constraints. We engineer custom packages that address regulatory standards while preserving branding fidelity.
          </p>
        </div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
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
