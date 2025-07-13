import React, { useState, useEffect, useRef } from "react";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  // Observe when the element is visible on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // 50% terlihat baru dianggap terlihat
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  // Typing effect
  useEffect(() => {
    if (isVisible && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, isVisible, text, speed]);

  return (
    <div
      ref={textRef}
      className="text-xl font-mono text-pink-400"
      style={{ overflowWrap: "break-word" }}
    >
      {displayedText}
      {isVisible && <span className="animate-pulse">|</span>}
    </div>
  );
};

export default TypingEffect;
