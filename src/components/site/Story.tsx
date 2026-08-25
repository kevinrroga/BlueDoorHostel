import { DoorIcon } from "./DoorIcon";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useT";

export function Story() {
  const t = useT();
  return (
    <section id="about" className="px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-door)] p-8 text-primary-foreground shadow-[var(--shadow-lift)] sm:p-12">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/15 blur-2xl"
            />
            <DoorIcon className="relative h-36 sm:h-44" />
            <p className="relative mt-8 max-w-xs font-display text-xl leading-snug">
              {t.story.door_motto}
            </p>
            <dl className="relative mt-10 grid grid-cols-3 gap-4 border-t border-primary-foreground/20 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-widest text-primary-foreground/60">
                  {t.story.stat_rating_label}
                </dt>
                <dd className="mt-1 font-display text-3xl font-bold text-gold">9.2</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-primary-foreground/60">
                  {t.story.stat_reviews_label}
                </dt>
                <dd className="mt-1 font-display text-3xl font-bold text-gold">1.2k+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-primary-foreground/60">
                  {t.story.stat_villa_label}
                </dt>
                <dd className="mt-1 font-display text-3xl font-bold text-gold">WWII</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.story.label}</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {t.story.heading}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/75">
            <p>{t.story.paragraph1}</p>
            <p>{t.story.paragraph2}</p>
            <p>{t.story.paragraph3}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
