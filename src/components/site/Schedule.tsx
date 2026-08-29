import { useEffect, useRef } from "react";
import { Clapperboard, ChefHat, Brain, Flame, Mic2, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useT";
import { cn } from "@/lib/utils";

const icons = [Clapperboard, ChefHat, Brain, Flame, Mic2, Brain, Flame];

// JS getDay(): 0=Sun,1=Mon,...,6=Sat  →  our array: 0=Mon,...,6=Sun
function getTodayIndex() {
  return (new Date().getDay() + 6) % 7;
}

export function Schedule() {
  const t = useT();
  const todayIndex = getTodayIndex();
  const stripRef = useRef<HTMLDivElement>(null);
  const todayRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (todayRef.current && stripRef.current) {
      const strip = stripRef.current;
      const card = todayRef.current;
      const offset = card.offsetLeft - strip.clientWidth / 2 + card.clientWidth / 2;
      strip.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, []);

  return (
    <section id="schedule" className="scroll-mt-24 bg-card px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t.schedule.label}
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {t.schedule.heading}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/70">
            {t.schedule.description}
          </p>
        </Reveal>

        {/* Week strip */}
        <div
          ref={stripRef}
          className="mt-12 flex gap-3 overflow-x-auto pb-3 scrollbar-none"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {t.schedule.days.map((day, i) => {
            const Icon = icons[i];
            const isToday = i === todayIndex;
            const isExternal = day.venue === "bearded_dad";

            return (
              <li
                key={day.short}
                ref={isToday ? todayRef : undefined}
                style={{ scrollSnapAlign: "center" }}
                className={cn(
                  "relative flex w-[152px] shrink-0 list-none flex-col rounded-3xl border p-5 transition-shadow duration-300",
                  isToday
                    ? "border-primary bg-[image:var(--gradient-door)] text-white shadow-[var(--shadow-lift)]"
                    : "border-border bg-background text-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)]"
                )}
              >
                {/* Day name + today badge inline */}
                <div className="flex items-center justify-between gap-1">
                  <p className={cn(
                    "text-xs font-bold uppercase tracking-[0.18em]",
                    isToday ? "text-white/60" : "text-foreground/40"
                  )}>
                    {day.short}
                  </p>
                  {isToday && (
                    <span className="rounded-full bg-gold px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-black">
                      {t.schedule.today}
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className={cn(
                  "mt-4 grid h-11 w-11 place-items-center rounded-xl",
                  isToday ? "bg-white/15" : "bg-secondary"
                )}>
                  <Icon className={cn("h-5 w-5", isToday ? "text-gold" : "text-primary")} />
                </div>

                {/* Event name */}
                <p className={cn(
                  "mt-4 font-display text-base font-bold leading-snug",
                  isToday ? "text-white" : "text-primary"
                )}>
                  {day.event}
                </p>

                {/* Time */}
                <p className={cn(
                  "mt-1.5 text-xs font-medium",
                  isToday ? "text-white/70" : "text-foreground/50"
                )}>
                  {day.time}
                </p>

                {/* Venue */}
                <div className={cn(
                  "mt-4 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold",
                  isExternal
                    ? isToday
                      ? "bg-white/15 text-white/80"
                      : "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                    : isToday
                      ? "bg-white/15 text-white/80"
                      : "bg-secondary text-foreground/60"
                )}>
                  <MapPin className="h-2.5 w-2.5 shrink-0" />
                  <span className="truncate">
                    {isExternal ? "Bearded Dad" : "Blue Door"}
                  </span>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </section>
  );
}
