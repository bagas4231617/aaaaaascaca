import React, { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  delay?: number;
}

export const TypingText: React.FC<TypingTextProps> = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="inline-block">
      {currentText}
      {currentIndex < text.length && <span className="animate-pulse">_</span>}
    </span>
  );
};
