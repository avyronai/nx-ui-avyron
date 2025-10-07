import { Routes } from '@angular/router';

export const siteRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../site/landing-page/landing-page.component').then((m) => m.LandingPageComponent),
  },
];
