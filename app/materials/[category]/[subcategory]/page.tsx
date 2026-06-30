import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getMaterialSubcategoryBySlug,
  getAllMaterialSubcategoryParams,
  generateCatalogSubcategoryConfig,
} from "@/lib/data/catalog-taxonomy";
import { ProductTemplate } from "@/components/products/product-template";

interface PageProps {
  params: Promise<{ category: string; subcategory: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, subcategory } = await params;
  const result = getMaterialSubcategoryBySlug(category, subcategory);
  if (!result) return { title: "Packaging Material | Trion Packaging" };
  const { sub } = result;
  return {
    title: `${sub.name} | Packaging Materials | Trion Packaging`,
    description: `Custom B2B ${sub.name} — ${sub.desc} CAD dielines within 24 hours. MOQ from 100 units. FSC-certified substrates and full embellishment options.`,
  };
}

export default async function MaterialSubcategoryPage({ params }: PageProps) {
  const { category, subcategory } = await params;
  const result = getMaterialSubcategoryBySlug(category, subcategory);
  if (!result) notFound();
  const config = generateCatalogSubcategoryConfig("materials", result!.category, result!.sub);
  return <ProductTemplate config={config} />;
}

export const dynamic = "force-static";
export const dynamicParams = true;
export async function generateStaticParams() {
  return getAllMaterialSubcategoryParams();
}
