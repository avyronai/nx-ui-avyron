import { Routes } from '@angular/router';

export const errorRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../error/error.component').then((m) => m.ErrorComponent),
  },
];
