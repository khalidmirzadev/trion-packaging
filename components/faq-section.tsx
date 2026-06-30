"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "What is your Minimum Order Quantity (MOQ)?",
    a: "Our standard MOQs depend on the manufacturing technology. Digital inkjet printing starts at 100 units (perfect for market testing and prototypes). Flexographic corrugated runs start at 500 units, and high-fidelity Offset litho-laminated cartons start at 1,000 units.",
  },
  {
    q: "Do you provide custom structural templates (dielines)?",
    a: "Yes. Once your dimensions and structural package choices are submitted, our in-house CAD engineering team generates a custom vector dieline file (in Adobe Illustrator, PDF, or CAD DXF formats) to match your product precisely.",
  },
  {
    q: "What are the standard manufacturing lead times?",
    a: "Standard B2B production lead times are 10 to 15 business days following final digital artwork proof approval. We also support expedited rush runs of 5 to 7 business days depending on order volumes and plate availability.",
  },
  {
    q: "Can I request physical pre-production samples?",
    a: "Yes. We offer custom CAD-cut sample mockups to verify caliper thickness and dimensions before mass production. We provide unprinted white structural samples as well as fully printed digital sample boxes.",
  },
  {
    q: "Are all packaging substrates eco-friendly and recyclable?",
    a: "Yes, we focus on circular packaging. Our natural Kraft and fluted corrugated substrates are manufactured with up to 100% post-consumer recycled fibers (PCR). All paperboards are FSC certified and we use compostable water-based soy inks.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-background py-24 border-t border-border/40">
      <div className="container max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Everything you need to know about our custom box design, sample setups, order specifications, and B2B logistics.
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
                  "rounded-xl border transition-all duration-200 bg-secondary/10 hover:bg-secondary/20",
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
