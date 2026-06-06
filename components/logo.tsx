import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="FolliCare home" className={`group inline-flex items-center gap-2.5 ${light ? "text-white" : "text-ink"}`}>
      <span className={`grid size-9 place-items-center rounded-full border ${light ? "border-white/30" : "border-ink/20"}`}>
        <svg viewBox="0 0 32 32" className="size-5" aria-hidden="true">
          <path d="M8 24c0-8 4-15 12-19-1 8-5 15-12 19Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M11 22c3-5 7-9 12-11M16 27c0-6 2-10 7-13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="font-serif text-[1.55rem] leading-none tracking-tight">FolliCare</span>
    </Link>
  );
}
