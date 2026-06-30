"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    name: "Custom Boxes",
    img: "/images/custom_box.png",
    desc: "Uniquely shaped box designs and prototypes engineered to lock custom products perfectly.",
    href: "/products/custom-boxes",
  },
  {
    name: "Mailer Boxes",
    img: "/images/mailer_box.png",
    desc: "Rigid-fold corrugated mailing cartons, ideal for direct-to-consumer e-commerce unboxings.",
    href: "/products/mailer-boxes",
  },
  {
    name: "Corrugated Boxes",
    img: "/images/corrugated_box.png",
    desc: "Durable shipping cartons built with thick fluting to protect bulky shipments during logistics.",
    href: "/products/corrugated-boxes",
  },
  {
    name: "Folding Cartons",
    img: "/images/folding_carton.png",
    desc: "Sleek, clay-coated paperboard boxes designed for retail store shelves and medicine packages.",
    href: "/products/folding-cartons",
  },
  {
    name: "Rigid Boxes",
    img: "/images/rigid_box.png",
    desc: "Thick compressed chipboard setup boxes with magnetic lids, providing Apple-quality luxury feel.",
    href: "/products/rigid-boxes",
  },
  {
    name: "Cosmetic Boxes",
    img: "/images/cosmetic_box.png",
    desc: "Chic custom finishes, gold foil stamps, and soft-touch mattes crafted for high-end skincare.",
    href: "/products/cosmetic-boxes",
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

export function CategoriesSection() {
  return (
    <section className="bg-secondary/20 py-24 border-t border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            Featured Solutions
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Packaging Categories
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Choose from our primary B2B packaging product lines. Select a category to download structural dielines, test dimensions, and configure print layouts.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.name}
              variants={cardVariants}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-background shadow-sm hover:shadow-md hover:border-border transition-all cursor-default"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted border-b border-border/30">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                </div>

                <Link
                  href={cat.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "w-full cursor-pointer flex items-center justify-center gap-1.5 font-medium group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors"
                  )}
                >
                  Configure &amp; Quote
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
