import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
 
import { AuthService } from '../../core/services/auth.service';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="login-container">
      <h1>Connexion</h1>
 
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <label>
          Email
          <input type="email" formControlName="email" autocomplete="email" />
        </label>
        <div class="error" *ngIf="form.get('email')?.touched && form.get('email')?.invalid">
          Adresse email invalide.
        </div>
 
        <label>
          Mot de passe
          <input type="password" formControlName="password" autocomplete="current-password" />
        </label>
        <div class="error" *ngIf="form.get('password')?.touched && form.get('password')?.invalid">
          Le mot de passe est requis.
        </div>
 
        <div class="error" *ngIf="serverError">{{ serverError }}</div>
 
        <button type="submit" [disabled]="form.invalid || isSubmitting">
          {{ isSubmitting ? 'Connexion...' : 'Se connecter' }}
        </button>
      </form>
 
      <a routerLink="/auth/forgot-password">Mot de passe oublié ?</a>
    </div>
  `
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
 
  isSubmitting = false;
  serverError = '';
 
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });
 
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
 
    this.isSubmitting = true;
    this.serverError = '';
 
    const { email, password } = this.form.getRawValue();
 
    this.authService.login({ email: email!, password: password! }).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/dashboard';
        this.router.navigateByUrl(returnUrl);
      },
      error: () => {
        this.isSubmitting = false;
        this.serverError = 'Email ou mot de passe incorrect.';
      }
    });
  }
}