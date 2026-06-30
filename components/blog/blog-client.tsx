"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Tag,
  Clock,
  ChevronRight,
  Mail,
  Send,
  Leaf,
  Layers,
  Printer,
  TrendingUp,
  Paintbrush,
  Star,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/* ─── Animation Variants ────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

/* ─── AnimatedSection Wrapper ───────────────────────── */
function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data Types ────────────────────────────────────── */
type Category =
  | "All"
  | "Packaging Design"
  | "Materials"
  | "Printing"
  | "Industry Trends"
  | "Sustainability";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, "All">;
  readTime: string;
  date: string;
  featured?: boolean;
}

/* ─── Category Config ───────────────────────────────── */
const CATEGORY_CONFIG: Record<
  Exclude<Category, "All">,
  { icon: React.ElementType; color: string; bg: string }
> = {
  "Packaging Design": {
    icon: Paintbrush,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  Materials: {
    icon: Layers,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  Printing: {
    icon: Printer,
    color: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
  "Industry Trends": {
    icon: TrendingUp,
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/20",
  },
  Sustainability: {
    icon: Leaf,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
};

/* ─── Blog Data ─────────────────────────────────────── */
const FEATURED_POST: BlogPost = {
  slug: "structural-dieline-engineering-guide",
  title:
    "The Complete Guide to Structural Dieline Engineering for B2B Packaging",
  excerpt:
    "Master the fundamentals of CAD-driven dieline design: crease tolerances, substrate caliper selection, flute geometry, and how to brief a structural packaging engineer to get print-ready vector files within 24 hours. This guide covers everything procurement and product teams need to know before placing their first custom box order.",
  category: "Packaging Design",
  readTime: "12 min read",
  date: "Jun 18, 2026",
  featured: true,
};

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sbs-vs-kraft-paperboard",
    title: "SBS vs. Natural Kraft: Choosing the Right Paperboard Substrate",
    excerpt:
      "Clay-coated SBS delivers high-gloss print fidelity for retail shelves; natural Kraft signals eco-conscious brand values. We break down caliper weights, burst strengths, and print compatibility for both.",
    category: "Materials",
    readTime: "7 min read",
    date: "Jun 14, 2026",
  },
  {
    slug: "offset-litho-vs-digital-printing",
    title: "Offset Litho-Lamination vs. Digital Inkjet: When to Use Each",
    excerpt:
      "Short-run digital inkjet eliminates plate costs below 500 units. Offset litho-lamination unlocks 600-line-screen graphics at scale. Know exactly when to switch based on unit economics and color accuracy requirements.",
    category: "Printing",
    readTime: "8 min read",
    date: "Jun 10, 2026",
  },
  {
    slug: "fsc-certification-packaging",
    title: "Why FSC Certification Matters for Your Packaging Supply Chain",
    excerpt:
      "FSC-certified board stock ensures your packaging raw materials originate from responsibly managed forests. Learn how chain-of-custody documentation works, what it costs, and how to leverage it in your brand messaging.",
    category: "Sustainability",
    readTime: "6 min read",
    date: "Jun 6, 2026",
  },
  {
    slug: "e-commerce-packaging-trends-2026",
    title: "E-Commerce Packaging Trends Reshaping B2B Supply Chains in 2026",
    excerpt:
      "From frustration-free packaging mandates at major retail platforms to the rise of dual-return peel-and-seal mailers, discover the structural and print innovations leading brands are adopting for DTC logistics in 2026.",
    category: "Industry Trends",
    readTime: "9 min read",
    date: "Jun 2, 2026",
  },
  {
    slug: "spot-uv-foil-stamping-guide",
    title: "Spot UV & Foil Stamping: A Practical Guide to Premium Finishes",
    excerpt:
      "Spot UV lacquer creates dramatic contrast between gloss and matte surfaces. Metallic foil stamping communicates luxury. We compare costs, substrate compatibility, minimum order thresholds, and registration tolerances for both.",
    category: "Packaging Design",
    readTime: "7 min read",
    date: "May 28, 2026",
  },
  {
    slug: "corrugated-flute-types",
    title: "A-Flute, B-Flute, E-Flute: The Complete Corrugated Flute Guide",
    excerpt:
      "Flute profiles directly determine stackable load resistance, cushion capacity, and printable surface smoothness. This guide maps each corrugated flute type to its optimal packaging application — from heavy industrial shippers to cosmetic retail display boxes.",
    category: "Materials",
    readTime: "8 min read",
    date: "May 22, 2026",
  },
  {
    slug: "flexographic-printing-corrugated",
    title: "Flexographic Printing on Corrugated: What You Need to Know",
    excerpt:
      "Flexography with water-based inks is the most cost-efficient way to print branding and compliance data directly onto corrugated master cases. Learn about anilox roll specifications, registration limits, and color matching on uncoated brown kraft.",
    category: "Printing",
    readTime: "6 min read",
    date: "May 16, 2026",
  },
  {
    slug: "pcr-post-consumer-recycled-packaging",
    title: "PCR Boards: Integrating Post-Consumer Recycled Fiber Into Your Box Specs",
    excerpt:
      "Post-consumer recycled corrugated fiber reduces Scope 3 emissions without sacrificing structural integrity. We cover grammage trade-offs, burst test performance, print surface quality, and how to certify PCR content for retail compliance.",
    category: "Sustainability",
    readTime: "7 min read",
    date: "May 10, 2026",
  },
  {
    slug: "rigid-box-vs-folding-carton",
    title: "Rigid Setup Boxes vs. Folding Cartons: A Structural Comparison",
    excerpt:
      "Rigid setup boxes offer an Apple-quality unboxing experience with thick chipboard walls and slow-suction telescope closures. Folding cartons are cost-efficient for high-volume retail. Here's how to decide based on your price point, volume, and brand tier.",
    category: "Packaging Design",
    readTime: "9 min read",
    date: "May 4, 2026",
  },
];

const ALL_CATEGORIES: Category[] = [
  "All",
  "Packaging Design",
  "Materials",
  "Printing",
  "Industry Trends",
  "Sustainability",
];

/* ─── Category Badge ────────────────────────────────── */
function CategoryBadge({
  category,
  size = "sm",
}: {
  category: Exclude<Category, "All">;
  size?: "sm" | "xs";
}) {
  const cfg = CATEGORY_CONFIG[category];
  const Icon = cfg.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-bold uppercase tracking-wider border rounded-full",
        cfg.color,
        cfg.bg,
        size === "xs" ? "text-[10px] px-2 py-0.5" : "text-[11px] px-2.5 py-1"
      )}
    >
      <Icon className={size === "xs" ? "size-2.5" : "size-3"} />
      {category}
    </span>
  );
}

/* ─── Blog Card ─────────────────────────────────────── */
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      variants={cardReveal}
      className="group flex flex-col bg-background border border-border/40 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-accent/30 transition-all duration-300"
    >
      {/* Color accent top bar keyed to category */}
      <div
        className={cn(
          "h-1 w-full",
          post.category === "Packaging Design" && "bg-violet-500",
          post.category === "Materials" && "bg-amber-500",
          post.category === "Printing" && "bg-sky-500",
          post.category === "Industry Trends" && "bg-rose-500",
          post.category === "Sustainability" && "bg-emerald-500"
        )}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-4">
          <CategoryBadge category={post.category} size="xs" />
          <span className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
            <Clock className="size-3" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-foreground leading-snug mb-3 group-hover:text-accent transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3 mb-5">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/30 mt-auto">
          <span className="text-[10px] text-muted-foreground">{post.date}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
            aria-label={`Read more: ${post.title}`}
          >
            Read More
            <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Main Component ────────────────────────────────── */
export function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setSubscribed(true);
  };

  return (
    <div className="bg-background">

      {/* ── 1. Hero ──────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 border-b border-border/40">
        {/* Grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.18)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 -z-10 size-72 rounded-full bg-accent/8 blur-[90px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 -z-10 size-56 rounded-full bg-primary/6 blur-[70px] pointer-events-none" />

        <div className="container relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-accent/10 text-accent uppercase tracking-wider mb-6 border border-accent/20"
            >
              <BookOpen className="size-3.5" />
              Packaging Insights & Resources
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] mb-5"
            >
              Expert Guides on{" "}
              <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                Packaging Engineering
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
            >
              In-depth articles on packaging design, substrate materials, printing methodologies, and B2B industry trends — written by our structural engineers and production specialists.
            </motion.p>

            {/* Category pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-2"
            >
              {(Object.keys(CATEGORY_CONFIG) as Exclude<Category, "All">[]).map(
                (cat) => {
                  const cfg = CATEGORY_CONFIG[cat];
                  const Icon = cfg.icon;
                  return (
                    <span
                      key={cat}
                      className={cn(
                        "inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full border",
                        cfg.color,
                        cfg.bg
                      )}
                    >
                      <Icon className="size-3" />
                      {cat}
                    </span>
                  );
                }
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Featured Article ──────────────────────── */}
      <section className="py-20 border-b border-border/40 bg-secondary/5">
        <div className="container max-w-6xl">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
              <Star className="size-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Featured Article
              </span>
            </motion.div>

            <motion.article
              variants={cardReveal}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl border border-border/50 bg-background shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 overflow-hidden"
            >
              {/* Visual accent panel */}
              <div className="lg:col-span-5 relative bg-gradient-to-br from-primary to-primary/80 p-10 flex flex-col justify-between min-h-[240px]">
                {/* Subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,white/5_1px,transparent_1px),linear-gradient(to_bottom,white/5_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-64 rounded-full bg-accent/30 blur-[60px] pointer-events-none" />

                <CategoryBadge category={FEATURED_POST.category} />

                <div className="mt-auto">
                  <div className="flex items-center gap-4 text-primary-foreground/60 text-xs mt-8">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {FEATURED_POST.readTime}
                    </span>
                    <span>{FEATURED_POST.date}</span>
                  </div>
                </div>
              </div>

              {/* Content panel */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug mb-4 group-hover:text-accent transition-colors duration-200">
                  {FEATURED_POST.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {FEATURED_POST.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/blog/${FEATURED_POST.slug}`}
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "cursor-pointer font-medium tracking-wide flex items-center gap-2 group/btn w-full sm:w-auto justify-center"
                    )}
                  >
                    Read Full Article
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  <Link
                    href="/products"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "cursor-pointer font-medium tracking-wide w-full sm:w-auto justify-center"
                    )}
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            </motion.article>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. Category Filter + Blog Grid ──────────── */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-6xl">

          {/* Section header */}
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                All Articles
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground">
                Browse by Category
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground max-w-xs sm:text-right leading-relaxed">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""} in{" "}
              <span className="font-semibold text-foreground">{activeCategory}</span>
            </motion.p>
          </AnimatedSection>

          {/* ── Category filter tabs ── */}
          <AnimatedSection className="flex flex-wrap gap-2 mb-10">
            {ALL_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  variants={fadeUp}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-background border-border/50 text-muted-foreground hover:border-accent/40 hover:text-foreground hover:bg-secondary/20"
                  )}
                >
                  {cat !== "All" && (() => {
                    const Icon = CATEGORY_CONFIG[cat as Exclude<Category, "All">].icon;
                    return <Icon className="size-3" />;
                  })()}
                  {cat}
                </motion.button>
              );
            })}
          </AnimatedSection>

          {/* ── Blog Post Grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </AnimatedSection>

              {filtered.length === 0 && (
                <div className="text-center py-20 text-muted-foreground text-sm">
                  No articles in this category yet. Check back soon.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 4. Categories Showcase ───────────────────── */}
      <section className="py-24 border-b border-border/40 bg-secondary/5">
        <div className="container max-w-6xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Content Areas
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Explore Our Coverage Areas
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Deep-dive content organized by the five pillars of modern B2B packaging expertise.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {(Object.entries(CATEGORY_CONFIG) as [Exclude<Category, "All">, (typeof CATEGORY_CONFIG)[keyof typeof CATEGORY_CONFIG]][]).map(
              ([cat, cfg]) => {
                const Icon = cfg.icon;
                const count = BLOG_POSTS.filter((p) => p.category === cat).length;
                return (
                  <motion.button
                    key={cat}
                    variants={cardReveal}
                    onClick={() => {
                      setActiveCategory(cat);
                      document
                        .getElementById("blog-grid-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group flex flex-col items-center text-center p-6 rounded-2xl border border-border/40 bg-background hover:border-accent/30 hover:shadow-md hover:bg-secondary/10 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                    aria-label={`Filter by ${cat}`}
                  >
                    <div
                      className={cn(
                        "size-12 rounded-xl flex items-center justify-center border mb-4 transition-colors group-hover:scale-105 duration-300",
                        cfg.color,
                        cfg.bg
                      )}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xs font-bold text-foreground mb-1 leading-tight">
                      {cat}
                    </h3>
                    <span className="text-[10px] text-muted-foreground">
                      {count} article{count !== 1 ? "s" : ""}
                    </span>
                  </motion.button>
                );
              }
            )}
          </AnimatedSection>

          {/* Internal links */}
          <AnimatedSection className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <motion.p variants={fadeUp} className="text-xs text-muted-foreground">
              Looking for specific products?
            </motion.p>
            {[
              { href: "/products", label: "Browse All Products" },
              { href: "/materials", label: "Explore Materials" },
              { href: "/printing", label: "Printing Capabilities" },
              { href: "/finishes", label: "Finishing Options" },
            ].map((link) => (
              <motion.div key={link.href} variants={fadeUp}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  <Tag className="size-3" />
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5. Newsletter CTA ────────────────────────── */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-3xl">
          <AnimatedSection className="text-center">
            <motion.div
              variants={cardReveal}
              className="bg-secondary/10 border border-border/50 rounded-2xl p-8 sm:p-12"
            >
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                <Mail className="size-3.5" />
                Packaging Intelligence Newsletter
              </motion.span>

              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4">
                Stay Ahead of Packaging Trends
              </motion.h2>

              <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
                Join 2,400+ procurement managers, brand directors, and supply chain engineers who receive our bi-weekly packaging digest — covering new materials, press technology, regulatory updates, and cost-reduction strategies.
              </motion.p>

              <AnimatePresence mode="wait">
                {!subscribed ? (
                  <motion.form
                    key="subscribe-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                    noValidate
                    aria-label="Newsletter subscription"
                  >
                    <div className="flex-1">
                      <label htmlFor="newsletter-email" className="sr-only">
                        Email address
                      </label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        placeholder="your@company.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError("");
                        }}
                        className={cn(
                          "h-10 bg-background",
                          emailError && "border-destructive focus-visible:ring-destructive/30"
                        )}
                        aria-describedby={emailError ? "newsletter-error" : undefined}
                        aria-invalid={!!emailError}
                        autoComplete="email"
                      />
                      {emailError && (
                        <p
                          id="newsletter-error"
                          className="text-[11px] text-destructive mt-1.5 text-left"
                          role="alert"
                        >
                          {emailError}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className={cn(
                        buttonVariants({ variant: "default", size: "default" }),
                        "cursor-pointer font-medium tracking-wide flex items-center gap-2 group/sub flex-shrink-0"
                      )}
                    >
                      Subscribe
                      <Send className="size-3.5 transition-transform group-hover/sub:translate-x-0.5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="subscribe-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="flex items-center justify-center gap-3 py-3"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-foreground">
                      You&apos;re subscribed! Welcome to the Trion Packaging digest.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.p variants={fadeUp} className="text-[10px] text-muted-foreground mt-5">
                No spam. Unsubscribe at any time. We send 2 emails per month, maximum.
              </motion.p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 6. Final CTA ─────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[500px] rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">
                Ready to Start Your Project?
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl max-w-2xl mx-auto mb-6 leading-tight">
                Put the Knowledge to Work
              </h2>

              <p className="text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
                Ready to apply what you&apos;ve learned? Submit your packaging specifications and receive a custom CAD dieline with a full unit cost matrix within 24 hours — at no charge.
              </p>

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
                    "cursor-pointer font-medium tracking-wide border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                  )}
                >
                  Talk to a Specialist
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
