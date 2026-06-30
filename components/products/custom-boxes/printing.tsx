"use client";

import { motion } from "framer-motion";
import { Check, Columns, Printer, Layers } from "lucide-react";
import Link from "next/link";

const METHODS = [
  {
    icon: Printer,
    name: "Offset Litho-Lamination",
    moq: "1,000 runs",
    setup: "High (Requires metal plates & dies)",
    color: "Pantone PMS matching, 100% CMYK Process",
    bestFor: "Luxury presentation boxes, high-end retail cosmetic cartons",
    desc: "Provides the highest graphic contrast, crisp fine-line text, and seamless color blends. Paper liners are offset printed, laminated to rigid board or E-flute, and then CAD-cut.",
    benefits: ["Museum-quality print output", "Spot UV and foil stamping compatible", "Lowest unit cost at B2B scale"],
  },
  {
    icon: Columns,
    name: "Digital Inkjet Press",
    moq: "100 runs",
    setup: "Zero (No print plates required)",
    color: "Standard high-resolution CMYK Process",
    bestFor: "Market testing, limited-edition promotional gift sets, prototype samples",
    desc: "Prints high-resolution digital files directly onto selected paperboard. Ideal for quick trial runs or varying designs across single product lines without plate setup delays.",
    benefits: ["No initial plate investment", "24-48 hour print turnarounds", "Variable image/text option support"],
  },
  {
    icon: Layers,
    name: "Flexographic Printing",
    moq: "500 runs",
    setup: "Medium (Requires photopolymer plates)",
    color: "1 to 3 spot Pantone solid colors",
    bestFor: "Corrugated packaging boxes, inner carton shipping labels",
    desc: "Uses rotary rubber plates to apply simple water-based inks directly onto thick fluted corrugated board. Highly efficient for standard branding text, warning logos, and barcodes.",
    benefits: ["Ultra-fast print speeds", "Water-based compostable inks", "Robust ink-to-corrugated bond"],
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
    },
  },
};

export function CustomBoxPrinting() {
  return (
    <section className="bg-background py-24 border-b border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            Graphics Application
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            High-Fidelity Printing Options
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            From short run digital tests to high volume offset litho matching, choose the print methodology that matches your budget and color tolerances.
          </p>
        </div>

        {/* Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {METHODS.map((method) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.name}
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
                    {method.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-xs text-foreground">
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
