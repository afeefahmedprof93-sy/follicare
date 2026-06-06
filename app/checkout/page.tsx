import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout-form";
import { SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "Checkout", description: "Complete your FolliCare demo order securely." };

export default function CheckoutPage() {
  return <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20"><SectionTitle eyebrow="Secure checkout" title="Complete your order." text="No payment is processed in this demo. Choose a method and place your order to preview the full flow." /><div className="mt-10"><CheckoutForm /></div></section>;
}
