import React, { useEffect, useState } from 'react';

const Para = () => {
  const text = "I'm a MERN stack developer and BCA graduate with expertise in MongoDB, Express, React, and Node.js. I focus on building scalable, performant, and user-friendly web applications, with a keen interest in learning new technologies and enhancing development skills."
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