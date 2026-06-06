import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-ink text-white hover:bg-moss",
    outline: "border border-ink/25 text-ink hover:bg-ink hover:text-white",
    light: "bg-white text-ink hover:bg-sage",
  };
  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "outline" | "light"; className?: string }) {
  const variants = {
    primary: "bg-ink text-white hover:bg-moss",
    outline: "border border-ink/25 text-ink hover:bg-ink hover:text-white",
    light: "bg-white text-ink hover:bg-sage",
  };
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}>{children}</Link>;
}

export function SectionTitle({ eyebrow, title, text, align = "left" }: { eyebrow?: string; title: string; text?: string; align?: "left" | "center" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-gold">{eyebrow}</p>}
      <h2 className="font-serif text-4xl leading-[1.05] text-ink sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-7 text-ink/65">{text}</p>}
    </div>
  );
}
