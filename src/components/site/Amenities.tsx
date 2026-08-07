import {
  Croissant,
  Bath,
  Lock,
  Snowflake,
  Trees,
  CookingPot,
  Wifi,
  Gamepad2,
  Bike,
  Luggage,
  Laptop,
  WashingMachine,
} from "lucide-react";
import { Reveal } from "./Reveal";

const amenities = [
  {
    icon: Croissant,
    title: "Free breakfast daily",
    text: "Vegetarian friendly, plus Nana's traditional dinners most nights.",
  },
  { icon: Bath, title: "Towels included", text: "No extra fees, no deposits. Just ask at reception." },
  { icon: Lock, title: "Personal lockers", text: "Spacious lockers with a key provided for every guest." },
  {
    icon: Snowflake,
    title: "A/C + privacy curtains",
    text: "Air conditioning throughout and a curtain on every bed.",
  },
  { icon: Trees, title: "Garden, terrace & bar", text: "Where most evenings and new friendships start." },
  { icon: CookingPot, title: "Shared kitchen", text: "Cook your own, or join whatever's on the stove." },
  { icon: Wifi, title: "Free Wi-Fi", text: "Fast enough to work, plan or upload the whole trip." },
  { icon: Gamepad2, title: "Games room", text: "Ping pong and darts: rivalries strongly encouraged." },
  { icon: Bike, title: "Bicycle parking", text: "Safe spot for your bike; Tirana is flat and rideable." },
  { icon: Luggage, title: "Bag storage", text: "Early arrival or late bus? Leave your bag with us." },
  { icon: Laptop, title: "Working spaces", text: "Quiet corners and fast Wi-Fi for remote workers and planners." },
  { icon: WashingMachine, title: "Laundry service", text: "Keep your bag light and we will sort the rest." },
];

export function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-24 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Amenities</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
            Everything you need, nothing you don't
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => (
            <Reveal
              as="li"
              key={a.title}
              delay={(i % 3) * 90}
              className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <a.icon className="h-5 w-5" />
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
