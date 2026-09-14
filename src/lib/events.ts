import { events } from "@/data/events";
import { Event } from "@/types/event";

export function getPublishedEvents(options?: {
  featured?: boolean;
  limit?: number;
}): Event[] {
  let results = [...events].sort(
    (a, b) => a.startDate.getTime() - b.startDate.getTime()
  );

  if (options?.featured) {
    results = results.filter((event) => event.featured);
  }

  if (options?.limit) {
    results = results.slice(0, options.limit);
  }

  return results;
}

export function getEvent(id: string): Event | null {
  return events.find((event) => event.id === id || event.slug === id) ?? null;
}
