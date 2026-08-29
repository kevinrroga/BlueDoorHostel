import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel?: string;
}

const stats: Stat[] = [
  {
    value: 9.2,
    suffix: "/10",
    decimals: 1,
    label: "Hostelworld rating",
    sublabel: "1,225+ reviews",
  },
  {
    value: 4.8,
    suffix: "/5",
    decimals: 1,
    label: "Google Maps rating",
    sublabel: "247 reviews",
  },
  {
    value: 8.9,
    suffix: "/10",
    decimals: 1,
    label: "Booking.com rating",
    sublabel: "636 reviews",
  },
  {
    value: 17,
    prefix: "€",
    suffix: "+",
    decimals: 0,
    label: "From per night",
    sublabel: "Breakfast included",
  },
];

function Counter({ value, prefix = "", suffix = "", decimals = 0, active }: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(parseFloat((eased * value).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };

    requestAnimationFrame(tick);
  }, [active, value, decimals]);

  return (
    <span>
      {prefix}{display.toFixed(decimals)}{suffix}
    </span>
  );
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[image:var(--gradient-door)] px-5 py-8 text-white">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <dt className="font-display text-4xl font-bold text-white sm:text-5xl">
              <Counter
                value={s.value}
                prefix={s.prefix}
                suffix={s.suffix}
                decimals={s.decimals}
                active={active}
              />
            </dt>
            <dd className="mt-2 text-sm font-semibold text-white/80">{s.label}</dd>
            {s.sublabel && (
              <dd className="mt-0.5 text-xs text-white/50">{s.sublabel}</dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
