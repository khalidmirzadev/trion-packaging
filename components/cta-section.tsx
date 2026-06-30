"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section className="py-24 border-t border-border/40 bg-background relative overflow-hidden">
      {/* CAD Overlay lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle glowing orb in background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[500px] rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

          {/* Tagline */}
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">
            Ready to Start Your Project?
          </span>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl max-w-2xl mx-auto mb-6 leading-tight">
            Get Custom Dielines &amp; Prototype Pricing
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Configure your custom box dimensions with our CAD engineers. Receive a production price sheet and vector structural dielines within 24 hours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/quote"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "group/cta cursor-pointer font-medium tracking-wide flex items-center gap-2 w-full sm:w-auto"
              )}
            >
              Request a Custom Quote
              <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "cursor-pointer font-medium tracking-wide border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto flex items-center justify-center gap-2"
              )}
            >
              <MessageSquare className="size-4" />
              Contact Specialists
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
