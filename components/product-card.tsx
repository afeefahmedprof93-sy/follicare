"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui";
import { formatPrice } from "@/data/products";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/10 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/4.4] overflow-hidden bg-sage/45">
        {product.badge && <span className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ink">{product.badge}</span>}
        <Image src={product.image} alt={product.imageAlt} fill className="object-cover transition duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[.18em] text-gold">{product.category}</p>
          <span className="flex items-center gap-1 text-xs text-ink/60"><Star className="size-3 fill-gold text-gold" /> {product.rating}</span>
        </div>
        <Link href={`/products/${product.slug}`} className="mt-3 flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl leading-tight text-ink">{product.name}</h3>
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-ink/35 transition group-hover:text-ink" />
        </Link>
        <p className="mt-3 flex-1 text-sm leading-6 text-ink/60">{product.shortDescription}</p>
        <div className="mt-5 flex items-end justify-between">
          <div><span className="font-semibold text-ink">{formatPrice(product.price)}</span>{product.originalPrice && <span className="ml-2 text-xs text-ink/35 line-through">{formatPrice(product.originalPrice)}</span>}</div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Link href={`/products/${product.slug}`} className="inline-flex min-h-11 items-center justify-center rounded-full border border-ink/15 px-3 text-xs font-semibold text-ink transition hover:bg-cream">View details</Link>
          <Button data-testid={`add-${product.id}`} onClick={() => add(product)} className="min-h-11 px-3 text-xs">Add to cart</Button>
        </div>
      </div>
    </article>
  );
}
