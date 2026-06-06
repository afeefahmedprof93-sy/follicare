import Link from "next/link";
import { Instagram, Facebook, Mail } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">Thoughtful formulas for stronger-looking hair, a healthier-feeling scalp, and routines that are easy to keep.</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Mail].map((Icon, index) => <span key={index} className="grid size-10 place-items-center rounded-full border border-white/15"><Icon className="size-4" /></span>)}
          </div>
        </div>
        <FooterColumn title="Shop" links={[["All products", "/products"], ["Serums", "/products"], ["Scalp care", "/products"], ["Wash care", "/products"]]} />
        <FooterColumn title="Explore" links={[["Our story", "/about"], ["FAQ", "/faq"], ["Contact", "/contact"], ["Cart", "/cart"]]} />
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-white/50">Stay in the loop</p>
          <p className="mt-4 text-sm leading-6 text-white/65">Care notes, routine tips, and early access to new launches.</p>
          <div className="mt-5 flex border-b border-white/30 pb-2">
            <input className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/35" placeholder="Your email address" aria-label="Email address" />
            <button className="text-sm font-semibold">Join</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45">© 2026 FolliCare. Demo storefront. Product information is not medical advice.</div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[][] }) {
  return <div><p className="text-xs font-bold uppercase tracking-[.18em] text-white/50">{title}</p><div className="mt-4 space-y-3">{links.map(([label, href]) => <Link key={label} href={href} className="block text-sm text-white/70 hover:text-white">{label}</Link>)}</div></div>;
}
