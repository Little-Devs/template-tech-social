import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getPrivacySignals, logPrivacySignals, PrivacySignals } from '@/lib/privacy-signals';
import { site } from "@/data/site";

interface PrivacyPreferences {
  analyticsEnabled: boolean;
  functionalCookiesEnabled: boolean;
  userSetPreferences: boolean;
}

interface PrivacyContextType {
  signals: PrivacySignals;
  preferences: PrivacyPreferences;
  isPrivacyModeActive: boolean;
  updatePreferences: (prefs: Partial<PrivacyPreferences>) => void;
  resetPreferences: () => void;
}

const STORAGE_KEY = site.privacyStorageKey;

const defaultPreferences: PrivacyPreferences = {
  analyticsEnabled: true,
  functionalCookiesEnabled: true,
  userSetPreferences: false,
};

const PrivacyContext = createContext<PrivacyContextType | undefined>(undefined);

export function PrivacyProvider({ children }: { children: ReactNode }) {
  const [signals, setSignals] = useState<PrivacySignals>({
    gpcEnabled: false,
    dntEnabled: false,
    shouldRespectPrivacy: false,
    detectedSignals: [],
  });

  const [preferences, setPreferences] = useState<PrivacyPreferences>(defaultPreferences);

  // Detect privacy signals on mount
  useEffect(() => {
    const detectedSignals = getPrivacySignals();
    setSignals(detectedSignals);
    
    // Log detection for compliance documentation
    logPrivacySignals();

    // Load saved preferences from localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as PrivacyPreferences;
        setPreferences(parsed);
      }
    } catch (error) {
      console.error('[Privacy] Failed to load saved preferences:', error);
    }
  }, []);

  // Apply privacy signal preferences automatically
  useEffect(() => {
    if (signals.shouldRespectPrivacy && !preferences.userSetPreferences) {
      // If GPC or DNT is detected and user hasn't manually set preferences,
      // automatically disable analytics
      setPreferences((prev) => ({
        ...prev,
        analyticsEnabled: false,
        functionalCookiesEnabled: true, // Keep functional cookies for UX
      }));
    }
  }, [signals.shouldRespectPrivacy, preferences.userSetPreferences]);

  const updatePreferences = (prefs: Partial<PrivacyPreferences>) => {
    const newPreferences: PrivacyPreferences = {
      ...preferences,
      ...prefs,
      userSetPreferences: true,
    };
    
    setPreferences(newPreferences);
    
    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPreferences));
    } catch (error) {
      console.error('[Privacy] Failed to save preferences:', error);
    }
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('[Privacy] Failed to remove preferences:', error);
    }
  };

  const isPrivacyModeActive = signals.shouldRespectPrivacy || !preferences.analyticsEnabled;

  const value: PrivacyContextType = {
    signals,
    preferences,
    isPrivacyModeActive,
    updatePreferences,
    resetPreferences,
  };

  return (
    <PrivacyContext.Provider value={value}>
      {children}
    </PrivacyContext.Provider>
  );
}

export function usePrivacy(): PrivacyContextType {
  const context = useContext(PrivacyContext);
  if (!context) {
    throw new Error('usePrivacy must be used within a PrivacyProvider');
  }
  return context;
}

/**
 * Hook to check if tracking/analytics should be disabled
 */
export function useTrackingDisabled(): boolean {
  const { isPrivacyModeActive } = usePrivacy();
  return isPrivacyModeActive;
}

/**
 * Hook to get privacy signal information
 */
export function usePrivacySignals(): PrivacySignals {
  const { signals } = usePrivacy();
  return signals;
}

