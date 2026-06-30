"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { PRODUCT_TAXONOMY } from "@/lib/data/product-taxonomy";
import {
  MATERIAL_TAXONOMY,
  STYLE_TAXONOMY,
  INDUSTRY_TAXONOMY,
} from "@/lib/data/catalog-taxonomy";



const SIMPLE_LINKS = [
  { href: "/industries", label: "Industries" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"products" | null>(null);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Accordion state for mobile menu sections
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileMaterialsOpen, setMobileMaterialsOpen] = useState(false);
  const [mobileStylesOpen, setMobileStylesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleDropdownToggle = (menu: "products") => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-sans font-bold text-xl tracking-tight text-foreground transition-opacity hover:opacity-90">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-black text-lg">
            T
          </span>
          <span>
            TRION<span className="text-accent font-light">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground/80 py-2 cursor-pointer",
                pathname.startsWith("/products") ? "text-foreground font-semibold" : "text-muted-foreground"
              )}
            >
              Products
              <ChevronDown className={cn("size-3.5 transition-transform duration-200", activeDropdown === "products" && "rotate-180")} />
            </button>
            <AnimatePresence>
              {activeDropdown === "products" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-[40%] top-full w-[850px] rounded-2xl border border-border bg-popover p-6 shadow-xl backdrop-blur-md bg-popover/95"
                >
                  <div className="grid grid-cols-4 gap-6">
                    {/* Featured Products — Level-1 taxonomy, first 6 */}
                    <div className="flex flex-col gap-3">
                      <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                        Featured Products
                      </span>
                      <div className="flex flex-col gap-1">
                        {PRODUCT_TAXONOMY.slice(0, 6).map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/products/${cat.slug}`}
                            className="flex flex-col gap-0.5 rounded-lg p-2 hover:bg-muted transition-colors text-left"
                          >
                            <span className="text-sm font-semibold text-foreground">{cat.name}</span>
                            <span className="text-[11px] text-muted-foreground leading-tight">{cat.badge}</span>
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          className="text-xs font-medium text-accent hover:underline px-2 pt-1"
                        >
                          View All Products →
                        </Link>
                      </div>
                    </div>

                    {/* Materials — Level-1 taxonomy */}
                    <div className="flex flex-col gap-3">
                      <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                        By Material
                      </span>
                      <div className="flex flex-col gap-1">
                        {MATERIAL_TAXONOMY.slice(0, 6).map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/materials/${cat.slug}`}
                            className="flex flex-col gap-0.5 rounded-lg p-2 hover:bg-muted transition-colors text-left"
                          >
                            <span className="text-sm font-semibold text-foreground">{cat.name}</span>
                            <span className="text-[11px] text-muted-foreground leading-tight">{cat.badge}</span>
                          </Link>
                        ))}
                        <Link
                          href="/materials"
                          className="text-xs font-medium text-accent hover:underline px-2 pt-1"
                        >
                          View All Materials →
                        </Link>
                      </div>
                    </div>

                    {/* Popular Styles — Level-1 taxonomy */}
                    <div className="flex flex-col gap-3">
                      <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                        Popular Styles
                      </span>
                      <div className="flex flex-col gap-1">
                        {STYLE_TAXONOMY.slice(0, 6).map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/styles/${cat.slug}`}
                            className="flex flex-col gap-0.5 rounded-lg p-2 hover:bg-muted transition-colors text-left"
                          >
                            <span className="text-sm font-semibold text-foreground">{cat.name}</span>
                            <span className="text-[11px] text-muted-foreground leading-tight">{cat.badge}</span>
                          </Link>
                        ))}
                        <Link
                          href="/styles"
                          className="text-xs font-medium text-accent hover:underline px-2 pt-1"
                        >
                          View All Styles →
                        </Link>
                      </div>
                    </div>

                    {/* By Industry — Level-1 industry taxonomy */}
                    <div className="flex flex-col gap-3">
                      <span className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                        By Industry
                      </span>
                      <div className="flex flex-col gap-1">
                        {INDUSTRY_TAXONOMY.slice(0, 6).map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/industries/${cat.slug}`}
                            className="flex flex-col gap-0.5 rounded-lg p-2 hover:bg-muted transition-colors text-left"
                          >
                            <span className="text-sm font-semibold text-foreground">{cat.name}</span>
                            <span className="text-[11px] text-muted-foreground leading-tight">{cat.badge}</span>
                          </Link>
                        ))}
                        <Link
                          href="/industries"
                          className="text-xs font-medium text-accent hover:underline px-2 pt-1"
                        >
                          View All Industries →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          {/* Simple sitemap links */}
          {SIMPLE_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-foreground/80 ${
                  isActive ? "text-foreground font-semibold" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="text-muted-foreground hover:text-foreground cursor-pointer"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
          )}
          <Link
            href="/quote"
            className={cn(
              buttonVariants({ variant: "default" }),
              "cursor-pointer font-medium tracking-wide"
            )}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="text-muted-foreground hover:text-foreground cursor-pointer"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle mobile menu"
            className="text-foreground cursor-pointer"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-background border-t border-border/40 flex flex-col justify-between p-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-5 pt-4">
              {/* Products Section */}
              <div className="flex flex-col gap-1 border-b border-border/40 pb-3">
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex items-center justify-between w-full text-left py-2 font-semibold text-foreground text-sm uppercase tracking-wider"
                >
                  <span>Products</span>
                  <ChevronDown className={cn("size-4 transition-transform duration-200", mobileProductsOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3 flex flex-col gap-2 pt-1 pb-2"
                    >
                      {PRODUCT_TAXONOMY.slice(0, 8).map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/products/${cat.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-muted-foreground hover:text-foreground py-1"
                        >
                          {cat.name}
                        </Link>
                      ))}
                      <Link
                        href="/products"
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-semibold text-accent py-1"
                      >
                        View All Products →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Materials Section */}
              <div className="flex flex-col gap-1 border-b border-border/40 pb-3">
                <button
                  onClick={() => setMobileMaterialsOpen(!mobileMaterialsOpen)}
                  className="flex items-center justify-between w-full text-left py-2 font-semibold text-foreground text-sm uppercase tracking-wider"
                >
                  <span>Materials</span>
                  <ChevronDown className={cn("size-4 transition-transform duration-200", mobileMaterialsOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {mobileMaterialsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3 flex flex-col gap-2 pt-1 pb-2"
                    >
                      {MATERIAL_TAXONOMY.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/materials/${cat.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-muted-foreground hover:text-foreground py-1"
                        >
                          {cat.name}
                        </Link>
                      ))}
                      <Link
                        href="/materials"
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-semibold text-accent py-1"
                      >
                        View All Materials →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Styles Section */}
              <div className="flex flex-col gap-1 border-b border-border/40 pb-3">
                <button
                  onClick={() => setMobileStylesOpen(!mobileStylesOpen)}
                  className="flex items-center justify-between w-full text-left py-2 font-semibold text-foreground text-sm uppercase tracking-wider"
                >
                  <span>Styles</span>
                  <ChevronDown className={cn("size-4 transition-transform duration-200", mobileStylesOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {mobileStylesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3 flex flex-col gap-2 pt-1 pb-2"
                    >
                      {STYLE_TAXONOMY.slice(0, 10).map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/styles/${cat.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-muted-foreground hover:text-foreground py-1"
                        >
                          {cat.name}
                        </Link>
                      ))}
                      <Link
                        href="/styles"
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-semibold text-accent py-1"
                      >
                        View All Styles →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Section */}
              <div className="flex flex-col gap-1 border-b border-border/40 pb-3">
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="flex items-center justify-between w-full text-left py-2 font-semibold text-foreground text-sm uppercase tracking-wider"
                >
                  <span>Industries</span>
                  <ChevronDown className={cn("size-4 transition-transform duration-200", mobileIndustriesOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-3 flex flex-col gap-2 pt-1 pb-2"
                    >
                      {INDUSTRY_TAXONOMY.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/industries/${cat.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-medium text-muted-foreground hover:text-foreground py-1"
                        >
                          {cat.name}
                        </Link>
                      ))}
                      <Link
                        href="/industries"
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-semibold text-accent py-1"
                      >
                        View All Industries →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>


              {/* Simple Links */}
              <div className="flex flex-col gap-3 pt-2 border-t border-border/40">
                {SIMPLE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pb-8 pt-6">
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full text-center cursor-pointer"
                )}
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
