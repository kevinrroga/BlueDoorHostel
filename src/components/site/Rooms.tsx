import { Users, VenusAndMars, BedDouble, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/hostel";

const rooms = [
  {
    icon: Users,
    name: "Mixed dorms",
    from: "From €18 / night",
    text: "The social heart of the hostel, where most friendships here start.",
    features: ["Air conditioning", "Privacy curtains on every bed", "Spacious personal lockers"],
  },
  {
    icon: VenusAndMars,
    name: "Female-only dorms",
    from: "From €18 / night",
    text: "Same comfort and calm, reserved for women travelling solo or together.",
    features: ["Air conditioning", "Privacy curtains on every bed", "Spacious personal lockers"],
  },
  {
    icon: BedDouble,
    name: "Private rooms",
    from: "Ask for availability",
    text: "Your own door to close, with the common room still a few steps away.",
    features: ["Air conditioning", "Private space for one or two", "Towels included"],
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Rooms</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
            Somewhere comfortable to land
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {rooms.map((r, i) => (
            <Reveal
              as="li"
              key={r.name}
              delay={i * 110}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                  <r.icon className="h-5 w-5" />
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
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-7 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book this room
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
