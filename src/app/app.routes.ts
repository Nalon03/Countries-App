import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'detail', pathMatch: 'full' },
  {
    path: 'layout',
    loadComponent: () =>
      import('./Re-usable component/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
  },
 
  {
    path: '',
    loadComponent: () =>
      import('./Components/country-details/country-details.component').then(
        (a) => a.CountryDetailsComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./Components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'user',
    loadChildren: () => import('../app/routes/routes').then((c) => c.routes),
  },
];
