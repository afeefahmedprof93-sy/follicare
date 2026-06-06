import type { Metadata } from "next";
import { FAQItem } from "@/components/faq-item";
import { SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "Frequently asked questions", description: "Answers about FolliCare products, routines, orders, delivery, and returns." };
const items = [
  ["Where should I start?", "Start with your main goal. For scalp balance, choose Scalp Guard Lotion. For stronger-looking roots, choose Root Revival Serum. Pair either with our gentle shampoo and conditioner."],
  ["How soon can I expect results?", "Hair routines take consistency. Assess visible density and strength over 8–12 weeks. Softness, shine, and scalp comfort may improve sooner."],
  ["Can I combine the serum and spray?", "Yes, but introduce one product at a time. You can use the spray in the morning and serum at night, or alternate days based on your scalp’s comfort."],
  ["Are FolliCare products medicine?", "No. The current catalog is presented as cosmetic and wellness care. Product descriptions are not a substitute for professional medical advice."],
  ["Are products suitable for colored hair?", "Our wash-care formulas are sulfate-free and designed to be color-friendly. Always review the individual product details and patch test when introducing a new formula."],
  ["Do you deliver outside Dhaka?", "This demo supports a Bangladesh-wide checkout flow. Delivery charges and timing can be connected to your courier rules before launch."],
  ["What payment methods are available?", "The demo includes Cash on Delivery, bKash, and Nagad placeholders. No real payment is collected in this version."],
  ["Can I return a product?", "A final return policy should be added before launch. A common approach is to accept unopened products within seven days of delivery."],
];

export default function FAQPage() {
  return <section className="mx-auto max-w-4xl px-5 py-16 lg:py-24"><SectionTitle eyebrow="Frequently asked" title="Everything you need to know." text="Can’t find your answer? Our care team is one message away." /><div className="mt-12">{items.map(([q, a]) => <FAQItem key={q} question={q} answer={a} />)}</div></section>;
}
