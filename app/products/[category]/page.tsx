import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getAllCategoryParams } from "@/lib/data/product-taxonomy";
import { CategoryTemplate } from "@/components/products/category-template";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return { title: "Product Category | Trion Packaging" };
  }

  return {
    title: `${category.name} | Custom B2B Packaging | Trion Packaging`,
    description: `Browse ${category.subcategories.length} ${category.name} styles. ${category.desc} CAD dielines within 24 hours, MOQ from 100 units.`,
    openGraph: {
      title: `${category.name} | Trion Packaging`,
      description: category.desc,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return <CategoryTemplate category={category} />;
}

export const dynamic = "force-static";
export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllCategoryParams();
}
