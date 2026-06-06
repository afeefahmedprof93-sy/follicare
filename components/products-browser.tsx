"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/data/products";

export function ProductsBrowser() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const visible = useMemo(() => {
    const filtered = category === "All" ? products : products.filter((product) => product.category === category);
    return [...filtered].sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : Number(b.featured) - Number(a.featured));
  }, [category, sort]);

  return (
    <>
      <div className="mb-10 flex flex-col justify-between gap-5 border-y border-ink/10 py-5 lg:flex-row lg:items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2 text-xs font-semibold transition ${category === item ? "bg-ink text-white" : "bg-white text-ink hover:bg-sage"}`}>{item}</button>)}
        </div>
        <label className="flex items-center gap-3 text-xs font-semibold text-ink/60">Sort by
          <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-ink/15 bg-white px-4 py-2.5 text-ink outline-none">
            <option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option>
          </select>
        </label>
      </div>
      <p className="mb-5 text-sm text-ink/50">{visible.length} products</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{visible.map((product) => <ProductCard key={product.id} product={product} />)}</div>
    </>
  );
}
