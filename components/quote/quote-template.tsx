"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Building2,
  Mail,
  Phone,
  Box,
  Scale,
  Layers,
  Printer,
  Sparkles,
  FileText,
  UploadCloud,
  CheckCircle2,
  Clock,
  HelpCircle,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Percent,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

// Define Form Schema with strict Zod Validation
const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  companyName: z.string().min(2, "Company name must be at least 2 characters."),
  email: z.string().email("Please enter a valid business email address."),
  phone: z.string().min(7, "Please enter a valid contact phone number."),
  packagingType: z.string().min(1, "Please select a packaging category."),
  quantity: z.number().min(100, "Minimum order quantity is 100 units."),
  dimensions: z.string().min(2, "Please specify length x width x depth (e.g. 10x8x4 inches)."),
  material: z.string().min(1, "Please select a packaging substrate."),
  printing: z.string().min(1, "Please select a print methodology."),
  finishes: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export function QuoteTemplate() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      packagingType: "",
      quantity: 100,
      dimensions: "",
      material: "",
      printing: "",
      finishes: "",
      additionalNotes: "",
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    console.log("Quote Request Submitted:", data, selectedFile);
    setIsSubmitted(true);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Static Data lists
  const benefits = [
    {
      icon: Clock,
      title: "24-Hour CAD Dielines",
      desc: "Receive print-ready structural vector dieline outlines engineered to your product specs within one business day.",
    },
    {
      icon: Percent,
      title: "Scale Volume Pricing",
      desc: "Unlock steep unit-price discounts on runs scaling from short-run digital batches to offset factory scale outputs.",
    },
    {
      icon: Cpu,
      title: "ISTA Performance Testing",
      desc: "All custom structures undergo material drop and burst compression testing to guarantee safe transit transit.",
    },
    {
      icon: ShieldCheck,
      title: "FSC Certified Boards",
      desc: "We prioritize 100% sustainably sourced virgin cardboards and PCR post-consumer waste corrugated sheets.",
    },
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Submit Specs",
      desc: "Fill out order dimensions, substrates, and printing requirements below.",
    },
    {
      step: "02",
      title: "Dieline & Cost Matrix",
      desc: "Receive customized unit cost proposals and custom vector design dielines within 24 hours.",
    },
    {
      step: "03",
      title: "Authorize Prototype",
      desc: "Review a physical sample cut on digital tables to verify sizes and structural locking stability.",
    },
    {
      step: "04",
      title: "Production Run",
      desc: "Mass-scale box print and fold layouts are completed and shipped flat in 10-15 business days.",
    },
  ];

  const faqs = [
    {
      q: "What is the minimum order quantity (MOQ) for custom runs?",
      a: "Our B2B minimum order is 100 units for digital runs (which require zero plates or tooling setup charges). For offset lithography runs, the MOQ is 1,000 units due to industrial factory plate set times.",
    },
    {
      q: "Can I receive a digital structural prototype first?",
      a: "Yes. Once you submit product dimensions, our structural engineers create a 2D digital dieline (AI/PDF format). We also offer physical unprinted structural samples to test fit.",
    },
    {
      q: "What format requirements do you enforce for artwork submission?",
      a: "We require artwork aligned onto our vector structural dielines saved in editable vector formats: Adobe Illustrator (.AI), vector PDF, or EPS. Texts must be outlined and raster elements saved at a minimum 300 DPI.",
    },
    {
      q: "Are the boxes shipped assembled or flat?",
      a: "All folding retail cartons, mailer boxes, and corrugated shippers are bundled and shipped completely flat. This reduces warehouse warehousing volumes and logistics postage costs.",
    },
  ];

  return (
    <main className="flex-1 bg-background pt-24 pb-20">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-16 border-b border-border/40 bg-secondary/15">
        <div className="container relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent uppercase tracking-wider mb-4">
              <Clock className="size-3.5" /> B2B Price Matrix &amp; CAD Dielines
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
              Request a Custom <br />
              <span className="text-accent">Packaging Specification Quote</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Submit product dimensions, quantities, and structural finishing preferences. Our packaging engineers will supply fully custom CAD dielines and unit cost sheets within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Benefits Section */}
      <section className="py-16 border-b border-border/40">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="flex gap-4 p-5 rounded-xl border border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-colors">
                  <div className="flex-shrink-0 size-10 rounded-lg bg-background border border-border/40 flex items-center justify-center text-accent">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">{b.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Form & Live Summary Section */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form-container"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                    className="bg-background rounded-2xl border border-border/80 shadow-md p-6 md:p-8"
                  >
                    <div className="mb-6">
                      <h2 className="text-xl font-bold text-foreground mb-2">Configure Specifications</h2>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Please fill out all fields. Validated errors will display below empty inputs.
                      </p>
                    </div>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* Section A: Contact Info */}
                        <div className="border-b border-border/30 pb-6">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4">
                            1. Client Details
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="fullName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <User className="absolute left-3 top-3 size-4 text-muted-foreground" />
                                      <Input placeholder="John Doe" className="pl-9" {...field} />
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
                                      <Building2 className="absolute left-3 top-3 size-4 text-muted-foreground" />
                                      <Input placeholder="Acme Logistics Corp" className="pl-9" {...field} />
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
                                      <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
                                      <Input type="email" placeholder="john@acme.com" className="pl-9" {...field} />
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
                                      <Phone className="absolute left-3 top-3 size-4 text-muted-foreground" />
                                      <Input placeholder="+1 (555) 019-2834" className="pl-9" {...field} />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Section B: Box Specs */}
                        <div className="border-b border-border/30 pb-6">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4">
                            2. Packaging Configurations
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="packagingType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Packaging Type</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Box className="absolute left-3 top-3 size-4 text-muted-foreground pointer-events-none" />
                                      <Select className="pl-9" {...field}>
                                        <option value="">-- Choose Category --</option>
                                        <option value="custom-boxes">Custom Boxes</option>
                                        <option value="mailer-boxes">Mailer Boxes</option>
                                        <option value="corrugated-boxes">Corrugated Boxes</option>
                                        <option value="folding-cartons">Folding Cartons</option>
                                        <option value="rigid-boxes">Rigid Boxes</option>
                                        <option value="cosmetic-boxes">Cosmetic Boxes</option>
                                        <option value="other">Other Packaging Formats</option>
                                      </Select>
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="quantity"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Quantity (Units)</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Scale className="absolute left-3 top-3 size-4 text-muted-foreground pointer-events-none" />
                                      <Input type="number" min={100} className="pl-9" {...field} />
                                    </div>
                                  </FormControl>
                                  <FormDescription>Minimum order is 100 units</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="dimensions"
                              render={({ field }) => (
                                <FormItem className="sm:col-span-2">
                                  <FormLabel>Dimensions (L x W x D in inches or mm)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Example: 8.5 x 5.25 x 3.0 inches" {...field} />
                                  </FormControl>
                                  <FormDescription>Indicate internal or external dimensions clearly</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="material"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Substrate Subclass</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Layers className="absolute left-3 top-3 size-4 text-muted-foreground pointer-events-none" />
                                      <Select className="pl-9" {...field}>
                                        <option value="">-- Choose Substrate --</option>
                                        <option value="sbs-paperboard">SBS Paperboard (Clay-Coated White)</option>
                                        <option value="natural-kraft">Natural Kraft Cardstock (Organic Brown)</option>
                                        <option value="rigid-chipboard">Rigid Grey Chipboard (Setup Core)</option>
                                        <option value="e-flute-corrugated">E-Flute Corrugated (1.6mm Slim)</option>
                                        <option value="c-flute-shipper">C-Flute Heavy Corrugated (4.0mm)</option>
                                        <option value="poly-plastic">Flexible Poly Packaging</option>
                                        <option value="not-sure">Not Sure / Engineer Consultation</option>
                                      </Select>
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="printing"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Printing Options</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Printer className="absolute left-3 top-3 size-4 text-muted-foreground pointer-events-none" />
                                      <Select className="pl-9" {...field}>
                                        <option value="">-- Choose Print Method --</option>
                                        <option value="offset-litho">Offset Litho-Lamination (High Volume)</option>
                                        <option value="digital-inkjet">Digital Inkjet Press (Short Run)</option>
                                        <option value="flexography">Flexographic (Simple Water Ink)</option>
                                        <option value="unprinted-blank">No Print / Blank Kraft Structural White</option>
                                      </Select>
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>

                        {/* Section C: Finishes & Notes */}
                        <div className="space-y-4">
                          <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
                            3. Embellishments &amp; Attachments
                          </h3>
                          <FormField
                            control={form.control}
                            name="finishes"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Finishing Effects</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Sparkles className="absolute left-3 top-3 size-4 text-muted-foreground" />
                                    <Input placeholder="Spot UV, Foil Stamp, Matte Lamination, Embossing" className="pl-9" {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Custom File Upload Dropzone */}
                          <div className="space-y-2">
                            <FormLabel>Dieline Layout / Artwork Upload</FormLabel>
                            <div className="border-2 border-dashed border-border/80 rounded-xl p-6 text-center hover:bg-secondary/10 transition-colors relative cursor-pointer">
                              <input
                                type="file"
                                id="artwork-upload"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                onChange={handleFileChange}
                                accept=".ai,.pdf,.dxf,.png,.jpg,.jpeg"
                              />
                              <div className="flex flex-col items-center gap-2">
                                <UploadCloud className="size-8 text-muted-foreground group-hover:text-accent transition-colors" />
                                <span className="text-xs font-medium text-foreground">
                                  {selectedFile ? selectedFile.name : "Drag artwork files here or click to browse"}
                                </span>
                                <span className="text-[10px] text-muted-foreground">
                                  Supports PDF, AI, DXF, PNG, JPG (Max: 25MB)
                                </span>
                              </div>
                            </div>
                          </div>

                          <FormField
                            control={form.control}
                            name="additionalNotes"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Additional Notes or Custom Requests</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Indicate custom insert requests, foam templates, split logistics distribution, or regulatory compliance needs here..."
                                    className="min-h-[100px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <Button type="submit" className="w-full h-12 text-sm tracking-wide font-semibold cursor-pointer">
                          Submit Specifications Request
                        </Button>
                      </form>
                    </Form>
                  </motion.div>
                ) : (
                  /* Success State card */
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="border border-border/80 bg-background rounded-2xl p-8 text-center shadow-lg"
                  >
                    <div className="inline-flex items-center justify-center size-14 rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Request Logged Successfully</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
                      Thank you for contacting Trion Packaging. A structural engineer will review your product dimensions, draft initial vector dielines, and compile a bulk volume pricing proposal within 24 business hours.
                    </p>
                    <Button onClick={() => { setIsSubmitted(false); form.reset(); setSelectedFile(null); }} variant="outline" className="cursor-pointer">
                      Configure Another Box Spec
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Live Sidebar Summary Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <div className="border border-border/80 bg-secondary/15 rounded-2xl p-5 shadow-xs">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  Specification Summary
                </h3>
                <div className="space-y-3.5">
                  <div className="flex justify-between border-b border-border/40 pb-2.5">
                    <span className="text-xs text-muted-foreground">Box Type</span>
                    <span className="text-xs text-foreground font-semibold">
                      {form.watch("packagingType")
                        ? String(form.watch("packagingType")).split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
                        : "Not Configured"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2.5">
                    <span className="text-xs text-muted-foreground">Substrate</span>
                    <span className="text-xs text-foreground font-semibold">
                      {form.watch("material")
                        ? String(form.watch("material")).split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
                        : "Not Selected"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2.5">
                    <span className="text-xs text-muted-foreground">Print Run Volume</span>
                    <span className="text-xs text-foreground font-semibold">
                      {form.watch("quantity") ? `${form.watch("quantity")} Units` : "100 Units"}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/40 pb-2.5">
                    <span className="text-xs text-muted-foreground">Diemeters</span>
                    <span className="text-xs text-foreground font-semibold truncate max-w-[150px]">
                      {form.watch("dimensions") || "Not Configured"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-muted-foreground">Artwork</span>
                    <span className="text-xs text-foreground font-semibold truncate max-w-[150px]">
                      {selectedFile ? selectedFile.name : "No Vector Attached"}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border/40 flex items-center gap-3">
                  <FileText className="size-4 text-accent" />
                  <span className="text-[10px] leading-tight text-muted-foreground">
                    All quotes include complimentary structural validation check loops.
                  </span>
                </div>
              </div>

              {/* Direct Facility Contacts block */}
              <div className="border border-border/80 bg-background rounded-2xl p-5 shadow-xs space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Direct Estimation Helpdesk
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="size-4 text-muted-foreground mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-foreground">Manufacturing Lab</span>
                      <span className="text-[11px] text-muted-foreground leading-normal">
                        840 Industrial Parkway, Suite E, Newark, NJ 07102
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail className="size-4 text-muted-foreground mt-0.5" />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-foreground">Email Inquiries</span>
                      <span className="text-[11px] text-accent leading-none">
                        estimator@trionpackaging.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Timeline Section */}
      <section className="py-20 border-t border-border/40 bg-secondary/10">
        <div className="container max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-3 block">
              Work Flow Layout
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Quote-to-Delivery Roadmap
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              We streamline packaging production with zero step lag. Read what happens next:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative bg-background border border-border/60 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-secondary-foreground/20 leading-none mb-3 block">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion Section */}
      <section className="py-20 border-t border-border/40">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Estimation Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-border/80 rounded-xl bg-background overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="flex items-center justify-between w-full p-5 text-left font-semibold text-foreground text-sm cursor-pointer hover:bg-secondary/10 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={cn("size-4 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-border/30 bg-secondary/5"
                      >
                        <p className="p-5 text-xs text-muted-foreground leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
