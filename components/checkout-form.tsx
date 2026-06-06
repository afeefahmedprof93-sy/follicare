"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { Button, LinkButton } from "@/components/ui";
import { formatPrice } from "@/data/products";

const fields = [["Full name", "name", "text", "Your full name"], ["Phone number", "phone", "tel", "01XXXXXXXXX"], ["Email address", "email", "email", "you@example.com"], ["Delivery address", "address", "text", "House, road, area"], ["City", "city", "text", "Dhaka"]];

export function CheckoutForm() {
  const { lines, subtotal, clear } = useCart();
  const [success, setSuccess] = useState(false);
  const delivery = subtotal >= 2500 ? 0 : 120;
  function submit(event: FormEvent) { event.preventDefault(); setSuccess(true); clear(); window.scrollTo({ top: 0, behavior: "smooth" }); }

  if (success) return <div className="mx-auto max-w-2xl rounded-[2.5rem] bg-white px-6 py-16 text-center shadow-soft"><CheckCircle2 className="mx-auto size-14 text-gold" /><p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-gold">Order received</p><h1 className="mt-4 font-serif text-5xl">Thank you for choosing FolliCare.</h1><p className="mx-auto mt-5 max-w-lg leading-7 text-ink/60">Your demo order has been placed successfully. A confirmation call would normally follow before dispatch.</p><LinkButton href="/products" className="mt-8">Continue shopping</LinkButton></div>;
  if (!lines.length) return <div className="rounded-[2rem] bg-white p-12 text-center"><h2 className="font-serif text-4xl">Your cart is empty.</h2><LinkButton href="/products" className="mt-6">Find your routine</LinkButton></div>;
  return (
    <form onSubmit={submit} className="grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
      <div className="rounded-[2rem] bg-white p-6 sm:p-9"><h2 className="font-serif text-3xl">Delivery details</h2><div className="mt-7 grid gap-5 sm:grid-cols-2">{fields.map(([label, name, type, placeholder], index) => <label key={name} className={index === 3 ? "sm:col-span-2" : ""}><span className="mb-2 block text-xs font-semibold text-ink/60">{label}</span><input required name={name} type={type} placeholder={placeholder} className="h-13 w-full rounded-xl border border-ink/15 bg-cream/50 px-4 text-sm outline-none transition focus:border-ink" /></label>)}<label className="sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-ink/60">Delivery notes (optional)</span><textarea name="notes" rows={4} placeholder="Landmark, preferred delivery time, or other notes" className="w-full rounded-xl border border-ink/15 bg-cream/50 p-4 text-sm outline-none transition focus:border-ink" /></label></div><h2 className="mt-10 font-serif text-3xl">Payment method</h2><div className="mt-5 grid gap-3 sm:grid-cols-3">{["Cash on Delivery", "bKash (placeholder)", "Nagad (placeholder)"].map((method, index) => <label key={method} className="flex cursor-pointer gap-3 rounded-xl border border-ink/15 p-4 text-sm"><input required type="radio" name="payment" value={method} defaultChecked={index === 0} className="accent-ink" /><span>{method}</span></label>)}</div></div>
      <aside className="h-fit rounded-[2rem] bg-ink p-7 text-white lg:sticky lg:top-28"><h2 className="font-serif text-3xl">Your order</h2><div className="mt-6 space-y-4">{lines.map(({ product, quantity }) => <div key={product.id} className="flex justify-between gap-4 text-sm"><span className="text-white/60">{product.name} × {quantity}</span><span>{formatPrice(product.price * quantity)}</span></div>)}</div><div className="mt-6 space-y-3 border-t border-white/15 pt-5 text-sm"><div className="flex justify-between text-white/60"><span>Subtotal</span><span className="text-white">{formatPrice(subtotal)}</span></div><div className="flex justify-between text-white/60"><span>Delivery</span><span className="text-white">{delivery ? formatPrice(delivery) : "Free"}</span></div><div className="flex justify-between pt-3 text-lg font-bold"><span>Total</span><span>{formatPrice(subtotal + delivery)}</span></div></div><Button type="submit" variant="light" className="mt-7 w-full">Place order</Button><Link href="/cart" className="mt-4 block text-center text-xs text-white/45 underline">Return to cart</Link></aside>
    </form>
  );
}
