"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "VP of Supply Chain",
    company: "Apex E-commerce",
    quote: "Trion's corrugated mailers cut our shipping damage rates to zero. The custom double-sided interior prints are excellent, and their low MOQ helped us run dynamic seasonal campaigns without inventory bloat.",
  },
  {
    name: "Marcus Zhao",
    role: "Director of Product Design",
    company: "Lumina Tech Devices",
    quote: "Our electronics need rigid structures. Trion designed a custom paperboard insert that locks the hardware securely while creating a premium, Apple-quality sliding friction pull. Unparalleled CAD dieline assistance.",
  },
  {
    name: "Elena Rostova",
    role: "Brand Director",
    company: "Sol Eco-Cosmetics",
    quote: "Switching to Trion's FSC certified 100% recycled natural Kraft paperboard cartons elevated our eco-branding. Their Spot UV coating contrasts beautifully on raw kraft paper. Quote turnaround was remarkably fast.",
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

export function TestimonialsSection() {
  return (
    <section className="bg-secondary/20 py-24 border-t border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            B2B Partner Testimonials
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Leading brands trust Trion Packaging for structural engineering precision, color consistency, and reliable logistics support.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="flex flex-col justify-between rounded-2xl border border-border/50 bg-background p-8 shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-foreground italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-border/30 mt-auto">
                <div className="flex-shrink-0">
                  <div className="size-10 rounded-full bg-primary/5 text-primary font-bold flex items-center justify-center text-sm border border-border/40">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-tight">
                    {t.name}
                  </h4>
                  <span className="text-[11px] text-muted-foreground font-medium block mt-0.5">
                    {t.role}, <span className="font-semibold">{t.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
