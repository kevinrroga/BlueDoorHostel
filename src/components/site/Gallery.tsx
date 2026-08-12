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

export const GALLERY_PHOTOS = [
  {
    src: entranceImg,
    tag: "The hostel",
    title: "The blue door itself",
    caption: "The ivy-covered archway on Rruga Shtjefen Gjecovi.",
    alt: "Ivy-covered entrance archway with the Blue Door Hostel sign in Tirana",
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

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-background py-20 md:py-28">
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
              {GALLERY_PHOTOS.map((photo) => (
                <CarouselItem
                  key={photo.title}
                  className="flex pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <figure className="group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
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
    </section>
  );
}
