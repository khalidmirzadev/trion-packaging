import React from "react";
import { type ProductPageConfig } from "@/components/products/product-template";

// 1. Custom Boxes Config
const CUSTOM_BOXES_CONFIG: ProductPageConfig = {
  hero: {
    badge: "Structural Packaging",
    badgeIcon: "shield",
    title: (
      <>
        Custom Boxes &amp; <br />
        <span className="text-accent">Tailored Enclosures</span>
      </>
    ),
    subtitle: "Precision B2B custom boxes engineered to your product's exact boundaries. We build rigid setups, folding cartons, and fluted sleeves from sustainably sourced substrates with 24-hour CAD dieline turnaround.",
    image: "/images/custom_box.png",
    moq: "100 Units Only",
    leadTime: "10 - 15 Days",
    cadTime: "Within 24 Hours",
    ecoStatus: "100% Recyclable",
    benefits: [
      "Zero tooling setup charges for digital short-run printing",
      "Perfect caliper board thickness matching product weight",
      "Internal foam dividers & custom locking inserts available",
    ],
    quoteLink: "/quote?product=custom-boxes",
    dielineLink: "/contact?request=dieline",
    modelName: "TB-X01 | Tol: ±0.5mm",
    boardType: "SBS Bleached Board",
  },
  overview: {
    tagline: "Engineering Focus",
    title: "Structural Packaging Engineered for B2B Performance",
    description: "Every custom box shape requires thoughtful engineering. We don't believe in one-size-fits-all templates. Our team starts with your product's 3D CAD dimensions or physical footprints, selecting the exact paperboard caliper and lock configurations to ensure visual shelf dominance and transit safety.",
    items: [
      {
        icon: "compass",
        title: "CAD Structural Engineering",
        desc: "Our structural packaging engineers draft CAD dielines customized to your products. We optimize crease and score lines to facilitate rapid manual folding or automated factory cartoning line assemblies.",
      },
      {
        icon: "ruler",
        title: "High-Precision Tolerancing",
        desc: "We enforce precise manufacturing tolerances of ±0.5mm. This guarantees that friction locks, tuck flaps, and double-walled containers slot together securely, eliminating loose play or product shifting.",
      },
      {
        icon: "hammer",
        title: "Molded Inserts & Dividers",
        desc: "For multi-component retail or luxury products, we build custom corrugated dividers, SBS partitions, or thermoformed EVA foam inserts to cradle and protect every element within the custom container.",
      },
      {
        icon: "cpu",
        title: "ISTA Drop & Transit Ready",
        desc: "All custom structures undergo digital finite element compression simulations. We ensure your custom shapes withstand vertical stacking pressure and impact hazards during shipping.",
      },
    ],
  },
  styles: {
    tagline: "Structural Variety",
    title: "Available Structural Styles",
    description: "Configure your custom box run into any of our standard structural layouts. We also support custom CAD shape requests tailored to irregular products.",
    items: [
      {
        icon: "box",
        name: "Tuck-Top & Auto-Bottom",
        locks: "Friction-lock top with pre-glued bottom flaps",
        bestFor: "Fast retail assembly lines, light to medium electronics, cosmetic bottles",
        calipers: "16pt - 24pt SBS Paperboard",
        desc: "The standard B2B workhorse. Features a fast-folding automatic bottom lock that snaps into place under light hand pressure, saving valuable packing time.",
      },
      {
        icon: "layout",
        name: "Telescope Box (2-Piece)",
        locks: "Air-suction tray with snug-fitting lid shell",
        bestFor: "Luxury unboxings, electronic devices, premium corporate gifts",
        calipers: "800 - 1500 GSM rigid chipboard wrapped in 120 GSM liner",
        desc: "Comprises an independent base and cover. Standard tolerances are engineered to generate minor air resistance during unboxing, creating an elegant slow-glide feel.",
      },
      {
        icon: "layers",
        name: "Slide Drawer & Sleeve",
        locks: "Inner drawer tray locked inside a rigid sleeve",
        bestFor: "Jewelry presentation boxes, cosmetics, high-end cannabis packaging",
        calipers: "18pt SBS or heavy rigid board configurations",
        desc: "Uses a sliding tray enclosed in a sleeve. Features a pull ribbon or finger notch, providing a tactile unboxing experience that keeps components securely tucked.",
      },
      {
        icon: "package",
        name: "Custom Cardboard Sleeves",
        locks: "Banded sleeve envelope with open ends",
        bestFor: "Frozen food trays, branding unprinted white mailers, apparel bundles",
        calipers: "14pt - 18pt clay-coated Kraft board",
        desc: "Open-ended paper wraps designed to slide over existing containers or products. An extremely cost-effective way to add premium high-end print logos to standard blanks.",
      },
      {
        icon: "maximize2",
        name: "Counter Displays (POP)",
        locks: "Fold-out header card with segmented bottom tray",
        bestFor: "Point-of-purchase retail zones, candy bars, cosmetics testers",
        calipers: "E-Flute corrugated board or heavy 28pt SBS",
        desc: "Shipped flat and converts into a sturdy display shelf with a header card. Engineered to sit at retail checkouts to capture impulse purchases.",
      },
    ],
  },
  materials: {
    tagline: "Substrates",
    title: "Selected Substrates for Custom Runs",
    description: "The substrate determines folding stiffness and graphics contrast. We select and calibrate boards specifically to matches your mechanical load requirements.",
    items: [
      {
        icon: "gem",
        name: "Solid Bleached Sulfate (SBS)",
        thickness: "16pt to 24pt (300-400 GSM)",
        eco: "100% FSC Certified Virgin Fibers",
        properties: "Clay-coated double-sided smooth surface, optimal for luxury cosmetic runs",
        useCase: "Cosmetics, pharmaceutical boxes, retail presentation cartons",
      },
      {
        icon: "leaf",
        name: "Natural Unbleached Kraft",
        thickness: "18pt to 28pt (320-450 GSM)",
        eco: "100% Recycled Post-Consumer Waste (PCR)",
        properties: "Organic raw fibers, high bursting strength, water-based ink friendly",
        useCase: "Eco-conscious retail packaging, organic soap bars, direct-to-consumer goods",
      },
      {
        icon: "shield",
        name: "Premium Grey Rigid Board",
        thickness: "1.2mm to 2.8mm (800-1800 GSM)",
        eco: "100% Recyclable Compressed Paper Waste",
        properties: "Non-bending structural armor, wrapped in decorative art liners",
        useCase: "Luxury gift setups, heavy electronic device packaging, jewelry containers",
      },
      {
        icon: "layers",
        name: "E-Flute Corrugated Board",
        thickness: "1.6mm Flute Depth",
        eco: "85% Recycled Material, FSC Certified Liners",
        properties: "Lightweight sandwich fluting offering high crushing resist pressure",
        useCase: "Heavy retail boxes, subscriptions, industrial part box protectors",
      },
    ],
  },
  printing: {
    tagline: "Graphics Application",
    title: "High-Fidelity Printing Options",
    description: "From short run digital tests to high volume offset litho matching, choose the print methodology that matches your budget and color tolerances.",
    items: [
      {
        icon: "printer",
        name: "Offset Litho-Lamination",
        moq: "1,000 runs",
        setup: "High (Requires metal plates & dies)",
        color: "Pantone PMS matching, 100% CMYK Process",
        bestFor: "Luxury presentation boxes, high-end retail cosmetic cartons",
        desc: "Provides the highest graphic contrast, crisp fine-line text, and seamless color blends. Paper liners are offset printed, laminated to rigid board or E-flute, and then CAD-cut.",
        benefits: ["Museum-quality print output", "Spot UV and foil stamping compatible", "Lowest unit cost at B2B scale"],
      },
      {
        icon: "columns",
        name: "Digital Inkjet Press",
        moq: "100 runs",
        setup: "Zero (No print plates required)",
        color: "Standard high-resolution CMYK Process",
        bestFor: "Market testing, limited-edition promotional gift sets, prototype samples",
        desc: "Prints high-resolution digital files directly onto selected paperboard. Ideal for quick trial runs or varying designs across single product lines without plate setup delays.",
        benefits: ["No initial plate investment", "24-48 hour print turnarounds", "Variable image/text option support"],
      },
      {
        icon: "layers",
        name: "Flexographic Printing",
        moq: "500 runs",
        setup: "Medium (Requires photopolymer plates)",
        color: "1 to 3 spot Pantone colors",
        bestFor: "Corrugated packaging boxes, inner carton shipping labels",
        desc: "Uses rotary rubber plates to apply simple water-based inks directly onto thick fluted corrugated board. Highly efficient for standard branding text, warning logos, and barcodes.",
        benefits: ["Ultra-fast print speeds", "Water-based compostable inks", "Robust ink-to-corrugated bond"],
      },
    ],
  },
  finishes: {
    tagline: "Embellishments",
    title: "Luxury Finishing Options",
    description: "Elevate sensory appeal and structural durability. Embellishments differentiate your custom boxes on store shelving and retail display stands.",
    items: [
      {
        icon: "sun",
        name: "Selective Spot UV",
        visual: "High-gloss glossy reflection against matte varnishes",
        protection: "Excellent defense against shipping friction and moisture",
        desc: "A liquid polymer coating cured under ultra-violet light. Selectively applied over logo details, lettering, or vector patterns to create a glossy, raised tactile feel against a velvet matte card base.",
      },
      {
        icon: "sparkles",
        name: "Hot Foil Stamping",
        visual: "Reflective metallic gold, silver, bronze, or holographics",
        protection: "Extremely durable, scratch-resistant brass die bond",
        desc: "Heat-stamps metallic foils directly into the paper fibers using custom brass dies and precise pressure. Yields a highly reflective luxury finish optimized for high-end consumer products.",
      },
      {
        icon: "paintbrush",
        name: "Soft-Touch Matte Lamination",
        visual: "Velvet tactile touch with zero glare reflections",
        protection: "Completely prevents ink cracking along folded scores",
        desc: "Applies a premium, microscopic plastic film layer onto the printed board. Highly recommended for custom boxes to prevent scuff marks and cracking along structural fold crease lines.",
      },
      {
        icon: "crop",
        name: "Embossing & Debossing",
        visual: "Raised (embossed) or pressed (debossed) 3D details",
        protection: "Permanent substrate fiber compression structural relief",
        desc: "A male-female metal die set presses the paper fibers to raise or depress specific artwork segments. Creates a premium 3D relief that invites potential buyers to touch the packaging.",
      },
    ],
  },
  industries: {
    tagline: "Target Markets",
    title: "Industries Utilizing Custom Boxes",
    description: "Every market has unique mechanical constraints. We engineer custom packages that address regulatory standards while preserving branding fidelity.",
    items: [
      {
        icon: "sparkles",
        name: "Luxury Cosmetics & Skincare",
        requirements: "Sleek rigid setups, soft-touch lamination, gold foil stamps, custom inserts",
        useCase: "Perfume vials, anti-aging serums, cosmetic palettes, premium oils",
        link: "/industries#luxury",
      },
      {
        icon: "cpu",
        name: "Premium Consumer Electronics",
        requirements: "Telescope structural lids, shock-absorbing EVA foam, custom locking flaps",
        useCase: "Smartphones, premium headphones, camera lenses, hardware accessories",
        link: "/industries#tech",
      },
      {
        icon: "shopping-bag",
        name: "B2B Subscription & Retail",
        requirements: "Crush-resistant fluting, double-sided printing, tape strip seal seals",
        useCase: "Apparel presentation boxes, subscription boxes, boutique gift sets",
        link: "/industries#ecommerce",
      },
      {
        icon: "coffee",
        name: "Specialty Food & Spirits",
        requirements: "Grease-resistant barrier liners, bottle divider cell matrices, windows",
        useCase: "Spirits gift bottles, luxury chocolate selections, tea leaf sampler chest",
        link: "/industries#food",
      },
    ],
  },
  gallery: {
    tagline: "Product Gallery",
    title: "Related Packaging Galleries",
    description: "Examine the structural builds of our primary packaging categories. Choose any configuration to view dimensions, print boundaries, and request dielines.",
    items: [
      {
        name: "Rigid Presentation Box",
        img: "/images/rigid_box.png",
        type: "Premium Rigid Chipboard",
        use: "Electronics & Tech Unboxing",
        href: "/products/rigid-boxes",
      },
      {
        name: "Premium Cosmetics Box",
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
    ],
  },
  faq: {
    tagline: "Common Inquiries",
    title: "Custom Packaging FAQ",
    description: "Review detailed specifications regarding structural layout designs, vector dieline guidelines, sample fees, and bulk logistics.",
    items: [
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
    ],
  },
  cta: {
    tagline: "Custom Specification Setup",
    title: "Ready to Configure Your Custom Boxes?",
    description: "Send us your product size boundaries or physical samples. Our packaging engineers will supply fully custom CAD-cut dielines and bulk price sheets within 24 hours.",
    quoteLink: "/quote?product=custom-boxes",
    contactLink: "/contact?request=consultation",
  },
};

// 2. Mailer Boxes Config
const MAILER_BOXES_CONFIG: ProductPageConfig = {
  hero: {
    badge: "E-Commerce & DTC",
    badgeIcon: "mail",
    title: (
      <>
        Mailer Boxes &amp; <br />
        <span className="text-accent">Shipping Cartons</span>
      </>
    ),
    subtitle: "Premium rigid-fold corrugated mailing boxes designed for direct-to-consumer unboxing experiences. Easy assembly, locking flaps, and crush-resistant structures.",
    image: "/images/mailer_box.png",
    moq: "500 Units",
    leadTime: "10 - 12 Days",
    cadTime: "Within 24 Hours",
    ecoStatus: "100% Recyclable",
    benefits: [
      "Dust-flaps prevent trail dirt and logistics debris entry",
      "Double adhesive tape strips and easy tear strips available",
      "E-flute corrugated board optimized for postage weight savings",
    ],
    quoteLink: "/quote?product=mailer-boxes",
    dielineLink: "/contact?request=dieline-mailer",
    modelName: "MB-R02 | E-Flute",
    boardType: "Recycled Bleached White Corrugated",
  },
  overview: {
    tagline: "E-Commerce Standard",
    title: "DTC Unboxing Optimized for Performance",
    description: "Subscription kits and online retail order boxes require structural strength to withstand conveyor drops while presenting a premium unboxing layout. We select lightweight, high edge-crush test fluting to minimize logistics cost.",
    items: [
      {
        icon: "compass",
        title: "CAD Fold Engineering",
        desc: "Designed to fold flat and snap assemble in seconds. Pre-scored lines ensure crisp, parallel folds without tearing or cracking paper fibers.",
      },
      {
        icon: "ruler",
        title: "ECT-32 Strength Minimum",
        desc: "Manufactured to high edge-crush testing (ECT) specifications. Protects shipping contents under compression pressure without bowing.",
      },
      {
        icon: "hammer",
        title: "Inside-Out Print Support",
        desc: "Configure clean white exteriors to survive transport, combined with gorgeous full-color brand graphics printed on the inside walls.",
      },
      {
        icon: "cpu",
        title: "Peel & Seal Upgrades",
        desc: "Upgrade with dual tape seals (one for outbound shipment, one for easy customer returns) and perforated tear openings.",
      },
    ],
  },
  styles: {
    tagline: "Mailer Styles",
    title: "Popular Structural Layouts",
    description: "Choose the standard DTC layout that matches your assembly workflow. All designs support custom sizing down to the millimeter.",
    items: [
      {
        icon: "box",
        name: "Roll End Tuck Top (RETT)",
        locks: "Locking side ears slide into double-wall frames",
        bestFor: "DTC electronics accessories, cosmetic kits, subscription boxes",
        calipers: "E-Flute or B-Flute Corrugated",
        desc: "The classic unboxing design. Side walls fold over to create double-wall protection on the sides, while ear locks secure the top flap without tape.",
      },
      {
        icon: "layout",
        name: "RETT with Dust Flaps",
        locks: "Locking ears + extra interior dust shield flaps",
        bestFor: "Clothing subscription, loose retail items, cosmetic powders",
        calipers: "E-Flute Corrugated",
        desc: "Adds secondary dust flaps to the side margins. Fully seals the box interior to prevent dust and shipping dirt from entering the product cavity.",
      },
      {
        icon: "layers",
        name: "Peel-and-Seal return shipper",
        locks: "Double adhesive strips with tear-strip opening",
        bestFor: "High-end fashion retail, luxury subscription, e-commerce returns",
        calipers: "E-Flute Corrugated (White or Kraft)",
        desc: "Features integrated pressure-sensitive tape lines. Saves assembly tape cost and provides customers with a second tape line for easy return shipping.",
      },
    ],
  },
  materials: {
    tagline: "Substrates",
    title: "Eco-Friendly Corrugated Substrates",
    description: "Our mailers use post-consumer recycled waste fibers combined with virgin outer liners to guarantee robust graphics printability.",
    items: [
      {
        icon: "leaf",
        name: "Natural Kraft Corrugated",
        thickness: "1.6mm (E-Flute) or 3.2mm (B-Flute)",
        eco: "100% Post-Consumer Recycled (PCR) content",
        properties: "Organic raw brown texture, highly resistant to tearing, compostable",
        useCase: "Eco-friendly DTC fashion, organic cosmetics, subscription food packs",
      },
      {
        icon: "gem",
        name: "Bleached White Corrugated",
        thickness: "1.6mm (E-Flute)",
        eco: "FSC Certified Sustainably Sourced Liners",
        properties: "Clay-coated white outer face for high-contrast digital graphics print",
        useCase: "High-end consumer tech packaging, beauty subscription, gift boxes",
      },
    ],
  },
  printing: {
    tagline: "DTC Printing",
    title: "High-Impact Graphic Formats",
    description: "Print bright color fields or minimalist logos inside and outside your boxes. Our color matching systems ensure brand alignment.",
    items: [
      {
        icon: "printer",
        name: "Offset Litho-Lamination",
        moq: "1,000 runs",
        setup: "High (Requires printing plates & lamination)",
        color: "Pantone PMS matching, 100% CMYK Process",
        bestFor: "Luxury retail subscription boxes, e-commerce gift sets",
        desc: "The absolute standard for premium mailers. Liner sheets are offset printed to render sharp details, then laminated onto the corrugated flute backing.",
        benefits: ["Apple-quality graphic resolution", "Spot UV and foil stamping compatible", "Lowest unit cost at large volume scales"],
      },
      {
        icon: "columns",
        name: "Digital Inkjet Press",
        moq: "100 runs",
        setup: "Zero (No print plates needed)",
        color: "High-resolution CMYK Process Inkjet",
        bestFor: "Seasonal promotions, startup DTC trials, prototype mockups",
        desc: "Prints digital files directly onto the board. Perfect for fast multi-variant packaging designs and campaigns without initial tooling investments.",
        benefits: ["No initial plate investment", "Rapid 24-48 hour print schedules", "Full support for variable text/graphics data"],
      },
      {
        icon: "layers",
        name: "Flexographic Printing",
        moq: "500 runs",
        setup: "Medium (Requires photopolymer stamp plates)",
        color: "1 to 3 Spot Pantone Colors",
        bestFor: "Standard outer shipping cartons, subscription shipper boxes",
        desc: "Rotary stamp plates apply water-based inks directly onto the fluted board. Best suited for high-speed, cost-effective outer logo prints.",
        benefits: ["Extremely low production run costs", "Eco-friendly soy-based inks", "High-speed automated packaging output"],
      },
    ],
  },
  finishes: {
    tagline: "Coatings",
    title: "Logistics Proof Embellishments",
    description: "Protect your graphics from scuffing, rain mist, and transport friction with our specialized matte and gloss coatings.",
    items: [
      {
        icon: "paintbrush",
        name: "Scuff-Resistant Matte Varnish",
        visual: "Minimalist satin reflection",
        protection: "Excellent defense against shipping friction and moisture",
        desc: "A thin protective varnish coating that cures to a soft matte. Highly recommended to protect dark ink colors from rubbing off during rough courier shipping.",
      },
      {
        icon: "sun",
        name: "High-Gloss Aqueous Coating",
        visual: "Reflective high-gloss shine",
        protection: "Guards against water mist, scratching, and fingerprints",
        desc: "A water-based, quick-drying protective coat. Enhances the contrast of colorful digital graphics, making e-commerce mailers shine.",
      },
    ],
  },
  industries: {
    tagline: "Markets",
    title: "Industries Served",
    description: "Custom mailers protect delicate consumer products while generating excitement immediately upon arrival at the customer door.",
    items: [
      {
        icon: "shopping-bag",
        name: "Beauty & Cosmetics DTC",
        requirements: "Inside graphics, soft-touch matte sheets, secure folding locks",
        useCase: "Skincare subscription bottles, make-up set collections",
        link: "/industries#luxury",
      },
      {
        icon: "cpu",
        name: "Premium Consumer Tech",
        requirements: "E-flute strength, precise interior CAD inserts, anti-static layers",
        useCase: "Audio earphone boxes, phone accessories, device chargers",
        link: "/industries#tech",
      },
    ],
  },
  gallery: {
    tagline: "Products sitemap",
    title: "Related Packaging Lines",
    description: "Compare other structural boxes to select the ideal thickness, weight limits, and luxury level for your brand.",
    items: [
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
        name: "Folding Retail Carton",
        img: "/images/folding_carton.png",
        type: "FSC Clay-Coated SBS",
        use: "Point-of-Sale Store Shelf",
        href: "/products/folding-cartons",
      },
    ],
  },
  faq: {
    tagline: "Q&A",
    title: "Mailer Box FAQ",
    description: "Have questions about transit safety, dielines, and unboxing customization? Read our detailed responses.",
    items: [
      {
        q: "Are mailer boxes shipped assembled or flat?",
        a: "All corrugated mailer boxes are shipped flat in bulk bundles. This dramatically reduces shipping volumes and warehousing warehouse storage space. They fold together in seconds without glue.",
      },
      {
        q: "Can I print on both the inside and outside of the box?",
        a: "Yes. We offer double-sided printing. A popular luxury configuration is printing a plain unbleached Kraft exterior to ensure shipping security, with a vibrant full-color printed pattern on the inside to delight the customer.",
      },
      {
        q: "What fluting is standard for e-commerce mailers?",
        a: "Our standard mailer boxes are built with E-Flute (1.6mm thickness). It offers the perfect balance: dense cardboard walls for crush protection, a smooth outer surface for crisp graphic prints, and low weight to save mailing costs.",
      },
      {
        q: "Can you add peel-and-seal tape lines and tear opening tabs?",
        a: "Yes. We support custom modifications including inline dual adhesive tape strips (for secure shipping and return packaging) and integrated zipper tear tab strips for easy unboxing.",
      },
    ],
  },
  cta: {
    tagline: "E-Commerce Quote",
    title: "Get Custom Mailer Dielines & Pricing",
    description: "Supply your e-commerce box measurements and color layouts. Our engineers will output structural dielines and bulk estimates within 24 hours.",
    quoteLink: "/quote?product=mailer-boxes",
    contactLink: "/contact?request=mailer-design",
  },
};

// 3. Corrugated Boxes Config
const CORRUGATED_BOXES_CONFIG: ProductPageConfig = {
  hero: {
    badge: "Industrial Logistics",
    badgeIcon: "shield",
    title: (
      <>
        Corrugated Boxes &amp; <br />
        <span className="text-accent">Shipping Cartons</span>
      </>
    ),
    subtitle: "Heavy-duty fluted corrugated shipping containers engineered to absorb logistical shock. Multi-depth slots, high compression limits, and stackability profiles.",
    image: "/images/corrugated_box.png",
    moq: "500 Units",
    leadTime: "10 - 15 Days",
    cadTime: "Within 24 Hours",
    ecoStatus: "100% Recyclable",
    benefits: [
      "Thick multi-layer fluted cores protect heavy B2B cargo load",
      "Regular Slotted Carton (RSC) layouts save board material waste",
      "High ECT rating certified for rough handling and freight logistics",
    ],
    quoteLink: "/quote?product=corrugated-boxes",
    dielineLink: "/contact?request=dieline-corrugated",
    modelName: "CB-RSC01 | BC-DoubleWall",
    boardType: "Recycled Heavy-Duty Kraft Corrugated",
  },
  overview: {
    tagline: "Industrial Strength",
    title: "Logistics Armor Engineered for Freight Stacking",
    description: "Industrial master shippers and freight cargo containers must withstand high vertical stacking weight in warehouse racks and marine transport containers. We calculate edge-crush test parameters to prevent outer walls buckling.",
    items: [
      {
        icon: "compass",
        title: "Edge Crush Test (ECT) Testing",
        desc: "Certified from ECT-32 up to double-wall ECT-48. Proves peak vertical compression load capability for secure multi-level pallet stacking.",
      },
      {
        icon: "ruler",
        title: "Multi-Flute Choices",
        desc: "Configure B-Flute (3.2mm cushion), C-Flute (4.0mm standard shipper), or BC-DoubleWall (6.4mm heavy armor shield) based on product weight.",
      },
      {
        icon: "hammer",
        title: "Flap Overlap Upgrades",
        desc: "Support Full Overlap (FOL) carton styles where outer flaps overlap completely, multiplying bottom-drop seal security.",
      },
      {
        icon: "cpu",
        title: "Automation Compatible",
        desc: "Pre-creased and slotted cuts designed to slot perfectly into case erectors and automatic packaging tape machinery.",
      },
    ],
  },
  styles: {
    tagline: "Slotted Layouts",
    title: "Standard Corrugated Styles",
    description: "Choose the standard slotted box layout that matches your automated cartoning line or hand-assembly speed.",
    items: [
      {
        icon: "box",
        name: "Regular Slotted Carton (RSC)",
        locks: "Outer flaps meet at center line, secure with tape",
        bestFor: "Bulk shipping cartons, master distributors, product shipping",
        calipers: "C-Flute or Double-Wall BC-Flute",
        desc: "The classic shipping container. Outer flaps meet in the center for quick taping. Highly cost-effective as it leaves zero board material waste.",
      },
      {
        icon: "layout",
        name: "Half Slotted Carton (HSC)",
        locks: "Open top carton with slotted bottom flaps",
        bestFor: "Open shelf bin storage, sliding product drawers, moving bins",
        calipers: "B-Flute or C-Flute Corrugated",
        desc: "Features a standard slotted bottom with an open top. Often paired with a separate cover lid or used as storage bins on retail racking systems.",
      },
      {
        icon: "layers",
        name: "Full Overlap Carton (FOL)",
        locks: "Outer flaps slide and overlap the entire width of box",
        bestFor: "Heavy machinery parts, delicate glass items, electronics boxes",
        calipers: "Double-Wall BC-Flute Corrugated",
        desc: "Flaps cover the entire width of the box. Provides triple-layer cardboard protection at the top and bottom fold margins, offering high vertical compression strength.",
      },
    ],
  },
  materials: {
    tagline: "Fluting Materials",
    title: "Structural Corrugated Materials",
    description: "Our shipping cartons utilize robust recycled Kraft liners sandwiched around corrugated wavy flutes.",
    items: [
      {
        icon: "leaf",
        name: "Double-Wall Kraft Core",
        thickness: "6.4mm BC-Flute thickness",
        eco: "100% Recycled Fibers (Unbleached)",
        properties: "Maximum vertical weight limits, absorbs drop vibration impact",
        useCase: "Heavy hardware parts, master cases, automotive logistics",
      },
      {
        icon: "gem",
        name: "Single-Wall C-Flute Kraft",
        thickness: "4.0mm Flute depth",
        eco: "90% Post-Consumer Recycled content",
        properties: "Ideal structural density for general shipping carton needs",
        useCase: "Retail shipping boxes, food crates, e-commerce parcels",
      },
    ],
  },
  printing: {
    tagline: "Logistics Printing",
    title: "Freight Printing Solutions",
    description: "For heavy-duty shippers, high visibility logo placement and barcode readability are crucial. We guarantee clean ink execution.",
    items: [
      {
        icon: "printer",
        name: "Flexographic Printing",
        moq: "500 runs",
        setup: "Medium (Requires photopolymer stamp plates)",
        color: "1 to 3 spot Pantone solid colors",
        bestFor: "Standard outer shipping cartons, subscription shipper boxes",
        desc: "Rotary stamp plates apply water-based inks directly onto the fluted board. Best suited for high-speed, cost-effective outer logo prints.",
        benefits: ["Extremely low production run costs", "Eco-friendly soy-based inks", "High-speed automated packaging output"],
      },
      {
        icon: "columns",
        name: "Digital Inkjet Press",
        moq: "100 runs",
        setup: "Zero (No print plates needed)",
        color: "High-resolution CMYK Process Inkjet",
        bestFor: "Short logistics trials, personalized shipper branding, prototypes",
        desc: "Prints high-resolution digital files directly onto the board. Perfect for seasonal distribution runs without tooling setup charges.",
        benefits: ["No initial plate investment", "Rapid 24-48 hour print schedules", "Full support for variable text/graphics data"],
      },
      {
        icon: "layers",
        name: "Offset Litho-Lamination",
        moq: "1,000 runs",
        setup: "High (Requires printing plates & lamination)",
        color: "Pantone PMS matching, 100% CMYK Process",
        bestFor: "High-end retail club boxes, heavy consumer products",
        desc: "The absolute standard for premium mailers. Liner sheets are offset printed to render sharp details, then laminated onto the corrugated flute backing.",
        benefits: ["Apple-quality graphic resolution", "Spot UV and foil stamping compatible", "Lowest unit cost at large volume scales"],
      },
    ],
  },
  finishes: {
    tagline: "Treatments",
    title: "Industrial Protective Finishes",
    description: "Add structural surface protection to guard against moisture, humidity exposure, and logistics friction.",
    items: [
      {
        icon: "paintbrush",
        name: "Water-Barrier Coatings",
        visual: "Invisible protective layer",
        protection: "Excellent defense against rain moisture and humidity mist",
        desc: "A special water-based coating that prevents humidity from softening the corrugated paper walls. Essential for cargo shipping in tropical climates.",
      },
      {
        icon: "sun",
        name: "Grease-Resistant Barrier Liners",
        visual: "Slightly glossy internal sheen",
        protection: "Prevents oil, grease, and moisture bleed-through",
        desc: "An internal barrier layer designed to repel grease and oils. Prevents cardboard degradation when packing metal parts or food products.",
      },
    ],
  },
  industries: {
    tagline: "Freight Sectors",
    title: "Industries Served",
    description: "Our shipping cartons optimize pallet loading configurations, facilitating fast transport logistics across bulk B2B sectors.",
    items: [
      {
        icon: "coffee",
        name: "Bulk Food & Agricultural Produce",
        requirements: "Insulated fluting, moisture barriers, ventilation hand-slots",
        useCase: "Produce transit crates, frozen food master shippers",
        link: "/industries#food",
      },
      {
        icon: "cpu",
        name: "Heavy Parts & Electronics Shippers",
        requirements: "Double-wall strength, custom internal partitions, ECT-44 standard",
        useCase: "Metal machinery parts, computer screen master cases",
        link: "/industries#tech",
      },
    ],
  },
  gallery: {
    tagline: "Packaging Catalog",
    title: "Related Product Lines",
    description: "Compare other structural boxes to select the ideal thickness, weight limits, and luxury level for your brand.",
    items: [
      {
        name: "Custom Structural Box",
        img: "/images/custom_box.png",
        type: "SBS Paperboard",
        use: "Luxury Retail & Display",
        href: "/products/custom-boxes",
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
    ],
  },
  faq: {
    tagline: "Q&A",
    title: "Corrugated Box FAQ",
    description: "Need details on burst test limits, fluting weights, or pallet setups? Read our detailed responses.",
    items: [
      {
        q: "What is the difference between Single-Wall and Double-Wall board?",
        a: "Single-wall corrugated board has one wavy flute layer sandwiched between two flat linerboards. Double-wall board adds a second wavy flute layer and a third linerboard, which doubles the puncture protection and increases stacking limits.",
      },
      {
        q: "What is an Edge Crush Test (ECT) rating?",
        a: "ECT measures the column compression strength of corrugated board. An ECT-32 rating means the box edge can withstand 32 pounds per inch of compression pressure before collapsing, which is standard for packages weighing up to 40 pounds.",
      },
      {
        q: "Can you supply custom sizes and slotted configurations?",
        a: "Yes. We design corrugated boxes to your exact product dimensions. We can cut hand-holes, include ventilation slots, add scoring lines, and build customized internal partitions.",
      },
      {
        q: "Are corrugated cartons fully recyclable and biodegradable?",
        a: "Yes. Our kraft corrugated boards are manufactured with up to 100% post-consumer recycled paper pulp. They are completely recyclable, biodegradable, and printed using eco-friendly water-based inks.",
      },
    ],
  },
  cta: {
    tagline: "Freight Quote",
    title: "Request Slotted Carton Dielines & Estimates",
    description: "Provide your cargo weight limits and transit dimensions. Our packaging engineers will supply custom dielines and pricing within 24 hours.",
    quoteLink: "/quote?product=corrugated-boxes",
    contactLink: "/contact?request=corrugated-design",
  },
};

// 4. Folding Cartons Config
const FOLDING_CARTONS_CONFIG: ProductPageConfig = {
  hero: {
    badge: "Retail & Consumer Goods",
    badgeIcon: "layout",
    title: (
      <>
        Folding Cartons &amp; <br />
        <span className="text-accent">Retail Packaging</span>
      </>
    ),
    subtitle: "Lightweight, clay-coated SBS paperboard cartons engineered to pop on retail storefront shelving. Versatile folding flaps, snap bottoms, and high-resolution graphics.",
    image: "/images/folding_carton.png",
    moq: "1,000 Units",
    leadTime: "10 - 15 Days",
    cadTime: "Within 24 Hours",
    ecoStatus: "FSC Certified",
    benefits: [
      "Folds completely flat to minimize warehouse shipping and storage space",
      "Sleek clay-coated surface optimizes high-contrast offset lithography",
      "Interlocking tuck flaps support rapid automated machinery cartoning lines",
    ],
    quoteLink: "/quote?product=folding-cartons",
    dielineLink: "/contact?request=dieline-folding",
    modelName: "FC-T03 | ReverseTuck",
    boardType: "18pt SBS Premium Paperboard",
  },
  overview: {
    tagline: "Retail Excellence",
    title: "Vibrant Color Display Engineered for Store Shelves",
    description: "Retail product cartons demand extreme print registration accuracy and clean, dust-free edges. We utilize premium solid bleached sulfate paperboards that fold without scoring-line cracking, keeping retail boxes looking fresh.",
    items: [
      {
        icon: "compass",
        title: "Tuck-End Locking Variations",
        desc: "Configure Straight Tuck (clean presentation face) or Reverse Tuck (maximum production material yield) flap systems.",
      },
      {
        icon: "ruler",
        title: "Caliper Calibration",
        desc: "We balance board thickness (from 16pt up to 28pt) to match product load weights, ensuring walls do not bulge under pressure.",
      },
      {
        icon: "hammer",
        title: "Fast-Setup Bottoms",
        desc: "Select Snap-Lock (manually locked bottom) or Crash-Lock (pre-glued bottom that snaps open automatically) for rapid loading.",
      },
      {
        icon: "cpu",
        title: "High-Speed Running",
        desc: "Coated surfaces and precise die-cuts are optimized to run smoothly on high-speed automated packaging machinery line systems.",
      },
    ],
  },
  styles: {
    tagline: "Carton Layouts",
    title: "Popular Retail Styles",
    description: "Choose the standard paperboard layout that matches your automated packaging workflow or manual packing speed.",
    items: [
      {
        icon: "box",
        name: "Reverse Tuck End (RTE)",
        locks: "Top flap folds back, bottom flap folds forward",
        bestFor: "Cosmetic creams, small pharmaceuticals, dry food packaging",
        calipers: "16pt - 22pt SBS Paperboard",
        desc: "The standard B2B choice. The top and bottom flaps fold in opposite directions, allowing boxes to lock together on layout sheets to minimize paper waste.",
      },
      {
        icon: "layout",
        name: "Snap-Lock Bottom",
        locks: "Four overlapping bottom flaps lock together manually",
        bestFor: "Heavier retail items, perfume bottles, liquor bottles",
        calipers: "18pt - 24pt SBS Paperboard",
        desc: "Features a standard tuck top with four interlocking bottom flaps that seal together under light pressure, offering extra support for heavier items.",
      },
      {
        icon: "layers",
        name: "Crash-Lock Bottom",
        locks: "Pre-glued bottom flaps automatically snap into place",
        bestFor: "High-volume packaging lines, electronic items, retail gifts",
        calipers: "18pt - 24pt SBS or Kraft Paperboard",
        desc: "The fastest manual assembly style. The bottom flaps are pre-glued. When the flat carton is pressed open, the bottom folds automatically lock into position.",
      },
    ],
  },
  materials: {
    tagline: "Retail Substrates",
    title: "Premium Retail Paperboards",
    description: "Our folding cartons use FSC-certified boards clay-coated on one or both sides to guarantee vivid colors.",
    items: [
      {
        icon: "gem",
        name: "Solid Bleached Sulfate (SBS)",
        thickness: "16pt to 24pt (300-400 GSM)",
        eco: "FSC Certified Sustainably Sourced Virgin Pulp",
        properties: "Double clay-coated surface, ultimate brightness for cosmetics",
        useCase: "Luxury beauty packaging, premium dry food, electronics boxes",
      },
      {
        icon: "leaf",
        name: "Coated Recycled Board (CRB)",
        thickness: "18pt to 26pt (320-450 GSM)",
        eco: "100% Recycled Fibers, FSC Certified",
        properties: "Clay-coated white top face with clean grey recycled back",
        useCase: "General retail goods, toy boxes, pharmaceutical hardware",
      },
    ],
  },
  printing: {
    tagline: "Fine Art Print",
    title: "High-Fidelity Retail Printing",
    description: "Ensure your branding stands out on competitive retail shelves with exact color reproduction and sharp graphics.",
    items: [
      {
        icon: "printer",
        name: "Offset Lithography",
        moq: "1,000 runs",
        setup: "High (Requires custom printing plates)",
        color: "Pantone PMS matching, 100% CMYK Process",
        bestFor: "Luxury folding retail cartons, premium cosmetics",
        desc: "Standard method for folding cartons. High-resolution ink cylinders transfer graphics to paperboard for rich, sharp details.",
        benefits: ["Apple-quality graphic resolution", "Foil and spot varnish compatible", "Lowest unit cost at large volume scales"],
      },
      {
        icon: "columns",
        name: "Digital Inkjet Press",
        moq: "100 runs",
        setup: "Zero (No print plates needed)",
        color: "High-resolution CMYK Process Inkjet",
        bestFor: "Limited retail editions, seasonal promotions, prototype samples",
        desc: "Prints high-resolution digital files directly onto clay-coated board. Excellent for fast multi-variant packaging designs without setup fees.",
        benefits: ["No initial plate investment", "Rapid 24-48 hour print schedules", "Full support for variable text/graphics data"],
      },
      {
        icon: "layers",
        name: "Flexographic Printing",
        moq: "1,000 runs",
        setup: "Medium (Requires photopolymer stamp plates)",
        color: "1 to 2 Spot Pantone Colors",
        bestFor: "Simple retail cartons, high-volume inner packaging components",
        desc: "Rotary stamp plates apply water-based inks directly onto folding boards. Best suited for high-speed, cost-effective outer logo prints.",
        benefits: ["Extremely low production run costs", "Eco-friendly soy-based inks", "High-speed automated packaging output"],
      },
    ],
  },
  finishes: {
    tagline: "Embellish",
    title: "Luxury Retail Embellishments",
    description: "Make your retail carton pop with glossy varnishes, metallic foil accents, and dimensional 3D embossing.",
    items: [
      {
        icon: "sparkles",
        name: "Hot Foil Stamping",
        visual: "Reflective metallic gold, silver, or bronze detailing",
        protection: "Highly durable bond, scratch-resistant",
        desc: "Heat-stamps metallic foil onto the paper fibers using custom brass dies and precise pressure. Yields a highly reflective luxury finish.",
      },
      {
        icon: "sun",
        name: "Spot UV Gloss Varnish",
        visual: "Glossy reflection contrasted against matte base coat",
        protection: "Protects printed areas from smudging and fingerprints",
        desc: "A liquid polymer coating cured under ultra-violet light. Selectively applied over logo details to create a glossy, tactile contrast.",
      },
    ],
  },
  industries: {
    tagline: "Retail Markets",
    title: "Industries Served",
    description: "Folding cartons provide a cost-effective, high-visibility packaging solution for a wide range of retail sectors.",
    items: [
      {
        icon: "shopping-bag",
        name: "Premium Skincare & Cosmetics",
        requirements: "Inside graphics, soft-touch matte sheets, secure folding locks",
        useCase: "Skincare subscription bottles, make-up set collections",
        link: "/industries#luxury",
      },
      {
        icon: "coffee",
        name: "Retail Food & Gourmet Confections",
        requirements: "FDA-compliant grease barriers, window cutouts, snap bottoms",
        useCase: "Gourmet tea bags, luxury chocolate selection boxes",
        link: "/industries#food",
      },
    ],
  },
  gallery: {
    tagline: "Products Catalog",
    title: "Related Product Lines",
    description: "Compare other structural boxes to select the ideal thickness, weight limits, and luxury level for your brand.",
    items: [
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
        name: "Direct Mailer Box",
        img: "/images/mailer_box.png",
        type: "E-Flute Corrugated",
        use: "E-Commerce Logistics",
        href: "/products/mailer-boxes",
      },
    ],
  },
  faq: {
    tagline: "Q&A",
    title: "Folding Carton FAQ",
    description: "Have questions about board thickness, window cuts, or automated filling lines? Read our detailed responses.",
    items: [
      {
        q: "What paperboard thickness is standard for retail folding cartons?",
        a: "Our standard retail folding cartons are built with 18pt SBS paperboard. It offers the perfect balance: dense walls for structure, a smooth clay-coated surface for crisp offset prints, and low weight to minimize freight costs.",
      },
      {
        q: "What is the difference between straight tuck and reverse tuck?",
        a: "Straight tuck folding cartons fold from the back to the front, which hides raw cut edges from the front view for a cleaner retail face. Reverse tuck cartons fold in opposite directions, which allows for tighter nesting on paperboard sheets during manufacturing to minimize waste.",
      },
      {
        q: "Can you include clear plastic windows in folding cartons?",
        a: "Yes. We support custom die-cut windows with clear PET/PVC plastic film laminated to the inside wall, allowing shoppers to see the product on retail shelves.",
      },
      {
        q: "Are folding cartons suitable for packaging food?",
        a: "Yes. We offer FDA-approved paperboards and food-grade grease-resistant coatings specifically designed for direct contact packaging of confections, bakery items, dry grains, and tea collections.",
      },
    ],
  },
  cta: {
    tagline: "Retail Quote",
    title: "Configure Retail Carton Dielines & Pricing",
    description: "Supply your retail package dimensions and color layouts. Our packaging engineers will supply custom dielines and pricing within 24 hours.",
    quoteLink: "/quote?product=folding-cartons",
    contactLink: "/contact?request=carton-design",
  },
};

// 5. Rigid Boxes Config
const RIGID_BOXES_CONFIG: ProductPageConfig = {
  hero: {
    badge: "Ultra Luxury Setup Packaging",
    badgeIcon: "gem",
    title: (
      <>
        Rigid Boxes &amp; <br />
        <span className="text-accent">Luxury Setup Packs</span>
      </>
    ),
    subtitle: "High-density setup packaging wrapped in textured papers. Apple-quality slow-glide lid suction, concealed magnetic hinges, and non-bending board cores.",
    image: "/images/rigid_box.png",
    moq: "500 Units",
    leadTime: "12 - 18 Days",
    cadTime: "Within 24 Hours",
    ecoStatus: "90% Recycled Chipboard",
    benefits: [
      "Concealed neodymium magnetic hinges snap shut with a tactile click",
      "Apple-quality slow-glide lid suction engineered to high B2B tolerances",
      "Stiff 1200 GSM compressed board does not bend, protecting fragile goods",
    ],
    quoteLink: "/quote?product=rigid-boxes",
    dielineLink: "/contact?request=dieline-rigid",
    modelName: "RB-M01 | MagneticLid",
    boardType: "1200 GSM Chipboard + 120 GSM Embossed Wrap",
  },
  overview: {
    tagline: "Luxury Engineering",
    title: "Hand-Finished Premium Setup Boxes",
    description: "Premium gift presentation packaging requires solid chipboard walls wrapped in specialty fine papers. Rigid setup boxes are shipped fully formed, maintaining their 3D shape with exact structural margins for high-end retail.",
    items: [
      {
        icon: "compass",
        title: "Magnetic Snap Closures",
        desc: "Configure hidden neodymium magnets in the lid flap and base front, yielding a crisp, satisfying tactile click upon closing.",
      },
      {
        icon: "ruler",
        title: "Telescope Vacuum Air Locks",
        desc: "We calibrate dimensions to generate a slight air buffer as the lid slides down the base, creating a luxurious slow-glide reveal.",
      },
      {
        icon: "hammer",
        title: "Ribbon & Pull-Tab Notches",
        desc: "Add custom satin pull ribbons, thumb notches, or sliding drawers to enhance unboxing accessibility for delicate jewelry.",
      },
      {
        icon: "cpu",
        title: "Internal Custom Fitments",
        desc: "Cradle valuable items with laser-cut EVA foam trays, velvet vac-trays, or custom SBS cardboard divider cells.",
      },
    ],
  },
  styles: {
    tagline: "Rigid Layouts",
    title: "Available Setup Styles",
    description: "Choose the premium rigid structure that aligns with your retail target. We assist in matching board density to your product weight.",
    items: [
      {
        icon: "box",
        name: "Concealed Magnetic Hinged Lid",
        locks: "Hidden neodymium magnetic snap shut",
        bestFor: "Luxury watches, premium smartphones, cosmetics presentation kits",
        calipers: "1200 GSM rigid board core wrapped in textured art paper",
        desc: "A book-like folding structure. Hinged top lid folds over the side and locks securely to the front panel using integrated, hidden magnets.",
      },
      {
        icon: "layout",
        name: "Lid & Base Telescope Box",
        locks: "Perfect air vacuum slide resistance",
        bestFor: "Tech device boxes, luxury confectionery, premium stationery sets",
        calipers: "1000 - 1500 GSM rigid board wrapped in 120 GSM linen paper",
        desc: "Classic two-piece setup box. Outer lid covers base tray completely or partially, offering a slow-glide unboxing reveal.",
      },
      {
        icon: "layers",
        name: "Sliding Drawer Setup Box",
        locks: "Satin pull ribbon drawer guide",
        bestFor: "Luxury jewelry, skincare vials, boutique chocolates",
        calipers: "1200 GSM rigid drawer tray inside double-wall rigid sleeve",
        desc: "Rigid sliding drawer tray fitted with a satin ribbon pull. Slides smoothly out from a matching rigid sleeve shroud.",
      },
    ],
  },
  materials: {
    tagline: "Luxury Liners",
    title: "Rigid Boards & Fine Paper Wraps",
    description: "Rigid boxes combine a dense recycled chipboard core with custom wrapping paper liners to deliver a premium feel.",
    items: [
      {
        icon: "shield",
        name: "High-Density Grey Chipboard",
        thickness: "1.2mm to 2.8mm (800-1800 GSM)",
        eco: "100% Post-Consumer Recycled Paper Waste",
        properties: "Provides solid, non-bending support and thick edges",
        useCase: "Structural core for all premium rigid setup boxes",
      },
      {
        icon: "gem",
        name: "Textured Paper Wrap Liners",
        thickness: "120 GSM to 150 GSM fine paper",
        eco: "FSC Certified Sustainably Sourced Kraft",
        properties: "Linen textures, matte coatings, metallic fibers, deep colors",
        useCase: "Glued to chipboard core to create interior and exterior box faces",
      },
    ],
  },
  printing: {
    tagline: "Fine Art Graphics",
    title: "High-End Luxury Printing",
    description: "Specialty paper wraps require specialized ink calibration to maintain texture while delivering rich, registration-aligned graphics.",
    items: [
      {
        icon: "printer",
        name: "Offset Lithography",
        moq: "500 runs",
        setup: "High (Requires custom printing plates)",
        color: "Pantone PMS matching, 100% CMYK Process",
        bestFor: "Luxury setup boxes, printed fine paper wrap liners",
        desc: "Standard method for printing textured or smooth paper wraps. Delivers exact color matches and clean gradients for high-end retail.",
        benefits: ["Apple-quality graphic resolution", "Spot UV and foil stamping compatible", "Lowest unit cost at B2B scale"],
      },
      {
        icon: "columns",
        name: "Digital Inkjet Press",
        moq: "100 runs",
        setup: "Zero (No print plates needed)",
        color: "High-resolution CMYK Process Inkjet",
        bestFor: "Limited retail editions, seasonal promotions, prototype samples",
        desc: "Prints high-resolution digital files directly onto wrap liners. Perfect for quick seasonal runs without setup fees.",
        benefits: ["No initial plate investment", "Rapid 24-48 hour print schedules", "Full support for variable text/graphics data"],
      },
      {
        icon: "layers",
        name: "Flexographic Printing",
        moq: "1,000 runs",
        setup: "Medium (Requires photopolymer stamp plates)",
        color: "1 to 2 Spot Pantone Colors",
        bestFor: "Simple retail cartons, high-volume inner packaging components",
        desc: "Rotary stamp plates apply water-based inks directly onto folding boards. Best suited for high-speed, cost-effective outer logo prints.",
        benefits: ["Extremely low production run costs", "Eco-friendly soy-based inks", "High-speed automated packaging output"],
      },
    ],
  },
  finishes: {
    tagline: "Embellishment",
    title: "Artisan Luxury Finishes",
    description: "Transform your box into a retail collector's item with spot gloss highlights, metallic leaf stamping, and deep embossing.",
    items: [
      {
        icon: "sparkles",
        name: "Hot Foil Leaf Stamping",
        visual: "Reflective metallic gold, silver, copper, or rose gold",
        protection: "Highly durable bond, zero peeling",
        desc: "Heat-stamps metallic foil onto the paper fibers using custom brass dies and precise pressure. Yields a highly reflective luxury finish.",
      },
      {
        icon: "sun",
        name: "Selective Spot UV",
        visual: "Glossy reflection contrasted against matte base coat",
        protection: "Protects printed areas from smudging and fingerprints",
        desc: "A liquid polymer coating cured under ultra-violet light. Selectively applied over logo details to create a glossy, tactile contrast.",
      },
    ],
  },
  industries: {
    tagline: "Luxury Sectors",
    title: "Industries Served",
    description: "Our rigid setup boxes are chosen by leading consumer brands to elevate retail gift sets and premium electronics.",
    items: [
      {
        icon: "cpu",
        name: "Premium Consumer Tech",
        requirements: "Telescope lids, customized EVA foam slots, anti-static trays",
        useCase: "Smartphones, premium headphones, device accessories",
        link: "/industries#tech",
      },
      {
        icon: "shopping-bag",
        name: "Luxury Cosmetics & Jewelry",
        requirements: "Magnetic flap closures, velvet wraps, hot foil stamps",
        useCase: "Perfume presentation cases, jewelry boxes, skincare sets",
        link: "/industries#luxury",
      },
    ],
  },
  gallery: {
    tagline: "Products Catalog",
    title: "Related Product Lines",
    description: "Compare other structural boxes to select the ideal thickness, weight limits, and luxury level for your brand.",
    items: [
      {
        name: "Custom Structural Box",
        img: "/images/custom_box.png",
        type: "SBS Paperboard",
        use: "Luxury Retail & Display",
        href: "/products/custom-boxes",
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
    ],
  },
  faq: {
    tagline: "Q&A",
    title: "Rigid Box FAQ",
    description: "Have questions about board density, freight setup, or custom wrapping papers? Read our detailed responses.",
    items: [
      {
        q: "Are rigid boxes shipped flat or fully assembled?",
        a: "Rigid setup boxes are shipped fully assembled (formed) to preserve their structural shape and hand-finished wrap integrity. This requires more storage space during shipping and warehousing compared to folding cartons, but saves manual packing time.",
      },
      {
        q: "Can we add magnetic closures to any rigid box style?",
        a: "Yes. Magnetic closures are popular on hinged-lid boxes. We conceal neodymium magnets inside the front lip of the chipboard wall during wrapping, providing a clean appearance and satisfying snap closure.",
      },
      {
        q: "What paper wrap choices do you support?",
        a: "We offer hundreds of fine paper wrap options. Choose from textured linen papers, soft-touch matte papers, metallic foil sheets, unbleached brown kraft wraps, or custom full-color printed art papers.",
      },
      {
        q: "What is your typical manufacturing lead time for rigid boxes?",
        a: "Standard B2B lead times for rigid boxes are 12 to 18 business days. This is due to the hand-finished wrap application, magnetic integration, and custom foam tooling setup.",
      },
    ],
  },
  cta: {
    tagline: "Luxury Quote",
    title: "Configure Custom Rigid Boxes & Liners",
    description: "Provide your dimensions and color layouts. Our packaging engineers will supply custom dielines and pricing within 24 hours.",
    quoteLink: "/quote?product=rigid-boxes",
    contactLink: "/contact?request=rigid-design",
  },
};

// Map of statically defined product templates for rapid retrieval
const PRODUCT_TEMPLATES_MAP: Record<string, ProductPageConfig> = {
  "custom-boxes": CUSTOM_BOXES_CONFIG,
  "mailer-boxes": MAILER_BOXES_CONFIG,
  "corrugated-boxes": CORRUGATED_BOXES_CONFIG,
  "folding-cartons": FOLDING_CARTONS_CONFIG,
  "rigid-boxes": RIGID_BOXES_CONFIG,
};

// Fallback configuration builder that dynamically crafts custom packaging data
function generateFallbackConfig(type: "products" | "materials" | "styles", slug: string): ProductPageConfig {
  const formattedName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Registry of specific custom category images to display if they exist
  const CUSTOM_CATEGORY_IMAGES: Record<string, string> = {
    "custom-boxes": "/images/custom_box.png",
    "mailer-boxes": "/images/mailer_box.png",
    "corrugated-boxes": "/images/corrugated_box.png",
    "folding-cartons": "/images/folding_carton.png",
    "rigid-boxes": "/images/rigid_box.png",
    "cosmetic-boxes": "/images/cosmetic_box.png",
  };

  const defaultImage = CUSTOM_CATEGORY_IMAGES[slug] || "/images/placeholder_packaging.png";


  const badgeMap = {
    products: "Product Catalog",
    materials: "Packaging Material",
    styles: "Packaging Style",
  };

  const badgeIconMap = {
    products: "package",
    materials: "leaf",
    styles: "layout",
  };

  const titlePrefix = type === "materials" ? "Premium " : "Custom ";

  return {
    hero: {
      badge: badgeMap[type] || "Custom Solution",
      badgeIcon: badgeIconMap[type] || "package",
      title: (
        <>
          {titlePrefix} <br />
          <span className="text-accent">{formattedName}</span>
        </>
      ),
      subtitle: `Sustainably sourced B2B ${formattedName} solutions engineered to fit your specific product dimensions. Configure print coatings, board calipers, and vector CAD dielines with our structural packaging specialists.`,
      image: defaultImage,
      moq: type === "materials" ? "1,000 Sq Ft" : "500 Units",
      leadTime: "10 - 15 Days",
      cadTime: "Within 24 Hours",
      ecoStatus: "FSC Certified",
      benefits: [
        `CAD dielines drafted specifically for ${formattedName} sizes`,
        "Supports Spot UV, hot foil stamp, and soft-touch matte coats",
        "Manufactured with up to 100% post-consumer recycled pulp board",
      ],
      quoteLink: `/quote?type=${type}&category=${slug}`,
      dielineLink: `/contact?request=dieline-${slug}`,
      modelName: `${slug.substring(0, 2).toUpperCase()}-${type.substring(0, 1).toUpperCase()}01`,
      boardType: type === "materials" ? `${formattedName} Substrate` : "Industrial Recyclable Cardstock",
    },
    overview: {
      tagline: "Engineering Specs",
      title: `Precision Engineered ${formattedName} Layouts`,
      description: `We build ${formattedName} to match your shipping stresses and branding goals. Every run undergoes ISTA transit simulations to verify compression limits, drop cushioning, and shelf dominance.`,
      items: [
        {
          icon: "compass",
          title: "CAD Layout Design",
          desc: "Our structural design team drafts custom vector dielines tailored to your products, ensuring fold tabs slot together cleanly.",
        },
        {
          icon: "ruler",
          title: "Exact Tolerances",
          desc: "Every cut is executed within ±0.5mm accuracy limits. This prevents loose packaging play and safeguards components in transit.",
        },
        {
          icon: "hammer",
          title: "Custom Protective Inserts",
          desc: "Integrate matching cardstock cells, SBS partitions, or shock-absorbent EVA foam inserts molded to product outlines.",
        },
        {
          icon: "cpu",
          title: "Automated Line Ready",
          desc: "Scored margins and flap locks are engineered to run seamlessly on manual packing tables or automated cartoning lines.",
        },
      ],
    },
    styles: {
      tagline: "Styles & Shapes",
      title: `${formattedName} Structural Variations`,
      description: `Choose the locking structure that fits your unboxing goals. We customize templates to lock your products firmly in place.`,
      items: [
        {
          icon: "box",
          name: `${formattedName} Tuck End`,
          locks: "Friction tuck with locking side tabs",
          bestFor: "Retail display items, lightweight cosmetics, tech hardware",
          calipers: "16pt - 24pt Bleached SBS Board",
          desc: "Classic tuck closure. Straightforward to assemble, folds flat to save storage space, and offers excellent branding surfaces.",
        },
        {
          icon: "layout",
          name: `${formattedName} Slide Drawer`,
          locks: "Inner sliding tray with ribbon tab pull",
          bestFor: "Jewelry presentation boxes, vape cartridges, high-end gift sets",
          calipers: "1000 GSM rigid chipboard wraps",
          desc: "Includes an outer protective shroud sleeve and an inner sliding drawer. Tactile unboxing appeal optimized for luxury retail.",
        },
        {
          icon: "layers",
          name: `${formattedName} Master Shipper`,
          locks: "Interlocking slotted bottom flaps",
          bestFor: "Freight logistics, master cases, online store distribution",
          calipers: "Single-wall C-Flute or Double-wall BC-Flute",
          desc: "Heavy-duty fluted shipping box designed to stand up to stacking pressure on warehouse pallets.",
        },
      ],
    },
    materials: {
      tagline: "Compatible Substrates",
      title: `Recommended Substrates for ${formattedName}`,
      description: "Match your design with a substrate that delivers the necessary structural load strength and graphic contrast.",
      items: [
        {
          icon: "gem",
          name: "Solid Bleached Sulfate (SBS)",
          thickness: "18pt - 24pt (320-400 GSM)",
          eco: "FSC Certified Sustainably Sourced Virgin Pulp",
          properties: "Clay-coated double-sided smooth surface, optimal for luxury cosmetic runs",
          useCase: "Cosmetics, pharmaceutical boxes, retail presentation cartons",
        },
        {
          icon: "leaf",
          name: "Natural Kraft Cardstock",
          thickness: "18pt - 26pt (300-420 GSM)",
          eco: "100% Recycled Fibers, FSC Certified",
          properties: "Organic raw brown texture, highly resistant to tearing, compostable",
          useCase: "Eco-conscious retail packaging, organic soap bars, direct-to-consumer goods",
        },
      ],
    },
    printing: {
      tagline: "Graphic Prints",
      title: "Vivid Graphics Application",
      description: "Select the printing method that matches your run volume, color spectrum goals, and plate setup budget.",
      items: [
        {
          icon: "printer",
          name: "High-Fidelity Offset Lithography",
          moq: "1,000 units",
          setup: "High (Metal printing plates required)",
          color: "Pantone PMS matching, full CMYK Process",
          bestFor: "Retail consumer goods, high-resolution branding",
          desc: "Transfers ink from plates to paperboard. Delivers sharp fine lines, seamless gradients, and exact color matching.",
          benefits: ["Apple-quality printing registration", "Foil stamp and spot UV compatible", "Lowest unit cost at B2B scale"],
        },
        {
          icon: "columns",
          name: "Digital Inkjet Press",
          moq: "100 units",
          setup: "Zero plate fees",
          color: "CMYK Process Inkjet",
          bestFor: "Seasonal campaigns, prototyping runs, short trials",
          desc: "Prints high-resolution digital files directly onto substrates. Perfect for rapid trial batches without setup delays.",
          benefits: ["No initial plate investment", "24-48 hour print turnarounds", "Variable image/text option support"],
        },
      ],
    },
    finishes: {
      tagline: "Coatings",
      title: "Premium Finish Enhancements",
      description: "Enhance surface friction protection and unboxing textures with our coating laminates and metallic leaf stamping.",
      items: [
        {
          icon: "paintbrush",
          name: "Soft-Touch Matte Lamination",
          visual: "Glare-free velvet texture feel",
          protection: "Completely prevents ink cracking along folded score lines",
          desc: "Applies a microscopic film layer to the board, preventing scuffs during transport and preserving dark colors.",
        },
        {
          icon: "sun",
          name: "Spot Gloss UV Varnish",
          visual: "Glossy reflection contrasted against matte base",
          protection: "Fingerprint and moisture resistant",
          desc: "A liquid polymer layer cured with ultra-violet light. Selectively applied over logo details to highlight branding reflections.",
        },
      ],
    },
    industries: {
      tagline: "B2B Markets",
      title: `Industries served by ${formattedName}`,
      description: `We adapt ${formattedName} configurations to meet safety and transport compliance parameters across diverse industries.`,
      items: [
        {
          icon: "shopping-bag",
          name: "Consumer Goods & Retail",
          requirements: "High print registration, window cutouts, quick hand assembly",
          useCase: "Apparel presentation boxes, shelf goods, toys, accessories",
          link: "/industries#ecommerce",
        },
        {
          icon: "cpu",
          name: "Consumer Electronics & Tech",
          requirements: "Custom protective fitments, structural edge armor, clear labels",
          useCase: "Hardware components, chargers, device boxes",
          link: "/industries#tech",
        },
      ],
    },
    gallery: {
      tagline: "Packaging Catalog",
      title: "Related Packaging Lines",
      description: "Compare other structural boxes to select the ideal thickness, weight limits, and luxury level for your brand.",
      items: [
        {
          name: "Custom Structural Box",
          img: "/images/custom_box.png",
          type: "SBS Paperboard",
          use: "Luxury Retail & Display",
          href: "/products/custom-boxes",
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
      ],
    },
    faq: {
      tagline: "Q&A",
      title: `${formattedName} Inquiries`,
      description: "Have questions about ordering custom runs? Review our answers to standard bulk inquiries.",
      items: [
        {
          q: `Can I get a custom CAD dieline for ${formattedName}?`,
          a: "Yes. Once you supply the length, width, and height of your product, our CAD engineering team generates a 2D vector layout template in Illustrator, PDF, or DXF formats within 24 hours.",
        },
        {
          q: "What is your standard production lead time?",
          a: "Production runs typically complete within 10 to 15 business days following digital artwork proof approval. Rush schedules of 5 to 7 days are supported based on material stock.",
        },
      ],
    },
    cta: {
      tagline: "Configure Quote",
      title: `Start Your Custom ${formattedName} Run`,
      description: "Provide your dimensions and color layouts. Our packaging engineers will supply custom dielines and pricing within 24 hours.",
      quoteLink: `/quote?product=${slug}`,
      contactLink: `/contact?request=${slug}-design`,
    },
  };
}

// Centralized dynamic configuration lookup
export function getCategoryConfig(
  type: "products" | "materials" | "styles",
  slug: string
): ProductPageConfig {
  // Return statically declared configs if they exist
  if (type === "products" && PRODUCT_TEMPLATES_MAP[slug]) {
    return PRODUCT_TEMPLATES_MAP[slug];
  }

  // Fallback to dynamic configuration builder for all 50+ categories
  return generateFallbackConfig(type, slug);
}

export const PRODUCT_CATEGORIES = [
  // Core Products
  { slug: "custom-boxes", name: "Custom Boxes", desc: "Tailored dimensions and branding options." },
  { slug: "mailer-boxes", name: "Mailer Boxes", desc: "Perfect for e-commerce and retail subscription." },
  { slug: "corrugated-boxes", name: "Corrugated Boxes", desc: "Heavy-duty shipping boxes for heavy goods." },
  { slug: "folding-cartons", name: "Folding Cartons", desc: "Premium retail cartons and product boxes." },
  { slug: "rigid-boxes", name: "Rigid Boxes", desc: "Luxury packaging for premium presentation." },
  { slug: "cosmetic-boxes", name: "Cosmetic Boxes", desc: "Chic custom finishes, gold foil stamps, and soft-touch mattes." },
  // Industry Categories
  { slug: "apparel", name: "Apparel Packaging", desc: "Custom apparel boxes, retail garment packaging, and bags." },
  { slug: "auto-parts", name: "Auto Parts Packaging", desc: "Heavy-duty custom boxes for automotive components." },
  { slug: "bottle", name: "Bottle Packaging", desc: "Engineered box inserts and packaging for bottles." },
  { slug: "candle", name: "Candle Packaging", desc: "Premium custom candle boxes and retail displays." },
  { slug: "cbd", name: "CBD Packaging", desc: "Sleek retail boxes for CBD oils, gummies, and creams." },
  { slug: "chocolate", name: "Chocolate Packaging", desc: "Luxury chocolate gift boxes and custom trays." },
  { slug: "christmas", name: "Christmas Packaging", desc: "Festive custom holiday packaging and gift sets." },
  { slug: "cigarette", name: "Cigarette Packaging", desc: "Precision custom cardboard boxes for tobacco and cigarettes." },
  { slug: "coffee", name: "Coffee Packaging", desc: "Custom coffee bags, subscription boxes, and cartons." },
  { slug: "cosmetic", name: "Cosmetic Packaging", desc: "Premium retail makeup and beauty cosmetic boxes." },
  { slug: "electronics", name: "Electronics Packaging", desc: "Concealed magnetic rigid setup boxes for premium devices." },
  { slug: "food", name: "Food Packaging", desc: "FDA-compliant paperboards and food-grade grease barriers." },
  { slug: "gift", name: "Gift Packaging", desc: "Elegant rigid gift setup boxes and custom bags." },
  { slug: "hardware", name: "Hardware Packaging", desc: "Durable custom cartons for tools, screws, and parts." },
  { slug: "health", name: "Health Packaging", desc: "Secure packaging solutions for health and wellness products." },
  { slug: "hemp", name: "Hemp Packaging", desc: "Eco-friendly custom paperboard packaging for hemp items." },
  { slug: "holiday", name: "Holiday Packaging", desc: "Themed holiday gift packaging and custom boxes." },
  { slug: "jewelry", name: "Jewelry Packaging", desc: "Velvet-lined drawers and slide boxes for fine jewelry." },
  { slug: "kitchenware", name: "Kitchenware Packaging", desc: "Robust custom packaging for home goods and kitchenware." },
  { slug: "pharma", name: "Pharma Packaging", desc: "Compliant medical and pharmaceutical boxes." },
  { slug: "pizza", name: "Pizza Boxes", desc: "Custom corrugated pizza boxes with heat-insulating fluting." },
  { slug: "pre-roll", name: "Pre Roll Packaging", desc: "Compact custom drawer boxes and tubes for pre-rolls." },
  { slug: "product", name: "Product Packaging", desc: "Custom retail boxes and packaging for general products." },
  { slug: "retail", name: "Retail Packaging", desc: "Vibrant folding retail cartons and hanging shelf packs." },
  { slug: "shipping", name: "Shipping Packaging", desc: "Industrial corrugated master shippers and shipping boxes." },
  { slug: "soap", name: "Soap Packaging", desc: "Eco-friendly natural kraft paperboard sleeves for soap bars." },
  { slug: "spice", name: "Spice Packaging", desc: "Custom counter displays and retail boxes for spices." },
  { slug: "sports", name: "Sports Packaging", desc: "Heavy-duty custom boxes for sports equipment." },
  { slug: "stationery", name: "Stationery Packaging", desc: "Clean, elegant folding boxes and sleeves for office goods." },
  { slug: "tea", name: "Tea Packaging", desc: "Custom tea chests, gift boxes, and window packaging." },
  { slug: "vape", name: "Vape Packaging", desc: "Precision custom drawer boxes and sleeves for vape cartridges." },
];

export const MATERIAL_CATEGORIES = [
  { slug: "cardboard", name: "Cardboard", desc: "Versatile and lightweight paperboard substrates." },
  { slug: "corrugated", name: "Corrugated", desc: "Fluted cardboard for heavy-duty shipping containers." },
  { slug: "rigid", name: "Rigid", desc: "High-density thick chipboard for luxury setup boxes." },
  { slug: "kraft", name: "Kraft", desc: "Eco-friendly, unbleached organic natural brown paper." },
  { slug: "tin-packaging", name: "Tin Packaging", desc: "Durable, premium metallic enclosures." },
  { slug: "poly-bags", name: "Poly Bags", desc: "Flexible, lightweight plastic and polymer bags." },
  { slug: "cosmetic-jars", name: "Cosmetic Jars", desc: "Glass and acrylic containers for beauty formulas." },
];

export const STYLE_CATEGORIES = [
  { slug: "hang-tags", name: "Hang Tags", desc: "Custom retail apparel and product tags." },
  { slug: "mylar-bags", name: "Mylar Bags", desc: "Hermetically sealed barrier bags for freshness." },
  { slug: "paper-bags", name: "Paper Bags", desc: "Eco-friendly shopping bags with twisted handles." },
  { slug: "tote-bags", name: "Tote Bags", desc: "Reusable branded fabric and canvas tote bags." },
  { slug: "tuck-boxes", name: "Tuck Boxes", desc: "Classic retail boxes with friction-lock flaps." },
  { slug: "display-boxes", name: "Display Boxes", desc: "Point-of-purchase retail display trays." },
  { slug: "favor-boxes", name: "Favor Boxes", desc: "Boutique gift boxes for events and celebrations." },
  { slug: "gable-boxes", name: "Gable Boxes", desc: "Carry-handle boxes for food and gifts." },
  { slug: "labels-stickers", name: "Labels & Stickers", desc: "High-adhesion product labels and stickers." },
  { slug: "mailer-boxes", name: "Mailer Boxes", desc: "Rigid-fold mailing boxes for e-commerce." },
  { slug: "pillow-boxes", name: "Pillow Boxes", desc: "Unique pillow-shaped gift boxes." },
  { slug: "round-boxes", name: "Round Boxes", desc: "Luxury cylindrical tubes and hat boxes." },
  { slug: "spouted-pouches", name: "Spouted Pouches", desc: "Flexible packaging for liquids and gels." },
  { slug: "trays-sleeves", name: "Trays & Sleeves", desc: "Slide-out trays with decorative sleeves." },
  { slug: "tube-packaging", name: "Tube Packaging", desc: "Durable spiral-wound cylinder tubes." },
  { slug: "window-packaging", name: "Window Packaging", desc: "Retail boxes with die-cut clear PET windows." },
  { slug: "wrapping-paper", name: "Wrapping Paper", desc: "Premium custom-branded packaging tissue and wrap." },
];

