"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ReactNode } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  className?: string;
  once?: boolean;
}

export function AnimatedElement({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 50,
  className = "",
  once = true,
}: AnimatedElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const initialPosition = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...initialPosition,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              ...initialPosition,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Componente especializado para cards
export function AnimatedCard({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <AnimatedElement
      delay={delay}
      duration={0.7}
      direction="up"
      distance={60}
      className={className}
    >
      <motion.div
        whileHover={{ 
          y: -8,
          transition: { duration: 0.2 }
        }}
        className="h-full"
      >
        {children}
      </motion.div>
    </AnimatedElement>
  );
}

// Componente especializado para texto
export function AnimatedText({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <AnimatedElement
      delay={delay}
      duration={0.8}
      direction="up"
      distance={30}
      className={className}
    >
      {children}
    </AnimatedElement>
  );
}

// Componente especializado para botões
export function AnimatedButton({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <AnimatedElement
      delay={delay}
      duration={0.5}
      direction="up"
      distance={20}
      className={className}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatedElement>
  );
}
