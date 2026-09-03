
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
 
import { AuthService } from '../../../core/services/auth.service';
import { Role } from '../../../roles';
import { ToastComponent } from '../toast/toast.component';
 
interface NavItem {
  label: string;
  path: string;
}
 
/**
 * Coquille commune (header + menu latéral + <router-outlet>) affichée
 * autour de toutes les pages protégées. Le menu est calculé selon le rôle
 * de l'utilisateur connecté.
 *
 * À utiliser en tant que route parente dans app.routes.ts, ex:
 * {
 *   path: '',
 *   component: ShellComponent,
 *   canActivate: [authGuard],
 *   children: [ ...routes existantes... ]
 * }
 */
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, ToastComponent],
  template: `
    <div class="shell">
      <app-toast></app-toast>
 
      <header class="shell-header">
        <span class="shell-title">School Management System</span>
        <span class="shell-user" *ngIf="user">{{ user.firstName }} {{ user.lastName }}</span>
        <button type="button" (click)="onLogout()">Déconnexion</button>
      </header>
 
      <div class="shell-body">
        <nav class="shell-nav">
          <a *ngFor="let item of navItems" [routerLink]="item.path">{{ item.label }}</a>
        </nav>
 
        <main class="shell-content">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `
})
export class ShellComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
 
  user = this.authService.getCurrentUser();
 
  private navByRole: Record<Role, NavItem[]> = {
    [Role.ADMIN]: [
      { label: 'Élèves', path: '/admin/students' },
      { label: 'Enseignants', path: '/admin/teachers' },
      { label: 'Classes', path: '/admin/classes' },
      { label: 'Bibliothèque', path: '/admin/library' },
      { label: 'Paramètres', path: '/admin/settings' }
    ],
    [Role.TEACHER]: [
      { label: 'Notes', path: '/teacher/grades' },
      { label: 'Présences', path: '/teacher/attendance' },
      { label: 'Emploi du temps', path: '/teacher/timetable' }
    ],
    [Role.STUDENT]: [
      { label: 'Mes notes', path: '/student/grades' },
      { label: 'Mes présences', path: '/student/attendance' },
      { label: 'Emploi du temps', path: '/student/timetable' }
    ],
    [Role.PARENT]: [
      { label: 'Mes enfants', path: '/parent/children' },
      { label: 'Frais scolaires', path: '/parent/fees' }
    ],
    [Role.ACCOUNTANT]: [{ label: 'Frais scolaires', path: '/admin/fees' }],
    [Role.LIBRARIAN]: [{ label: 'Bibliothèque', path: '/admin/library' }]
  };
 
  get navItems(): NavItem[] {
    return this.user ? (this.navByRole[this.user.role] ?? []) : [];
  }
 
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}