import { Routes } from '@angular/router';
 
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { Role } from './roles';
 
export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent)
  },
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard([Role.ADMIN])],
    loadChildren: () => import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES)
  },
  {
    path: 'teacher',
    canActivate: [authGuard, roleGuard([Role.TEACHER])],
    loadChildren: () => import('./teacher/teacher.routes').then((m) => m.TEACHER_ROUTES)
  },
  {
    path: 'student',
    canActivate: [authGuard, roleGuard([Role.STUDENT])],
    loadChildren: () => import('./student/student.routes').then((m) => m.STUDENT_ROUTES)
  },
  {
    path: 'parent',
    canActivate: [authGuard, roleGuard([Role.PARENT])],
    loadChildren: () => import('./parent/parent.routes').then((m) => m.PARENT_ROUTES)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
]