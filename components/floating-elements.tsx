"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 4,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export function FloatingIcon({ 
  icon: Icon, 
  delay = 0, 
  className = "" 
}: { 
  icon: any; 
  delay?: number; 
  className?: string; 
}) {
  return (
    <FloatingElement delay={delay} className={className}>
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-lg">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
      </div>
    </FloatingElement>
  );
}
