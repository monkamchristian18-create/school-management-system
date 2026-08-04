import { Routes } from '@angular/router';
 
export const ADMIN_ROUTES: Routes = [
  {
    path: 'students',
    loadComponent: () => import('./pages/students/students.component').then((m) => m.StudentsComponent)
  },
  {
    path: 'teachers',
    loadComponent: () => import('./pages/teachers/teachers.component').then((m) => m.TeachersComponent)
  },
  {
    path: 'classes',
    loadComponent: () => import('./pages/classes/classes.component').then((m) => m.ClassesComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.component').then((m) => m.SettingsComponent)
  },
  { path: '', redirectTo: 'students', pathMatch: 'full' }
];
 