import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllStyleCategoryParams, getStyleCategoryBySlug } from "@/lib/data/catalog-taxonomy";
import { CategoryTemplate } from "@/components/products/category-template";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getStyleCategoryBySlug(slug);
  if (!category) return { title: "Packaging Style | Trion Packaging" };
  return {
    title: `${category.name} | Packaging Styles | Trion Packaging`,
    description: `Browse ${category.subcategories.length} ${category.name} packaging styles. ${category.desc} Custom CAD dielines within 24 hours, MOQ from 100 units.`,
  };
}

export default async function StyleCategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getStyleCategoryBySlug(slug);
  if (!category) notFound();
  return <CategoryTemplate category={category!} />;
}

export const dynamic = "force-static";
export const dynamicParams = true;
export async function generateStaticParams() {
  return getAllStyleCategoryParams();
}
