import { defineType, defineField, defineArrayMember } from "sanity";

const localizedString = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      { name: "en", title: "English", type: "string" },
      { name: "sq", title: "Albanian", type: "string" },
    ],
  });

const localizedText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    fields: [
      { name: "en", title: "English", type: "text", rows: 3 },
      { name: "sq", title: "Albanian", type: "text", rows: 3 },
    ],
  });

export const siteContent = defineType({
  name: "siteContent",
  title: "Site Content",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Internal title", type: "string" }),

    // ── HERO ──────────────────────────────────────────────────────────────
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        localizedString("headline", "Headline"),
        localizedText("subtext", "Subtext"),
      ],
    }),

    // ── STORY ─────────────────────────────────────────────────────────────
    defineField({
      name: "story",
      title: "Story",
      type: "object",
      fields: [
        localizedString("heading", "Heading"),
        localizedText("paragraph1", "Paragraph 1"),
        localizedText("paragraph2", "Paragraph 2"),
        localizedText("paragraph3", "Paragraph 3"),
      ],
    }),

    // ── AMENITIES ─────────────────────────────────────────────────────────
    defineField({
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon name (lucide)", type: "string" }),
            localizedString("title", "Title"),
            localizedString("text", "Description"),
          ],
          preview: { select: { title: "title.en" } },
        }),
      ],
    }),

    // ── EVENTS ────────────────────────────────────────────────────────────
    defineField({
      name: "events",
      title: "Events",
      type: "object",
      fields: [
        localizedString("heading", "Heading"),
        localizedText("description", "Description"),
        defineField({
          name: "list",
          title: "Event list",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "icon", title: "Icon name (lucide)", type: "string" }),
                localizedString("title", "Title"),
                localizedString("text", "Description"),
              ],
              preview: { select: { title: "title.en" } },
            }),
          ],
        }),
      ],
    }),

    // ── REVIEWS ───────────────────────────────────────────────────────────
    defineField({
      name: "reviews",
      title: "Reviews",
      type: "object",
      fields: [
        localizedString("heading", "Heading"),
        defineField({
          name: "list",
          title: "Review quotes",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [localizedString("quote", "Quote")],
              preview: { select: { title: "quote.en" } },
            }),
          ],
        }),
      ],
    }),

    // ── ROOMS ─────────────────────────────────────────────────────────────
    defineField({
      name: "rooms",
      title: "Rooms",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon name (lucide)", type: "string" }),
            localizedString("name", "Room name"),
            defineField({ name: "pricePerNight", title: "Price per night (€)", type: "number" }),
            localizedString("from", "Pricing label (override, e.g. €18 / night)"),
            localizedString("text", "Description"),
            defineField({
              name: "features",
              title: "Features",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [localizedString("text", "Feature")],
                  preview: { select: { title: "text.en" } },
                }),
              ],
            }),
          ],
          preview: { select: { title: "name.en" } },
        }),
      ],
    }),

    // ── LOCATION ──────────────────────────────────────────────────────────
    defineField({
      name: "location",
      title: "Location",
      type: "object",
      fields: [
        localizedString("heading", "Heading"),
        defineField({
          name: "nearby",
          title: "Nearby places",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({ name: "icon", title: "Icon name (lucide)", type: "string" }),
                localizedString("label", "Label"),
                localizedString("text", "Description"),
              ],
              preview: { select: { title: "label.en" } },
            }),
          ],
        }),
      ],
    }),

    // ── RATINGS ───────────────────────────────────────────────────────────
    defineField({
      name: "ratings",
      title: "Ratings",
      type: "object",
      fields: [
        defineField({
          name: "hostelworld",
          title: "Hostelworld",
          type: "object",
          fields: [
            defineField({ name: "score", title: "Score (e.g. 9.5)", type: "number" }),
            defineField({ name: "reviewCount", title: "Review count label (e.g. 850+ reviews)", type: "string" }),
          ],
        }),
        defineField({
          name: "bookingCom",
          title: "Booking.com",
          type: "object",
          fields: [
            defineField({ name: "score", title: "Score (e.g. 8.9)", type: "number" }),
            defineField({ name: "reviewCount", title: "Review count label (e.g. 635 reviews)", type: "string" }),
          ],
        }),
        defineField({
          name: "googleMaps",
          title: "Google Maps",
          type: "object",
          fields: [
            defineField({ name: "score", title: "Score (e.g. 4.8)", type: "number" }),
            defineField({ name: "reviewCount", title: "Review count label (e.g. 247 reviews)", type: "string" }),
          ],
        }),
        defineField({ name: "priceFrom", title: "Price from (e.g. 17)", type: "number" }),
      ],
    }),

    // ── FOOTER ────────────────────────────────────────────────────────────
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [localizedString("tagline", "Tagline")],
    }),
  ],

  preview: {
    select: { title: "title" },
  },
});
