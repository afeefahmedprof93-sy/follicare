import { Star } from "lucide-react";

export function TestimonialCard({ quote, name, detail }: { quote: string; name: string; detail: string }) {
  return (
    <article className="rounded-[2rem] bg-white p-7 shadow-[0_1px_0_rgba(24,49,38,.08)]">
      <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-gold text-gold" />)}</div>
      <blockquote className="mt-6 font-serif text-2xl leading-snug text-ink">“{quote}”</blockquote>
      <p className="mt-7 text-sm font-semibold text-ink">{name}</p>
      <p className="mt-1 text-xs text-ink/45">{detail}</p>
    </article>
  );
}
