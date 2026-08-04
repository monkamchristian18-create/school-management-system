import { Routes } from '@angular/router';
 
export const TEACHER_ROUTES: Routes = [
  {
    path: 'grades',
    loadComponent: () => import('./pages/grades/grades.component').then((m) => m.GradesComponent)
  },
  {
    path: 'attendance',
    loadComponent: () =>
      import('./pages/attendance/attendance.component').then((m) => m.AttendanceComponent)
  },
  {
    path: 'timetable',
    loadComponent: () =>
      import('./pages/timetable/timetable.component').then((m) => m.TimetableComponent)
  },
  { path: '', redirectTo: 'grades', pathMatch: 'full' }
];