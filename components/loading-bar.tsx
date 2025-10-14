'use client';

import { useState, useEffect, useRef } from 'react';

interface LoadingBarProps {
  color?: string;
  height?: number;
  showSpinner?: boolean;
}

export function LoadingBar({ 
  color = 'bg-gradient-to-r from-primary to-primary/80', 
  height = 3,
  showSpinner = false 
}: LoadingBarProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const completeRef = useRef<NodeJS.Timeout | null>(null);
  const isManualComplete = useRef(false);

  const startLoading = () => {
    // Clear any existing timers
    if (progressRef.current) clearInterval(progressRef.current);
    if (completeRef.current) clearTimeout(completeRef.current);

    isManualComplete.current = false;
    setIsLoading(true);
    setIsVisible(true);
    setProgress(0);

    // Much more realistic progress simulation
    let currentProgress = 0;
    
    progressRef.current = setInterval(() => {
      // More sophisticated progress algorithm
      let increment;
      if (currentProgress < 20) {
        // Very slow start (like real loading)
        increment = Math.random() * 8 + 2;
      } else if (currentProgress < 50) {
        // Gradual increase
        increment = Math.random() * 12 + 4;
      } else if (currentProgress < 80) {
        // Faster progress
        increment = Math.random() * 15 + 6;
      } else {
        // Slow down near the end
        increment = Math.random() * 6 + 1;
      }
      
      currentProgress = Math.min(currentProgress + increment, 88);
      setProgress(currentProgress);

      // Stop at 88% and wait for manual completion
      if (currentProgress >= 88) {
        if (progressRef.current) clearInterval(progressRef.current);
      }
    }, 50);
  };

  const completeLoading = () => {
    isManualComplete.current = true;
    
    // Clear progress timer
    if (progressRef.current) clearInterval(progressRef.current);
    
    // Jump to 100%
    setProgress(100);
    
    // Hide after completion animation
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsVisible(false);
        setProgress(0);
      }, 300);
    }, 400);
  };

  useEffect(() => {
    // Listen for custom route loading events
    const handleRouteStart = () => {
      console.log('🚀 Loading started');
      startLoading();
    };
    
    const handleRouteComplete = () => {
      console.log('✅ Loading completed');
      if (isLoading && !isManualComplete.current) {
        completeLoading();
      }
    };

    window.addEventListener('route-loading-start', handleRouteStart);
    window.addEventListener('route-loading-complete', handleRouteComplete);

    return () => {
      window.removeEventListener('route-loading-start', handleRouteStart);
      window.removeEventListener('route-loading-complete', handleRouteComplete);
      if (progressRef.current) clearInterval(progressRef.current);
      if (completeRef.current) clearTimeout(completeRef.current);
    };
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main progress bar with improved styling */}
      <div 
        className={`${color} transition-all duration-300 ease-out relative overflow-hidden`}
        style={{
          height: `${height}px`,
          width: `${progress}%`,
          transform: progress === 100 ? 'scaleX(1)' : 'scaleX(1)',
          transformOrigin: 'left',
          boxShadow: progress > 0 ? '0 0 15px rgba(59, 130, 246, 0.4)' : 'none',
        }}
      >
        {/* Shimmer effect */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent ${
            progress > 0 ? 'shimmer' : ''
          }`}
        />
      </div>
      
      {/* Optional spinner */}
      {showSpinner && isLoading && (
        <div className="fixed top-4 right-4 z-50">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}