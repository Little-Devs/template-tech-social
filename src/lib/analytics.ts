import { shouldDisableTracking } from "./privacy-signals";

let analyticsEnabled = false;

export function initializeAnalytics(): void {
  if (shouldDisableTracking()) {
    analyticsEnabled = false;
    return;
  }

  analyticsEnabled = true;
}

export function disableAnalytics(): void {
  analyticsEnabled = false;
}

export function isAnalyticsEnabled(): boolean {
  return analyticsEnabled;
}

export function logEvent(
  _eventName: string,
  _eventParams?: Record<string, unknown>
): void {
  if (!isAnalyticsEnabled()) {
    return;
  }
}

export function trackPageView(_pagePath: string, _pageTitle?: string): void {
  if (!isAnalyticsEnabled()) {
    return;
  }
}

export function trackSearch(_searchTerm: string): void {
  if (!isAnalyticsEnabled()) {
    return;
  }
}
