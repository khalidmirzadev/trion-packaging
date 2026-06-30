"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GALLERY_ITEMS = [
  {
    name: "Custom Structural Box",
    img: "/images/custom_box.png",
    type: "SBS Paperboard",
    use: "Luxury Retail & Display",
    href: "/products/custom-boxes",
  },
  {
    name: "Rigid Presentation Box",
    img: "/images/rigid_box.png",
    type: "Premium Rigid Chipboard",
    use: "Electronics & Tech Unboxing",
    href: "/products/rigid-boxes",
  },
  {
    name: "Premium Cosmetics Carton",
    img: "/images/cosmetic_box.png",
    type: "Soft-Touch Bleached Sulfate",
    use: "Luxury Skincare & Cosmetics",
    href: "/products/cosmetic-boxes",
  },
  {
    name: "Direct Mailer Box",
    img: "/images/mailer_box.png",
    type: "E-Flute Corrugated",
    use: "E-Commerce Logistics",
    href: "/products/mailer-boxes",
  },
  {
    name: "Folding Retail Carton",
    img: "/images/folding_carton.png",
    type: "FSC Clay-Coated SBS",
    use: "Point-of-Sale Store Shelf",
    href: "/products/folding-cartons",
  },
  {
    name: "Heavy Corrugated Carton",
    img: "/images/corrugated_box.png",
    type: "B-Flute Heavy Shipping",
    use: "Industrial Part Logistics",
    href: "/products/corrugated-boxes",
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
      stiffness: 100,
      damping: 20,
    },
  },
};

export function CustomBoxGallery() {
  return (
    <section className="bg-secondary/10 py-24 border-b border-border/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            Product Gallery
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Related Packaging Galleries
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Examine the structural builds of our primary packaging categories. Choose any configuration to view dimensions, print boundaries, and request dielines.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-background shadow-xs hover:shadow-md hover:border-border transition-all cursor-default"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted border-b border-border/30">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Visual spec pills */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                  <span className="bg-background/90 backdrop-blur-xs text-[10px] font-bold text-foreground px-2 py-0.5 rounded-sm border border-border/40 shadow-xs uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-6">
                    Best Use: {item.use}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "w-full cursor-pointer flex items-center justify-center gap-1.5 font-medium group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors"
                  )}
                >
                  <Settings className="size-3.5" />
                  Configure Style
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
