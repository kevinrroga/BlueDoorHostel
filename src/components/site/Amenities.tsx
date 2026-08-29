import {
  Croissant, Bath, Lock, Snowflake, Trees, CookingPot,
  Wifi, Gamepad2, Bike, Luggage, Laptop, WashingMachine, Car, Sofa,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useT";

const icons = [Croissant, Bath, Lock, Snowflake, Trees, CookingPot, Wifi, Gamepad2, Bike, Luggage, Laptop, WashingMachine, Car, Sofa];

export function Amenities() {
  const t = useT();
  const rows = t.amenities.items.map((item, i) => ({ Icon: icons[i], title: item.title, text: item.text }));

  return (
    <section id="amenities" className="scroll-mt-24 px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.amenities.label}</p>
          <h2 className="mt-8 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {t.amenities.heading}
          </h2>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((a, i) => (
            <Reveal
              as="li"
              key={a.title}
              delay={(i % 3) * 90}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <a.Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-primary">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{a.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
