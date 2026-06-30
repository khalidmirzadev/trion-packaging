"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Box, ShieldCheck, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
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

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32 flex flex-col justify-center items-center min-h-[calc(100vh-4rem)]">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -z-10 size-96 rounded-full bg-accent/10 blur-[128px] pointer-events-none dark:bg-accent/5" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 size-96 rounded-full bg-primary/15 blur-[128px] pointer-events-none dark:bg-primary/5" />

      <div className="container relative z-10 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Tagline */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold tracking-wide text-accent mb-6">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              Premium Custom Packaging
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.1] mb-6"
            >
              Engineered to Protect. <br />
              <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                Designed to Elevate.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              Beautiful, custom printed boxes and packaging built to keep your products safe and give your customers an unforgettable unboxing experience.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/products"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "group/btn cursor-pointer font-medium tracking-wide flex items-center gap-2"
                )}
              >
                Explore Solutions
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
              <Link
                href="/quote"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "cursor-pointer font-medium tracking-wide text-center"
                )}
              >
                Request a Quote
              </Link>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-border/40"
            >
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold tracking-tight text-foreground">99.8%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">On-Time Delivery</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold tracking-tight text-foreground">10M+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Units Shipped</span>
              </div>
              <div className="hidden sm:flex flex-col gap-1">
                <span className="text-3xl font-bold tracking-tight text-foreground">Top Quality</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Satisfaction Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Packaging Mockup Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Background decorative glow behind mockup */}
            <motion.div
              variants={pulseVariants}
              animate="animate"
              className="absolute -z-10 size-64 rounded-full bg-accent/20 blur-[64px] pointer-events-none"
            />

            {/* Photorealistic mockup wrapper */}
            <div className="w-full max-w-[480px] aspect-square relative rounded-2xl overflow-hidden shadow-2xl border border-border/30 animate-float bg-muted">
              <Image
                src="/images/hero_packaging.png"
                alt="Premium Corporate Packaging Assortment"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
