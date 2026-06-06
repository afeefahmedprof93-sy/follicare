import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Droplets, FlaskConical, Leaf, LockKeyhole, ShieldCheck, Sparkles, Sprout, Waves } from "lucide-react";
import { FAQItem } from "@/components/faq-item";
import { ProductCard } from "@/components/product-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { LinkButton, SectionTitle } from "@/components/ui";
import { products } from "@/data/products";

const faqs = [
  ["How soon can I expect results?", "Hair care is personal and consistency matters. Most customers assess how a routine feels over 8–12 weeks, while softness, manageability, and scalp comfort may improve sooner."],
  ["Can I use multiple FolliCare products together?", "Yes. Our products are designed as modular routines. Start with a gentle wash routine, then add one targeted leave-in product based on your main goal."],
  ["Are the products suitable for all hair types?", "Most formulas are suitable for all textures. Each product page includes specific guidance for hair and scalp needs."],
];

export default function Home() {
  const featured = products.filter((product) => product.featured).slice(0, 4);
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 bg-sand leaf-shadow">
        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[.88fr_1.12fr] lg:px-8 lg:py-20">
          <div className="relative z-10 max-w-xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-gold">Rooted in care. Backed by intention.</p>
            <h1 className="font-serif text-[4rem] leading-[.88] tracking-[-.04em] text-ink sm:text-7xl lg:text-[6.4rem]">Better hair begins at the root.</h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-ink/65 sm:text-lg">Focused formulas for stronger-looking hair and a healthier-feeling scalp, made for real routines and everyday consistency.</p>
            <div className="mt-8 flex flex-wrap gap-3"><LinkButton href="/products">Build your routine <ArrowRight className="ml-2 size-4" /></LinkButton><LinkButton href="#how-it-works" variant="outline">How it works</LinkButton></div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-ink/55">
              <span className="flex items-center gap-2"><Leaf className="size-4" /> Thoughtful ingredients</span>
              <span className="flex items-center gap-2"><ShieldCheck className="size-4" /> Daily-care friendly</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -left-6 top-10 h-[75%] w-[70%] rounded-full bg-cream/60 blur-3xl" />
            <div className="relative ml-auto aspect-[5/5.4] w-[92%] overflow-hidden rounded-[3.5rem_3.5rem_10rem_3.5rem] bg-moss shadow-soft">
              <Image src="/products/spray-trio-clean.jpeg" alt="Three targeted hair density sprays" fill priority className="object-cover object-center" sizes="(max-width: 1024px) 90vw, 50vw" />
              <div className="absolute bottom-7 left-5 right-12 flex items-center justify-between gap-4 rounded-3xl bg-cream/95 p-4 pr-5 shadow-soft backdrop-blur sm:left-7 sm:right-16">
                <div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-gold">Targeted scalp care</p><p className="mt-1 font-serif text-xl">Support. Strengthen. Protect.</p></div>
                <Link href="/products" aria-label="Shop foundation set" className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-white"><ArrowRight className="size-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-ink/10 px-5 md:grid-cols-4 md:divide-y-0 lg:px-8">
          {[[FlaskConical, "Dermatology-inspired"], [Sprout, "Botanical actives"], [Waves, "All hair textures"], [LockKeyhole, "Secure checkout"]].map(([Icon, label]) => {
            const TrustIcon = Icon as typeof Leaf;
            return <div key={String(label)} className="flex min-h-32 flex-col items-center justify-center gap-3 p-4 text-center"><TrustIcon className="size-5 text-gold" /><span className="text-xs font-bold uppercase tracking-[.12em] text-ink/70">{String(label)}</span></div>;
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionTitle eyebrow="Shop the ritual" title="Care for every part of the journey." text="From scalp-first treatments to shine and protection, build a routine around what your hair needs now." /><Link href="/products" className="flex items-center gap-2 text-sm font-bold text-ink">Shop all products <ArrowRight className="size-4" /></Link></div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{featured.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>

      <section className="bg-ink px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="text-xs font-bold uppercase tracking-[.22em] text-gold">Why FolliCare</p><h2 className="mt-4 max-w-md font-serif text-5xl leading-none sm:text-6xl">Healthy-looking hair is a whole routine.</h2><p className="mt-6 max-w-md leading-7 text-white/60">We focus on the scalp, strand, and everyday habits that help hair look and feel its best over time.</p></div>
            <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/15 sm:grid-cols-2">
              {[[Droplets, "Less visible hair fall", "Support stronger-feeling strands and reduce breakage through consistent care."], [Sprout, "A nourished scalp", "Lightweight formulas help maintain a calm, balanced foundation."], [ShieldCheck, "Stronger roots", "Targeted actives support the look of density from root to tip."], [Sparkles, "Softness and shine", "Restore smoothness without heavy buildup or greasy residue."]].map(([Icon, title, text]) => {
                const BenefitIcon = Icon as typeof Leaf;
                return <div key={String(title)} className="bg-ink p-8"><BenefitIcon className="size-6 text-gold" /><h3 className="mt-8 font-serif text-2xl">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-white/55">{String(text)}</p></div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="hairline-grid px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="A simple system" title="Your routine, in three steps." align="center" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[["01", "Choose your hair goal", "Tell your routine what matters most: density, scalp balance, strength, or shine."], ["02", "Pick your products", "Start simple with one targeted treatment or create a complete ritual."], ["03", "Stay consistent", "Small daily and weekly habits are where better-looking hair begins."]].map(([number, title, text]) => <div key={number} className="rounded-[2rem] border border-ink/10 bg-cream p-8"><span className="font-serif text-5xl text-gold">{number}</span><h3 className="mt-12 font-serif text-3xl">{title}</h3><p className="mt-4 text-sm leading-6 text-ink/60">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-sage/50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Real routines" title="Good hair days, shared." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-3"><TestimonialCard quote="The serum disappears into my scalp, and my roots feel fresher instead of oily." name="Nusrat A." detail="Verified buyer · Root Revival Serum" /><TestimonialCard quote="My wash days feel simpler. The shampoo cleans well without that tight, stripped feeling." name="Samira H." detail="Verified buyer · Repair Ritual Shampoo" /><TestimonialCard quote="I finally have a routine I can keep. Three steps, no clutter, and my hair feels softer." name="Tahmid R." detail="Verified buyer · Foundation routine" /></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
        <SectionTitle eyebrow="Questions, answered" title="Care should feel clear." text="The essentials about routines, ingredients, delivery, and getting started." />
        <div>{faqs.map(([question, answer]) => <FAQItem key={question} question={question} answer={answer} />)}<Link href="/faq" className="mt-7 inline-flex items-center gap-2 text-sm font-bold">See all FAQs <ArrowRight className="size-4" /></Link></div>
      </section>
    </>
  );
}
