export const site = {
  name: "LOREM.SCENE",
  legalName: "Lorem Scene",
  domain: "example.com",
  url: "https://example.com",
  email: "hello@example.com",
  privacyEmail: "privacy@example.com",
  cities: ["Lorem City", "Ipsum Bay"] as const,
  tagline: "LOCAL COMMUNITY MEETUPS",
  privacyStorageKey: "community-privacy-preferences",
};

export function cityLine(separator = " // "): string {
  return site.cities.map((city) => city.toUpperCase()).join(separator);
}
