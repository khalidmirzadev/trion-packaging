import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllIndustryCategoryParams, getIndustryCategoryBySlug } from "@/lib/data/catalog-taxonomy";
import { CategoryTemplate } from "@/components/products/category-template";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getIndustryCategoryBySlug(slug);
  if (!category) return { title: "Industry Packaging | Trion Packaging" };
  return {
    title: `${category.name} Packaging | Trion Packaging`,
    description: `Browse ${category.subcategories.length} ${category.name} packaging solutions. ${category.desc} Custom dielines within 24 hours.`,
  };
}

export default async function IndustryCategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getIndustryCategoryBySlug(slug);
  if (!category) notFound();
  return <CategoryTemplate category={category!} />;
}

export const dynamic = "force-static";
export const dynamicParams = true;
export async function generateStaticParams() {
  return getAllIndustryCategoryParams();
}
