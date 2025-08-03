import { useEffect, useState } from 'react';

export const useScrollAnimation = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const element = document.getElementById('scroll-target');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return isVisible;
};

export const useCounterAnimation = (endValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const startAnimation = () => {
    if (hasStarted) return;
    
    setHasStarted(true);
    let start = 0;
    const increment = endValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  };

  return { count, startAnimation, hasStarted };
};