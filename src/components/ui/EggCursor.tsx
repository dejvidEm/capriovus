import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface EggCursorProps {
  isActive: boolean;
}

const EggCursor: React.FC<EggCursorProps> = ({ isActive }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const rotation = useMotionValue(0);
  const prevXRef = useRef(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const rotationSpring = useSpring(rotation, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isActive) return;
      
      const deltaX = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;
      
      // Calculate rotation based on horizontal movement
      const newRotation = Math.max(-25, Math.min(25, deltaX * 0.8));
      rotation.set(newRotation);
      
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isActive, cursorX, cursorY, rotation]);

  // Hide cursor when not active
  useEffect(() => {
    if (!isActive) {
      cursorX.set(-100);
      cursorY.set(-100);
    }
  }, [isActive, cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isActive ? 1 : 0,
      }}
    >
      <motion.svg
        width="48"
        height="60"
        viewBox="0 0 32 40"
        style={{ rotate: rotationSpring }}
        className="drop-shadow-lg"
      >
        {/* Egg shape */}
        <ellipse cx="16" cy="22" rx="13" ry="17" fill="#F5DEB3" stroke="#D4A84B" strokeWidth="2"/>
        <ellipse cx="16" cy="20" rx="11" ry="14" fill="#FFFAF0"/>
        {/* Highlight */}
        <ellipse cx="11" cy="14" rx="4" ry="5" fill="white" opacity="0.7"/>
        <ellipse cx="9" cy="12" rx="2" ry="2.5" fill="white" opacity="0.9"/>
      </motion.svg>
    </motion.div>
  );
};

export default EggCursor;
