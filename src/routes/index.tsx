import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Story } from "@/components/site/Story";
import { StatsStrip } from "@/components/site/StatsStrip";
import { Amenities } from "@/components/site/Amenities";
import { Gallery } from "@/components/site/Gallery";
import { Events } from "@/components/site/Events";
import { Schedule } from "@/components/site/Schedule";
import { Reviews } from "@/components/site/Reviews";
import { Rooms } from "@/components/site/Rooms";
import { Location } from "@/components/site/Location";
import { StaffPicks } from "@/components/site/StaffPicks";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { ADDRESS, BOOKING_URL, COORDS, EMAIL, INSTAGRAM_URL, PHONE_DISPLAY } from "@/lib/hostel";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Update this once your custom domain is confirmed on Vercel
const SITE_URL = "https://bluedoorhostel.com";

const title = "Blue Door Hostel: Social Hostel in Tirana, Albania";
const description =
  "Stay at Blue Door Hostel in Tirana, Albania — from €17/night. Free breakfast daily, Nana's traditional dinners, nightly events, garden bar and free Wi-Fi. Rated 9.2 on Hostelworld. Near Skanderbeg Square.";

const sections = [
  {
    id: "top",
    name: "Blue Door Hostel Tirana",
    description:
      "Book a bed or private room at Blue Door Hostel, a social hostel in the heart of Tirana, Albania.",
  },
  {
    id: "about",
    name: "Our story: a WWII-era Tirana villa",
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
      "What travellers say about staying at Blue Door Hostel in Tirana, rated 9.2 on Hostelworld.",
  },
  {
    id: "rooms",
    name: "Rooms and prices",
    description:
      "Mixed dorms from €17, female-only dorm at €20 and private rooms at €28 — all with free breakfast.",
  },
  {
    id: "location",
    name: "Location in Tirana",
    description: `Blue Door Hostel is at ${ADDRESS}, a short walk from Skanderbeg Square and Blloku.`,
  },
];

// FAQ rich results — hardcoded in English for search engines
const faqSchema = {
  "@type": "FAQPage",
  "@id": "/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the check-in and check-out times at Blue Door Hostel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check-in is from 11:30 AM and reception is open until midnight. Check-out is before 11:00 AM. Bag storage is free of charge for early arrivals or late departures.",
      },
    },
    {
      "@type": "Question",
      name: "Is breakfast included at Blue Door Hostel Tirana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a free vegetarian-friendly breakfast is included every morning. Most evenings Nana also prepares a traditional Albanian dinner available to all guests at a low cost.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get from Tirana Airport to Blue Door Hostel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The airport is around 15 km away, roughly a 30-minute drive. We offer airport pickup on request — contact us in advance to arrange it. Taxis and ride-share apps are also widely available.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can cancel free of charge up to 24 hours before your arrival date. Cancellations made less than 24 hours before check-in are subject to a one-night charge.",
      },
    },
    {
      "@type": "Question",
      name: "Are towels provided at Blue Door Hostel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, towels are included in the price with no extra fees or deposits. Just ask at reception when you arrive.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods are accepted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept cash in Albanian Lek or Euro, as well as credit and debit cards. The city tourist tax is paid separately at check-in.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a minimum age to stay at Blue Door Hostel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Guests must be at least 18 years old to stay in the dorm rooms. Families with children may enquire about private room availability.",
      },
    },
    {
      "@type": "Question",
      name: "Is Wi-Fi free and reliable at Blue Door Hostel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, fast Wi-Fi is available throughout the hostel at no charge, reliable enough for remote work, video calls and uploading your whole trip.",
      },
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hostel",
      "@id": "/#hostel",
      name: "Blue Door Hostel",
      description,
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
      email: EMAIL,
      priceRange: "€17 - €28",
      checkinTime: "11:30",
      checkoutTime: "11:00",
      image: `${SITE_URL}/og-image.jpg`,
      currenciesAccepted: "EUR, ALL",
      paymentAccepted: "Cash, Credit Card, Debit Card",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rruga Shtjefen Gjecovi 18",
        addressLocality: "Tirana",
        addressRegion: "Tirana County",
        postalCode: "1001",
        addressCountry: "AL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: COORDS.lat,
        longitude: COORDS.lng,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "23:59",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "9.2",
        bestRating: "10",
        worstRating: "1",
        reviewCount: "1225",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Free breakfast", value: true },
        { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
        { "@type": "LocationFeatureSpecification", name: "Air conditioning", value: true },
        { "@type": "LocationFeatureSpecification", name: "Garden and bar", value: true },
        { "@type": "LocationFeatureSpecification", name: "Shared kitchen", value: true },
        { "@type": "LocationFeatureSpecification", name: "Personal lockers", value: true },
        { "@type": "LocationFeatureSpecification", name: "Laundry service", value: true },
        { "@type": "LocationFeatureSpecification", name: "Airport shuttle", value: true },
        { "@type": "LocationFeatureSpecification", name: "Luggage storage", value: true },
      ],
      sameAs: [
        INSTAGRAM_URL,
        BOOKING_URL,
        "https://www.booking.com/searchresults.html?ss=Blue+Door+Hostel+Tirana",
        "https://www.tripadvisor.com/Hotel_Review-g294446-d25197189-Reviews-Blue_Door_Hostel-Tirana_Tirana_County.html",
      ],
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
      url: SITE_URL,
      inLanguage: ["en", "sq"],
      about: { "@id": "/#hostel" },
      hasPart: sections.map((s) => ({
        "@type": "WebPageElement",
        "@id": `/#${s.id}`,
        name: s.name,
        description: s.description,
        url: `${SITE_URL}/#${s.id}`,
      })),
    },
    faqSchema,
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content:
          "hostel Tirana, Blue Door Hostel, social hostel Albania, backpacker Tirana, cheap accommodation Tirana, dorms Tirana, hostel Albania, where to stay Tirana, budget hotel Tirana, Skanderbeg Square hostel",
      },
      // Open Graph
      { property: "og:site_name", content: "Blue Door Hostel" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "sq_AL" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "The cobalt blue entrance door of Blue Door Hostel in Tirana, Albania" },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
      // Geo — local SEO
      { name: "geo.region", content: "AL-11" },
      { name: "geo.placename", content: "Tirana, Albania" },
      { name: "geo.position", content: `${COORDS.lat};${COORDS.lng}` },
      { name: "ICBM", content: `${COORDS.lat}, ${COORDS.lng}` },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "alternate", hreflang: "en", href: SITE_URL },
      { rel: "alternate", hreflang: "sq", href: SITE_URL },
      { rel: "alternate", hreflang: "x-default", href: SITE_URL },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <StatsStrip />
          <Story />
          <Amenities />
          <Gallery />
          <Events />
          <Schedule />
          <Reviews />
          <Rooms />
          <Location />
          <StaffPicks />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
    </ThemeProvider>
  );
}
