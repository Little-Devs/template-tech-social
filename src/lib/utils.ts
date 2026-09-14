import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a date to show both the event's timezone and the viewer's local timezone
 */
export function formatEventDate(
  date: Date,
  eventTimezone: string,
  formatString: string = "MMMM d, yyyy, h:mm a"
): string {
  const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const eventTimeFormatted = formatInTimeZone(date, eventTimezone, formatString);
  const eventTzAbbr = formatInTimeZone(date, eventTimezone, "zzz");

  if (browserTimezone === eventTimezone) {
    return `${eventTimeFormatted} ${eventTzAbbr}`;
  }

  const browserTimeFormatted = format(date, formatString);
  const browserTzAbbr = format(date, "zzz");

  return `${eventTimeFormatted} ${eventTzAbbr} • ${browserTimeFormatted} ${browserTzAbbr} (Your time)`;
}

/**
 * Format just the event time in its timezone (no viewer timezone)
 */
export function formatEventDateSimple(
  date: Date,
  eventTimezone: string,
  formatString: string = "MMMM d, yyyy, h:mm a"
): string {
  const eventTimeFormatted = formatInTimeZone(date, eventTimezone, formatString);
  const eventTzAbbr = formatInTimeZone(date, eventTimezone, "zzz");
  return `${eventTimeFormatted} ${eventTzAbbr}`;
}
