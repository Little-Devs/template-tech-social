import { Shield, ShieldCheck } from 'lucide-react';
import { usePrivacy } from '@/contexts/PrivacyContext';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function PrivacyIndicator() {
  const { signals, isPrivacyModeActive } = usePrivacy();

  // Don't show indicator if no privacy signals are active
  if (!isPrivacyModeActive) {
    return null;
  }

  const detectedSignals = signals.detectedSignals.join(' & ');

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge 
            variant="outline" 
            className="flex items-center gap-1.5 border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-help uppercase tracking-wider text-xs"
          >
            <ShieldCheck className="w-3 h-3" />
            <span className="hidden sm:inline">Privacy Mode Active</span>
            <span className="inline sm:hidden">Privacy</span>
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-2">
            <p className="font-semibold flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              Privacy Signals Detected
            </p>
            <p className="text-sm">
              Your browser is sending <span className="font-bold">{detectedSignals}</span> signal{signals.detectedSignals.length > 1 ? 's' : ''}.
            </p>
            <p className="text-sm">
              We are honoring your privacy preferences:
            </p>
            <ul className="text-xs list-disc list-inside space-y-1 pl-2">
              <li>Analytics and tracking disabled</li>
              <li>Non-essential cookies blocked</li>
              <li>No data sharing with third parties</li>
            </ul>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function PrivacyBadge() {
  const { signals, isPrivacyModeActive } = usePrivacy();

  if (!isPrivacyModeActive) {
    return null;
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/30">
      <ShieldCheck className="w-4 h-4 text-primary" />
      <span className="text-xs uppercase tracking-wider text-primary font-semibold">
        {signals.detectedSignals.join(' & ')} Active
      </span>
    </div>
  );
}

