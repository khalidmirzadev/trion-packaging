import Link from "next/link";

const FOOTER_SECTIONS = [
  {
    title: "Products",
    links: [
      { href: "/products/custom-boxes", label: "Custom Boxes" },
      { href: "/products/mailer-boxes", label: "Mailer Boxes" },
      { href: "/products/corrugated-boxes", label: "Corrugated Boxes" },
      { href: "/products/folding-cartons", label: "Folding Cartons" },
      { href: "/products/rigid-boxes", label: "Rigid Boxes" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/materials", label: "Materials" },
      { href: "/printing", label: "Printing" },
      { href: "/finishes", label: "Finishes" },
      { href: "/gallery", label: "Gallery Showroom" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Insights Blog" },
      { href: "/contact", label: "Contact Us" },
      { href: "/quote", label: "Get Quote" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border/40 py-16 mt-auto">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5">
          {/* Logo & About */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-sans font-bold text-xl tracking-tight text-foreground">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground font-black text-lg">
                T
              </span>
              <span>
                TRION<span className="text-accent font-light">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm mt-2 leading-relaxed">
              Engineered to protect. Designed to impress. Trion Packaging delivers premium corporate and industrial packaging solutions that elevate your brand and secure your supply chain.
            </p>
            <span className="text-sm text-foreground font-medium mt-2">
              contact@trionpackaging.com
            </span>
          </div>

          {/* Links Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Area */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Trion Packaging. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground">
              ISO 9001 &amp; 14001 Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
