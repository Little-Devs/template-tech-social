import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
}

const TypewriterText = ({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = "", 
  onComplete,
  showCursor = true 
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Handle initial delay before starting
    if (!started) {
      if (delay > 0) {
        const delayTimeout = setTimeout(() => {
          setStarted(true);
        }, delay);
        return () => clearTimeout(delayTimeout);
      } else {
        setStarted(true);
      }
      return;
    }

    // Type characters one by one
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (started && currentIndex >= text.length && !isComplete) {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, speed, delay, onComplete, isComplete, started]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && <span className="animate-pulse">█</span>}
    </span>
  );
};

export default TypewriterText;
