"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Can I request a custom dieline before placing a formal order?",
    a: "Yes. Once you provide the approximate width, depth, height, and style of your custom box, our in-house CAD engineering team compiles a 2D vector dieline file (in AI, PDF, or DXF formats) for your graphic designers within 24 hours.",
  },
  {
    q: "What artwork format requirements do you enforce for custom print runs?",
    a: "We require graphic files saved directly onto our structural CAD dielines in editable vector formats (Adobe Illustrator .AI, vector PDF, or EPS). Ensure all text layers are converted to outlines, image links are embedded, and raster assets meet a minimum 300 DPI resolution.",
  },
  {
    q: "What is your physical prototype sampling policy and cost structure?",
    a: "We provide two sample paths. Unprinted CAD-cut structural white boxes (to verify paperboard caliper and product fitment) are available for a nominal fee. Fully printed digital production samples are also available. Sample setup fees are fully credited back to your balance when you authorize a production run.",
  },
  {
    q: "Can you design internal cardboard dividers or protective foam inserts?",
    a: "Yes. Our packaging engineers can construct custom partition grids, folded card dividers, or high-density EVA/EPE foam trays. Simply ship your product prototypes to our CAD laboratory, and we will engineer a locking support insert.",
  },
  {
    q: "What are your standard and rush shipping lead times?",
    a: "Our standard manufacturing lead time is 10 to 15 business days following digital artwork proof approval. We support expedited rush turnarounds of 5 to 7 business days depending on tool availability and raw substrate stock.",
  },
];

export function CustomBoxFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-background py-24 border-b border-border/40">
      <div className="container max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
            Common Inquiries
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Custom Packaging FAQ
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Review detailed specifications regarding structural layout designs, vector dieline guidelines, sample fees, and bulk logistics.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "rounded-xl border transition-all duration-200 bg-secondary/5 hover:bg-secondary/10",
                  isOpen ? "border-border/80 shadow-sm" : "border-border/40"
                )}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="flex items-center justify-between w-full p-6 text-left font-semibold text-foreground text-sm sm:text-base gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="size-5 text-accent flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                      isOpen && "rotate-180 text-accent"
                    )}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/20 pl-14">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
