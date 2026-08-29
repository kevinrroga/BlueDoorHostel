import { Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useT";

const scores = [
  {
    score: "9.2",
    source: "Hostelworld",
    sub: "1,225+ reviews",
    outOf: "/10",
    href: "https://www.hostelworld.com/hostels/p/312998/blue-door-hostel/#reviews",
  },
  {
    score: "8.9",
    source: "Booking.com",
    sub: "636 reviews",
    outOf: "/10",
    href: "https://www.booking.com/hotel/al/blue-door-hostel.en-gb.html#tab-reviews",
  },
  {
    score: "4.8",
    source: "Google Maps",
    sub: "247 reviews",
    outOf: "/5",
    href: "https://www.google.com/maps/place/Blue+Door+Hostel/@41.334032,19.8199837,15z/data=!4m9!3m8!1s0x135031f25224da81:0x2472c3d7ab86ad94!5m2!4m1!1i2!8m2!3d41.3336245!4d19.8288341!16s%2Fg%2F11spwzf448?entry=ttu&g_ep=EgoyMDI2MDgyNS4wIKXMDSoASAFQAw%3D%3D",
  },
];

const categoryValues = [9.4, 9.3, 9.7, 9.1, 9.0, 8.8];

export function Reviews() {
  const t = useT();
  const categoryScores = categoryValues.map((value, i) => ({ label: t.reviews.categories[i], value }));

  return (
    <section id="reviews" className="scroll-mt-24 bg-card px-5 py-14 sm:py-20">
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
              <a
                key={s.source}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-2xl border border-border bg-background px-5 py-4 text-center transition-shadow duration-200 hover:shadow-[var(--shadow-soft)] hover:border-accent/40"
              >
                <p className="font-display text-2xl font-bold text-primary">
                  {s.score}
                  <span className="text-sm font-normal text-foreground/40">{s.outOf}</span>
                </p>
                <p className="mt-0.5 text-xs font-medium text-foreground/60">{s.source}</p>
                <p className="mt-0.5 text-[10px] text-foreground/40">{s.sub}</p>
              </a>
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
              <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-foreground/80">
                "{quote.text}"
              </blockquote>
              <p className="mt-5 text-xs font-medium text-foreground/45">
                {quote.gender}, {quote.age} · {quote.nationality}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
