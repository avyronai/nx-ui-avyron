import { Routes } from '@angular/router';

export const errorRoutes: Routes = [
  {
    path: 'error',
    loadComponent: () => import('../error/error.component').then((m) => m.ErrorComponent),
  },
];
