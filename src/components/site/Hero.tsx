import { Star, Coffee, Wifi, MapPin } from "lucide-react";
import { DoorIcon } from "./DoorIcon";
import { Reveal } from "./Reveal";
import { BOOKING_URL } from "@/lib/hostel";
import entranceImg from "@/assets/photo-entrance.jpg";

const badges = [
  { icon: Star, label: "Rated 9.0" },
  { icon: Coffee, label: "Free breakfast" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: MapPin, label: "Near Skanderbeg Square" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-secondary/70 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <DoorIcon className="door-glow mx-auto h-24 sm:h-28" />
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary sm:text-5xl md:text-6xl">
            Where Tirana opens its doors to you
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
            A renovated Albanian villa a short walk from the Old Bazaar, with home-cooked dinners,
            a garden to sit in, and a cobalt blue door that has welcomed travellers, neighbours
            and stories for decades.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Check availability
            </a>
            <a
              href="#about"
              className="w-full rounded-full border border-primary/30 px-7 py-3.5 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary/5 sm:w-auto"
            >
              Explore the hostel
            </a>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            {badges.map((b) => (
              <li
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-medium text-foreground/75 backdrop-blur-sm"
              >
                <b.icon className="h-3.5 w-3.5 shrink-0 text-gold" />
                {b.label}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={500}>
          <div className="mt-12 overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
            <img
              src={entranceImg}
              alt="The ivy-covered entrance archway with the iconic cobalt blue door of Blue Door Hostel in Tirana"
              className="w-full object-cover object-center"
              style={{ maxHeight: "420px" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
