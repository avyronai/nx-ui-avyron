import { Routes } from '@angular/router';
import { LandingPageComponent } from './site/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export { routes };
