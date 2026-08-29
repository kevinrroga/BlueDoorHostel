import { Users, Bath, Users2, VenusAndMars, BedDouble, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/hostel";
import { useT } from "@/lib/useT";

const icons = [Users, Bath, Users2, VenusAndMars, BedDouble];

export function Rooms() {
  const t = useT();
  const rows = t.rooms.items.map((r, i) => ({ Icon: icons[i], name: r.name, from: r.from, text: r.text, features: r.features }));

  return (
    <section id="rooms" className="px-5 py-4 sm:py-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.rooms.label}</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {t.rooms.heading}
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((r, i) => (
            <Reveal
              as="li"
              key={r.name}
              delay={(i % 3) * 110}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                  <r.Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {r.from}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{r.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{r.text}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {r.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {t.rooms.book_button}
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
