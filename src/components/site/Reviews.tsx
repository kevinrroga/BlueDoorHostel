import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useT";

const scores = [
  { score: "9.2", source: "Hostelworld", sub: "1,225+ reviews" },
  { score: "8.9", source: "Booking.com", sub: "636 reviews" },
];

const categoryValues = [9.4, 9.3, 9.7, 9.1, 9.0, 8.8];

export function Reviews() {
  const t = useT();
  const categoryScores = categoryValues.map((value, i) => ({ label: t.reviews.categories[i], value }));

  return (
    <section id="reviews" className="scroll-mt-24 bg-card px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.reviews.label}</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
              {t.reviews.heading}
            </h2>
          </div>
          <div className="flex gap-3">
            {scores.map((s) => (
              <div key={s.source} className="rounded-2xl border border-border bg-background px-5 py-4 text-center">
                <p className="font-display text-2xl font-bold text-primary">{s.score}</p>
                <p className="mt-0.5 text-xs font-medium text-foreground/60">{s.source}</p>
                <p className="mt-0.5 text-[10px] text-foreground/40">{s.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categoryScores.map((c) => (
              <li key={c.label} className="rounded-xl border border-border bg-background px-4 py-3 text-center">
                <p className="font-display text-xl font-bold text-primary">{c.value.toFixed(1)}</p>
                <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-gold" style={{ width: `${(c.value / 10) * 100}%` }} />
                </div>
                <p className="mt-1.5 text-[11px] font-medium text-foreground/55">{c.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {t.reviews.quotes.map((quote, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 80}
              className="flex flex-col rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star key={n} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-[0.95rem] leading-relaxed text-foreground/80">
                "{quote}"
              </blockquote>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
