import { useEffect, useRef, useState } from "react";
import { fetchRatings, type SanityRatings } from "@/lib/sanity";

const FALLBACK = {
  hostelworld: { score: 9.5, reviewCount: "850+ reviews" },
  bookingCom: { score: 8.9, reviewCount: "635 reviews" },
  googleMaps: { score: 4.8, reviewCount: "247 reviews" },
  priceFrom: 17,
};

interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel?: string;
}

function buildStats(r: SanityRatings | null): Stat[] {
  const hw = r?.hostelworld;
  const bc = r?.bookingCom;
  const gm = r?.googleMaps;
  return [
    {
      value: hw?.score ?? FALLBACK.hostelworld.score,
      suffix: "/10",
      decimals: 1,
      label: "Hostelworld rating",
      sublabel: hw?.reviewCount ?? FALLBACK.hostelworld.reviewCount,
    },
    {
      value: gm?.score ?? FALLBACK.googleMaps.score,
      suffix: "/5",
      decimals: 1,
      label: "Google Maps rating",
      sublabel: gm?.reviewCount ?? FALLBACK.googleMaps.reviewCount,
    },
    {
      value: bc?.score ?? FALLBACK.bookingCom.score,
      suffix: "/10",
      decimals: 1,
      label: "Booking.com rating",
      sublabel: bc?.reviewCount ?? FALLBACK.bookingCom.reviewCount,
    },
    {
      value: r?.priceFrom ?? FALLBACK.priceFrom,
      prefix: "€",
      suffix: "+",
      decimals: 0,
      label: "From per night",
      sublabel: "Breakfast included",
    },
  ];
}

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
  const [ratings, setRatings] = useState<SanityRatings | null>(null);

  useEffect(() => {
    fetchRatings().then(setRatings);
  }, []);

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

  const stats = buildStats(ratings);

  return (
    <div ref={ref} className="bg-[image:var(--gradient-door)] px-5 py-12 text-white">
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
