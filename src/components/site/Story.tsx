import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/useT";
import plaqueImg from "@/assets/photo-plaque.jpg";

function PlaqueLightbox({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={plaqueImg}
        alt="Historic plaque on the wall of Blue Door Hostel marking it as a partisan base 1936-1943"
        className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export function Story() {
  const t = useT();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section id="about" className="px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
            <button
              className="w-full cursor-zoom-in"
              onClick={() => setLightboxOpen(true)}
              aria-label="View plaque full size"
            >
              <img
                src={plaqueImg}
                alt="Historic plaque on the wall of Blue Door Hostel marking it as a partisan base 1936-1943"
                className="w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </button>
            <dl className="grid grid-cols-3 gap-4 bg-[image:var(--gradient-door)] px-8 py-6 text-white">
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/60">
                  {t.story.stat_rating_label}
                </dt>
                <dd className="mt-1 font-display text-3xl font-bold text-gold">9.5</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/60">
                  {t.story.stat_reviews_label}
                </dt>
                <dd className="mt-1 font-display text-3xl font-bold text-gold">1.2k+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-white/60">
                  {t.story.stat_villa_label}
                </dt>
                <dd className="mt-1 font-display text-3xl font-bold text-gold">1936</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.story.label}</p>
          <h2 className="mt-12 text-balance font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
            {t.story.heading}
          </h2>
          <div className="mt-12 space-y-5 text-base leading-relaxed text-foreground/75">
            <p>{t.story.paragraph1}</p>
            <p>{t.story.paragraph2}</p>
            <p>{t.story.paragraph3}</p>
          </div>
        </Reveal>
      </div>

      {lightboxOpen && <PlaqueLightbox onClose={() => setLightboxOpen(false)} />}
    </section>
  );
}
