import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import entranceImg from "@/assets/photo-entrance.jpg";
import dormAtticImg from "@/assets/photo-dorm-attic.jpg";
import dormBunksImg from "@/assets/photo-dorm-bunks.jpg";
import privateImg from "@/assets/photo-private.jpg";
import loungeImg from "@/assets/photo-lounge.jpg";
import kitchenImg from "@/assets/photo-kitchen.jpg";
import dinnerImg from "@/assets/photo-dinner.jpg";
import partyImg from "@/assets/photo-party.jpg";
import gardenImg from "@/assets/photo-garden.jpg";
import google1Img from "@/assets/photo-google-1.jpg";
import google2Img from "@/assets/photo-google-2.jpg";
import google3Img from "@/assets/photo-google-3.jpg";
import google4Img from "@/assets/photo-google-4.jpg";
import hallImg from "@/assets/photo-hall.jpg";
import staircaseImg from "@/assets/photo-staircase.jpg";

export const GALLERY_PHOTOS = [
  {
    src: entranceImg,
    tag: "The hostel",
    title: "The blue door itself",
    caption: "The ivy-covered archway on Rruga Shtjefen Gjecovi.",
    alt: "Ivy-covered entrance archway with the Blue Door Hostel sign in Tirana",
  },
  {
    src: google1Img,
    tag: "Rooms",
    title: "Room 2",
    caption: "Red privacy curtains, bunk beds and an Albanian rug on the wall.",
    alt: "Doorway view into Room 2 at Blue Door Hostel with red curtains and bunk beds",
  },
  {
    src: google2Img,
    tag: "Rooms",
    title: "Dorm interior",
    caption: "Olive curtains, numbered lockers and murals on every wall.",
    alt: "Hostel dorm room with olive green privacy curtains, lockers and wall murals",
  },
  {
    src: dormAtticImg,
    tag: "Rooms",
    title: "Attic dorm",
    caption: "Wooden beams, sturdy bunks and a hand-woven Albanian rug.",
    alt: "Attic dormitory with wooden bunk beds and a traditional Albanian rug",
  },
  {
    src: dormBunksImg,
    tag: "Rooms",
    title: "Mixed dorms",
    caption: "Privacy curtains, personal lockers and reading lights.",
    alt: "Mixed dorm room with bunk beds, privacy curtains and lockers",
  },
  {
    src: google3Img,
    tag: "Rooms",
    title: "Your own space",
    caption: "Warm reading light, fresh pillow and a curtain that's all yours.",
    alt: "Close-up of a bunk bed pod with warm orange light and privacy curtain",
  },
  {
    src: privateImg,
    tag: "Rooms",
    title: "Private rooms",
    caption: "Your own room, made-up bed and a door that closes.",
    alt: "Private room with a single bed and wooden floor at Blue Door Hostel",
  },
  {
    src: loungeImg,
    tag: "Common areas",
    title: "The common room",
    caption: "Wood stove, low sofas and rugs: where everyone ends up.",
    alt: "Hostel common room with a wood stove, sofas and colourful rugs",
  },
  {
    src: kitchenImg,
    tag: "Common areas",
    title: "Guest kitchen",
    caption: "Blue cabinets, full kit and coffee whenever you need it.",
    alt: "Guest kitchen with blue cabinets and cooking equipment",
  },
  {
    src: google4Img,
    tag: "The hostel",
    title: "The staircase mural",
    caption: "Hand-painted wall art going up the stairs, one of a kind.",
    alt: "Large hand-painted mural on the staircase wall at Blue Door Hostel",
  },
  {
    src: hallImg,
    tag: "The hostel",
    title: "The hallway",
    caption: "Reception desk, free breakfast sign and the staircase leading up.",
    alt: "Blue Door Hostel hallway with reception desk, notice board and painted staircase",
  },
  {
    src: staircaseImg,
    tag: "The hostel",
    title: "Up the stairs",
    caption: "Glass-block skylight, wall murals and warm sconce lighting on the staircase.",
    alt: "Blue Door Hostel staircase looking up with glass block window and painted murals on the walls",
  },
  {
    src: dinnerImg,
    tag: "Events",
    title: "Family dinner",
    caption: "A homemade Albanian feast around one very long table.",
    alt: "Guests toasting over a shared traditional Albanian dinner",
  },
  {
    src: partyImg,
    tag: "Events",
    title: "Hostel nights",
    caption: "Karaoke, trivia and Albanian Nights with the whole house in.",
    alt: "Guests gathered for a social event night inside the hostel",
  },
  {
    src: gardenImg,
    tag: "Common areas",
    title: "The garden",
    caption: "Drinks under the trees when Tirana cools down.",
    alt: "Hostel garden at night with guests gathered under the trees",
  },
];

function Lightbox({ index, onClose, onPrev, onNext }: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = GALLERY_PHOTOS[index];
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? onNext() : onPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev */}
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous photo"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next */}
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next photo"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Photo + caption */}
      <div
        className="flex max-h-[90vh] max-w-5xl flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
        />
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            {photo.tag}
          </p>
          <p className="mt-1 font-display text-xl font-bold text-white">
            {photo.title}
          </p>
          <p className="mt-1 text-sm text-white/65">{photo.caption}</p>
          <p className="mt-2 text-xs text-white/30">
            {index + 1} / {GALLERY_PHOTOS.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length)), []);
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % GALLERY_PHOTOS.length)), []);

  return (
    <section id="gallery" className="scroll-mt-24 bg-background py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
            A look inside the blue door
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            Real photos of the rooms, common areas and the nights that make
            people extend their stay.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {GALLERY_PHOTOS.map((photo, i) => (
                <CarouselItem
                  key={photo.title}
                  className="flex pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <figure
                    className="group flex h-full w-full cursor-zoom-in flex-col overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)]"
                    onClick={() => setLightboxIndex(i)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="rounded-full bg-black/50 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                          View full size
                        </span>
                      </div>
                    </div>
                    <figcaption className="flex flex-1 flex-col space-y-1.5 p-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        {photo.tag}
                      </span>
                      <h3 className="font-display text-xl font-bold text-primary">
                        {photo.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/70">
                        {photo.caption}
                      </p>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 border-primary/20 bg-card text-primary hover:bg-primary hover:text-primary-foreground md:-left-6" />
            <CarouselNext className="-right-3 border-primary/20 bg-card text-primary hover:bg-primary hover:text-primary-foreground md:-right-6" />
          </Carousel>
        </Reveal>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
