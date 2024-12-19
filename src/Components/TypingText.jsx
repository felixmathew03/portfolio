// src/components/TypingText.js
import React, { useEffect, useState } from 'react';

const TypingText = ({ text,typingSpeed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(type, typingSpeed);
      }
    };

    type();

    return () => {
      index = text.length; // Cleanup to stop typing if the component unmounts
    };
  }, [text, typingSpeed]);

  return <span>{displayedText}</span>;
};

export default TypingText;