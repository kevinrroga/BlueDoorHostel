import { Coffee, UtensilsCrossed, Wine, Music2, Mountain, Landmark } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useT";

const icons = [Coffee, UtensilsCrossed, Wine, Music2, Mountain, Landmark];

const categoryColors = [
  "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  "bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300",
  "bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
];

export function StaffPicks() {
  const t = useT();
  const items = t.staffpicks.items.map((item, i) => ({
    Icon: icons[i],
    colorClass: categoryColors[i],
    ...item,
  }));

  return (
    <section id="staffpicks" className="scroll-mt-24 px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t.staffpicks.label}
          </p>
          <h2 className="mt-8 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {t.staffpicks.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            {t.staffpicks.description}
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              as="li"
              key={item.place}
              delay={(i % 3) * 90}
              className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${item.colorClass}`}>
                  <item.Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/50">
                  {item.category}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-primary">
                {item.place}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {item.tip}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
