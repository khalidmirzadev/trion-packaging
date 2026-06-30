/**
 * Product taxonomy — 3-level architecture
 *
 * Level 1 (/products/[category])          → CategoryPage  → shows SubcategoryGrid
 * Level 2 (/products/[category]/[sub])    → SubcategoryPage → shows ProductTemplate
 * Level 3 (future)                        → Variant/SKU page
 */

import { type ProductPageConfig } from "@/components/products/product-template";

/* ─── Sub-category shape ────────────────────────────────────────── */
export interface Subcategory {
  slug: string;           // URL segment  e.g. "shirt-boxes"
  name: string;           // Display name e.g. "Shirt Boxes"
  desc: string;           // 1-line description shown on the grid card
  img: string;            // product image for the card
  badge?: string;         // optional accent badge e.g. "Best Seller"
}

/* ─── Category shape ────────────────────────────────────────────── */
export interface ProductCategory {
  slug: string;           // Level-1 URL segment e.g. "apparel-boxes"
  name: string;           // e.g. "Apparel Boxes"
  headline: string;       // Hero <h1>
  desc: string;           // Hero sub-paragraph
  badge: string;          // Hero badge label
  img: string;            // Hero image
  subcategories: Subcategory[];
}

/* ─── Image shorthand ─────────────────────────────────────────────*/
const IMG = {
  custom:      "/images/products/custom_box.png",
  mailer:      "/images/products/mailer_box.png",
  corrugated:  "/images/products/corrugated_box.png",
  folding:     "/images/products/folding_carton.png",
  rigid:       "/images/products/rigid_box.png",
  cosmetic:    "/images/products/cosmetic_box.png",
  placeholder: "/images/products/placeholder_packaging.png",
  hero:        "/images/products/hero_packaging.png",
};

/* ═══════════════════════════════════════════════════════════════════
   PRODUCT CATEGORY TAXONOMY
═══════════════════════════════════════════════════════════════════ */
export const PRODUCT_TAXONOMY: ProductCategory[] = [

  /* ── Core structural categories ─────────────────────────────── */
  {
    slug: "custom-boxes",
    name: "Custom Boxes",
    headline: "Custom Boxes & Packaging",
    desc: "Get custom boxes made to fit your products perfectly. Easy ordering, eco-friendly options, and free design layout templates ready in 24 hours.",
    badge: "Custom Boxes",
    img: IMG.custom,
    subcategories: [
      { slug: "tuck-top-boxes",        name: "Tuck-Top Boxes",          desc: "Easy-to-fold boxes with a secure top and self-locking bottom.",                img: IMG.custom },
      { slug: "telescope-boxes",       name: "Telescope Boxes",         desc: "Classic box with a separate lid and base, perfect for a high-end unboxing feel.",     img: IMG.rigid },
      { slug: "slide-drawer-boxes",    name: "Slide Drawer Boxes",      desc: "Sleek drawer-style box with a ribbon pull-tab that slides out easily.",                        img: IMG.rigid, badge: "Popular" },
      { slug: "counter-display-boxes", name: "Counter Display Boxes",   desc: "Retail display boxes with a fold-out sign, ideal for store counters.",       img: IMG.folding },
      { slug: "sleeve-boxes",          name: "Sleeve & Wrap Boxes",     desc: "Paper packaging sleeves that slide over your boxes or product bundles.",     img: IMG.custom },
      { slug: "gable-boxes",           name: "Gable Boxes",             desc: "Friendly carry-handle box, perfect for bakery treats, gifts, and party favors.",    img: IMG.folding },
    ],
  },

  {
    slug: "mailer-boxes",
    name: "Mailer Boxes",
    headline: "Custom Mailer Boxes & Shipping Boxes",
    desc: "Strong, custom shipping boxes designed to keep your products safe and look great on arrival. Easy to assemble with secure self-locking tabs.",
    badge: "E-commerce Mailers",
    img: IMG.mailer,
    subcategories: [
      { slug: "rett-mailer-boxes",     name: "RETT Mailer Boxes",       desc: "Classic shipping box with double-layer sides that lock securely in place.",             img: IMG.mailer, badge: "Best Seller" },
      { slug: "peel-seal-mailers",     name: "Peel & Seal Mailers",     desc: "Easy-close boxes with double adhesive tape strips for simple shipping and customer returns.",                  img: IMG.mailer },
      { slug: "subscription-boxes",    name: "Subscription Boxes",      desc: "Custom printed subscription boxes with eye-catching designs on both the inside and outside.",         img: IMG.mailer, badge: "Popular" },
      { slug: "poly-mailer-bags",      name: "Poly Mailer Bags",        desc: "Waterproof, lightweight shipping bags perfect for clothing and soft items.",              img: IMG.placeholder },
      { slug: "padded-mailers",        name: "Padded Mailers",          desc: "Padded mailer envelopes with bubble wrap protection for delicate flat items.",              img: IMG.placeholder },
    ],
  },

  {
    slug: "corrugated-boxes",
    name: "Corrugated Boxes",
    headline: "Shipping Boxes & Cardboard Cartons",
    desc: "Strong cardboard shipping boxes built to handle transport and keep bulk products safe. Perfect for shipping, storage, and heavy items.",
    badge: "Shipping Boxes",
    img: IMG.corrugated,
    subcategories: [
      { slug: "rsc-shipping-boxes",    name: "RSC Shipping Boxes",      desc: "Standard shipping box with flaps that meet in the middle for easy taping.",          img: IMG.corrugated, badge: "Best Seller" },
      { slug: "hsc-boxes",             name: "Half Slotted Cartons",    desc: "Open-top boxes, great for storage shelves or moving.",           img: IMG.corrugated },
      { slug: "fol-boxes",             name: "Full Overlap Cartons",    desc: "Extra strong boxes with overlapping flaps, perfect for heavy or delicate items.",                  img: IMG.corrugated },
      { slug: "die-cut-corrugated",    name: "Die-Cut Corrugated",      desc: "Custom-cut cardboard boxes and retail displays built to your design.",     img: IMG.corrugated },
      { slug: "double-wall-boxes",     name: "Double Wall Boxes",       desc: "Double-thick cardboard boxes for maximum protection of heavy goods.",    img: IMG.corrugated, badge: "Heavy Duty" },
    ],
  },

  {
    slug: "folding-cartons",
    name: "Folding Cartons",
    headline: "Custom Product Boxes & Retail Packaging",
    desc: "Classic paperboard boxes for retail store shelves. Easy to fold, printed with high-quality colors, and available in eco-friendly brown kraft or smooth white cardboard.",
    badge: "Retail Packaging",
    img: IMG.folding,
    subcategories: [
      { slug: "straight-tuck-cartons", name: "Straight Tuck Cartons",   desc: "Classic retail boxes where the top and bottom flaps close in the same direction.",      img: IMG.folding, badge: "Best Seller" },
      { slug: "reverse-tuck-cartons",  name: "Reverse Tuck Cartons",    desc: "Sturdy retail boxes where the top and bottom flaps close in opposite directions.",           img: IMG.folding },
      { slug: "window-cartons",        name: "Window Cartons",           desc: "Product boxes with a clear plastic window so customers can see what is inside.",             img: IMG.folding, badge: "Popular" },
      { slug: "auto-bottom-cartons",   name: "Auto-Bottom Cartons",      desc: "Quick-assembly boxes with a pre-glued bottom that snaps open instantly.",    img: IMG.folding },
      { slug: "seal-end-cartons",      name: "Seal-End Cartons",         desc: "Secure boxes with glue-sealed ends, ideal for food or medicine.",       img: IMG.folding },
      { slug: "dispenser-cartons",     name: "Dispenser Cartons",        desc: "Dispenser boxes with a tear-open front for easy grab-and-go access.",   img: IMG.folding },
    ],
  },

  {
    slug: "rigid-boxes",
    name: "Rigid Boxes",
    headline: "Luxury Rigid Gift Boxes",
    desc: "Thick, high-end gift boxes that don't bend or collapse. Features magnetic closures, elegant paper linings, and ribbons for a luxury unboxing feel.",
    badge: "Luxury Gift Boxes",
    img: IMG.rigid,
    subcategories: [
      { slug: "telescope-rigid-boxes", name: "Telescope Rigid Boxes",   desc: "Luxury two-piece boxes with a separate lid and base that slide open smoothly.",      img: IMG.rigid, badge: "Best Seller" },
      { slug: "magnetic-lid-boxes",    name: "Magnetic Lid Boxes",      desc: "Premium gift boxes with hidden magnets in the lid for a satisfying snap closure.",    img: IMG.rigid, badge: "Popular" },
      { slug: "clamshell-rigid-boxes", name: "Clamshell Rigid Boxes",   desc: "Hinged presentation box with an attached lid and a ribbon pull-tab.",                img: IMG.rigid },
      { slug: "book-style-boxes",      name: "Book-Style Boxes",        desc: "Boxes that open from the side like a hardcover book, perfect for premium products.",      img: IMG.rigid },
      { slug: "shoulder-boxes",        name: "Shoulder Neck Boxes",     desc: "Three-piece boxes with an inner neck or shoulder that shows when closed.",      img: IMG.rigid },
    ],
  },

  {
    slug: "cosmetic-boxes",
    name: "Cosmetic Boxes",
    headline: "Cosmetic & Beauty Product Packaging",
    desc: "Beautiful packaging for makeup, skincare, and perfumes. Customize with velvet-soft coatings, shiny metallic foil stamping, and glossy spot highlights.",
    badge: "Beauty & Skincare",
    img: IMG.cosmetic,
    subcategories: [
      { slug: "skincare-cartons",      name: "Skincare Cartons",        desc: "Smooth product boxes for skincare serums, face creams, and lotions.", img: IMG.cosmetic, badge: "Best Seller" },
      { slug: "perfume-boxes",         name: "Perfume & Fragrance",     desc: "Elegant perfume gift boxes with window cutouts and raised metallic logos.", img: IMG.cosmetic, badge: "Popular" },
      { slug: "lipstick-boxes",        name: "Lipstick & Lip Gloss",    desc: "Custom slim boxes sized to fit lipstick and lip gloss tubes perfectly.", img: IMG.cosmetic },
      { slug: "eyeshadow-palette-boxes", name: "Eyeshadow Palette Boxes", desc: "Sturdy, flat boxes made to hold eyeshadow palettes and makeup compacts.", img: IMG.cosmetic },
      { slug: "soap-boxes",            name: "Soap & Bar Packaging",    desc: "Natural brown paper boxes or slide-on sleeves for handmade soap bars.", img: IMG.placeholder },
      { slug: "serum-dropper-boxes",   name: "Serum & Dropper Boxes",   desc: "Custom boxes with protective inserts for essential oil and dropper bottles.",   img: IMG.cosmetic },
    ],
  },

  /* ── Industry-specific categories ───────────────────────────── */
  {
    slug: "food-packaging",
    name: "Food Packaging",
    headline: "Food Packaging & Specialty Food Boxes",
    desc: "Safe, food-grade packaging with grease-resistant coatings and display windows. Perfect for bakeries, chocolate brands, and coffee shops.",
    badge: "Food Safe",
    img: IMG.folding,
    subcategories: [
      { slug: "bakery-boxes",          name: "Bakery Boxes",            desc: "Grease-resistant boxes with clear window panels for cakes, pastries, and cookies.", img: IMG.folding, badge: "Best Seller" },
      { slug: "chocolate-boxes",       name: "Chocolate Gift Boxes",    desc: "Luxury gift boxes with custom inserts to keep chocolates and truffles in place.",   img: IMG.rigid, badge: "Popular" },
      { slug: "tea-gift-boxes",        name: "Tea & Coffee Gift Boxes", desc: "Eco-friendly paper boxes and sleeves designed for loose leaf teas and coffee beans.",    img: IMG.custom },
      { slug: "snack-cartons",         name: "Snack & Cereal Cartons",  desc: "Custom printed product boxes with colorful graphics, perfect for retail shelves.", img: IMG.folding },
      { slug: "spice-boxes",           name: "Spice & Herb Cartons",    desc: "Compact counter boxes with easy-close flaps, ideal for retail spice displays.",     img: IMG.placeholder },
      { slug: "bottle-shipper-boxes",  name: "Bottle Shipper Boxes",    desc: "Strong cardboard boxes with dividers to protect glass bottles during shipping.", img: IMG.corrugated },
    ],
  },

  {
    slug: "electronics-packaging",
    name: "Electronics Packaging",
    headline: "Custom Electronics & Tech Packaging",
    desc: "Premium device boxes with soft foam inserts, custom compartments, and magnetic lids to protect and showcase your tech accessories.",
    badge: "Tech & Gadgets",
    img: IMG.rigid,
    subcategories: [
      { slug: "phone-boxes",           name: "Phone & Tablet Boxes",    desc: "Sturdy presentation boxes with custom foam trays to protect screens and accessories.", img: IMG.rigid, badge: "Best Seller" },
      { slug: "headphone-boxes",       name: "Headphone & Audio Boxes", desc: "Custom-fit boxes with protective cushion padding for headphones and speakers.", img: IMG.rigid, badge: "Popular" },
      { slug: "cable-accessory-boxes", name: "Cable & Accessory Boxes", desc: "Compact retail boxes and cardboard envelopes for USB cables and power banks.",     img: IMG.folding },
      { slug: "wearable-boxes",        name: "Wearable Tech Boxes",     desc: "Sleek gift boxes with custom slots for smartwatches and fitness trackers.",  img: IMG.rigid },
      { slug: "laptop-shipper-boxes",  name: "Laptop Shipper Boxes",    desc: "Heavy-duty shipping boxes with thick protective padding for laptops.",     img: IMG.corrugated },
    ],
  },

  {
    slug: "retail-packaging",
    name: "Retail Packaging",
    headline: "Retail Packaging & Product Display Boxes",
    desc: "Eye-catching retail packaging, hanging display cards, and store counter display boxes built to make your products stand out on store shelves.",
    badge: "Retail Ready",
    img: IMG.folding,
    subcategories: [
      { slug: "hanging-tab-boxes",     name: "Hanging Tab Boxes",       desc: "Pegboard boxes with built-in hanger tabs, perfect for store display racks.",  img: IMG.folding, badge: "Best Seller" },
      { slug: "blister-packs",         name: "Blister Pack Cards",      desc: "Custom printed backer cards designed for clear plastic blister packaging.", img: IMG.placeholder },
      { slug: "display-boxes",         name: "Counter Display Boxes",   desc: "Retail counter trays with fold-out signboards to attract customers at checkout.",  img: IMG.folding, badge: "Popular" },
      { slug: "retail-shipper-boxes",  name: "Retail Shipper Boxes",    desc: "Easy-to-open bulk boxes that convert instantly into retail-ready product trays.",          img: IMG.corrugated },
      { slug: "shelf-ready-packaging", name: "Shelf-Ready Packaging",   desc: "Perforated cardboard boxes that tear open easily to display items directly on shelves.", img: IMG.folding },
    ],
  },

  {
    slug: "gift-packaging",
    name: "Gift Packaging",
    headline: "Custom Gift Boxes & Luxury Boxes",
    desc: "Premium gift boxes with separate lids, magnetic closures, and elegant ribbon pulls. Perfect for luxury goods, holidays, and corporate gifts.",
    badge: "Premium Gifting",
    img: IMG.rigid,
    subcategories: [
      { slug: "gift-rigid-boxes",      name: "Rigid Gift Boxes",        desc: "High-end gift boxes with custom paper wrapping and easy-to-use ribbon pull-tabs.",     img: IMG.rigid, badge: "Best Seller" },
      { slug: "gift-hamper-boxes",     name: "Hamper & Tray Sets",      desc: "Large open gift trays with cardboard dividers, perfect for product gift sets.",        img: IMG.rigid, badge: "Popular" },
      { slug: "gift-bags",             name: "Luxury Gift Bags",        desc: "Elegant paper gift bags with soft ribbon handles for high-end boutique stores.",   img: IMG.placeholder },
      { slug: "gift-mailer-boxes",     name: "Gift Mailer Boxes",       desc: "Branded shipping boxes with custom interior print for a memorable unboxing experience.", img: IMG.mailer },
      { slug: "seasonal-gift-boxes",   name: "Seasonal & Holiday Boxes", desc: "Holiday-themed gift boxes with custom designs and secure product inserts.",  img: IMG.custom },
    ],
  },

  {
    slug: "health-pharma-packaging",
    name: "Health & Pharma Packaging",
    headline: "Health, Wellness & Pharma Packaging",
    desc: "Secure packaging, child-resistant boxes, and clear labeling solutions for medicine, vitamins, and wellness products.",
    badge: "Secure & Compliant",
    img: IMG.folding,
    subcategories: [
      { slug: "medicine-cartons",      name: "Medicine & Tablet Cartons", desc: "Safe folding boxes with custom pockets for instructions and dosage details.", img: IMG.folding, badge: "Best Seller" },
      { slug: "supplement-bottles",   name: "Supplement Bottle Boxes",  desc: "Retail boxes with clean layouts for printing ingredient lists and nutritional facts.",  img: IMG.placeholder },
      { slug: "medical-device-boxes",  name: "Medical Device Boxes",    desc: "Clean, protective boxes designed specifically for medical accessories.", img: IMG.rigid },
      { slug: "child-resistant-boxes", name: "Child-Resistant Boxes",   desc: "Squeeze-and-pull safety boxes designed to keep products out of reach of children.",    img: IMG.folding, badge: "Compliant" },
    ],
  },

  {
    slug: "jewelry-packaging",
    name: "Jewelry Packaging",
    headline: "Jewelry Boxes & Gift Packaging",
    desc: "Soft velvet-lined drawer boxes, magnetic gift boxes, and elegant cases for rings, necklaces, watches, and fine jewelry.",
    badge: "Fine Jewelry",
    img: IMG.rigid,
    subcategories: [
      { slug: "ring-boxes",            name: "Ring Boxes",               desc: "Small gift boxes with soft velvet foam pads to hold rings securely.",    img: IMG.rigid, badge: "Best Seller" },
      { slug: "necklace-boxes",        name: "Necklace & Pendant Boxes", desc: "Flat gift boxes with velvet inserts to display necklaces without tangling.",  img: IMG.rigid, badge: "Popular" },
      { slug: "bracelet-boxes",        name: "Bracelet & Bangle Boxes",  desc: "Long gift boxes with soft pillows, perfect for bracelets and watches.",     img: IMG.rigid },
      { slug: "watch-boxes",           name: "Watch Presentation Boxes", desc: "Elegant watch boxes with cushions and extra space for spare parts.",      img: IMG.rigid },
      { slug: "jewelry-drawer-boxes",  name: "Jewelry Drawer Boxes",    desc: "Slide-out gift boxes with velvet linings and pull-tabs.",          img: IMG.rigid },
    ],
  },

  {
    slug: "apparel-packaging",
    name: "Apparel Packaging",
    headline: "Apparel Boxes & Clothing Packaging",
    desc: "Custom apparel boxes, garment tissue packaging, and branded paper bags for clothing, shoes, and fashion accessories.",
    badge: "Fashion & Apparel",
    img: IMG.custom,
    subcategories: [
      { slug: "shirt-boxes",           name: "Shirt & Apparel Boxes",    desc: "Flat-pack clothing boxes with tissue wrapping, ideal for shirts and knits.",  img: IMG.custom, badge: "Best Seller" },
      { slug: "shoe-boxes",            name: "Shoe Boxes",               desc: "Classic cardboard shoeboxes with lid options and full-color custom print.",    img: IMG.corrugated, badge: "Popular" },
      { slug: "hat-boxes",             name: "Hat & Cap Boxes",          desc: "Round or square cardboard gift boxes designed for hats and accessories.",           img: IMG.rigid },
      { slug: "garment-bags",          name: "Garment & Suit Bags",      desc: "Eco-friendly paper bags with custom logos, perfect for apparel retail.",     img: IMG.placeholder },
      { slug: "lingerie-boxes",        name: "Lingerie & Intimates",     desc: "Velvet-soft gift boxes with tissue lining for delicate clothing brands.", img: IMG.custom },
    ],
  },

  {
    slug: "cbd-cannabis-packaging",
    name: "CBD & Cannabis Packaging",
    headline: "CBD & Hemp Packaging Solutions",
    desc: "Compliant, child-resistant boxes for CBD oils, tinctures, gummies, and vape pens. Simple layouts for regulatory labels.",
    badge: "Child-Safe Options",
    img: IMG.custom,
    subcategories: [
      { slug: "cbd-oil-boxes",         name: "CBD Oil & Tincture Boxes", desc: "Custom-fit dropper bottle boxes with clear sections for regulatory details.",  img: IMG.custom, badge: "Best Seller" },
      { slug: "vape-cartridge-boxes",  name: "Vape & Cartridge Boxes",   desc: "Precision slide drawer boxes or tuck cartons for vape cartridges.",       img: IMG.custom, badge: "Popular" },
      { slug: "gummy-boxes",           name: "Edible & Gummy Packaging", desc: "Child-resistant boxes or stand-up foil pouches for gummies and sweets.", img: IMG.folding },
      { slug: "pre-roll-tubes",        name: "Pre-Roll Tubes & Boxes",   desc: "Compact slide-out boxes or tubes for pre-rolled products.",        img: IMG.placeholder },
      { slug: "hemp-cream-boxes",      name: "Hemp Cream & Topical",     desc: "Natural brown kraft boxes for skin creams, body balms, and lotions.",       img: IMG.cosmetic },
    ],
  },

  {
    slug: "shipping-packaging",
    name: "Shipping Packaging",
    headline: "Shipping Boxes & Packing Supplies",
    desc: "Strong cardboard shipping boxes, mailing envelopes, and protective packaging to keep your products safe during transport.",
    badge: "Heavy-Duty",
    img: IMG.corrugated,
    subcategories: [
      { slug: "master-shipper-boxes",  name: "Master Shipper Boxes",    desc: "Large, double-thick cardboard boxes for bulk shipping and storage.",    img: IMG.corrugated, badge: "Best Seller" },
      { slug: "hazmat-boxes",          name: "Hazmat Shipping Boxes",   desc: "Certified shipping boxes designed to safely carry liquids or special materials.",      img: IMG.corrugated, badge: "Certified" },
      { slug: "insulated-shippers",    name: "Insulated Shippers",      desc: "Foam-lined boxes that keep products at the right temperature during shipping.",  img: IMG.corrugated },
      { slug: "wine-shipper-boxes",    name: "Wine & Spirits Shippers", desc: "Cardboard boxes with slots to prevent glass wine bottles from breaking.",   img: IMG.corrugated, badge: "Popular" },
      { slug: "archive-storage-boxes", name: "Archive & Storage Boxes", desc: "Sturdy storage boxes with lift-off lids and handles for easy file storage.", img: IMG.corrugated },
    ],
  },
];

/* ─── Lookup helpers ────────────────────────────────────────────── */

/** Returns all Level-1 categories */
export function getAllCategories(): ProductCategory[] {
  return PRODUCT_TAXONOMY;
}

/** Returns a single Level-1 category by its slug, or null */
export function getCategoryBySlug(categorySlug: string): ProductCategory | null {
  return PRODUCT_TAXONOMY.find((c) => c.slug === categorySlug) ?? null;
}

/** Returns a single sub-category, or null */
export function getSubcategoryBySlug(
  categorySlug: string,
  subSlug: string
): { category: ProductCategory; sub: Subcategory } | null {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  const sub = category.subcategories.find((s) => s.slug === subSlug);
  if (!sub) return null;
  return { category, sub };
}

/** All static params for Level-1 pages (generateStaticParams) */
export function getAllCategoryParams(): { category: string }[] {
  return PRODUCT_TAXONOMY.map((c) => ({ category: c.slug }));
}

/** All static params for Level-2 pages (generateStaticParams) */
export function getAllSubcategoryParams(): { category: string; subcategory: string }[] {
  return PRODUCT_TAXONOMY.flatMap((c) =>
    c.subcategories.map((s) => ({ category: c.slug, subcategory: s.slug }))
  );
}

/** Generate a ProductPageConfig for a sub-category (Level 2 template data) */
export function generateSubcategoryConfig(
  category: ProductCategory,
  sub: Subcategory
): ProductPageConfig {
  const formattedName = sub.name;
  const catName = category.name;

  return {
    hero: {
      badge: catName,
      badgeIcon: "package",
      title: (
        <>
          Custom {formattedName} <br />
          <span className="text-accent">by Trion Packaging</span>
        </>
      ),
      subtitle: `Get custom ${formattedName} made to fit your product's exact measurements. We'll send you a free design template in 24 hours. Choose from eco-friendly brown kraft or white cardboard with custom printing and beautiful finishes.`,
      image: sub.img,
      moq: "100 Units",
      leadTime: "10 – 15 Days",
      cadTime: "Within 24 Hours",
      ecoStatus: "FSC Certified",
      benefits: [
        `Free custom layout templates made specifically for your ${formattedName}`,
        "Add shiny foil, gloss highlights, matte coatings, or raised details",
        "Eco-friendly paper options and fully recyclable materials",
      ],
      quoteLink: `/quote?category=${category.slug}&sub=${sub.slug}`,
      dielineLink: `/contact?request=dieline-${sub.slug}`,
      modelName: `${sub.slug.substring(0, 4).toUpperCase().replace("-", "")} | Perfect Fit`,
      boardType: "Eco-Friendly Cardboard",
    },
    overview: {
      tagline: "Custom Design Support",
      title: `How We Design Your ${formattedName}`,
      description: `Our design team builds custom ${formattedName} based on your product's dimensions. We make sure the box folds easily, closes securely, and matches your artwork perfectly.`,
      items: [
        {
          icon: "compass",
          title: "Free Layout Templates in 24 Hours",
          desc: `Send us your product sizes and we will send you a digital design template within one business day.`,
        },
        {
          icon: "ruler",
          title: "Guaranteed Perfect Fit",
          desc: "Every box is cut with absolute precision, ensuring flaps fold easily and the box closes securely every time.",
        },
        {
          icon: "hammer",
          title: "Custom Compartments & Inserts",
          desc: "Add cardboard dividers or soft foam inserts to keep your products safe and neat inside the box.",
        },
        {
          icon: "cpu",
          title: "Built Tough for Safe Shipping",
          desc: "Our shipping boxes are designed to handle drops, bumps, and stacking during transport, keeping your products safe.",
        },
      ],
    },
    styles: {
      tagline: "Popular Options",
      title: `${formattedName} — Popular Box Styles`,
      description: `Choose from our popular standard shapes for your ${formattedName}, or request a completely custom box style.`,
      items: [
        {
          icon: "box",
          name: "Standard Tuck-End",
          locks: "Easy-close top and bottom flaps",
          bestFor: "Retail stores, cosmetics, and everyday product packaging",
          calipers: "eco-friendly paperboard",
          desc: "The classic store shelf box. Flaps tuck in easily at both ends for quick packaging without needing tape or glue.",
        },
        {
          icon: "layout",
          name: "Self-Locking Bottom",
          locks: "Pre-glued bottom that pops open, tuck lid",
          bestFor: "Fast packaging lines and heavier products",
          calipers: "heavyweight cardboard",
          desc: "The bottom of the box is pre-glued so it snaps open and locks into place instantly when opened, saving you assembly time.",
        },
        {
          icon: "layers",
          name: "Fully Custom Box",
          locks: "Designed to match your product shape",
          bestFor: "Unique shapes, luxury gifts, and special collections",
          calipers: "all material weights available",
          desc: "Our design team builds a completely custom shape from scratch to fit your product profile perfectly.",
        },
      ],
    },
    materials: {
      tagline: "Substrates",
      title: "Material Options",
      description: `Select the right paper or cardboard material for your ${formattedName} based on weight, look, and eco-friendliness.`,
      items: [
        {
          icon: "gem",
          name: "Premium White Cardboard",
          thickness: "Lightweight to heavyweight card options",
          eco: "100% Sustainably Sourced",
          properties: "Smooth, bright white surface that makes colors pop — ideal for high-end retail look.",
          useCase: "Cosmetics, beauty products, retail items, and gift boxes",
        },
        {
          icon: "leaf",
          name: "Eco-Friendly Brown Kraft",
          thickness: "Organic, rustic paper weights",
          eco: "100% Recycled & Biodegradable",
          properties: "Natural brown paper texture, highly durable, and completely eco-friendly.",
          useCase: "Organic products, handmade items, and natural skincare brands",
        },
        {
          icon: "shield",
          name: "Luxury Rigid Board",
          thickness: "Thick, non-bendable luxury board",
          eco: "100% Recyclable Compressed Paper",
          properties: "Sturdy board that does not bend, wrapped in elegant custom-printed paper.",
          useCase: "High-end gifts, electronics, jewelry, and luxury collections",
        },
        {
          icon: "layers",
          name: "Sturdy Fluted Cardboard",
          thickness: "Crush-resistant fluted structure",
          eco: "Recycled content, fully recyclable",
          properties: "Lightweight shipping material with layered channels for extra crush protection.",
          useCase: "E-commerce shipping, subscription boxes, and bulk retail shipments",
        },
      ],
    },
    printing: {
      tagline: "Printing Methods",
      title: "Custom Printing Options",
      description: "Choose the best printing style for your brand based on your order size and design details.",
      items: [
        {
          icon: "printer",
          name: "High-Volume Printing",
          moq: "1,000 units",
          setup: "Requires custom printing plates",
          color: "High-fidelity CMYK and custom spot colors",
          bestFor: "Large retail runs, retail brands, and bulk packaging",
          desc: "Perfect for larger runs. Gives you the highest quality print, sharpest details, and lowest cost per box at scale.",
          benefits: ["Photographic print quality", "Add shiny foil or spot gloss easily", "Most cost-effective for large orders"],
        },
        {
          icon: "columns",
          name: "Short-Run Digital Printing",
          moq: "100 units",
          setup: "No setup or plate charges",
          color: "Full-color printing",
          bestFor: "Startups, test runs, and limited edition products",
          desc: "Prints your design directly from digital files onto the cardboard. Perfect for small batches, testing new designs, or quick turnarounds.",
          benefits: ["No expensive startup charges", "Fast turnarounds (2-3 days)", "Print multiple designs in one batch"],
        },
        {
          icon: "layers",
          name: "Direct Cardboard Printing",
          moq: "500 units",
          setup: "Low setup charge",
          color: "1 to 3 solid colors",
          bestFor: "Shipping boxes, logo boxes, and outer cases",
          desc: "Prints ink directly onto brown or white shipping boxes. Simple, durable, and highly cost-effective.",
          benefits: ["Extremely cost-effective", "Eco-friendly water-based inks", "Durable logo printing"],
        },
      ],
    },
    finishes: {
      tagline: "Extra Finishes",
      title: "Custom Finishing Details",
      description: "Add special touches to make your box stand out and feel premium when customers hold it.",
      items: [
        {
          icon: "sun",
          name: "Gloss Highlights (Spot UV)",
          visual: "Shiny, raised gloss overlay on logos or text",
          protection: "Helps protect key design details from scratches",
          desc: "A clear gloss layer applied selectively to make logos or specific parts of your design shine.",
        },
        {
          icon: "sparkles",
          name: "Shiny Foil Stamping",
          visual: "Metallic gold, silver, or rose gold details",
          protection: "Highly durable bond that won't peel",
          desc: "Heat-stamps metallic foils directly into the paper, creating premium shiny highlights for luxury brands.",
        },
        {
          icon: "paintbrush",
          name: "Velvet Matte Finish",
          visual: "Velvet-soft feel with zero glare",
          protection: "Protects box corners from scuffs and cracks",
          desc: "A soft, non-reflective coating that makes the box feel incredibly smooth and prevents fingerprints.",
        },
        {
          icon: "crop",
          name: "Raised & Pressed Details",
          visual: "3D raised or sunken designs",
          protection: "Permanent texture built into the paper",
          desc: "Presses your logo into the paper to create a distinct, touchable 3D texture.",
        },
      ],
    },
    industries: {
      tagline: "Applications",
      title: "Who Uses These Boxes",
      description: `${formattedName} are popular across many retail and e-commerce business sectors. Here is how they are commonly used:`,
      items: [
        {
          icon: "sparkles",
          name: "Beauty & Skincare",
          requirements: "Soft matte finish, gold foil details, custom product slots",
          useCase: "Creams, face serums, makeup palettes, and essential oil bottles",
          link: "/industries",
        },
        {
          icon: "shopping-bag",
          name: "E-Commerce & Retail",
          requirements: "Strong boxes, custom logo prints, easy self-sealing tape",
          useCase: "Clothing shipping, subscription kits, and retail gift boxes",
          link: "/industries",
        },
        {
          icon: "cpu",
          name: "Electronics & Tech",
          requirements: "Sturdy lids, soft foam cushions, secure closures",
          useCase: "Smartphones, headphones, chargers, and tech accessories",
          link: "/industries",
        },
        {
          icon: "coffee",
          name: "Specialty Food & Gifts",
          requirements: "Food-safe materials, grease barriers, clear display windows",
          useCase: "Gourmet chocolates, luxury teas, and bakery gift boxes",
          link: "/industries",
        },
      ],
    },
    gallery: {
      tagline: "Related Products",
      title: "Browse Related Packaging",
      description: "Explore other custom box styles to find the perfect fit for your product.",
      items: [
        {
          name: "Custom Product Box",
          img: IMG.custom,
          type: "Classic Cardboard",
          use: "Everyday Retail & Store Shelves",
          href: "/products/custom-boxes",
        },
        {
          name: "Rigid Gift Box",
          img: IMG.rigid,
          type: "Luxury Rigid Board",
          use: "Premium Tech & High-End Gifts",
          href: "/products/rigid-boxes",
        },
        {
          name: "Folding Retail Carton",
          img: IMG.folding,
          type: "Smooth White Cardboard",
          use: "Retail Shelves & Store Display",
          href: "/products/folding-cartons",
        },
        {
          name: "E-Commerce Mailer Box",
          img: IMG.mailer,
          type: "Sturdy Fluted Cardboard",
          use: "Online Shipping & Subscription Kits",
          href: "/products/mailer-boxes",
        },
      ],
    },
    faq: {
      tagline: "FAQ",
      title: `${formattedName} — Frequently Asked Questions`,
      description: "Find simple answers to common questions about ordering, templates, samples, and shipping times.",
      items: [
        {
          q: "Can I get a custom layout template before placing an order?",
          a: "Yes. Simply send us your product measurements. Our design team will send you a digital vector template within 24 hours at no charge.",
        },
        {
          q: "What is the minimum order quantity?",
          a: "Digital printing starts at just 100 boxes. Higher-volume custom printing starts at 1,000 boxes. Direct shipping box printing starts at 500 boxes.",
        },
        {
          q: "Can I get a physical sample before placing my full order?",
          a: "Yes. We offer unprinted sample boxes to test size fit, and fully printed samples to check colors. Sample fees are credited back to your account when you place a production order.",
        },
        {
          q: "What format should my artwork be in?",
          a: "We recommend vector files like Adobe Illustrator (.AI), vector PDF, or EPS. Make sure all fonts are outlined and images are high-resolution (300 DPI) for sharp printing.",
        },
      ],
    },
    cta: {
      tagline: `Custom ${formattedName}`,
      title: `Ready to Design Your Custom ${formattedName}?`,
      description: `Send us your product sizes or send a physical sample. Our design team will create a custom box layout and send you a pricing estimate within 24 hours — completely free.`,
      quoteLink: `/quote?category=${category.slug}&sub=${sub.slug}`,
      contactLink: `/contact?request=consultation-${sub.slug}`,
    },
  };
}
