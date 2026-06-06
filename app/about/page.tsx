import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Search, Sparkles } from "lucide-react";
import { LinkButton, SectionTitle } from "@/components/ui";

export const metadata: Metadata = { title: "Our story", description: "Learn about FolliCare's simple, scalp-first approach to modern hair care." };

export default function AboutPage() {
  return <>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-gold">Our story</p><h1 className="mt-4 font-serif text-6xl leading-[.92] sm:text-7xl">Less noise. Better care.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-ink/65">FolliCare began with a simple belief: hair care works better when the routine is clear enough to follow. We pair thoughtful ingredients with an honest, scalp-first approach.</p><LinkButton href="/products" className="mt-8">Explore the collection</LinkButton></div><div className="relative aspect-[4/4.5] overflow-hidden rounded-[3rem] bg-moss"><Image src="/products/retainer-serum-photo.jpeg" alt="Botanical Hair Retainer scalp serum" fill className="object-cover" /></div></section>
    <section className="bg-white px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Our principles" title="Made for routines that last." align="center" /><div className="mt-14 grid gap-5 md:grid-cols-3">{[[Search, "Focused by design", "Every formula has a clear place in your routine and a purpose you can understand."], [Leaf, "Botanical, not basic", "We select plant-derived ingredients alongside proven cosmetic actives."], [Sparkles, "A better daily ritual", "Beautiful textures and considered packaging make consistency feel easier."]].map(([Icon, title, text]) => { const ItemIcon = Icon as typeof Leaf; return <div key={String(title)} className="rounded-[2rem] bg-cream p-8 text-center"><ItemIcon className="mx-auto size-6 text-gold" /><h2 className="mt-6 font-serif text-3xl">{String(title)}</h2><p className="mt-4 text-sm leading-7 text-ink/60">{String(text)}</p></div>; })}</div></div></section>
  </>;
}
