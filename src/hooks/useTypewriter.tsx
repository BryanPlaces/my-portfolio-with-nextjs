import { useState, useEffect } from 'react';

export function useTypewriter(texts: string[], speed = 50, delay = 1000) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setDisplayText(texts[index].slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => setIsDeleting(true), delay);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts, speed, delay]);

  return displayText + (showCursor ? '|' : '');
};

