/**
 * Catalog taxonomy for Materials, Styles, and Industries.
 *
 * All three sections reuse the same ProductCategory / Subcategory shape
 * from product-taxonomy so that CategoryTemplate works without modification.
 *
 * Routing:
 *   /materials/[category]                 → Level 1: sub-category grid
 *   /materials/[category]/[subcategory]   → Level 2: ProductTemplate detail
 *
 *   /styles/[category]                    → Level 1: sub-category grid
 *   /styles/[category]/[subcategory]      → Level 2: ProductTemplate detail
 *
 *   /industries/[category]                → Level 1: sub-category grid
 *   /industries/[category]/[subcategory]  → Level 2: ProductTemplate detail
 */

import { type ProductCategory, type Subcategory } from "@/lib/data/product-taxonomy";
import { type ProductPageConfig } from "@/components/products/product-template";

export type { ProductCategory, Subcategory };

/* ─── Image shorthand ─────────────────────────────────── */
const IMG = {
  custom:      "/images/custom_box.png",
  mailer:      "/images/mailer_box.png",
  corrugated:  "/images/corrugated_box.png",
  folding:     "/images/folding_carton.png",
  rigid:       "/images/rigid_box.png",
  cosmetic:    "/images/cosmetic_box.png",
  placeholder: "/images/placeholder_packaging.png",
  hero:        "/images/hero_packaging.png",
};

/* ═══════════════════════════════════════════════════════
   MATERIAL TAXONOMY
═══════════════════════════════════════════════════════ */
const RAW_MATERIAL_TAXONOMY: ProductCategory[] = [
  {
    slug: "cardboard",
    name: "Cardboard Packaging",
    headline: "Cardboard Boxes & Smooth Paper Packaging",
    desc: "Lightweight and versatile cardboard — the most popular option for products sold in retail stores. Perfect for printing vibrant colors and creating custom shapes.",
    badge: "Cardboard & Paper",
    img: IMG.folding,
    subcategories: [
      { slug: "window-boxes",         name: "Window Boxes",              desc: "Product boxes with clear window cutouts so customers can see what is inside.",    img: IMG.folding, badge: "Popular" },
      { slug: "tuck-end-cartons",     name: "Tuck-End Cartons",          desc: "Standard retail product boxes where the flaps fold closed easily.",         img: IMG.folding, badge: "Best Seller" },
      { slug: "auto-bottom-cartons",  name: "Auto-Bottom Cartons",       desc: "Quick-assembly boxes with a pre-glued bottom that snaps open instantly.",           img: IMG.folding },
      { slug: "sleeve-cartons",       name: "Sleeve Cartons",            desc: "Custom paper sleeves that slide over boxes or product bundles.",   img: IMG.custom },
      { slug: "dispenser-boxes",      name: "Dispenser Boxes",           desc: "Dispenser boxes with a tear-open front for easy access on store counters.",        img: IMG.folding },
      { slug: "seal-end-cartons",     name: "Seal-End Cartons",          desc: "Glued sealed-end cartons for blister packs, pharmaceuticals, and food-grade runs.",   img: IMG.folding },
    ],
  },
  {
    slug: "corrugated",
    name: "Corrugated Packaging",
    headline: "Sturdy Cardboard Shipping Boxes",
    desc: "Thick, layered fluted cardboard built to handle shipping. Perfect for e-commerce mailers, online shop shipments, and moving heavy items safely.",
    badge: "Shipping Boxes",
    img: IMG.corrugated,
    subcategories: [
      { slug: "rsc-cartons",          name: "RSC Shipping Cartons",      desc: "Standard shipping boxes with center-meeting flaps for quick and easy taping.", img: IMG.corrugated, badge: "Best Seller" },
      { slug: "die-cut-corrugated",   name: "Die-Cut Corrugated",        desc: "Custom-cut cardboard boxes and retail displays built to your design.",    img: IMG.corrugated, badge: "Popular" },
      { slug: "double-wall",          name: "Double-Wall Cartons",       desc: "Double-thick cardboard shipping boxes for maximum protection of heavy goods.",      img: IMG.corrugated },
      { slug: "e-flute-mailers",      name: "E-Flute Mailer Boxes",      desc: "Sturdy, lightweight shipping boxes designed for e-commerce and subscription kits.",    img: IMG.mailer },
      { slug: "display-shippers",     name: "Retail Display Shippers",   desc: "Bulk shipping boxes that tear open easily to convert into store product displays.",   img: IMG.corrugated },
    ],
  },
  {
    slug: "rigid",
    name: "Rigid Board Packaging",
    headline: "Luxury Rigid Gift Boxes",
    desc: "Extra-thick cardboard boxes that don't bend or collapse. Sized for luxury items, tech accessories, and corporate gifts with premium magnetic lids.",
    badge: "Luxury Rigid Board",
    img: IMG.rigid,
    subcategories: [
      { slug: "telescope-boxes",      name: "Telescope Setup Boxes",     desc: "Luxury two-piece boxes with a separate lid and base that slide open smoothly.",         img: IMG.rigid, badge: "Best Seller" },
      { slug: "magnetic-lid-boxes",   name: "Magnetic Lid Boxes",        desc: "Premium gift boxes with hidden magnets in the lid for a satisfying snap closure.",     img: IMG.rigid, badge: "Popular" },
      { slug: "clamshell-boxes",      name: "Clamshell Rigid Boxes",     desc: "Hinged presentation boxes with attached lids and soft ribbon pull-tabs.",          img: IMG.rigid },
      { slug: "book-style-boxes",     name: "Book-Style Rigid Boxes",    desc: "Presentation boxes that open from the side like a hardcover book.",  img: IMG.rigid },
      { slug: "shoulder-boxes",       name: "Shoulder Neck Boxes",       desc: "Three-piece gift boxes with a decorative inner neck or shoulder.",         img: IMG.rigid },
    ],
  },
  {
    slug: "kraft",
    name: "Kraft Packaging",
    headline: "Natural Brown Kraft Boxes & Eco Packaging",
    desc: "Natural, unbleached brown paper made from 100% recycled fibers. Gives your packaging a rustic, organic look while keeping it fully biodegradable.",
    badge: "Eco Kraft",
    img: IMG.custom,
    subcategories: [
      { slug: "kraft-mailer-boxes",   name: "Kraft Mailer Boxes",        desc: "Natural brown e-commerce shipping boxes with optional custom printing.",      img: IMG.mailer, badge: "Best Seller" },
      { slug: "kraft-folding-cartons",name: "Kraft Folding Cartons",     desc: "Eco-friendly folding boxes made from FSC-certified natural brown paper.",    img: IMG.custom, badge: "Popular" },
      { slug: "kraft-gift-bags",      name: "Kraft Gift Bags",           desc: "Natural paper shopping bags with twisted handles for boutiques and markets.",          img: IMG.placeholder },
      { slug: "kraft-sleeves",        name: "Kraft Sleeve Wraps",        desc: "Brown paper sleeves that slide over handmade soaps, candles, or bundles.",                  img: IMG.custom },
      { slug: "kraft-shipping-boxes", name: "Kraft Shipping Boxes",      desc: "Eco-friendly natural brown shipping boxes for shipping online orders.",     img: IMG.corrugated },
    ],
  },
  {
    slug: "tin-packaging",
    name: "Tin Packaging",
    headline: "Custom Tin Boxes & Metal Packaging",
    desc: "Premium metal tinplate packaging. Highly durable, reusable, and fully recyclable. Ideal for biscuits, chocolates, tea, and premium product gifts.",
    badge: "Metal Tinplate",
    img: IMG.placeholder,
    subcategories: [
      { slug: "round-tin-boxes",      name: "Round Tin Boxes",           desc: "Circular metal tins with lids for cookies, tea leaves, and premium candles.",    img: IMG.placeholder, badge: "Best Seller" },
      { slug: "rectangular-tins",     name: "Rectangular Tin Boxes",     desc: "Flat rectangular metal boxes, ideal for chocolate bars and retail gifts.",   img: IMG.placeholder, badge: "Popular" },
      { slug: "tin-gift-sets",        name: "Tin Gift Sets",             desc: "Matching tin sets with secure lids for premium corporate and holiday gifts.",          img: IMG.placeholder },
      { slug: "hinged-tin-boxes",     name: "Hinged Lid Tin Boxes",      desc: "Metal tins with attached hinged lids for creative gifts and collectables.",         img: IMG.placeholder },
    ],
  },
  {
    slug: "poly-bags",
    name: "Poly Bags & Flexible Packaging",
    headline: "Lightweight Shipping Bags & Pouches",
    desc: "Tear-resistant, lightweight plastic bags and pouches. Perfect for clothing, flat items, or shipping online orders quickly and cheaply.",
    badge: "Flexible Poly",
    img: IMG.placeholder,
    subcategories: [
      { slug: "poly-mailer-bags",     name: "Poly Mailer Bags",          desc: "Waterproof, lightweight shipping bags for clothing and soft retail items.",   img: IMG.placeholder, badge: "Best Seller" },
      { slug: "zip-lock-bags",        name: "Zip-Lock Poly Bags",        desc: "Reclosable clear bags for storing, sorting, or retail display.",             img: IMG.placeholder, badge: "Popular" },
      { slug: "header-card-bags",     name: "Header Card Poly Bags",     desc: "Poly bags with a card insert at the top for hanging on store racks.",               img: IMG.placeholder },
      { slug: "mylar-stand-up-pouches", name: "Mylar Stand-Up Pouches", desc: "Airtight stand-up foil pouches for coffee, food, and wellness products.",   img: IMG.placeholder },
    ],
  },
  {
    slug: "cosmetic-jars",
    name: "Cosmetic Jars & Containers",
    headline: "Glass Jars & Beauty Bottles",
    desc: "Premium glass and acrylic jars and bottles for beauty formulas. Custom color coatings and clear labels for creams, oils, and skincare.",
    badge: "Beauty Containers",
    img: IMG.cosmetic,
    subcategories: [
      { slug: "cream-jars",           name: "Cream & Serum Jars",        desc: "Wide-mouth jars for face creams, body lotions, and skincare serums.",         img: IMG.cosmetic, badge: "Best Seller" },
      { slug: "dropper-bottles",      name: "Dropper Bottles",           desc: "Glass dropper bottles, perfect for essential oils, facial oils, and CBD oils.",           img: IMG.cosmetic, badge: "Popular" },
      { slug: "pump-dispensers",      name: "Pump Dispenser Bottles",    desc: "Pump bottles for lotions, liquid foundation, and high-end skincare serums.",   img: IMG.cosmetic },
      { slug: "lipstick-tubes",       name: "Lipstick & Lip Gloss Tubes", desc: "Classic custom-branded tubes for lipsticks, lip balms, and lip glosses.",      img: IMG.cosmetic },
    ],
  },
];

/* ═══════════════════════════════════════════════════════
   STYLE TAXONOMY
═══════════════════════════════════════════════════════ */
const RAW_STYLE_TAXONOMY: ProductCategory[] = [
  {
    slug: "tuck-boxes",
    name: "Tuck Boxes",
    headline: "Tuck Boxes & Custom Product Boxes",
    desc: "Popular packaging choice for products sold in stores. Easy to fold, closes securely at the top and bottom, and works great for custom printing.",
    badge: "Product Cartons",
    img: IMG.folding,
    subcategories: [
      { slug: "straight-tuck",        name: "Straight Tuck Cartons",     desc: "Classic product box where the top and bottom flaps close in the same direction.",  img: IMG.folding, badge: "Best Seller" },
      { slug: "reverse-tuck",         name: "Reverse Tuck Cartons",      desc: "Sturdy retail boxes where the top and bottom flaps close in opposite directions.",             img: IMG.folding, badge: "Popular" },
      { slug: "tuck-with-window",     name: "Tuck Box with Window",      desc: "Product box with a clear plastic window so customers can see what is inside.",       img: IMG.folding },
      { slug: "auto-bottom-tuck",     name: "Auto-Bottom Tuck",          desc: "Quick-assembly boxes with a pre-glued bottom that snaps open instantly.",        img: IMG.folding },
    ],
  },
  {
    slug: "display-boxes",
    name: "Display Boxes",
    headline: "Counter Display Boxes & Trays",
    desc: "Custom product trays and display boxes designed to sit on counter-tops. Perfect for getting attention at store checkout counters.",
    badge: "Store Displays",
    img: IMG.folding,
    subcategories: [
      { slug: "counter-display-trays",name: "Counter Display Trays",     desc: "Retail counter trays with fold-out signboards to attract customers at checkout.",     img: IMG.folding, badge: "Best Seller" },
      { slug: "floor-display-units",  name: "Floor Display Units",       desc: "Free-standing cardboard display racks for displaying products in store aisles.",       img: IMG.corrugated, badge: "Popular" },
      { slug: "side-kick-displays",   name: "Side-Kick Displays",        desc: "Hanging display boxes that easily hook onto store shelves.",             img: IMG.folding },
      { slug: "spinner-displays",     name: "Spinner Displays",          desc: "Rotating product stands, great for cards, stickers, and small items.",        img: IMG.placeholder },
    ],
  },
  {
    slug: "mailer-boxes",
    name: "Mailer Boxes",
    headline: "Mailing Boxes & E-Commerce Packaging",
    desc: "Strong, self-locking shipping boxes built for mailing online orders and subscription kits. Keeps your products safe and looks premium.",
    badge: "Shipping Boxes",
    img: IMG.mailer,
    subcategories: [
      { slug: "rett-mailer",          name: "RETT Mailer Boxes",         desc: "Classic shipping box with double-layer sides that lock securely in place.",    img: IMG.mailer, badge: "Best Seller" },
      { slug: "peel-seal-mailer",     name: "Peel & Seal Mailers",       desc: "Easy-close shipping boxes with adhesive tape strips and easy tear strips.",         img: IMG.mailer, badge: "Popular" },
      { slug: "subscription-mailer",  name: "Subscription Box Mailers",  desc: "Custom printed shipping boxes with colorful designs inside and outside.",                img: IMG.mailer },
      { slug: "rigid-mailer-envelope",name: "Rigid Mailer Envelopes",     desc: "Thick, flat paperboard envelopes that prevent prints and photos from bending.",             img: IMG.placeholder },
    ],
  },
  {
    slug: "gable-boxes",
    name: "Gable Boxes",
    headline: "Gable Boxes & Carry-Handle Packaging",
    desc: "Fun, unique boxes with built-in carry handles. A great choice for bakery items, takeout meals, gifts, and event party favors.",
    badge: "Handle Boxes",
    img: IMG.folding,
    subcategories: [
      { slug: "food-gable-boxes",     name: "Food Gable Boxes",          desc: "Food-safe boxes with carry handles, perfect for donuts, cupcakes, and takeout.",  img: IMG.folding, badge: "Best Seller" },
      { slug: "gift-gable-boxes",     name: "Gift Gable Boxes",          desc: "Custom printed gift boxes with built-in handles, perfect for events.",               img: IMG.folding, badge: "Popular" },
      { slug: "kraft-gable-boxes",    name: "Kraft Gable Boxes",         desc: "Natural brown paper boxes with handles, giving a rustic and eco-friendly look.",   img: IMG.custom },
    ],
  },
  {
    slug: "pillow-boxes",
    name: "Pillow Boxes",
    headline: "Pillow Boxes & Gift Packaging",
    desc: "Curved boxes that resemble a pillow when folded. An elegant, budget-friendly choice for packaging small items, jewelry, and party favors.",
    badge: "Unique Shapes",
    img: IMG.custom,
    subcategories: [
      { slug: "jewelry-pillow-boxes", name: "Jewelry Pillow Boxes",      desc: "Small curved boxes, perfect for rings, earrings, and delicate jewelry gifts.",       img: IMG.custom, badge: "Best Seller" },
      { slug: "foil-pillow-boxes",    name: "Foil Board Pillow Boxes",   desc: "Shiny metallic curved boxes for high-end retail gifts and special events.", img: IMG.custom, badge: "Popular" },
      { slug: "kraft-pillow-boxes",   name: "Kraft Pillow Boxes",        desc: "Natural brown paper curved boxes, perfect for organic soap or retail items.",       img: IMG.custom },
    ],
  },
  {
    slug: "round-boxes",
    name: "Round Boxes",
    headline: "Round Gift Boxes & Tube Packaging",
    desc: "Circular gift boxes and round cardboard tubes. Popular for packaging candles, flowers, wine bottles, and luxury retail gift sets.",
    badge: "Round Packaging",
    img: IMG.rigid,
    subcategories: [
      { slug: "hat-cylinder-boxes",   name: "Hat & Cylinder Gift Boxes", desc: "Large circular gift boxes with lids, perfect for hats, flowers, and luxury gifts.",    img: IMG.rigid, badge: "Best Seller" },
      { slug: "paper-tube-packaging", name: "Paper Tube Packaging",      desc: "Round cardboard tubes for rolled posters, custom candles, and wine bottles.",   img: IMG.placeholder, badge: "Popular" },
      { slug: "candle-cylinder-boxes",name: "Candle Cylinder Boxes",     desc: "Round rigid cylinder boxes designed to fit custom glass jar candles.",  img: IMG.custom },
    ],
  },
  {
    slug: "window-packaging",
    name: "Window Packaging",
    headline: "Window Boxes & Clear Display Boxes",
    desc: "Retail boxes with built-in clear plastic windows. Helps customers see the actual product inside, which helps increase store sales.",
    badge: "Clear Windows",
    img: IMG.folding,
    subcategories: [
      { slug: "front-window-cartons", name: "Front Window Cartons",      desc: "Folding product boxes with a clear front window for easy viewing on shelves.", img: IMG.folding, badge: "Best Seller" },
      { slug: "acetate-gift-boxes",   name: "Acetate Gift Boxes",        desc: "Sturdy gift boxes with completely clear lids for full product visibility.",        img: IMG.rigid, badge: "Popular" },
      { slug: "clear-lid-boxes",      name: "Clear Lid Boxes",           desc: "Cardboard bottom box with a slide-on clear plastic lid to show off contents.", img: IMG.custom },
    ],
  },
  {
    slug: "trays-sleeves",
    name: "Trays & Sleeves",
    headline: "Slide-Drawer Tray & Sleeve Boxes",
    desc: "Elegant slide-out trays wrapped in custom sleeves. Perfect for creating a premium unboxing experience for cosmetics and tech items.",
    badge: "Slide-Open Boxes",
    img: IMG.rigid,
    subcategories: [
      { slug: "rigid-tray-sleeve",    name: "Rigid Tray & Sleeve",       desc: "Slide-drawer gift boxes with velvet linings and custom sleeves.",  img: IMG.rigid, badge: "Best Seller" },
      { slug: "sbs-tray-sleeve",      name: "SBS Tray & Sleeve Sets",    desc: "Lightweight sliding paperboard boxes for everyday retail items.",       img: IMG.folding, badge: "Popular" },
      { slug: "kraft-tray-sleeve",    name: "Kraft Tray & Sleeve",       desc: "Eco-friendly natural brown paper drawer boxes with custom logo prints.",       img: IMG.custom },
    ],
  },
  {
    slug: "tube-packaging",
    name: "Tube Packaging",
    headline: "Cardboard Mailing Tubes & Canisters",
    desc: "Strong round paper tubes. Ideal for shipping rolled posters and art, or packaging gourmet food, cosmetics, and wine bottles.",
    badge: "Mailing Tubes",
    img: IMG.placeholder,
    subcategories: [
      { slug: "wine-tubes",           name: "Wine & Spirit Tubes",       desc: "Elegant round gift tubes designed to fit wine and liquor bottles.",    img: IMG.placeholder, badge: "Best Seller" },
      { slug: "supplement-tubes",     name: "Supplement & Powder Tubes", desc: "Eco-friendly round canisters with shaker tops or secure lids for powders.",      img: IMG.placeholder, badge: "Popular" },
      { slug: "cosmetic-tubes",       name: "Cosmetic Cylinder Tubes",   desc: "Round paperboard tubes for packaging lip balms, body scrubs, and gifts.",    img: IMG.placeholder },
    ],
  },
  {
    slug: "labels-stickers",
    name: "Labels & Stickers",
    headline: "Product Labels & Custom Stickers",
    desc: "Custom printed roll labels and stickers in any size or shape. Perfect for branding unprinted boxes, bottles, bags, and jars.",
    badge: "Custom Stickers",
    img: IMG.placeholder,
    subcategories: [
      { slug: "product-labels",       name: "Product Labels",            desc: "Custom cut-to-size sticky labels for jar lids, cosmetic jars, and boxes.",         img: IMG.placeholder, badge: "Best Seller" },
      { slug: "foil-labels",          name: "Foil & Metallic Labels",    desc: "Shiny gold and silver foil labels to give your products a high-end look.",  img: IMG.placeholder, badge: "Popular" },
      { slug: "tamper-evident-seals", name: "Tamper-Evident Seals",      desc: "Safety seal stickers that break when opened to ensure product safety.",   img: IMG.placeholder },
      { slug: "hang-tags",            name: "Custom Hang Tags",          desc: "Custom printed tags with string holes, perfect for clothing and retail items.",  img: IMG.placeholder },
    ],
  },
  {
    slug: "paper-bags",
    name: "Paper Bags",
    headline: "Paper Shopping Bags & Gift Bags",
    desc: "Eco-friendly paper bags with comfortable handles. Available in natural brown paper or colorful designs, perfect for boutique shops.",
    badge: "Paper Shopping Bags",
    img: IMG.placeholder,
    subcategories: [
      { slug: "luxury-shopping-bags", name: "Luxury Shopping Bags",      desc: "Thick paper bags with elegant handles for high-end boutique stores.",   img: IMG.placeholder, badge: "Best Seller" },
      { slug: "kraft-shopping-bags",  name: "Kraft Paper Bags",          desc: "Eco-friendly natural brown paper bags with twisted paper handles.",        img: IMG.placeholder, badge: "Popular" },
      { slug: "flat-handle-bags",     name: "Flat Handle Paper Bags",    desc: "Budget-friendly paper bags with flat fold-down handles, perfect for takeout.",               img: IMG.placeholder },
    ],
  },
  {
    slug: "tote-bags",
    name: "Tote Bags",
    headline: "Custom Tote Bags & Reusable Bags",
    desc: "Reusable fabric and canvas tote bags printed with your custom logo. Great for retail sales, events, and trade shows.",
    badge: "Reusable Bags",
    img: IMG.placeholder,
    subcategories: [
      { slug: "canvas-tote-bags",     name: "Canvas Tote Bags",          desc: "Heavy-duty canvas shopping bags printed with your custom logo design.",          img: IMG.placeholder, badge: "Best Seller" },
      { slug: "non-woven-totes",      name: "Non-Woven PP Tote Bags",    desc: "Budget-friendly reusable shopping bags, great for events and trade shows.",           img: IMG.placeholder, badge: "Popular" },
      { slug: "cotton-string-bags",   name: "Cotton String Bags",        desc: "Eco-friendly cotton mesh bags for grocery shops and organic stores.",           img: IMG.placeholder },
    ],
  },
  {
    slug: "mylar-bags",
    name: "Mylar Bags",
    headline: "Airtight Mylar Bags & Stand-Up Pouches",
    desc: "Airtight foil bags that lock in freshness and protect contents from air, moisture, and light. Sized for coffee, snacks, and herbs.",
    badge: "Stand-Up Pouches",
    img: IMG.placeholder,
    subcategories: [
      { slug: "stand-up-mylar-pouches", name: "Stand-Up Mylar Pouches", desc: "Stand-up pouches with a bottom expander and resealable zip-lock closure.",   img: IMG.placeholder, badge: "Best Seller" },
      { slug: "flat-mylar-bags",      name: "Flat Mylar Bags",          desc: "Flat airtight packets, ideal for coffee pouches and single-use packets.",           img: IMG.placeholder, badge: "Popular" },
      { slug: "child-resistant-mylar",name: "Child-Resistant Mylar Bags", desc: "Safety-lock zip pouches designed to meet child-resistant compliance specs.",    img: IMG.placeholder },
    ],
  },
  {
    slug: "spouted-pouches",
    name: "Spouted Pouches",
    headline: "Spouted Pouches & Liquid Packaging",
    desc: "Flexible pouches with built-in pour spouts and twist caps. Perfect for liquids, juices, syrups, baby foods, and lotions.",
    badge: "Liquid Pouches",
    img: IMG.placeholder,
    subcategories: [
      { slug: "beverage-spouted-pouches", name: "Beverage Spouted Pouches", desc: "Stand-up drink pouches with twist caps for juices and health beverages.",        img: IMG.placeholder, badge: "Best Seller" },
      { slug: "baby-food-pouches",    name: "Baby Food Pouches",         desc: "Safe, chemical-free food pouches with child-safe round twist caps.",               img: IMG.placeholder, badge: "Popular" },
      { slug: "sauce-pouches",        name: "Sauce & Condiment Pouches", desc: "Flexible spouted pouches for refillable sauces, salad dressings, and oils.",       img: IMG.placeholder },
    ],
  },
  {
    slug: "wrapping-paper",
    name: "Wrapping Paper & Tissue",
    headline: "Custom Tissue Paper & Wrapping Sheets",
    desc: "Custom printed tissue paper and gift wrapping paper. Elevates the unboxing experience when wrapping clothing or lining shipping boxes.",
    badge: "Branded Tissue Paper",
    img: IMG.placeholder,
    subcategories: [
      { slug: "branded-tissue-paper", name: "Branded Tissue Paper",      desc: "Soft tissue paper printed with your custom repeating logo design.",        img: IMG.placeholder, badge: "Best Seller" },
      { slug: "gift-wrapping-sheets", name: "Gift Wrapping Sheets",      desc: "Premium glossy wrapping sheets printed with custom patterns for holidays.",      img: IMG.placeholder, badge: "Popular" },
      { slug: "honeycomb-wrapping",   name: "Honeycomb Protective Wrap", desc: "Eco-friendly expandable brown paper wrap that cushions delicate items.",    img: IMG.placeholder },
    ],
  },
  {
    slug: "favor-boxes",
    name: "Favor Boxes",
    headline: "Favor Boxes & Event Gift Packaging",
    desc: "Small custom gift boxes for weddings, corporate parties, and events. Choose from classic pillow, pyramid, or handle designs.",
    badge: "Party Favors",
    img: IMG.custom,
    subcategories: [
      { slug: "wedding-favor-boxes",  name: "Wedding Favor Boxes",       desc: "Elegant small gift boxes with ribbon closures or lock tabs for favors.",          img: IMG.custom, badge: "Best Seller" },
      { slug: "pyramid-favor-boxes",  name: "Pyramid Favor Boxes",       desc: "Unique pyramid-shaped boxes for gourmet chocolates and event gifts.",      img: IMG.custom, badge: "Popular" },
      { slug: "custom-event-boxes",   name: "Custom Event Boxes",        desc: "Custom designed favor boxes built specifically for your event theme.",   img: IMG.custom },
    ],
  },
];

/* ═══════════════════════════════════════════════════════
   INDUSTRY TAXONOMY
═══════════════════════════════════════════════════════ */
const RAW_INDUSTRY_TAXONOMY: ProductCategory[] = [
  {
    slug: "apparel",
    name: "Apparel Boxes",
    headline: "Apparel Boxes & Garment Packaging",
    desc: "Retail garment packaging, tissue-lined folding cartons, and branded presentation boxes for fashion brands across all market tiers.",
    badge: "Fashion & Apparel",
    img: IMG.custom,
    subcategories: [
      { slug: "shirt-boxes",          name: "Shirt Boxes",               desc: "Flat-pack folding cartons with tissue liner for dress shirts, knitwear, and tees.",    img: IMG.custom, badge: "Best Seller" },
      { slug: "jeans-packaging",      name: "Jeans & Denim Packaging",   desc: "Sturdy folding cartons and mailer boxes sized for folded jeans and denim products.",   img: IMG.custom, badge: "Popular" },
      { slug: "shoe-boxes",           name: "Shoe Boxes",                desc: "Corrugated shoeboxes with thumb-slot lids and full-colour print for footwear brands.", img: IMG.corrugated },
      { slug: "tie-boxes",            name: "Tie & Accessory Boxes",     desc: "Slim rigid or folding cartons for ties, belts, scarves, and fashion accessories.",      img: IMG.rigid },
      { slug: "lingerie-boxes",       name: "Lingerie & Intimates",      desc: "Luxury rigid or folding carton with tissue and ribbon for premium lingerie brands.",    img: IMG.custom },
      { slug: "boutique-bags",        name: "Boutique Gift Bags",        desc: "Laminated paper bags with twisted rope handles for boutique and fashion retail.",        img: IMG.placeholder },
      { slug: "garment-mailer-boxes", name: "Garment Mailer Boxes",      desc: "E-flute mailer boxes with interior print for direct-to-consumer clothing brands.",     img: IMG.mailer },
      { slug: "hat-boxes",            name: "Hat & Cap Boxes",           desc: "Round rigid cylinder or square carton for hats, beanies, and caps.",                   img: IMG.rigid },
    ],
  },
  {
    slug: "auto-parts",
    name: "Auto Parts Packaging",
    headline: "Auto Parts Packaging & Automotive Boxes",
    desc: "Heavy-duty corrugated cartons and foam-lined boxes engineered for automotive components, engine parts, and industrial hardware.",
    badge: "Automotive",
    img: IMG.corrugated,
    subcategories: [
      { slug: "engine-parts-boxes",   name: "Engine Parts Boxes",        desc: "Double-wall corrugated boxes with foam inserts for sensitive engine components.",       img: IMG.corrugated, badge: "Best Seller" },
      { slug: "brake-parts-boxes",    name: "Brake & Suspension Boxes",  desc: "Heavy ECT-rated corrugated cartons for brake pads, discs, and suspension parts.",     img: IMG.corrugated, badge: "Popular" },
      { slug: "filter-packaging",     name: "Filter Packaging",          desc: "Cylindrical or rectangular cartons for oil, air, and cabin filter products.",           img: IMG.folding },
      { slug: "battery-boxes",        name: "Battery Packaging",         desc: "Hazmat-compatible corrugated boxes for automotive and industrial batteries.",            img: IMG.corrugated },
      { slug: "accessory-retail-boxes", name: "Auto Accessory Retail Boxes", desc: "Retail folding cartons for wiper blades, bulbs, and consumer auto accessories.", img: IMG.folding },
      { slug: "fluid-bottle-shippers", name: "Fluid & Oil Bottle Shippers", desc: "Cell-divider corrugated shippers for oil, coolant, and automotive fluid bottles.", img: IMG.corrugated },
    ],
  },
  {
    slug: "bottle",
    name: "Bottle Packaging",
    headline: "Bottle Packaging & Glass Bottle Boxes",
    desc: "Custom inserts, cell dividers, and outer cartons designed to protect glass and plastic bottles during shipping and retail display.",
    badge: "Bottle Protection",
    img: IMG.corrugated,
    subcategories: [
      { slug: "wine-bottle-boxes",    name: "Wine Bottle Boxes",         desc: "Single and multi-bottle corrugated boxes with cell dividers for wine bottle protection.", img: IMG.corrugated, badge: "Best Seller" },
      { slug: "spirits-gift-boxes",   name: "Spirits Gift Boxes",        desc: "Rigid setup boxes and SBS cartons with window for premium spirits and whisky gifting.", img: IMG.rigid, badge: "Popular" },
      { slug: "perfume-bottle-boxes", name: "Perfume Bottle Boxes",      desc: "Slim rigid or SBS carton with foam insert sized for fragrance and perfume bottles.",   img: IMG.cosmetic },
      { slug: "olive-oil-packaging",  name: "Olive Oil Packaging",       desc: "Folding cartons and corrugated shippers for tall glass olive oil and condiment bottles.", img: IMG.folding },
      { slug: "sauce-bottle-boxes",   name: "Hot Sauce & Condiment",     desc: "Retail cartons and corrugated shippers for sauce, dressing, and condiment bottles.",  img: IMG.folding },
      { slug: "dropper-bottle-boxes", name: "Dropper Bottle Cartons",    desc: "Precision-fit tuck cartons for 15–100ml glass dropper bottles.",                        img: IMG.custom },
    ],
  },
  {
    slug: "candle",
    name: "Candle Boxes",
    headline: "Candle Boxes & Candle Packaging",
    desc: "Premium rigid setup boxes and folding cartons for luxury candle brands. Window options, embossing, and foil stamping to showcase candles on retail shelves.",
    badge: "Candle & Home",
    img: IMG.rigid,
    subcategories: [
      { slug: "jar-candle-boxes",     name: "Jar Candle Boxes",          desc: "Square or round folding cartons sized for glass jar candles with window lid option.",   img: IMG.folding, badge: "Best Seller" },
      { slug: "pillar-candle-boxes",  name: "Pillar Candle Boxes",       desc: "Tall rectangular or cylinder cartons for pillar candles and taper candle bundles.",     img: IMG.custom, badge: "Popular" },
      { slug: "luxury-candle-boxes",  name: "Luxury Rigid Candle Boxes", desc: "Two-piece rigid setup boxes with ribbon lift for premium candle brand gifting.",        img: IMG.rigid },
      { slug: "tealight-packaging",   name: "Tealight & Votive Boxes",   desc: "Multi-cavity retail cartons and display trays for tealight and votive candle sets.",   img: IMG.folding },
      { slug: "candle-gift-sets",     name: "Candle Gift Sets",          desc: "Multi-candle rigid hamper boxes with foam compartments and decorative tissue wrap.",    img: IMG.rigid },
      { slug: "candle-cylinder-boxes-ind", name: "Cylinder Candle Boxes", desc: "Round spiral-wound tube packaging for pillar and jar candle retail and gifting.",     img: IMG.placeholder },
    ],
  },
  {
    slug: "cbd",
    name: "CBD Packaging",
    headline: "CBD Packaging & Hemp Product Boxes",
    desc: "Compliant, child-resistant retail cartons for CBD oils, tinctures, gummies, topicals, and other hemp-derived wellness products.",
    badge: "Compliance Ready",
    img: IMG.custom,
    subcategories: [
      { slug: "cbd-oil-boxes",        name: "CBD Oil & Tincture Boxes",  desc: "Slim tuck-end carton sized for 15–100ml CBD oil dropper bottle retail launch.",        img: IMG.custom, badge: "Best Seller" },
      { slug: "cbd-gummy-boxes",      name: "CBD Gummy & Edible Boxes",  desc: "Child-resistant folding carton or stand-up pouch for CBD gummies and edibles.",         img: IMG.folding, badge: "Popular" },
      { slug: "cbd-cream-boxes",      name: "CBD Cream & Topical Boxes", desc: "Retail SBS cartons for CBD balms, lotions, body creams, and topical products.",         img: IMG.cosmetic },
      { slug: "cbd-vape-boxes",       name: "CBD Vape Cartridge Boxes",  desc: "Precision slide-drawer or tuck carton for 510-thread CBD vape cartridges and pens.",   img: IMG.custom },
      { slug: "cbd-softgel-boxes",    name: "CBD Softgel & Capsule Boxes", desc: "Child-resistant retail cartons for CBD capsules and softgel supplement products.",    img: IMG.placeholder },
      { slug: "cbd-bundle-boxes",     name: "CBD Bundle & Kit Boxes",    desc: "Rigid setup gift boxes for CBD wellness bundles with multiple product compartments.",   img: IMG.rigid },
    ],
  },
  {
    slug: "chocolate",
    name: "Chocolate Boxes",
    headline: "Chocolate Boxes & Confectionery Packaging",
    desc: "Luxury gift trays with custom cell dividers and foil-stamped lids for premium chocolate brands. Window options and ribbon lifts for elegant gifting.",
    badge: "Confectionery",
    img: IMG.rigid,
    subcategories: [
      { slug: "slide-chocolate-boxes",  name: "Slide Chocolate Boxes",   desc: "Slide-drawer rigid boxes with velvet insert trays for premium chocolate collections.", img: IMG.rigid, badge: "Best Seller" },
      { slug: "truffle-boxes",          name: "Truffle Boxes",           desc: "Custom cavity-insert boxes sized precisely for individual truffle and praline pieces.",  img: IMG.rigid, badge: "Popular" },
      { slug: "window-chocolate-boxes", name: "Window Chocolate Boxes",  desc: "Folding cartons with die-cut PET window for visible chocolate product display.",         img: IMG.folding },
      { slug: "luxury-chocolate-boxes", name: "Luxury Chocolate Boxes",  desc: "Rigid two-piece boxes with magnetic lid and foil stamp for premium gifting occasions.", img: IMG.rigid },
      { slug: "gift-chocolate-boxes",   name: "Gift Chocolate Boxes",    desc: "Ribbon-lift rigid setup boxes with custom dividers for holiday chocolate gift sets.",   img: IMG.rigid },
      { slug: "sleeve-chocolate-boxes", name: "Chocolate Sleeve Boxes",  desc: "Decorative printed sleeve with inner tray for multi-piece chocolate bar packaging.",    img: IMG.custom },
      { slug: "display-chocolate-boxes",name: "Chocolate Display Boxes", desc: "Counter display trays and shelf-ready cartons for retail chocolate merchandising.",     img: IMG.folding },
    ],
  },
  {
    slug: "christmas",
    name: "Christmas Packaging",
    headline: "Christmas Packaging & Holiday Gift Boxes",
    desc: "Festive holiday gift sets, seasonal mailer boxes, and custom printed Christmas packaging for retail, corporate gifting, and seasonal product launches.",
    badge: "Holiday & Seasonal",
    img: IMG.rigid,
    subcategories: [
      { slug: "christmas-gift-boxes",  name: "Christmas Gift Boxes",     desc: "Rigid or SBS folding cartons with festive print and ribbon for holiday gifting.",       img: IMG.rigid, badge: "Best Seller" },
      { slug: "christmas-hamper-boxes",name: "Christmas Hamper Boxes",   desc: "Large open rigid tray boxes with dividers for festive food and gift hamper sets.",      img: IMG.rigid, badge: "Popular" },
      { slug: "advent-calendar-boxes", name: "Advent Calendar Boxes",    desc: "24-window die-cut rigid advent calendar boxes with individual cavity closures.",        img: IMG.custom },
      { slug: "christmas-mailer-boxes",name: "Christmas Mailer Boxes",   desc: "Branded DTC mailer boxes with full festive interior print for seasonal shipping.",      img: IMG.mailer },
      { slug: "holiday-favor-boxes",   name: "Holiday Favor Boxes",      desc: "Small die-cut favor cartons and pillow boxes for Christmas party and event favours.",  img: IMG.custom },
      { slug: "christmas-cracker-boxes",name:"Christmas Cracker Boxes",  desc: "Retail-shelf crackers and novelty packaging with traditional pull-cracker structure.",  img: IMG.folding },
    ],
  },
  {
    slug: "cigarette",
    name: "Cigarette Boxes",
    headline: "Cigarette Boxes & Tobacco Packaging",
    desc: "Precision-tolerance sliding drawer and flip-top boxes for tobacco, cigarette, and cigar products. Foil lamination, embossing, and regulatory compliance panels.",
    badge: "Tobacco Packaging",
    img: IMG.custom,
    subcategories: [
      { slug: "slide-cigarette-boxes", name: "Slide Drawer Cigarette Boxes", desc: "Classic slide-and-shell cigarette boxes with foil lining and magnetic closure.",    img: IMG.custom, badge: "Best Seller" },
      { slug: "flip-top-boxes",        name: "Flip-Top Hard Cases",      desc: "Hinged flip-top rigid cartons with inner foil liner for cigarette retail packaging.",   img: IMG.custom, badge: "Popular" },
      { slug: "cigar-boxes",           name: "Cigar Boxes & Humidors",   desc: "Wooden-veneer and rigid board cigar boxes with humidor lining for premium cigars.",    img: IMG.rigid },
      { slug: "pre-roll-boxes-cig",    name: "Pre-Roll & Cone Boxes",    desc: "Compact drawer boxes and cone tube packaging for pre-roll cigarettes.",                img: IMG.custom },
      { slug: "tobacco-pouch-boxes",   name: "Tobacco Pouch Boxes",      desc: "Retail cartons and outer shippers for loose tobacco and rolling tobacco pouches.",      img: IMG.folding },
    ],
  },
  {
    slug: "coffee",
    name: "Coffee Packaging",
    headline: "Coffee Packaging & Specialty Coffee Boxes",
    desc: "Subscription boxes, retail cartons, and protective shipper cases for specialty coffee brands. Stand-up barrier pouches, canister boxes, and branded kraft mailers.",
    badge: "Specialty Coffee",
    img: IMG.custom,
    subcategories: [
      { slug: "coffee-bag-boxes",      name: "Coffee Bag Retail Cartons", desc: "SBS folding cartons housing 250g–1kg coffee bags for supermarket shelf retail.",      img: IMG.folding, badge: "Best Seller" },
      { slug: "coffee-canister-boxes", name: "Coffee Canister Boxes",    desc: "Outer carton packaging for branded coffee tins and premium airtight canister sets.",    img: IMG.custom, badge: "Popular" },
      { slug: "coffee-subscription-boxes", name: "Coffee Subscription Boxes", desc: "Branded DTC mailer boxes for monthly coffee subscription kit brands.",             img: IMG.mailer },
      { slug: "coffee-gift-boxes",     name: "Coffee Gift Sets",         desc: "Rigid hamper boxes with compartments for whole beans, grinders, and accessories.",      img: IMG.rigid },
      { slug: "coffee-pod-boxes",      name: "Coffee Pod & Capsule Boxes", desc: "Retail cartons for Nespresso-style pods and coffee capsule multi-packs.",            img: IMG.folding },
      { slug: "coffee-bag-pouches",    name: "Coffee Stand-Up Pouches",  desc: "Kraft or metallized stand-up barrier pouches with zip-lock and degassing valve.",      img: IMG.placeholder },
    ],
  },
  {
    slug: "cosmetic",
    name: "Cosmetic Boxes",
    headline: "Cosmetic Boxes & Beauty Packaging",
    desc: "SBS paperboard boxes with soft-touch lamination, UV spot coating, and gold foil stamping for skincare, makeup, and fragrance product retail launches.",
    badge: "Beauty & Cosmetics",
    img: IMG.cosmetic,
    subcategories: [
      { slug: "skincare-cartons",      name: "Skincare Cartons",         desc: "High-gloss clay-coated SBS cartons for serums, creams, and moisturiser retail.",       img: IMG.cosmetic, badge: "Best Seller" },
      { slug: "makeup-palette-boxes",  name: "Makeup Palette Boxes",     desc: "Flat rigid or SBS carton for eyeshadow pans, blush, and compact cosmetic palettes.",   img: IMG.cosmetic, badge: "Popular" },
      { slug: "lipstick-cartons",      name: "Lipstick & Lip Gloss Boxes", desc: "Slim tuck cartons engineered to the exact radius of lipstick canister profiles.",    img: IMG.cosmetic },
      { slug: "foundation-boxes",      name: "Foundation & Serum Boxes", desc: "SBS cartons for liquid foundation bottles, primers, and high-value serum products.",   img: IMG.cosmetic },
      { slug: "perfume-cartons",       name: "Perfume & Fragrance Boxes", desc: "Rigid setup or SBS cartons with window cutout for luxury fragrance retail launch.",    img: IMG.cosmetic },
      { slug: "cosmetic-gift-sets",    name: "Cosmetic Gift Set Boxes",  desc: "Rigid gift boxes with foam compartments for multi-product beauty gift collections.",   img: IMG.rigid },
      { slug: "mens-grooming-boxes",   name: "Men's Grooming Packaging", desc: "Masculine SBS cartons for beard oils, grooming kits, and men's skincare products.",   img: IMG.custom },
    ],
  },
  {
    slug: "electronics",
    name: "Electronics Packaging",
    headline: "Electronics Packaging & Tech Device Boxes",
    desc: "Rigid setup boxes with precision foam inserts, anti-static liners, and telescope closures for smartphones, headphones, wearables, and consumer electronics.",
    badge: "Consumer Electronics",
    img: IMG.rigid,
    subcategories: [
      { slug: "phone-boxes",           name: "Phone & Tablet Boxes",     desc: "Friction-fit rigid box with foam tray for screen-down protection and accessories.",     img: IMG.rigid, badge: "Best Seller" },
      { slug: "headphone-boxes",       name: "Headphone & Audio Boxes",  desc: "Custom-shaped foam insert rigid boxes for over-ear, on-ear, and in-ear audio devices.", img: IMG.rigid, badge: "Popular" },
      { slug: "laptop-boxes",          name: "Laptop & Tablet Shippers", desc: "Double-wall corrugated with dense foam lining for laptop and monitor transit.",         img: IMG.corrugated },
      { slug: "smartwatch-boxes",      name: "Smartwatch & Wearable",    desc: "Slim rigid setup box with cushion insert for smartwatches and fitness trackers.",        img: IMG.rigid },
      { slug: "gaming-packaging",      name: "Gaming Peripheral Boxes",  desc: "Rigid or folding carton packaging for controllers, headsets, and gaming accessories.",  img: IMG.rigid },
      { slug: "cable-accessory-boxes-elec", name: "Cable & Charger Boxes", desc: "Compact retail folding cartons for USB cables, adapters, and power accessories.",   img: IMG.folding },
    ],
  },
  {
    slug: "food",
    name: "Food Packaging",
    headline: "Food Packaging & Food-Grade Boxes",
    desc: "FDA-compliant food-grade SBS paperboard with grease-resistant barrier liners, PET window options, and corrugated shippers for bakery, confectionery, and specialty food brands.",
    badge: "FDA Compliant",
    img: IMG.folding,
    subcategories: [
      { slug: "bakery-boxes",          name: "Bakery & Pastry Boxes",    desc: "Grease-barrier SBS window cartons for cakes, pastries, cookies, and macarons.",         img: IMG.folding, badge: "Best Seller" },
      { slug: "pizza-boxes-food",      name: "Pizza Boxes",              desc: "Corrugated pizza boxes with grease-resistant liner and ventilation perforations.",       img: IMG.corrugated, badge: "Popular" },
      { slug: "snack-retail-cartons",  name: "Snack & Cereal Cartons",   desc: "Vibrant offset-print SBS cartons for chips, granola, cereal, and snack brands.",        img: IMG.folding },
      { slug: "takeout-boxes",         name: "Takeout & Meal Prep",      desc: "Food-grade corrugated and SBS containers for restaurant takeout and meal kit brands.",   img: IMG.corrugated },
      { slug: "sandwich-wrap-boxes",   name: "Sandwich & Wrap Boxes",    desc: "Printed food-grade cartons and kraft wrap boxes for deli and sandwich retail.",          img: IMG.custom },
      { slug: "produce-boxes",         name: "Produce & Fresh Food",     desc: "Ventilated corrugated boxes for fresh produce, fruits, and perishable food transit.",    img: IMG.corrugated },
    ],
  },
  {
    slug: "gift",
    name: "Gift Boxes",
    headline: "Gift Boxes & Luxury Gift Packaging",
    desc: "Elegant two-piece rigid boxes, magnetic lid closures, and ribbon-lift pull tabs crafted for corporate gifts, holiday sets, and premium retail gifting occasions.",
    badge: "Premium Gifting",
    img: IMG.rigid,
    subcategories: [
      { slug: "two-piece-gift-boxes",  name: "Two-Piece Gift Boxes",     desc: "Lid and base rigid setup boxes with art-wrap liner and ribbon pull tab.",                img: IMG.rigid, badge: "Best Seller" },
      { slug: "magnetic-gift-boxes",   name: "Magnetic Gift Boxes",      desc: "Hidden magnet lid closure rigid boxes for luxury gifting and premium retail.",           img: IMG.rigid, badge: "Popular" },
      { slug: "hamper-gift-boxes",     name: "Hamper & Gift Sets",       desc: "Open tray rigid boxes with foam dividers for multi-product premium hamper gifts.",       img: IMG.rigid },
      { slug: "gift-bag-boxes",        name: "Luxury Gift Bags",         desc: "Laminated paper or fabric bags with twisted ribbon handles for boutique gifting.",        img: IMG.placeholder },
      { slug: "corporate-gift-boxes-g",name: "Corporate Gift Boxes",     desc: "Branded rigid setup boxes for B2B corporate gifts, employee recognition, and events.",  img: IMG.rigid },
      { slug: "wedding-gift-boxes",    name: "Wedding & Event Gift Boxes", desc: "Elegant die-cut or rigid boxes for wedding favors, event gifts, and celebrations.",   img: IMG.custom },
    ],
  },
  {
    slug: "hardware",
    name: "Hardware Packaging",
    headline: "Hardware Packaging & Tool Boxes",
    desc: "Durable corrugated cartons with custom foam inserts for tools, fasteners, screws, and hardware parts. Hanging tab retail packs and heavy-duty B2B shipper cases.",
    badge: "Tools & Hardware",
    img: IMG.corrugated,
    subcategories: [
      { slug: "tool-retail-cartons",   name: "Tool Retail Cartons",      desc: "Hanging tab folding cartons for hand tools, saw blades, and drill bits.",                img: IMG.folding, badge: "Best Seller" },
      { slug: "power-tool-boxes",      name: "Power Tool Boxes",         desc: "Rigid or corrugated boxes with foam tray inserts for power drills and tool kits.",       img: IMG.corrugated, badge: "Popular" },
      { slug: "fastener-packaging",    name: "Fastener & Screw Packaging", desc: "Small folding cartons and retail bags for screws, nails, bolts, and fasteners.",      img: IMG.folding },
      { slug: "hardware-shipper-boxes",name: "Hardware Shipper Boxes",   desc: "Heavy-duty corrugated master shippers for bulk tool and hardware distribution.",         img: IMG.corrugated },
      { slug: "paint-packaging",       name: "Paint & Coating Boxes",    desc: "Corrugated and SBS cartons for paint tins, brushes, and home improvement products.",    img: IMG.folding },
      { slug: "adhesive-boxes",        name: "Adhesive & Sealant Boxes", desc: "Retail cartons for caulk tubes, adhesives, and epoxy product retail display.",          img: IMG.folding },
    ],
  },
  {
    slug: "pharma",
    name: "Health & Pharma",
    headline: "Health & Pharmaceutical Packaging",
    desc: "Child-resistant cartons, serialized barcode fields, and ±0.5mm precision tolerances for medication, supplements, and medical device products.",
    badge: "Pharma Compliant",
    img: IMG.folding,
    subcategories: [
      { slug: "medicine-cartons-ph",   name: "Medicine & Tablet Cartons", desc: "SBS folding cartons with insert leaflet tuck pocket and serialized barcode panel.",   img: IMG.folding, badge: "Best Seller" },
      { slug: "supplement-boxes",      name: "Supplement & Vitamin Boxes", desc: "Retail cartons for capsules, gummies, protein powders, and nutraceutical products.",  img: IMG.placeholder, badge: "Popular" },
      { slug: "medical-device-boxes-ph",name:"Medical Device Boxes",     desc: "Sterile-compatible rigid or folding carton for surgical tools and diagnostic devices.", img: IMG.rigid },
      { slug: "child-resistant-pharma",name: "Child-Resistant Boxes",    desc: "Push-and-turn or squeeze-and-pull locking cartons meeting CR compliance specs.",        img: IMG.folding },
      { slug: "otc-pharmacy-cartons",  name: "OTC Pharmacy Cartons",     desc: "Over-the-counter pharmacy packaging cartons with compliance barcode panel.",            img: IMG.folding },
      { slug: "syrup-cartons",         name: "Syrup & Liquid Medicine",  desc: "Slim tuck cartons sized for 60–500ml medicine syrup bottles with insert pocket.",       img: IMG.custom },
    ],
  },
  {
    slug: "hemp",
    name: "Hemp Packaging",
    headline: "Hemp Packaging & Natural Product Boxes",
    desc: "Eco-certified kraft and SBS cartons for hemp-derived products with compliance labeling panels. FSC-certified substrates, natural print aesthetics, and barrier pouch options.",
    badge: "Hemp & Eco",
    img: IMG.custom,
    subcategories: [
      { slug: "hemp-oil-boxes",        name: "Hemp Oil & Extract Boxes", desc: "Tuck-end cartons for hemp oil dropper bottles with compliance labeling field.",         img: IMG.custom, badge: "Best Seller" },
      { slug: "hemp-topical-boxes",    name: "Hemp Cream & Topical",     desc: "SBS or kraft cartons for hemp balms, body creams, and topical product retail.",         img: IMG.cosmetic, badge: "Popular" },
      { slug: "hemp-protein-packaging",name: "Hemp Protein & Powder",    desc: "Stand-up kraft pouches and retail cartons for hemp protein powder products.",           img: IMG.placeholder },
      { slug: "hemp-tea-packaging",    name: "Hemp Tea & Botanical",     desc: "Natural kraft folding cartons and kraft tins for hemp tea and botanical blends.",       img: IMG.custom },
      { slug: "hemp-seed-boxes",       name: "Hemp Seed & Food Boxes",   desc: "Food-grade retail cartons for hemp seeds, hemp flour, and hemp snack products.",        img: IMG.folding },
      { slug: "hemp-beauty-boxes",     name: "Hemp Beauty & Skincare",   desc: "Eco-certified SBS cartons for hemp-infused skincare and beauty product retail.",        img: IMG.cosmetic },
    ],
  },
  {
    slug: "jewelry",
    name: "Jewelry Boxes",
    headline: "Jewelry Boxes & Fine Jewelry Packaging",
    desc: "Velvet-lined slide drawers, magnetic rigid setups, and soft-suede-wrapped luxury jewelry boxes for rings, necklaces, watches, and fine jewellery brands.",
    badge: "Fine Jewelry",
    img: IMG.rigid,
    subcategories: [
      { slug: "ring-boxes-jw",         name: "Ring Boxes",               desc: "Hinged clamshell rigid box with finger-groove velvet pillow insert for rings.",          img: IMG.rigid, badge: "Best Seller" },
      { slug: "necklace-boxes-jw",     name: "Necklace & Pendant Boxes", desc: "Flat rigid box with foam-backed velvet for necklace and pendant chain display.",         img: IMG.rigid, badge: "Popular" },
      { slug: "bracelet-boxes-jw",     name: "Bracelet & Bangle Boxes",  desc: "Rectangular rigid box with pillow insert or rail bar for bracelet display.",            img: IMG.rigid },
      { slug: "watch-boxes-jw",        name: "Watch Presentation Boxes", desc: "Deep rigid box with cushion pillow for watches with space for accessories.",            img: IMG.rigid },
      { slug: "earring-cards",         name: "Earring Display Cards",    desc: "Printed backer cards and small cartons for earring retail packaging and display.",       img: IMG.placeholder },
      { slug: "jewelry-gift-sets",     name: "Jewelry Gift Sets",        desc: "Multi-compartment rigid boxes for complete jewelry set gifting and retail.",             img: IMG.rigid },
    ],
  },
  {
    slug: "retail",
    name: "Retail Packaging",
    headline: "Retail Packaging & Point-of-Sale Displays",
    desc: "Vibrant folding cartons, hanging shelf packs, and POP display trays for retail store environments. Premium print with precise colour matching for maximum shelf impact.",
    badge: "Retail Ready",
    img: IMG.folding,
    subcategories: [
      { slug: "shelf-ready-cartons-rt",name: "Shelf-Ready Cartons",      desc: "Retail folding cartons engineered for high-speed packing line and shelf presence.",    img: IMG.folding, badge: "Best Seller" },
      { slug: "hanging-tab-retail-rt", name: "Hanging Tab Retail Packs", desc: "Euro-slot pegboard hanging cartons for tools, accessories, and hardware retail.",       img: IMG.folding, badge: "Popular" },
      { slug: "blister-packs-rt",      name: "Blister Packs",           desc: "Printed backer cards heat-sealed to formed PVC blister cavities for display.",           img: IMG.placeholder },
      { slug: "counter-display-rt",    name: "Counter Display Trays",   desc: "Pre-filled counter-top display trays with header cards for retail POP merchandising.", img: IMG.folding },
      { slug: "retail-shipper-boxes",  name: "Retail Shipper Cartons",   desc: "Perforated tear-off corrugated shippers that convert into branded display trays.",      img: IMG.corrugated },
    ],
  },
  {
    slug: "shipping",
    name: "Shipping Boxes",
    headline: "Shipping Boxes & Logistics Packaging",
    desc: "Industrial double-wall RSC corrugated master shippers rated for freight pallet stacking loads. Heavy ECT compression ratings and multi-depth slots for full SKU coverage.",
    badge: "Freight & Logistics",
    img: IMG.corrugated,
    subcategories: [
      { slug: "rsc-master-shippers",   name: "RSC Master Shipper Cases", desc: "Regular slotted corrugated master cases for palletized freight distribution.",          img: IMG.corrugated, badge: "Best Seller" },
      { slug: "double-wall-shippers",  name: "Double-Wall Shipper Boxes", desc: "BC-flute heavy-duty corrugated rated ECT-44 for industrial and freight loads.",        img: IMG.corrugated, badge: "Popular" },
      { slug: "e-commerce-shippers",   name: "E-Commerce Shipper Boxes", desc: "Branded B-flute corrugated shipper boxes for DTC and e-commerce order fulfillment.",    img: IMG.mailer },
      { slug: "hazmat-shippers",       name: "Hazmat Certified Boxes",   desc: "UN-certified corrugated boxes for Class 3–9 hazardous material transport.",             img: IMG.corrugated },
      { slug: "insulated-shippers-sh", name: "Insulated Shipper Boxes",  desc: "EPS foam-lined corrugated boxes for pharmaceutical cold-chain and food shipping.",      img: IMG.corrugated },
      { slug: "archive-boxes",         name: "Archive & Storage Boxes",  desc: "Heavy-duty document archive cartons with lid label panels for office records.",         img: IMG.corrugated },
    ],
  },
  {
    slug: "soap",
    name: "Soap Boxes",
    headline: "Soap Boxes & Bar Soap Packaging",
    desc: "Eco-friendly natural kraft sleeves and folding cartons for artisan and commercial soap bars. Window options, embossing, and natural print aesthetics for organic brands.",
    badge: "Artisan Soap",
    img: IMG.custom,
    subcategories: [
      { slug: "kraft-soap-sleeves",    name: "Kraft Soap Sleeves",       desc: "Natural kraft band sleeve wraps with custom 1–3 colour print for artisan soap bars.",   img: IMG.custom, badge: "Best Seller" },
      { slug: "window-soap-boxes",     name: "Window Soap Boxes",        desc: "SBS tuck-end cartons with die-cut PET window for visible soap bar display on shelf.",   img: IMG.folding, badge: "Popular" },
      { slug: "luxury-soap-boxes",     name: "Luxury Rigid Soap Boxes",  desc: "Two-piece rigid setup boxes for premium artisan soap bars and hand-crafted collections.", img: IMG.rigid },
      { slug: "soap-gift-sets",        name: "Soap Gift Set Boxes",      desc: "Multi-cavity rigid trays for soap bar collections and spa gift set presentation.",       img: IMG.rigid },
      { slug: "bulk-soap-shippers",    name: "Bulk Soap Shippers",       desc: "Corrugated master shippers for commercial bulk soap bar wholesale distribution.",        img: IMG.corrugated },
    ],
  },
  {
    slug: "spice",
    name: "Spice Packaging",
    headline: "Spice Packaging & Herb Packaging",
    desc: "Counter display trays and retail cartons for spice pouches, tins, and jars. Vibrant offset-print SBS cartons with resealable closures and compliance labeling fields.",
    badge: "Spice & Herbs",
    img: IMG.folding,
    subcategories: [
      { slug: "spice-jar-cartons",     name: "Spice Jar Cartons",        desc: "Retail SBS tuck cartons sized for standard spice glass and plastic jar profiles.",       img: IMG.folding, badge: "Best Seller" },
      { slug: "spice-pouch-boxes",     name: "Spice Pouch Retail Boxes", desc: "Outer retail cartons for spice sachets, pouches, and resealable herb bags.",            img: IMG.folding, badge: "Popular" },
      { slug: "spice-display-trays",   name: "Spice Counter Display Trays", desc: "Pre-loaded counter display trays for spice jar or packet retail merchandising.",    img: IMG.folding },
      { slug: "spice-gift-sets",       name: "Spice Gift Sets",          desc: "Rigid hamper boxes with custom dividers for spice blend collections and gift sets.",     img: IMG.rigid },
      { slug: "spice-tin-packaging",   name: "Spice Tin Boxes",          desc: "Lithograph-printed round or rectangular tinplate boxes for premium spice retail.",       img: IMG.placeholder },
    ],
  },
  {
    slug: "sports",
    name: "Sports Packaging",
    headline: "Sports Packaging & Athletic Product Boxes",
    desc: "Heavy-duty custom boxes for sports equipment, supplements, athletic gear, and fitness accessories. Corrugated shippers and rigid retail cartons for active lifestyle brands.",
    badge: "Sports & Fitness",
    img: IMG.corrugated,
    subcategories: [
      { slug: "supplement-sports-boxes", name: "Sports Supplement Boxes", desc: "Retail cartons for protein powder, pre-workout, creatine, and sports nutrition.",      img: IMG.placeholder, badge: "Best Seller" },
      { slug: "equipment-shippers",    name: "Equipment Shipper Boxes",   desc: "Heavy corrugated boxes for balls, rackets, helmets, and fitness equipment shipping.",  img: IMG.corrugated, badge: "Popular" },
      { slug: "footwear-sports-boxes", name: "Athletic Footwear Boxes",   desc: "Corrugated shoeboxes for athletic trainers, cleats, and performance footwear brands.", img: IMG.corrugated },
      { slug: "sports-apparel-boxes",  name: "Sports Apparel Packaging",  desc: "Folding cartons and poly bags for jerseys, compression wear, and sportswear retail.",  img: IMG.custom },
      { slug: "recovery-product-boxes",name: "Recovery & Wellness Boxes", desc: "SBS cartons for foam rollers, massage tools, and sports recovery accessories.",        img: IMG.folding },
    ],
  },
  {
    slug: "stationery",
    name: "Stationery Boxes",
    headline: "Stationery Boxes & Office Product Packaging",
    desc: "Clean, elegant folding cartons, magnetic boxes, and sleeve packaging for premium office stationery, pens, planners, and creative product brands.",
    badge: "Stationery & Office",
    img: IMG.custom,
    subcategories: [
      { slug: "pen-gift-boxes",        name: "Pen & Pencil Gift Boxes",   desc: "Slim magnetic or rigid presentation boxes for luxury pen and pencil gift sets.",        img: IMG.rigid, badge: "Best Seller" },
      { slug: "notebook-packaging",    name: "Notebook & Journal Boxes",  desc: "Folding cartons and sleeve boxes for notebooks, planners, and premium journals.",       img: IMG.custom, badge: "Popular" },
      { slug: "art-supply-boxes",      name: "Art Supply Packaging",      desc: "Retail cartons and corrugated display trays for art pencils, markers, and sets.",       img: IMG.folding },
      { slug: "planner-gift-boxes",    name: "Planner & Organizer Sets",  desc: "Rigid gift boxes with compartments for premium planner and organizer gift sets.",       img: IMG.rigid },
      { slug: "desk-accessory-boxes",  name: "Desk Accessory Packaging",  desc: "SBS folding cartons for staplers, tape dispensers, and branded desk accessories.",     img: IMG.folding },
    ],
  },
  {
    slug: "tea",
    name: "Tea Packaging",
    headline: "Tea Packaging & Specialty Tea Boxes",
    desc: "Custom tea chest boxes, individual sachet cartons, and windowed gift sets for specialty tea and herbal blend brands. Kraft, SBS, and premium rigid board options.",
    badge: "Tea & Botanicals",
    img: IMG.custom,
    subcategories: [
      { slug: "tea-chest-boxes",       name: "Tea Chest Gift Boxes",     desc: "Rigid or kraft chest-style boxes with multiple tea compartments for gift retail.",       img: IMG.rigid, badge: "Best Seller" },
      { slug: "tea-sachet-cartons",    name: "Tea Sachet Cartons",       desc: "SBS folding cartons for 10–100 count teabag sachets with window option.",               img: IMG.folding, badge: "Popular" },
      { slug: "tea-bag-pouches",       name: "Loose Leaf Tea Pouches",   desc: "Kraft or foil stand-up pouches with zip-lock for loose leaf tea retail packaging.",      img: IMG.placeholder },
      { slug: "tea-tin-packaging",     name: "Tea Tin Canisters",        desc: "Round lithograph-printed tinplate canisters for premium loose leaf tea retail.",         img: IMG.placeholder },
      { slug: "herbal-tea-boxes",      name: "Herbal & Botanical Tea",   desc: "Natural kraft or SBS cartons for herbal blends, botanical tisanes, and wellness teas.", img: IMG.custom },
      { slug: "tea-gift-set-boxes",    name: "Tea Gift Set Boxes",       desc: "Multi-variety rigid gift boxes for premium tea samplers and brand gifting occasions.",   img: IMG.rigid },
    ],
  },
  {
    slug: "vape",
    name: "Vape Boxes",
    headline: "Vape Boxes & E-Cigarette Packaging",
    desc: "Precision-fit sliding drawer boxes and child-resistant sleeves for vape pens, cartridges, mods, and e-liquid products. Compliance labeling fields and tamper-evident seals.",
    badge: "Vape & E-Cig",
    img: IMG.custom,
    subcategories: [
      { slug: "vape-cartridge-boxes-v",name: "Vape Cartridge Boxes",     desc: "Precision slide-drawer or tuck carton for 510-thread vape cartridges and atomizers.", img: IMG.custom, badge: "Best Seller" },
      { slug: "vape-pen-packaging",    name: "Vape Pen Packaging",       desc: "Slim folding carton or rigid box for full disposable vape pen product retail.",         img: IMG.custom, badge: "Popular" },
      { slug: "vape-mod-boxes",        name: "Vape Mod & Device Boxes",  desc: "Rigid or corrugated boxes for box mods, advanced vaping devices, and starter kits.",    img: IMG.rigid },
      { slug: "e-liquid-boxes",        name: "E-Liquid Bottle Cartons",  desc: "Tuck-end cartons for 10–120ml e-liquid, nicotine salt, and vape juice bottles.",         img: IMG.folding },
      { slug: "vape-gift-sets",        name: "Vape Gift Set Boxes",      desc: "Multi-component rigid boxes for vape starter kits and premium device gift packaging.", img: IMG.rigid },
    ],
  },
];

const MATERIALS_IMAGES: Record<string, string> = {
  cardboard: "/images/materials/cardboard_boxes.webp",
  corrugated: "/images/materials/corrugated_boxes.webp",
  rigid: "/images/materials/rigid_board.webp",
  kraft: "/images/materials/kraft_packaging.webp",
};

const STYLES_IMAGES: Record<string, string> = {
  "tuck-boxes": "/images/styles/tuck_boxes.webp",
  "display-boxes": "/images/styles/display_boxes.webp",
  "window-packaging": "/images/styles/window_boxes.webp",
  "mylar-bags": "/images/styles/mylar_bags.webp",
};

const INDUSTRIES_IMAGES: Record<string, string> = {
  apparel: "/images/industries/apparel_packaging.webp",
  cosmetic: "/images/industries/cosmetic_packaging.webp",
  food: "/images/industries/food_packaging.webp",
  chocolate: "/images/industries/chocolate_packaging.webp",
  retail: "/images/industries/retail_packaging.webp",
};

export const MATERIAL_TAXONOMY: ProductCategory[] = RAW_MATERIAL_TAXONOMY.map((cat) => {
  const catImg = MATERIALS_IMAGES[cat.slug] || cat.img.replace("/images/", "/images/materials/");
  const catImgWebp = catImg.endsWith(".png") ? catImg.replace(".png", ".webp") : catImg;
  return {
    ...cat,
    img: catImgWebp,
    subcategories: cat.subcategories.map((sub) => ({
      ...sub,
      img: catImgWebp, // Inherit parent category image
    })),
  };
});

export const STYLE_TAXONOMY: ProductCategory[] = RAW_STYLE_TAXONOMY.map((cat) => {
  const catImg = STYLES_IMAGES[cat.slug] || cat.img.replace("/images/", "/images/styles/");
  const catImgWebp = catImg.endsWith(".png") ? catImg.replace(".png", ".webp") : catImg;
  return {
    ...cat,
    img: catImgWebp,
    subcategories: cat.subcategories.map((sub) => ({
      ...sub,
      img: catImgWebp, // Inherit parent category image
    })),
  };
});

export const INDUSTRY_TAXONOMY: ProductCategory[] = RAW_INDUSTRY_TAXONOMY.map((cat) => {
  const catImg = INDUSTRIES_IMAGES[cat.slug] || cat.img.replace("/images/", "/images/industries/");
  const catImgWebp = catImg.endsWith(".png") ? catImg.replace(".png", ".webp") : catImg;
  return {
    ...cat,
    img: catImgWebp,
    subcategories: cat.subcategories.map((sub) => ({
      ...sub,
      img: catImgWebp, // Inherit parent category image
    })),
  };
});

/* ─── Lookup helpers ────────────────────────────────── */

export function getMaterialCategoryBySlug(slug: string): ProductCategory | null {
  return MATERIAL_TAXONOMY.find((c) => c.slug === slug) ?? null;
}

export function getMaterialSubcategoryBySlug(
  categorySlug: string,
  subSlug: string
): { category: ProductCategory; sub: Subcategory } | null {
  const category = getMaterialCategoryBySlug(categorySlug);
  if (!category) return null;
  const sub = category.subcategories.find((s) => s.slug === subSlug);
  if (!sub) return null;
  return { category, sub };
}

export function getAllMaterialCategoryParams(): { category: string }[] {
  return MATERIAL_TAXONOMY.map((c) => ({ category: c.slug }));
}

export function getAllMaterialSubcategoryParams(): { category: string; subcategory: string }[] {
  return MATERIAL_TAXONOMY.flatMap((c) =>
    c.subcategories.map((s) => ({ category: c.slug, subcategory: s.slug }))
  );
}

export function getStyleCategoryBySlug(slug: string): ProductCategory | null {
  return STYLE_TAXONOMY.find((c) => c.slug === slug) ?? null;
}

export function getStyleSubcategoryBySlug(
  categorySlug: string,
  subSlug: string
): { category: ProductCategory; sub: Subcategory } | null {
  const category = getStyleCategoryBySlug(categorySlug);
  if (!category) return null;
  const sub = category.subcategories.find((s) => s.slug === subSlug);
  if (!sub) return null;
  return { category, sub };
}

export function getAllStyleCategoryParams(): { category: string }[] {
  return STYLE_TAXONOMY.map((c) => ({ category: c.slug }));
}

export function getAllStyleSubcategoryParams(): { category: string; subcategory: string }[] {
  return STYLE_TAXONOMY.flatMap((c) =>
    c.subcategories.map((s) => ({ category: c.slug, subcategory: s.slug }))
  );
}

export function getIndustryCategoryBySlug(slug: string): ProductCategory | null {
  return INDUSTRY_TAXONOMY.find((c) => c.slug === slug) ?? null;
}

export function getIndustrySubcategoryBySlug(
  categorySlug: string,
  subSlug: string
): { category: ProductCategory; sub: Subcategory } | null {
  const category = getIndustryCategoryBySlug(categorySlug);
  if (!category) return null;
  const sub = category.subcategories.find((s) => s.slug === subSlug);
  if (!sub) return null;
  return { category, sub };
}

export function getAllIndustryCategoryParams(): { category: string }[] {
  return INDUSTRY_TAXONOMY.map((c) => ({ category: c.slug }));
}

export function getAllIndustrySubcategoryParams(): { category: string; subcategory: string }[] {
  return INDUSTRY_TAXONOMY.flatMap((c) =>
    c.subcategories.map((s) => ({ category: c.slug, subcategory: s.slug }))
  );
}

/* ─── Shared subcategory → ProductPageConfig generator ─ */
export function generateCatalogSubcategoryConfig(
  section: "materials" | "styles" | "industries",
  category: ProductCategory,
  sub: Subcategory
): ProductPageConfig {
  const sectionLabels = {
    materials: "Packaging Material",
    styles: "Packaging Style",
    industries: "Industry Solution",
  };

  return {
    hero: {
      badge: sectionLabels[section],
      badgeIcon: section === "materials" ? "leaf" : section === "styles" ? "layout" : "shopping-bag",
      title: (
        <>
          Custom {sub.name} <br />
          <span className="text-accent">by Trion Packaging</span>
        </>
      ),
      subtitle: `Get custom ${sub.name} made to fit your product's exact measurements. We'll send you a free design template in 24 hours. Choose from eco-friendly brown kraft or white cardboard with custom printing and beautiful finishes.`,
      image: sub.img,
      moq: "100 Units",
      leadTime: "10 – 15 Days",
      cadTime: "Within 24 Hours",
      ecoStatus: "FSC Certified",
      benefits: [
        `Free custom layout templates made specifically for your ${sub.name}`,
        "Add shiny foil, gloss highlights, matte coatings, or raised details",
        "Eco-friendly paper options and fully recyclable materials",
      ],
      quoteLink: `/${section}/${category.slug}/${sub.slug}/quote`,
      dielineLink: `/contact?request=dieline-${sub.slug}`,
      modelName: `${sub.slug.substring(0, 4).toUpperCase().replace(/-/g, "")} | Perfect Fit`,
      boardType: "Eco-Friendly Cardboard",
    },
    overview: {
      tagline: "Custom Design Support",
      title: `How We Design Your ${sub.name}`,
      description: `Our design team builds custom ${sub.name} based on your product's dimensions. We make sure the box folds easily, closes securely, and matches your artwork perfectly.`,
      items: [
        { icon: "compass", title: "Free Layout Templates in 24 Hours", desc: `Send us your product sizes and we will send you a digital design template within one business day.` },
        { icon: "ruler", title: "Guaranteed Perfect Fit", desc: "Every box is cut with absolute precision, ensuring flaps fold easily and the box closes securely every time." },
        { icon: "hammer", title: "Custom Compartments & Inserts", desc: "Add cardboard dividers or soft foam inserts to keep your products safe and neat inside the box." },
        { icon: "cpu", title: "Built Tough for Safe Shipping", desc: "Our shipping boxes are designed to handle drops, bumps, and stacking during transport, keeping your products safe." },
      ],
    },
    styles: {
      tagline: "Popular Options",
      title: `${sub.name} — Popular Box Styles`,
      description: `Choose from our popular standard shapes for your ${sub.name}, or request a completely custom box style.`,
      items: [
        { icon: "box", name: "Standard Tuck-End", locks: "Easy-close top and bottom flaps", bestFor: "Retail stores, cosmetics, and everyday product packaging", calipers: "eco-friendly paperboard", desc: "The classic store shelf box. Flaps tuck in easily at both ends for quick packaging without needing tape or glue." },
        { icon: "layout", name: "Self-Locking Bottom", locks: "Pre-glued bottom that pops open, tuck lid", bestFor: "Fast packaging lines and heavier products", calipers: "heavyweight cardboard", desc: "The bottom of the box is pre-glued so it snaps open and locks into place instantly when opened, saving you assembly time." },
        { icon: "layers", name: "Fully Custom Box", locks: "Designed to match your product shape", bestFor: "Unique shapes, luxury gifts, and special collections", calipers: "all material weights available", desc: "Our design team builds a completely custom shape from scratch to fit your product profile perfectly." },
      ],
    },
    materials: {
      tagline: "Substrates",
      title: "Material Options",
      description: `Select the right paper or cardboard material for your ${sub.name} based on weight, look, and eco-friendliness.`,
      items: [
        { icon: "gem", name: "Premium White Cardboard", thickness: "Lightweight to heavyweight card options", eco: "100% Sustainably Sourced", properties: "Smooth, bright white surface that makes colors pop — ideal for high-end retail look.", useCase: "Cosmetics, beauty products, retail items, and gift boxes" },
        { icon: "leaf", name: "Eco-Friendly Brown Kraft", thickness: "Organic, rustic paper weights", eco: "100% Recycled & Biodegradable", properties: "Natural brown paper texture, highly durable, and completely eco-friendly.", useCase: "Organic products, handmade items, and natural skincare brands" },
        { icon: "shield", name: "Luxury Rigid Board", thickness: "Thick, non-bendable luxury board", eco: "100% Recyclable Compressed Paper", properties: "Sturdy board that does not bend, wrapped in elegant custom-printed paper.", useCase: "High-end gifts, electronics, jewelry, and luxury collections" },
        { icon: "layers", name: "Sturdy Fluted Cardboard", thickness: "Crush-resistant fluted structure", eco: "Recycled content, fully recyclable", properties: "Lightweight shipping material with layered channels for extra crush protection.", useCase: "E-commerce shipping, subscription boxes, and bulk retail shipments" },
      ],
    },
    printing: {
      tagline: "Printing Methods",
      title: "Custom Printing Options",
      description: "Choose the best printing style for your brand based on your order size and design details.",
      items: [
        { icon: "printer", name: "High-Volume Printing", moq: "1,000 units", setup: "Requires custom printing plates", color: "High-fidelity CMYK and custom spot colors", bestFor: "Large retail runs, retail brands, and bulk packaging", desc: "Perfect for larger runs. Gives you the highest quality print, sharpest details, and lowest cost per box at scale.", benefits: ["Photographic print quality", "Add shiny foil or spot gloss easily", "Most cost-effective for large orders"] },
        { icon: "columns", name: "Short-Run Digital Printing", moq: "100 units", setup: "No setup or plate charges", color: "Full-color printing", bestFor: "Startups, test runs, and limited edition products", desc: "Prints your design directly from digital files onto the cardboard. Perfect for small batches, testing new designs, or quick turnarounds.", benefits: ["No expensive startup charges", "Fast turnarounds (2-3 days)", "Print multiple designs in one batch"] },
        { icon: "layers", name: "Direct Cardboard Printing", moq: "500 units", setup: "Low setup charge", color: "1 to 3 solid colors", bestFor: "Shipping boxes, logo boxes, and outer cases", desc: "Prints ink directly onto brown or white shipping boxes. Simple, durable, and highly cost-effective.", benefits: ["Extremely cost-effective", "Eco-friendly water-based inks", "Durable logo printing"] },
      ],
    },
    finishes: {
      tagline: "Extra Finishes",
      title: "Custom Finishing Details",
      description: "Add special touches to make your box stand out and feel premium when customers hold it.",
      items: [
        { icon: "sun", name: "Gloss Highlights (Spot UV)", visual: "Shiny, raised gloss overlay on logos or text", protection: "Helps protect key design details from scratches", desc: "A clear gloss layer applied selectively to make logos or specific parts of your design shine." },
        { icon: "sparkles", name: "Shiny Foil Stamping", visual: "Metallic gold, silver, or rose gold details", protection: "Highly durable bond that won't peel", desc: "Heat-stamps metallic foils directly into the paper, creating premium shiny highlights for luxury brands." },
        { icon: "paintbrush", name: "Velvet Matte Finish", visual: "Velvet-soft feel with zero glare", protection: "Protects box corners from scuffs and cracks", desc: "A soft, non-reflective coating that makes the box feel incredibly smooth and prevents fingerprints." },
        { icon: "crop", name: "Raised & Pressed Details", visual: "3D raised or sunken designs", protection: "Permanent texture built into the paper", desc: "Presses your logo into the paper to create a distinct, touchable 3D texture." },
      ],
    },
    industries: {
      tagline: "Applications",
      title: "Who Uses These Solutions",
      description: `${sub.name} are popular across many retail and e-commerce business sectors. Here is how they are commonly used:`,
      items: [
        { icon: "sparkles", name: "Beauty & Skincare", requirements: "Soft matte finish, gold foil details, custom product slots", useCase: "Creams, face serums, makeup palettes, and essential oil bottles", link: "/industries" },
        { icon: "shopping-bag", name: "E-Commerce & Retail", requirements: "Strong boxes, custom logo prints, easy self-sealing tape", useCase: "Clothing shipping, subscription kits, and retail gift boxes", link: "/industries" },
        { icon: "cpu", name: "Electronics & Tech", requirements: "Sturdy lids, soft foam cushions, secure closures", useCase: "Smartphones, headphones, chargers, and tech accessories", link: "/industries" },
        { icon: "coffee", name: "Specialty Food & Gifts", requirements: "Food-safe materials, grease barriers, clear display windows", useCase: "Gourmet chocolates, luxury teas, and bakery gift boxes", link: "/industries" },
      ],
    },
    gallery: {
      tagline: "Related Products",
      title: "Browse Related Packaging",
      description: "Explore other custom box styles to find the perfect fit for your product.",
      items: [
        { name: "Custom Product Box", img: IMG.custom, type: "Classic Cardboard", use: "Everyday Retail & Store Shelves", href: "/products/custom-boxes" },
        { name: "Rigid Gift Box", img: IMG.rigid, type: "Luxury Rigid Board", use: "Premium Tech & High-End Gifts", href: "/products/rigid-boxes" },
        { name: "Folding Retail Carton", img: IMG.folding, type: "Smooth White Cardboard", use: "Retail Shelves & Store Display", href: "/products/folding-cartons" },
        { name: "E-Commerce Mailer Box", img: IMG.mailer, type: "Sturdy Fluted Cardboard", use: "Online Shipping & Subscription Kits", href: "/products/mailer-boxes" },
      ],
    },
    faq: {
      tagline: "FAQ",
      title: `${sub.name} — Frequently Asked Questions`,
      description: "Find simple answers to common questions about ordering, templates, samples, and shipping times.",
      items: [
        { q: "Can I get a custom layout template before placing an order?", a: "Yes. Simply send us your product measurements. Our design team will send you a digital vector template within 24 hours at no charge." },
        { q: "What is the minimum order quantity?", a: "Digital printing starts at just 100 boxes. Higher-volume custom printing starts at 1,000 boxes. Direct shipping box printing starts at 500 boxes." },
        { q: "Can I get a physical sample before placing my full order?", a: "Yes. We offer unprinted sample boxes to test size fit, and fully printed samples to check colors. Sample fees are credited back to your account when you place a production order." },
        { q: "What format should my artwork be in?", a: "We recommend vector files like Adobe Illustrator (.AI), vector PDF, or EPS. Make sure all fonts are outlined and images are high-resolution (300 DPI) for sharp printing." },
      ],
    },
    cta: {
      tagline: `Custom ${sub.name}`,
      title: `Ready to Design Your Custom ${sub.name}?`,
      description: `Send us your product sizes or send a physical sample. Our design team will create a custom box layout and send you a pricing estimate within 24 hours — completely free.`,
      quoteLink: `/${section}/${category.slug}/${sub.slug}/quote`,
      contactLink: `/contact?request=consultation-${sub.slug}`,
    },
  };
}
