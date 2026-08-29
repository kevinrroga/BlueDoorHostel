import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "yyf7mi6t",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

export interface SanityRatings {
  hostelworld?: { score?: number; reviewCount?: string };
  bookingCom?: { score?: number; reviewCount?: string };
  googleMaps?: { score?: number; reviewCount?: string };
  priceFrom?: number;
}

export async function fetchRatings(): Promise<SanityRatings | null> {
  try {
    const data = await sanityClient.fetch<SanityRatings>(
      `*[_type == "siteContent"][0].ratings`
    );
    return data ?? null;
  } catch {
    return null;
  }
}

export async function fetchRoomPrices(): Promise<(number | null)[]> {
  try {
    const data = await sanityClient.fetch<{ pricePerNight?: number }[]>(
      `*[_type == "siteContent"][0].rooms[]{pricePerNight}`
    );
    return (data ?? []).map((r) => r?.pricePerNight ?? null);
  } catch {
    return [];
  }
}
