import { useState, useEffect, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const TypewriterText = ({
  text,
  delay = 0,
  speed = 50,
  className = "",
  onComplete,
  showCursor = true,
}: TypewriterTextProps) => {
  const [reduce] = useState(() => prefersReducedMotion());
  const [displayedText, setDisplayedText] = useState(() => (reduce ? text : ""));
  const [currentIndex, setCurrentIndex] = useState(() => (reduce ? text.length : 0));
  const [isComplete, setIsComplete] = useState(() => reduce);
  const [started, setStarted] = useState(() => reduce);
  const completedRef = useRef(false);

  useEffect(() => {
    if (reduce) {
      setDisplayedText(text);
      setCurrentIndex(text.length);
      setIsComplete(true);
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
      return;
    }

    if (!started) {
      if (delay > 0) {
        const delayTimeout = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(delayTimeout);
      }
      setStarted(true);
      return;
    }

    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (started && currentIndex >= text.length && !isComplete) {
      setIsComplete(true);
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
    }
  }, [currentIndex, text, speed, delay, onComplete, isComplete, started, reduce]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && !reduce && (
        <span className="animate-pulse">█</span>
      )}
    </span>
  );
};

export default TypewriterText;
