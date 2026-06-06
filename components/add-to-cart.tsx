"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui";
import type { Product } from "@/types/product";

export function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  return <Button data-testid="product-add" className="w-full sm:w-auto" onClick={() => { add(product); setAdded(true); setTimeout(() => setAdded(false), 1800); }}>{added ? <><Check className="mr-2 size-4" /> Added to cart</> : "Add to cart"}</Button>;
}
