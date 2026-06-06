import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Leaf, ShieldCheck, Star } from "lucide-react";
import { AddToCart } from "@/components/add-to-cart";
import { ProductCard } from "@/components/product-card";
import { SectionTitle } from "@/components/ui";
import { formatPrice, getProduct, products } from "@/data/products";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product ? { title: product.name, description: product.shortDescription } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const related = products.filter((item) => item.id !== product.id && (item.category === product.category || item.featured)).slice(0, 3);
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-12 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-sage/45"><Image src={product.image} alt={product.imageAlt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">{product.category}</p>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">{product.name}</h1>
          <div className="mt-5 flex items-center gap-4"><span className="flex items-center gap-1 text-sm"><Star className="size-4 fill-gold text-gold" /> {product.rating} <span className="text-ink/45">({product.reviews} reviews)</span></span></div>
          <p className="mt-7 text-lg leading-8 text-ink/65">{product.description}</p>
          <div className="mt-8 flex items-end gap-3"><span className="text-2xl font-bold">{formatPrice(product.price)}</span>{product.originalPrice && <span className="pb-1 text-sm text-ink/40 line-through">{formatPrice(product.originalPrice)}</span>}</div>
          <div className="mt-7"><AddToCart product={product} /></div>
          <div className="mt-8 grid gap-3 border-t border-ink/10 pt-7 sm:grid-cols-2">{product.benefits.map((benefit) => <span key={benefit} className="flex items-center gap-2 text-sm text-ink/70"><Check className="size-4 text-gold" /> {benefit}</span>)}</div>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-ink/50"><span className="flex items-center gap-2"><Leaf className="size-4" /> Thoughtful formula</span><span className="flex items-center gap-2"><ShieldCheck className="size-4" /> Secure checkout</span></div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        <Detail title="What’s inside" items={product.ingredients} />
        <Detail title="How to use" text={product.usage} />
        <Detail title="Suitable for" text={product.suitableFor} />
      </div></section>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><SectionTitle eyebrow="Keep exploring" title="Complete your routine." /><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((item) => <ProductCard key={item.id} product={item} />)}</div></section>
    </>
  );
}

function Detail({ title, items, text }: { title: string; items?: string[]; text?: string }) {
  return <div className="rounded-[2rem] bg-cream p-8"><h2 className="font-serif text-3xl">{title}</h2>{items ? <ul className="mt-6 space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm text-ink/65"><span className="mt-2 size-1.5 rounded-full bg-gold" />{item}</li>)}</ul> : <p className="mt-6 text-sm leading-7 text-ink/65">{text}</p>}</div>;
}
