import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getIndustrySubcategoryBySlug,
  getAllIndustrySubcategoryParams,
  generateCatalogSubcategoryConfig,
} from "@/lib/data/catalog-taxonomy";
import { ProductTemplate } from "@/components/products/product-template";

interface PageProps {
  params: Promise<{ category: string; subcategory: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, subcategory } = await params;
  const result = getIndustrySubcategoryBySlug(category, subcategory);
  if (!result) return { title: "Industry Packaging | Trion Packaging" };
  const { sub } = result;
  return {
    title: `${sub.name} | Industry Packaging | Trion Packaging`,
    description: `Custom B2B ${sub.name} — ${sub.desc} CAD dielines within 24 hours. MOQ from 100 units. Industry-compliant substrates and full embellishment options.`,
  };
}

export default async function IndustrySubcategoryPage({ params }: PageProps) {
  const { category, subcategory } = await params;
  const result = getIndustrySubcategoryBySlug(category, subcategory);
  if (!result) notFound();
  const config = generateCatalogSubcategoryConfig("industries", result!.category, result!.sub);
  return <ProductTemplate config={config} />;
}

export const dynamic = "force-static";
export const dynamicParams = true;
export async function generateStaticParams() {
  return getAllIndustrySubcategoryParams();
}
