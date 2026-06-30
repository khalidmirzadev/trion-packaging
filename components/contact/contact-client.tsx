"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Building2,
  MessageSquare,
  Send,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Zap,
  Headphones,
  Layers,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

/* ─── Animation Variants ─────────────────────────────── */
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
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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

/* ─── Animated Section Wrapper ───────────────────────── */
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

/* ─── Zod Schema ─────────────────────────────────────── */
const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  companyName: z.string().min(2, "Company name must be at least 2 characters."),
  email: z.string().email("Please enter a valid business email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  subject: z.string().min(1, "Please select a subject."),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(1500, "Message cannot exceed 1500 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

/* ─── Static Data ────────────────────────────────────── */
const contactMethods = [
  {
    icon: Phone,
    label: "Sales & Inquiries",
    value: "+1 (973) 555-0182",
    sub: "Mon–Fri, 8 AM – 6 PM EST",
    href: "tel:+19735550182",
    accent: true,
  },
  {
    icon: Mail,
    label: "Email Estimations",
    value: "estimator@trionpackaging.com",
    sub: "24-hour response guaranteed",
    href: "mailto:estimator@trionpackaging.com",
    accent: false,
  },
  {
    icon: MapPin,
    label: "Manufacturing Facility",
    value: "840 Industrial Pkwy, Suite E",
    sub: "Newark, NJ 07102",
    href: "https://maps.google.com/?q=Newark,NJ",
    accent: false,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 8:00 AM – 6:00 PM",
    sub: "Sat: 9:00 AM – 1:00 PM EST",
    href: null,
    accent: false,
  },
];

const whyContact = [
  {
    icon: Zap,
    title: "24-Hour Quote Turnaround",
    desc: "Submit your specifications and receive a full unit cost matrix with custom vector CAD dielines delivered to your inbox within one business day.",
  },
  {
    icon: Layers,
    title: "Custom Packaging Expertise",
    desc: "Our structural engineers handle every substrate class — from SBS paperboard to rigid chipboard and corrugated flute configurations — with zero template restrictions.",
  },
  {
    icon: Headphones,
    title: "Dedicated Design Assistance",
    desc: "Work directly with our in-house CAD team to refine dielines, optimize print layouts for press, and validate fitment with digital prototype samples.",
  },
  {
    icon: Wrench,
    title: "Full Manufacturing Support",
    desc: "From prototype sign-off to full-volume press runs, our production advisors oversee every stage — including finishing, palletizing, and freight logistics.",
  },
];

const FAQS = [
  {
    q: "How quickly will I receive a quote after submitting?",
    a: "Our estimation team reviews all incoming requests within 4 business hours. Full unit cost proposals — inclusive of tooling, substrate, print, and finishing line items — are delivered within 24 business hours. Rush turnaround is available for urgent projects.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQs depend on the manufacturing process. Digital inkjet short runs begin at 100 units (no tooling setup required). Flexographic corrugated runs begin at 500 units, and premium offset litho-laminated cartons start at 1,000 units for economical plate setup amortization.",
  },
  {
    q: "Do you provide structural design and dieline support?",
    a: "Yes — at no additional cost for qualified B2B projects. Once dimensions are submitted, our Newark CAD lab drafts a custom 2D vector dieline in Adobe Illustrator format within 24 hours. Physical unprinted sample boxes are also available for fitment validation.",
  },
  {
    q: "Do you ship internationally or only within the US?",
    a: "Trion Packaging fulfills domestic US orders with consolidated freight shipments from our Newark facility. For international orders, we coordinate with select freight partners on a project-by-project basis. Please mention your destination country when submitting your inquiry.",
  },
  {
    q: "What file formats do you accept for artwork submission?",
    a: "We accept editable vector files: Adobe Illustrator (.AI), vector-based PDF, and EPS. All text must be outlined and raster elements embedded at a minimum 300 DPI at final output dimensions. We provide a dieline template for your designer to work within.",
  },
];

/* ─── Component ──────────────────────────────────────── */
export function ContactClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact Form Submitted:", data);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const messageValue = form.watch("message") ?? "";

  return (
    <div className="bg-background">

      {/* ── 1. Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 border-b border-border/40">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.18)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.18)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/3 -z-10 size-72 rounded-full bg-accent/8 blur-[90px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 -z-10 size-56 rounded-full bg-primary/6 blur-[70px] pointer-events-none" />

        <div className="container relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-accent/10 text-accent uppercase tracking-wider mb-6 border border-accent/20"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              Trion Packaging — B2B Sales Team
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] mb-5"
            >
              Let's Build Your{" "}
              <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                Perfect Package
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Reach our structural engineering and sales team directly. We respond to all B2B inquiries within 24 hours — with custom CAD dielines and unit cost proposals ready at no charge.
            </motion.p>

            {/* Quick action pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {[
                { icon: Phone, label: "+1 (973) 555-0182", href: "tel:+19735550182" },
                { icon: Mail, label: "estimator@trionpackaging.com", href: "mailto:estimator@trionpackaging.com" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-border/50 bg-background hover:border-accent/40 hover:bg-accent/5 text-foreground transition-all duration-200"
                  >
                    <Icon className="size-3.5 text-accent" />
                    {item.label}
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Contact Methods ───────────────────────────── */}
      <section className="py-16 border-b border-border/40 bg-secondary/5">
        <div className="container max-w-6xl">
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              const inner = (
                <motion.div
                  key={idx}
                  variants={cardReveal}
                  className={cn(
                    "group flex flex-col gap-3 p-5 rounded-2xl border transition-all duration-300",
                    method.accent
                      ? "bg-accent text-accent-foreground border-accent shadow-lg shadow-accent/20 hover:shadow-accent/30"
                      : "bg-background border-border/40 hover:border-accent/30 hover:shadow-sm hover:bg-secondary/10"
                  )}
                >
                  <div
                    className={cn(
                      "size-9 rounded-xl flex items-center justify-center border",
                      method.accent
                        ? "bg-white/15 border-white/20 text-white"
                        : "bg-secondary border-border/30 text-accent"
                    )}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <p
                      className={cn(
                        "text-[10px] font-bold uppercase tracking-wider mb-1",
                        method.accent ? "text-white/70" : "text-muted-foreground"
                      )}
                    >
                      {method.label}
                    </p>
                    <p
                      className={cn(
                        "text-sm font-bold leading-tight",
                        method.accent ? "text-white" : "text-foreground"
                      )}
                    >
                      {method.value}
                    </p>
                    <p
                      className={cn(
                        "text-[11px] mt-1",
                        method.accent ? "text-white/70" : "text-muted-foreground"
                      )}
                    >
                      {method.sub}
                    </p>
                  </div>
                </motion.div>
              );

              return method.href ? (
                <a
                  key={idx}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-2xl"
                  aria-label={method.label}
                >
                  {inner}
                </a>
              ) : (
                <div key={idx}>{inner}</div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. Contact Form ──────────────────────────────── */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Form Column */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.5 }}
                    className="bg-background rounded-2xl border border-border/60 shadow-sm p-6 sm:p-8"
                  >
                    {/* Form header */}
                    <div className="mb-8">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                        General Inquiry Form
                      </span>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        Send Us a Message
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Fill in the form below and a member of our team will respond within 24 business hours. For urgent requests, call us directly.
                      </p>
                    </div>

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                        noValidate
                        aria-label="Contact Trion Packaging"
                      >
                        {/* Section A — Contact Details */}
                        <fieldset className="space-y-4 border-b border-border/30 pb-6">
                          <legend className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                            1. Your Details
                          </legend>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="fullName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <User className="absolute left-3 top-3 size-4 text-muted-foreground pointer-events-none" />
                                      <Input
                                        id="contact-full-name"
                                        placeholder="Jane Smith"
                                        className="pl-9"
                                        autoComplete="name"
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="companyName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Company Name</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Building2 className="absolute left-3 top-3 size-4 text-muted-foreground pointer-events-none" />
                                      <Input
                                        id="contact-company-name"
                                        placeholder="Acme Industries LLC"
                                        className="pl-9"
                                        autoComplete="organization"
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Business Email</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Mail className="absolute left-3 top-3 size-4 text-muted-foreground pointer-events-none" />
                                      <Input
                                        id="contact-email"
                                        type="email"
                                        placeholder="jane@acme.com"
                                        className="pl-9"
                                        autoComplete="email"
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Phone className="absolute left-3 top-3 size-4 text-muted-foreground pointer-events-none" />
                                      <Input
                                        id="contact-phone"
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className="pl-9"
                                        autoComplete="tel"
                                        {...field}
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </fieldset>

                        {/* Section B — Message */}
                        <fieldset className="space-y-4">
                          <legend className="text-xs font-bold uppercase tracking-wider text-accent mb-1">
                            2. Your Message
                          </legend>

                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 size-4 text-muted-foreground pointer-events-none" />
                                    <Select
                                      id="contact-subject"
                                      className="pl-9"
                                      aria-label="Subject"
                                      {...field}
                                    >
                                      <option value="">— Select a Subject —</option>
                                      <option value="quote-request">Request a Custom Quote</option>
                                      <option value="sample-request">Request a Physical Sample</option>
                                      <option value="design-support">Design & Dieline Support</option>
                                      <option value="order-status">Existing Order Status</option>
                                      <option value="materials-finishes">Materials & Finishes Question</option>
                                      <option value="international-shipping">International Shipping Inquiry</option>
                                      <option value="partnership">Partnership / Wholesale</option>
                                      <option value="other">Other Inquiry</option>
                                    </Select>
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Message
                                  <span className="ml-2 text-[10px] font-normal text-muted-foreground">
                                    ({messageValue.length}/1500)
                                  </span>
                                </FormLabel>
                                <FormControl>
                                  <Textarea
                                    id="contact-message"
                                    placeholder="Describe your packaging requirements — include product dimensions, quantity estimates, material preferences, or any specific questions for our engineering team..."
                                    className="min-h-[140px] resize-y"
                                    maxLength={1500}
                                    aria-describedby="message-hint"
                                    {...field}
                                  />
                                </FormControl>
                                <p id="message-hint" className="text-[11px] text-muted-foreground">
                                  Minimum 20 characters. The more detail you provide, the more accurate your quote will be.
                                </p>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </fieldset>

                        <Button
                          type="submit"
                          id="contact-submit-btn"
                          className="w-full h-12 text-sm tracking-wide font-semibold cursor-pointer flex items-center justify-center gap-2 group/submit"
                          disabled={form.formState.isSubmitting}
                        >
                          Send Message
                          <Send className="size-4 transition-transform group-hover/submit:translate-x-1" />
                        </Button>
                      </form>
                    </Form>
                  </motion.div>
                ) : (
                  /* Success State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="bg-background rounded-2xl border border-border/60 shadow-sm p-10 text-center"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="inline-flex items-center justify-center size-16 rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      Message Received
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
                      Thank you for reaching out. A member of the Trion Packaging team will review your inquiry and respond within 24 business hours. For urgent requests, call{" "}
                      <a href="tel:+19735550182" className="text-accent font-semibold hover:underline">
                        +1 (973) 555-0182
                      </a>
                      .
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        onClick={() => {
                          setIsSubmitted(false);
                          form.reset();
                        }}
                        variant="outline"
                        className="cursor-pointer"
                      >
                        Send Another Message
                      </Button>
                      <Link
                        href="/quote"
                        className={cn(
                          buttonVariants({ variant: "default" }),
                          "cursor-pointer inline-flex items-center gap-2"
                        )}
                      >
                        Request a Quote
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              {/* Why reach out card */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="bg-secondary/10 border border-border/40 rounded-2xl p-6 space-y-5"
              >
                <h3 className="text-sm font-bold text-foreground border-b border-border/30 pb-3">
                  What Happens After You Submit?
                </h3>
                <ol className="space-y-4">
                  {[
                    { n: "01", t: "Review", d: "Our B2B sales team reviews your inquiry within 4 business hours." },
                    { n: "02", t: "Estimation", d: "We prepare a unit cost matrix and structural CAD dieline tailored to your specs." },
                    { n: "03", t: "Consultation", d: "A packaging engineer contacts you to clarify requirements and discuss options." },
                    { n: "04", t: "Proposal", d: "You receive a full written quotation with lead times and production milestones." },
                  ].map((s) => (
                    <li key={s.n} className="flex gap-3">
                      <span className="text-xl font-black text-accent/25 leading-none w-7 flex-shrink-0 pt-0.5">
                        {s.n}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-foreground">{s.t}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* Direct contact card */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.42 }}
                className="bg-background border border-border/50 rounded-2xl p-6 space-y-4 shadow-xs"
              >
                <h3 className="text-sm font-bold text-foreground">
                  Prefer to Talk Directly?
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+19735550182"
                    className="group flex items-center gap-3 p-3 rounded-xl border border-border/40 hover:border-accent/40 hover:bg-accent/5 transition-all"
                    aria-label="Call Trion Packaging"
                  >
                    <div className="size-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Phone className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground group-hover:text-accent transition-colors">
                        +1 (973) 555-0182
                      </p>
                      <p className="text-[11px] text-muted-foreground">Mon–Fri, 8 AM – 6 PM EST</p>
                    </div>
                  </a>
                  <a
                    href="mailto:estimator@trionpackaging.com"
                    className="group flex items-center gap-3 p-3 rounded-xl border border-border/40 hover:border-accent/40 hover:bg-accent/5 transition-all"
                    aria-label="Email Trion Packaging"
                  >
                    <div className="size-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <Mail className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground group-hover:text-accent transition-colors">
                        estimator@trionpackaging.com
                      </p>
                      <p className="text-[11px] text-muted-foreground">24-hour response guarantee</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-border/30 bg-secondary/10">
                    <div className="size-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground border border-border/30">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">
                        840 Industrial Pkwy, Suite E
                      </p>
                      <p className="text-[11px] text-muted-foreground">Newark, NJ 07102</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Why Contact Trion ─────────────────────────── */}
      <section className="py-24 border-b border-border/40 bg-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,oklch(var(--accent)/0.04)_0%,transparent_60%)] pointer-events-none" />

        <div className="container max-w-6xl relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Why Trion
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What to Expect When You Contact Us
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Every inquiry is handled by an expert — not an automated system. Here's what makes our process different.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyContact.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardReveal}
                  className="group flex gap-5 p-6 rounded-2xl bg-background border border-border/40 shadow-xs hover:shadow-md hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 size-11 rounded-xl bg-secondary flex items-center justify-center text-accent border border-border/30 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors mt-0.5">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5. FAQ ───────────────────────────────────────── */}
      <section className="py-24 border-b border-border/40">
        <div className="container max-w-3xl">
          <AnimatedSection className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Common Questions
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Answers to the questions our B2B clients ask most before placing their first order.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="flex flex-col gap-4">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <motion.div
                  key={idx}
                  variants={cardReveal}
                  className={cn(
                    "rounded-xl border transition-all duration-200 bg-secondary/10 hover:bg-secondary/20",
                    isOpen ? "border-border/80 shadow-sm" : "border-border/40"
                  )}
                >
                  <button
                    id={`faq-btn-${idx}`}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex items-center justify-between w-full p-5 sm:p-6 text-left font-semibold text-foreground text-sm gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="size-4 text-accent flex-shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-4 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                        isOpen && "rotate-180 text-accent"
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${idx}`}
                        role="region"
                        aria-labelledby={`faq-btn-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/20 pl-12 sm:pl-[3.25rem]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ── 6. Final CTA ─────────────────────────────────── */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* CAD grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
            >
              {/* Glow orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 size-[500px] rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

              <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent mb-4">
                Ready to Start Your Project?
              </span>

              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl max-w-2xl mx-auto mb-6 leading-tight">
                Get Custom Dielines &amp; Prototype Pricing
              </h2>

              <p className="text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
                Skip the contact form and configure your box specifications directly. Our CAD engineers will return a full pricing sheet and structural vector dielines within 24 hours.
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
                  href="/products"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "cursor-pointer font-medium tracking-wide border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"
                  )}
                >
                  Browse Products
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
