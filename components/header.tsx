"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { Logo } from "@/components/logo";

const links = [
  ["Shop", "/products"],
  ["Our story", "/about"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  return (
    <>
      <div className="bg-ink px-4 py-2.5 text-center text-[11px] font-bold uppercase tracking-[.18em] text-white">
        Free delivery in Dhaka on orders over ৳2,500
      </div>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {links.map(([label, href]) => <Link key={href} href={href} className="text-sm font-medium text-ink/75 transition hover:text-ink">{label}</Link>)}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/cart" data-testid="cart-link" aria-label={`Cart with ${count} items`} className="relative grid size-11 place-items-center rounded-full border border-ink/15 transition hover:bg-white">
              <ShoppingBag className="size-5" />
              {count > 0 && <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-gold text-[10px] font-bold text-white">{count}</span>}
            </Link>
            <button onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-full border border-ink/15 md:hidden" aria-label="Toggle menu">
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-ink/10 bg-cream px-5 py-5 md:hidden" aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href} className="block border-b border-ink/10 py-4 font-serif text-2xl text-ink">{label}</Link>)}
          </nav>
        )}
      </header>
    </>
  );
}
