import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions({
      onViewTransitionCreated: ({ transition }) => {
        // Adiciona uma classe personalizada ao documento durante a transição
        document.documentElement.classList.add('view-transition-active');

        // Remove a classe quando a transição termina
        transition.finished.finally(() => {
          document.documentElement.classList.remove('view-transition-active');
        });
      }
    })),
    provideClientHydration(withEventReplay())
  ]
};
