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
            localizedString("from", "Pricing label"),
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
