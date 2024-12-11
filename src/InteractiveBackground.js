import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const InteractiveBackground = () => {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');

    const animateCircles = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;

      circles.forEach((circle, index) => {
        const rect = circle.getBoundingClientRect();
        const circleX = rect.left + rect.width / 2;
        const circleY = rect.top + rect.height / 2;

        const distX = (mouseX - circleX) * 0.05;
        const distY = (mouseY - circleY) * 0.05;

        // Delay each circle slightly for a smooth trailing effect
        gsap.to(circle, {
          x: distX,
          y: distY,
          duration: 0.5,
          delay: index * 0.05,
          ease: 'power3.out',
        });
      });
    };

    const throttledAnimate = (e) => {
      requestAnimationFrame(() => animateCircles(e));
    };

    window.addEventListener('mousemove', throttledAnimate);

    return () => {
      window.removeEventListener('mousemove', throttledAnimate);
    };
  }, []);

  const createCircles = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <div key={i} className="circle" />
    ));
  };

  return <div className="circle-container">{createCircles(5)}</div>;
};

export default InteractiveBackground;
