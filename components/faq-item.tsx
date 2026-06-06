"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ink/15">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={open}>
        <span className="font-serif text-xl text-ink">{question}</span>
        <ChevronDown className={`size-5 shrink-0 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="max-w-3xl pb-6 text-sm leading-7 text-ink/65">{answer}</p>}
    </div>
  );
}
