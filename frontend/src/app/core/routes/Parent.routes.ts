import { Routes } from '@angular/router';
 
export const PARENT_ROUTES: Routes = [
  {
    path: 'children',
    loadComponent: () => import('./pages/children/children.component').then((m) => m.ChildrenComponent)
  },
  {
    path: 'fees',
    loadComponent: () => import('./pages/fees/fees.component').then((m) => m.FeesComponent)
  },
  { path: '', redirectTo: 'children', pathMatch: 'full' }
];
 