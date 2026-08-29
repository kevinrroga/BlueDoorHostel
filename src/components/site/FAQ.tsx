import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useT";
import { cn } from "@/lib/utils";

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card transition-shadow duration-300", open && "shadow-[var(--shadow-soft)]")}>
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-bold text-primary sm:text-lg">{q}</span>
        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-colors">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="px-6 pb-6 text-sm leading-relaxed text-foreground/70">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const t = useT();
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section id="faq" className="scroll-mt-24 px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.faq.label}</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {t.faq.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3 lg:grid-cols-2 lg:gap-4">
          {t.faq.items.map((item, i) => (
            <Reveal key={i} delay={(i % 2) * 80}>
              <FAQItem
                q={item.q}
                a={item.a}
                open={openSet.has(i)}
                onToggle={() => toggle(i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
