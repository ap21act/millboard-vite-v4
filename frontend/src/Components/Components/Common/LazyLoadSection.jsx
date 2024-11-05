// Components/Components/Common/LazyLoadSection.jsx

import React, { useState, useEffect, useRef } from 'react';

const LazyLoadSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px', // Preload slightly before it enters full view
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return <div ref={sectionRef}>{isVisible ? children : <div style={{ minHeight: '200px' }}>Loading...</div>}</div>;
};

export default LazyLoadSection;
