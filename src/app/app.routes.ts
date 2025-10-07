import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./routes/site.routes').then((m) => m.siteRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('./routes/login.routes').then((m) => m.loginRoutes),
  },
  {
    path: 'register',
    loadChildren: () => import('./routes/register.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'error',
    loadChildren: () => import('./routes/error.routes').then((m) => m.errorRoutes),
  },
  { path: '**', redirectTo: 'error' },
];

export { routes };
