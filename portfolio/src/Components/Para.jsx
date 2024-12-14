import React, { useEffect, useState } from 'react';

const Para = () => {
  const text = `I'm a passionate web developer with a strong foundation in front-end technologies like React and Tailwind CSS. I believe in crafting clean, efficient, and user-friendly web applications. With a focus on performance, accessibility, and modern design, I'm always looking to learn and explore new technologies.`;
  
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 50; // Adjust typing speed here

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

    // Cleanup function to prevent memory leaks
    return () => {
      index = text.length; // Stop typing if the component unmounts
    };
  }, [text]);

  return (
    <p className="text-md mt-8 max-w-3xl mx-auto">
      {displayedText}
      
    </p>
  );
};

export default Para;