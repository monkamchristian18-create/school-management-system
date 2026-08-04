import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { AuthService } from '../core/services/auth.service';
import { Role } from '../roles';
 
/**
 * Point d'entrée après connexion : redirige immédiatement vers l'espace
 * correspondant au rôle de l'utilisateur connecté.
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `<p>Redirection en cours...</p>`
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
 
  private roleRedirectMap: Record<Role, string> = {
    [Role.ADMIN]: '/admin',
    [Role.TEACHER]: '/teacher',
    [Role.STUDENT]: '/student',
    [Role.PARENT]: '/parent',
    [Role.ACCOUNTANT]: '/admin',
    [Role.LIBRARIAN]: '/admin'
  };
 
  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
 
    if (!user) {
      this.router.navigate(['/auth/login']);
      return;
    }
 
    const target = this.roleRedirectMap[user.role] ?? '/auth/login';
    this.router.navigate([target]);
  }
}