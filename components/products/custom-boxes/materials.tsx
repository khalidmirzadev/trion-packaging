"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Shield, Layers, Gem } from "lucide-react";
import Link from "next/link";

const MATERIALS = [
  {
    icon: Gem,
    name: "Solid Bleached Sulfate (SBS)",
    thickness: "16pt to 24pt (300-400 GSM)",
    eco: "100% FSC Certified Virgin Fibers",
    properties: "Clay-coated double-sided smooth surface, optimal for luxury cosmetic runs",
    useCase: "Cosmetics, pharmaceutical boxes, retail presentation cartons",
  },
  {
    icon: Leaf,
    name: "Natural Unbleached Kraft",
    thickness: "18pt to 28pt (320-450 GSM)",
    eco: "100% Recycled Post-Consumer Waste (PCR)",
    properties: "Organic raw fibers, high bursting strength, water-based ink friendly",
    useCase: "Eco-conscious retail packaging, organic soap bars, direct-to-consumer goods",
  },
  {
    icon: Shield,
    name: "Premium Grey Rigid Board",
    thickness: "1.2mm to 2.8mm (800-1800 GSM)",
    eco: "100% Recyclable Compressed Paper Waste",
    properties: "Non-bending structural armor, wrapped in decorative art liners",
    useCase: "Luxury gift setups, heavy electronic device packaging, jewelry containers",
  },
  {
    icon: Layers,
    name: "E-Flute Corrugated Board",
    thickness: "1.6mm Flute Depth",
    eco: "85% Recycled Material, FSC Certified Liners",
    properties: "Lightweight sandwich fluting offering high crushing resist pressure",
    useCase: "Heavy retail boxes, subscriptions, industrial part box protectors",
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
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
    },
  },
};

export function CustomBoxMaterials() {
  return (
    <section className="bg-secondary/10 py-24 border-b border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            Substrates
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Selected Substrates for Custom Runs
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            The substrate determines folding stiffness and graphics contrast. We select and calibrate boards specifically to matches your mechanical load requirements.
          </p>
        </div>

        {/* Materials Cards Grid */}
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
                className="group flex flex-col sm:flex-row gap-6 rounded-2xl border border-border/50 bg-background p-8 hover:bg-background/80 hover:border-border transition-all cursor-default"
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-secondary text-primary group-hover:text-accent transition-colors">
                    <Icon className="size-6" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {mat.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {mat.properties}
                    </p>

                    <div className="grid grid-cols-2 gap-4 border-t border-border/30 pt-4 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Caliper / Range</span>
                        <span className="text-foreground font-semibold mt-1 block">{mat.thickness}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Eco Certification</span>
                        <span className="text-foreground font-semibold mt-1 block">{mat.eco}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Standard Application</span>
                        <span className="text-foreground font-semibold mt-1 block">{mat.useCase}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/materials"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors uppercase tracking-wider self-start mt-6"
                  >
                    View Materials Board Specs
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
