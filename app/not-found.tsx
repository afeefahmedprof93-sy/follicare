import { LinkButton } from "@/components/ui";

export default function NotFound() {
  return <section className="mx-auto max-w-3xl px-5 py-28 text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-gold">404</p><h1 className="mt-4 font-serif text-6xl">This page has moved on.</h1><p className="mt-5 text-ink/60">Let’s get you back to better hair days.</p><LinkButton href="/" className="mt-8">Return home</LinkButton></section>;
}
