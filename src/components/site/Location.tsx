import { MapPin, Footprints, Store, Bus, Plane, Landmark, Church } from "lucide-react";
import { Reveal } from "./Reveal";
import { ADDRESS, DIRECTIONS_URL, MAP_EMBED_URL } from "@/lib/hostel";
import { useT } from "@/lib/useT";

const nearbyIcons = [Footprints, Store, Church, Landmark, Bus, Plane];

export function Location() {
  const t = useT();
  const nearby = t.location.nearby.map((n, i) => ({ Icon: nearbyIcons[i], label: n.label, text: n.text }));

  return (
    <section id="location" className="px-5 py-8 sm:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.location.label}</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {t.location.heading}
          </h2>
          <p className="mt-5 flex items-start gap-2 text-base text-foreground/75">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
            {ADDRESS}
          </p>
          <ul className="mt-8 space-y-4">
            {nearby.map((n) => (
              <li key={n.label} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                  <n.Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-primary">{n.label}</p>
                  <p className="text-sm text-foreground/70">{n.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-9 inline-flex rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
          >
            {t.location.directions_button}
          </a>
        </Reveal>

        <Reveal delay={140}>
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-lift)]">
            <iframe
              title="Map showing Blue Door Hostel in Tirana"
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 sm:h-[460px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
