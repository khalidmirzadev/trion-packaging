import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getStyleSubcategoryBySlug,
  getAllStyleSubcategoryParams,
  generateCatalogSubcategoryConfig,
} from "@/lib/data/catalog-taxonomy";
import { ProductTemplate } from "@/components/products/product-template";

interface PageProps {
  params: Promise<{ category: string; subcategory: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, subcategory } = await params;
  const result = getStyleSubcategoryBySlug(category, subcategory);
  if (!result) return { title: "Packaging Style | Trion Packaging" };
  const { sub } = result;
  return {
    title: `${sub.name} | Packaging Styles | Trion Packaging`,
    description: `Custom B2B ${sub.name} — ${sub.desc} CAD dielines within 24 hours. MOQ from 100 units. FSC-certified substrates and full embellishment options.`,
  };
}

export default async function StyleSubcategoryPage({ params }: PageProps) {
  const { category, subcategory } = await params;
  const result = getStyleSubcategoryBySlug(category, subcategory);
  if (!result) notFound();
  const config = generateCatalogSubcategoryConfig("styles", result!.category, result!.sub);
  return <ProductTemplate config={config} />;
}

export const dynamic = "force-static";
export const dynamicParams = true;
export async function generateStaticParams() {
  return getAllStyleSubcategoryParams();
}
