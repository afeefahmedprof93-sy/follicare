import type { Metadata } from "next";
import { CartView } from "@/components/cart-view";
import { SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "Your cart", description: "Review your FolliCare routine and proceed to checkout." };

export default function CartPage() {
  return <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"><SectionTitle eyebrow="Your routine" title="Shopping cart" /><div className="mt-10"><CartView /></div></section>;
}
