import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Story } from "@/components/site/Story";
import { Amenities } from "@/components/site/Amenities";
import { Gallery } from "@/components/site/Gallery";
import { Events } from "@/components/site/Events";
import { Reviews } from "@/components/site/Reviews";
import { Rooms } from "@/components/site/Rooms";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { ADDRESS, BOOKING_URL, COORDS } from "@/lib/hostel";
import { LanguageProvider } from "@/contexts/LanguageContext";

const title = "Blue Door Hostel — Social Hostel in Tirana, Albania";
const description =
  "A renovated Albanian villa near Skanderbeg Square. Free breakfast, Nana's traditional dinners, nightly events and a garden bar. Rated 9.0 on Hostelworld.";

// Per-section descriptors: used for the page's structured data so each
// anchor section is described for search engines and social crawlers.
const sections = [
  {
    id: "top",
    name: "Blue Door Hostel Tirana",
    description:
      "Book a bed or private room at Blue Door Hostel, a social hostel in the heart of Tirana, Albania.",
  },
  {
    id: "about",
    name: "Our story — a WWII-era Tirana villa",
    description:
      "How a 1940s Albanian family villa behind a cobalt blue door became Tirana's most sociable hostel.",
  },
  {
    id: "amenities",
    name: "Hostel amenities",
    description:
      "Free breakfast, fast Wi-Fi, guest kitchen, big lockers, laundry, garden bar and 24/7 reception.",
  },
  {
    id: "gallery",
    name: "Photo gallery",
    description:
      "Photos of the dorms, private rooms, lounge, garden bar, rooftop terrace and hostel events.",
  },
  {
    id: "events",
    name: "Events and social calendar",
    description:
      "Nana's family dinner, pub crawls, walking tours, movie nights and Dajti mountain hikes every week.",
  },
  {
    id: "reviews",
    name: "Guest reviews",
    description:
      "What travellers say about staying at Blue Door Hostel in Tirana — rated 9.0 on Hostelworld.",
  },
  {
    id: "rooms",
    name: "Rooms and prices",
    description:
      "Mixed dorms, female-only dorms and private rooms with linen, lockers and free breakfast included.",
  },
  {
    id: "location",
    name: "Location in Tirana",
    description: `Blue Door Hostel is at ${ADDRESS}, a short walk from Skanderbeg Square and Blloku.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hostel",
      "@id": "/#hostel",
      name: "Blue Door Hostel",
      description,
      url: "/",
      priceRange: "$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rruga Shtjefen Gjecovi 18",
        addressLocality: "Tirana",
        addressCountry: "AL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: COORDS.lat,
        longitude: COORDS.lng,
      },
      potentialAction: {
        "@type": "ReserveAction",
        target: BOOKING_URL,
      },
    },
    {
      "@type": "WebPage",
      "@id": "/#webpage",
      name: title,
      description,
      about: { "@id": "/#hostel" },
      hasPart: sections.map((s) => ({
        "@type": "WebPageElement",
        "@id": `/#${s.id}`,
        name: s.name,
        description: s.description,
        url: `/#${s.id}`,
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "hostel Tirana, Blue Door Hostel, social hostel Albania, backpacker Tirana, dorms, private rooms",
      },
      { property: "og:site_name", content: "Blue Door Hostel" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <Story />
          <Amenities />
          <Gallery />
          <Events />
          <Reviews />
          <Rooms />
          <Location />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
