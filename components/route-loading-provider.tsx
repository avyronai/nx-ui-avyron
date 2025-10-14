'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface RouteLoadingProviderProps {
  children: React.ReactNode;
}

export function RouteLoadingProvider({ children }: RouteLoadingProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    let isLoading = false;

    // Enhanced click handler for better detection
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href], button');
      
      if (link && !isLoading) {
        const href = link.getAttribute('href');
        const isButton = link.tagName === 'BUTTON';
        const buttonText = link.textContent?.toLowerCase() || '';
        
        // Check if this is a navigation action
        if (href && href.startsWith('/') && href !== pathname) {
          isLoading = true;
          // Trigger loading immediately on click
          const loadingEvent = new CustomEvent('route-loading-start');
          window.dispatchEvent(loadingEvent);
        } else if (isButton && target.closest('form') === null) {
          // Check if button has navigation behavior - expanded detection
          const hasNavigation = 
            // Direct onclick with router.push
            link.getAttribute('onclick')?.includes('router.push') ||
            link.getAttribute('onclick')?.includes('window.location') ||
            // Navigation-related text
            buttonText.includes('entrar') ||
            buttonText.includes('cadastrar') ||
            buttonText.includes('voltar') ||
            buttonText.includes('login') ||
            buttonText.includes('sign') ||
            buttonText.includes('next') ||
            buttonText.includes('continue') ||
            buttonText.includes('esqueceu') ||
            buttonText.includes('esqueci') ||
            buttonText.includes('forgot') ||
            buttonText.includes('password') ||
            buttonText.includes('senha') ||
            buttonText.includes('recuperar') ||
            buttonText.includes('reset') ||
            // CSS class indicator
            link.classList.contains('navigation-button') ||
            // Check if it's a link-style button
            link.classList.contains('link') ||
            link.getAttribute('variant') === 'link';
          
          if (hasNavigation && !isLoading) {
            console.log('🚀 Navigation detected on button:', buttonText);
            isLoading = true;
            const loadingEvent = new CustomEvent('route-loading-start');
            window.dispatchEvent(loadingEvent);
          }
        }
      }
    };

    // Listen for route completion when pathname changes
    const handleRouteComplete = () => {
      isLoading = false;
      const loadingEvent = new CustomEvent('route-loading-complete');
      window.dispatchEvent(loadingEvent);
    };

    // Add event listeners with capture for better detection
    document.addEventListener('click', handleLinkClick, true);
    
    // Listen for pathname changes to complete loading
    handleRouteComplete();

    // Cleanup
    return () => {
      document.removeEventListener('click', handleLinkClick, true);
    };
  }, [pathname]);

  return <>{children}</>;
}
