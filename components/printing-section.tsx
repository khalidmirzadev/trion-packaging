"use client";

import { motion } from "framer-motion";
import { Check, Columns, Printer, Layers } from "lucide-react";
import Link from "next/link";

const PRINT_METHODS = [
  {
    icon: Printer,
    name: "High-Volume Printing",
    moq: "1,000 units",
    plates: "Required (Setup cost applies)",
    color: "Custom brand colors & CMYK",
    bestFor: "Luxury boxes, retail packaging, and makeup boxes",
    desc: "Perfect for larger runs. Delivers the highest quality retail prints with sharp details and matching custom brand colors.",
    pros: ["Premium retail print quality", "Add shiny foil or spot gloss easily", "Lowest cost per box for large orders"],
  },
  {
    icon: Layers,
    name: "Direct Box Printing",
    moq: "500 units",
    plates: "Required (Plate setup fee applies)",
    color: "1 to 3 solid colors",
    bestFor: "Cardboard shipping boxes, subscription mailers",
    desc: "Prints ink directly onto sturdy cardboard shipping boxes. Simple, durable, and very cost-effective for large shipping box runs.",
    pros: ["Fast production speeds", "Highly cost-effective", "Perfect for shipping boxes"],
  },
  {
    icon: Columns,
    name: "Short-Run Digital Printing",
    moq: "100 units",
    plates: "None (Zero plate setup costs)",
    color: "Full-color digital print",
    bestFor: "Startups, test runs, and limited edition products",
    desc: "Prints your custom design directly from digital files onto cardboard. Perfect for small batches, testing new designs, or quick turnarounds.",
    pros: ["Fast turnarounds (2-3 days)", "Print multiple designs together", "Zero startup or setup fees"],
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
  hidden: { opacity: 0, y: 30 },
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

export function PrintingSection() {
  return (
    <section className="bg-secondary/20 py-24 border-t border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Custom Printing Options
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Choose the best printing style for your brand based on your order size and design details. We make sure your box colors look beautiful and consistent.
          </p>
        </div>

        {/* Printing Methods Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {PRINT_METHODS.map((method) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.name}
                variants={cardVariants}
                className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-background/50 p-8 shadow-sm transition-all hover:bg-background hover:shadow-md hover:border-border cursor-default"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex items-center justify-center size-10 rounded-lg bg-primary/5 text-primary group-hover:text-accent transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-snug">
                      {method.name}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {method.desc}
                  </p>

                  {/* Spec List */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-border/30 mb-6 text-xs">
                    <div className="flex justify-between">
                      <span className="font-medium text-muted-foreground">Minimum Run (MOQ)</span>
                      <span className="font-bold text-foreground">{method.moq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-muted-foreground">Plate Setup Fee</span>
                      <span className="font-bold text-foreground">{method.plates}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-muted-foreground">Color Profiles</span>
                      <span className="font-bold text-foreground">{method.color}</span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2 mb-8">
                    {method.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-xs text-foreground">
                        <Check className="size-3.5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/printing"
                  className="inline-flex items-center justify-center w-full py-2.5 rounded-lg border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-all uppercase tracking-wider"
                >
                  Learn Printing Setup
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
