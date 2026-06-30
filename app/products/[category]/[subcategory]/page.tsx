import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getSubcategoryBySlug,
  generateSubcategoryConfig,
  getAllSubcategoryParams,
} from "@/lib/data/product-taxonomy";
import { ProductTemplate } from "@/components/products/product-template";

interface PageProps {
  params: Promise<{ category: string; subcategory: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug, subcategory: subSlug } = await params;
  const result = getSubcategoryBySlug(categorySlug, subSlug);

  if (!result) {
    return { title: "Product | Trion Packaging" };
  }

  const { category, sub } = result;

  return {
    title: `${sub.name} | ${category.name} | Trion Packaging`,
    description: `Custom B2B ${sub.name} — ${sub.desc} CAD dielines within 24 hours. MOQ from 100 units. FSC-certified substrates, premium finishes, and ±0.5mm tolerance.`,
    openGraph: {
      title: `${sub.name} | ${category.name} | Trion Packaging`,
      description: sub.desc,
      type: "website",
    },
  };
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { category: categorySlug, subcategory: subSlug } = await params;
  const result = getSubcategoryBySlug(categorySlug, subSlug);

  if (!result) {
    notFound();
  }

  const { category, sub } = result;
  const config = generateSubcategoryConfig(category, sub);

  return <ProductTemplate config={config} />;
}

export const dynamic = "force-static";
export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllSubcategoryParams();
}
