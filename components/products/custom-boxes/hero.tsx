"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, CheckCircle2, Shield } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      delay: 0.1,
    },
  },
};

export function CustomBoxHero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24 border-b border-border/40">
      {/* Background CAD grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Product Information */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-semibold tracking-wider uppercase mb-6"
            >
              <Shield className="size-3.5" />
              Structural Packaging
            </motion.div>

            <motion.h1
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-none mb-6"
            >
              Custom Boxes &amp; <br />
              <span className="text-accent">Tailored Enclosures</span>
            </motion.h1>

            <motion.p
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              Precision B2B custom boxes engineered to your product's exact boundaries. We build rigid setups, folding cartons, and fluted sleeves from sustainably sourced substrates with 24-hour CAD dieline turnaround.
            </motion.p>

            {/* Quick Spec Badge Bar */}
            <motion.div
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-y border-border/30 py-6 mb-8 text-xs"
            >
              <div>
                <span className="text-muted-foreground block font-medium">Minimum Order</span>
                <span className="font-bold text-foreground text-sm mt-1 block">100 Units Only</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-medium">Lead Time</span>
                <span className="font-bold text-foreground text-sm mt-1 block">10 - 15 Days</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-medium">CAD Prototyping</span>
                <span className="font-bold text-foreground text-sm mt-1 block">Within 24 Hours</span>
              </div>
              <div>
                <span className="text-muted-foreground block font-medium">Sourcing Status</span>
                <span className="font-bold text-foreground text-sm mt-1 block">100% Recyclable</span>
              </div>
            </motion.div>

            {/* Key benefits bullets */}
            <motion.ul
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2.5 mb-8"
            >
              <li className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="size-4.5 text-accent flex-shrink-0" />
                <span>Zero tooling setup charges for digital short-run printing</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="size-4.5 text-accent flex-shrink-0" />
                <span>Perfect caliper board thickness matching product weight</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="size-4.5 text-accent flex-shrink-0" />
                <span>Internal foam dividers &amp; custom locking inserts available</span>
              </li>
            </motion.ul>

            {/* Action Buttons */}
            <motion.div
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/quote?product=custom-boxes"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "group cursor-pointer font-semibold flex items-center justify-center gap-2 w-full sm:w-auto"
                )}
              >
                Configure &amp; Get Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact?request=dieline"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "cursor-pointer font-semibold flex items-center justify-center gap-2 w-full sm:w-auto text-foreground border-border hover:bg-muted"
                )}
              >
                <FileText className="size-4" />
                Request CAD Dieline
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Visual Box Mockup */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="relative w-full aspect-[4/3] max-w-lg md:max-w-xl bg-gradient-to-tr from-secondary/50 to-secondary/10 rounded-3xl border border-border/40 p-4 shadow-xl overflow-hidden"
            >
              {/* Box Float animation */}
              <div className="relative w-full h-full animate-float">
                <Image
                  src="/images/custom_box.png"
                  alt="Custom Structural Box Packaging Render"
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Decorative engineering tags */}
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-xs border border-border/40 px-3 py-1.5 rounded-lg text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                Model: TB-X01 | Tol: ±0.5mm
              </div>
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-xs border border-border/40 px-3 py-1.5 rounded-lg text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                Type: SBS Bleached Board
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
