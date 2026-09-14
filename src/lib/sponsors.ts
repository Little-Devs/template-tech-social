import { sponsors } from "@/data/sponsors";
import { Sponsor } from "@/types/sponsor";

export function getSponsors(activeOnly = false): Sponsor[] {
  const results = activeOnly
    ? sponsors.filter((sponsor) => sponsor.active)
    : [...sponsors];

  return results.sort((a, b) => a.priority - b.priority);
}

export function getSponsor(id: string): Sponsor | null {
  return sponsors.find((sponsor) => sponsor.id === id) ?? null;
}

export function getSponsorsByIds(ids: string[]): Sponsor[] {
  return ids
    .map((id) => getSponsor(id))
    .filter((sponsor): sponsor is Sponsor => sponsor !== null);
}
