import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const InteractiveBackground = () => {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');
    
    const animateCircles = (e) => {
      circles.forEach((circle) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const rect = circle.getBoundingClientRect();
        const circleX = rect.left + rect.width / 2;
        const circleY = rect.top + rect.height / 2;

        const distX = (mouseX - circleX) * 0.05;
        const distY = (mouseY - circleY) * 0.05;

        gsap.to(circle, {
          x: distX,
          y: distY,
          duration: 0.3,
          ease: 'power3.out',
        });
      });
    };

    window.addEventListener('mousemove', animateCircles);

    return () => {
      window.removeEventListener('mousemove', animateCircles);
    };
  }, []);

  return (
    <div className="circle-container">
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
    </div>
  );
};

export default InteractiveBackground;
