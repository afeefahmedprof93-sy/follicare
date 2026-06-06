import type { Metadata } from "next";
import { ProductsBrowser } from "@/components/products-browser";
import { SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "Shop hair care", description: "Explore FolliCare scalp serums, sprays, wash care, treatments, and daily hair support." };

export default function ProductsPage() {
  return <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24"><SectionTitle eyebrow="The collection" title="Purposeful care, from root to tip." text="Build a focused routine with scalp-first treatments, gentle wash care, targeted nutrition, and daily protection." /><div className="mt-12"><ProductsBrowser /></div></section>;
}
