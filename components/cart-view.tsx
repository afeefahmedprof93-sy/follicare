"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { LinkButton } from "@/components/ui";
import { formatPrice } from "@/data/products";

export function CartView() {
  const { lines, subtotal, update, remove } = useCart();
  const delivery = subtotal >= 2500 ? 0 : 120;
  if (!lines.length) return <div className="rounded-[2.5rem] border border-ink/10 bg-white px-6 py-20 text-center"><h2 className="font-serif text-4xl">Your cart is ready for a routine.</h2><p className="mt-4 text-ink/55">Explore focused care for your hair and scalp.</p><LinkButton href="/products" className="mt-7">Shop products</LinkButton></div>;
  return (
    <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
      <div className="space-y-4">{lines.map(({ product, quantity }) => <article key={product.id} className="flex gap-5 rounded-[2rem] border border-ink/10 bg-white p-4 sm:p-5"><Link href={`/products/${product.slug}`} className="relative size-28 shrink-0 overflow-hidden rounded-2xl bg-sage/40 sm:size-36"><Image src={product.image} alt={product.imageAlt} fill className="object-cover" /></Link><div className="flex min-w-0 flex-1 flex-col"><div className="flex justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-wider text-gold">{product.category}</p><Link href={`/products/${product.slug}`} className="mt-1 block font-serif text-xl sm:text-2xl">{product.name}</Link></div><button onClick={() => remove(product.id)} aria-label={`Remove ${product.name}`} className="grid size-9 shrink-0 place-items-center rounded-full text-ink/40 hover:bg-cream hover:text-ink"><Trash2 className="size-4" /></button></div><div className="mt-auto flex items-end justify-between pt-4"><div className="flex items-center rounded-full border border-ink/15"><button aria-label={`Decrease ${product.name} quantity`} onClick={() => update(product.id, quantity - 1)} className="grid size-9 place-items-center"><Minus className="size-3" /></button><span className="w-7 text-center text-sm">{quantity}</span><button aria-label={`Increase ${product.name} quantity`} onClick={() => update(product.id, quantity + 1)} className="grid size-9 place-items-center"><Plus className="size-3" /></button></div><span className="font-semibold">{formatPrice(product.price * quantity)}</span></div></div></article>)}</div>
      <aside className="h-fit rounded-[2rem] bg-ink p-7 text-white lg:sticky lg:top-28"><h2 className="font-serif text-3xl">Order summary</h2><div className="mt-7 space-y-4 text-sm text-white/65"><div className="flex justify-between"><span>Subtotal</span><span className="text-white">{formatPrice(subtotal)}</span></div><div className="flex justify-between"><span>Estimated delivery</span><span className="text-white">{delivery ? formatPrice(delivery) : "Free"}</span></div></div><div className="mt-6 flex justify-between border-t border-white/15 pt-6 text-lg font-bold"><span>Total</span><span>{formatPrice(subtotal + delivery)}</span></div>{delivery > 0 && <p className="mt-4 text-xs text-white/45">Add {formatPrice(2500 - subtotal)} more for free delivery in Dhaka.</p>}<LinkButton href="/checkout" variant="light" className="mt-7 w-full">Proceed to checkout</LinkButton><p className="mt-4 text-center text-[11px] text-white/40">Cash on delivery and mobile payment options</p></aside>
    </div>
  );
}
