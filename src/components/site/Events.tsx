import { Mic2, Brain, Flag, ChefHat, Clapperboard, Flame, Footprints, Laugh } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useT";

const icons = [Mic2, Brain, Flag, ChefHat, Clapperboard, Flame, Footprints, Laugh];

export function Events() {
  const t = useT();
  const list = t.events.items.map((item, i) => ({ Icon: icons[i], title: item.title, text: item.text }));

  return (
    <section id="events" className="bg-[image:var(--gradient-door)] px-5 py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t.events.label}</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
            {t.events.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/75">{t.events.description}</p>
        </Reveal>

        <Reveal delay={140}>
          <ul className="divide-y divide-white/15">
            {list.map((e) => (
              <li key={e.title} className="flex items-start gap-4 py-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                  <e.Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold">{e.title}</h3>
                  <p className="mt-0.5 text-sm text-white/70">{e.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
