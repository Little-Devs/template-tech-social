/**
 * Privacy Signals Detection Utility
 * Detects Global Privacy Control (GPC) and Do Not Track (DNT) browser signals
 */

export interface PrivacySignals {
  gpcEnabled: boolean;
  dntEnabled: boolean;
  shouldRespectPrivacy: boolean;
  detectedSignals: string[];
}

/**
 * Detects if Global Privacy Control (GPC) is enabled
 * GPC is a browser signal that indicates the user opts out of data sharing/selling
 */
export function detectGPC(): boolean {
  // Check for the standard GPC signal
  if (typeof navigator !== 'undefined' && 'globalPrivacyControl' in navigator) {
    return (navigator as any).globalPrivacyControl === true;
  }
  return false;
}

/**
 * Detects if Do Not Track (DNT) is enabled
 * DNT is a legacy browser signal that indicates the user wants to opt out of tracking
 */
export function detectDNT(): boolean {
  if (typeof navigator === 'undefined') {
    return false;
  }

  // Check various DNT implementations across browsers
  const dntValue = (navigator as any).doNotTrack || 
                   (window as any).doNotTrack || 
                   (navigator as any).msDoNotTrack;
  
  // DNT can be "1", "yes", or true depending on the browser
  return dntValue === '1' || dntValue === 'yes' || dntValue === true;
}

/**
 * Get comprehensive privacy signals information
 */
export function getPrivacySignals(): PrivacySignals {
  const gpcEnabled = detectGPC();
  const dntEnabled = detectDNT();
  const detectedSignals: string[] = [];

  if (gpcEnabled) {
    detectedSignals.push('GPC');
  }
  if (dntEnabled) {
    detectedSignals.push('DNT');
  }

  return {
    gpcEnabled,
    dntEnabled,
    shouldRespectPrivacy: gpcEnabled || dntEnabled,
    detectedSignals,
  };
}

/**
 * Check if analytics/tracking should be disabled based on privacy signals
 */
export function shouldDisableTracking(): boolean {
  const signals = getPrivacySignals();
  return signals.shouldRespectPrivacy;
}

/**
 * Log privacy signal detection (for debugging and compliance documentation)
 */
export function logPrivacySignals(): void {
  if (typeof console !== 'undefined' && process.env.NODE_ENV === 'development') {
    const signals = getPrivacySignals();
    if (signals.shouldRespectPrivacy) {
      console.log('[Privacy] Privacy signals detected:', signals.detectedSignals.join(', '));
      console.log('[Privacy] Analytics and tracking disabled');
    } else {
      console.log('[Privacy] No privacy signals detected');
    }
  }
}

