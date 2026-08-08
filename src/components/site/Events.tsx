import { Mic2, Brain, Flag, ChefHat, Clapperboard, Flame, Footprints, Laugh } from "lucide-react";
import { Reveal } from "./Reveal";

const events = [
  { icon: Mic2, title: "Karaoke nights", text: "Nobody is good. Everybody sings." },
  { icon: Brain, title: "Trivia evenings", text: "Mixed teams: you will know half the room by round three." },
  { icon: Flag, title: "Albanian Nights", text: "Raki, folk music and stories from our staff." },
  { icon: ChefHat, title: "Cooking classes", text: "Learn byrek and other family favourites with Nana." },
  { icon: Clapperboard, title: "Movie nights", text: "Projector on the terrace when the weather plays along." },
  { icon: Flame, title: "BBQs", text: "Garden grill, long tables, everyone invited." },
  { icon: Footprints, title: "Day trips & walking tours", text: "Bunk'Art, Dajti Mountain and the Old Bazaar." },
  { icon: Laugh, title: "Stand-up comedy", text: "Local and traveller comedians. The crowd is always mixed." },
];

export function Events() {
  return (
    <section id="events" className="bg-[image:var(--gradient-door)] px-5 py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Events</p>
          <h2 className="mt-4 text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
            Something's always happening
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/75">
            We are not a party hostel; we are a social one. If you arrive in Tirana alone, you
            won't stay that way. There is something on almost every night, and it always starts
            the same way: someone in the common room asking if you want to join.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <ul className="divide-y divide-primary-foreground/15">
            {events.map((e) => (
              <li key={e.title} className="flex items-start gap-4 py-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 text-gold">
                  <e.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold">{e.title}</h3>
                  <p className="mt-0.5 text-sm text-primary-foreground/70">{e.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
