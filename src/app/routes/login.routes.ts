import { Routes } from '@angular/router';

export const loginRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../login/login.component').then((m) => m.LoginComponent),
  },
];
