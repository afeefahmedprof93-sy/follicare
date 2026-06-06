"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products } from "@/data/products";
import type { CartLine, Product } from "@/types/product";

type StoredLine = { id: string; quantity: number };
type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (product: Product, quantity?: number) => void;
  remove: (id: string) => void;
  update: (id: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [stored, setStored] = useState<StoredLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      try {
        setStored(JSON.parse(localStorage.getItem("follicare-cart") || "[]"));
      } catch {
        setStored([]);
      }
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem("follicare-cart", JSON.stringify(stored));
  }, [stored, ready]);

  const lines = useMemo(() => stored.flatMap((line) => {
    const product = products.find((item) => item.id === line.id);
    return product ? [{ product, quantity: line.quantity }] : [];
  }), [stored]);

  const value = useMemo<CartContextValue>(() => ({
    lines,
    count: lines.reduce((sum, line) => sum + line.quantity, 0),
    subtotal: lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
    add(product, quantity = 1) {
      setStored((current) => {
        const exists = current.find((line) => line.id === product.id);
        return exists
          ? current.map((line) => line.id === product.id ? { ...line, quantity: line.quantity + quantity } : line)
          : [...current, { id: product.id, quantity }];
      });
    },
    remove(id) { setStored((current) => current.filter((line) => line.id !== id)); },
    update(id, quantity) { setStored((current) => quantity < 1 ? current.filter((line) => line.id !== id) : current.map((line) => line.id === id ? { ...line, quantity } : line)); },
    clear() { setStored([]); },
  }), [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used within CartProvider");
  return value;
}
