import { DoorIcon } from "./DoorIcon";
import { Reveal } from "./Reveal";

export function Story() {
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
              A symbol of peace and prosperity, painted cobalt blue.
            </p>
            <dl className="relative mt-10 grid grid-cols-3 gap-4 border-t border-primary-foreground/20 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-widest text-primary-foreground/60">
                  Guest rating
                </dt>
                <dd className="mt-1 font-display text-3xl font-bold text-gold">9.2</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-primary-foreground/60">
                  Reviews
                </dt>
                <dd className="mt-1 font-display text-3xl font-bold text-gold">1.2k+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-primary-foreground/60">
                  A villa since
                </dt>
                <dd className="mt-1 font-display text-3xl font-bold text-gold">WWII</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our story</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
            An old partisan villa, still full of life
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/75">
            <p>
              The house is a historic Albanian villa that sheltered WWII partisans. Its bones are
              the same: thick walls, high ceilings, a fireplace in the common room, but the
              inside has been carefully renovated into a warm, social place to stay.
            </p>
            <p>
              Local paintings hang on almost every wall, blending old and modern Albanian art, and
              the cobalt blue front door the hostel is named after has always meant the same
              thing here: peace and prosperity to whoever walks through it.
            </p>
            <p>
              The neighbourhood is real Tirana: bakeries, corner cafes and neighbours who say
              hello, with Skanderbeg Square and the Old Bazaar an easy walk away.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
