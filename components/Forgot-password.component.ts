import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
 
import { API_ENDPOINTS } from '../../api-endpoints';
 
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="forgot-password-container">
      <h1>Mot de passe oublié</h1>
 
      <p *ngIf="!submitted">
        Entrez votre adresse email, nous vous enverrons un lien de réinitialisation.
      </p>
 
      <form *ngIf="!submitted" [formGroup]="form" (ngSubmit)="onSubmit()">
        <label>
          Email
          <input type="email" formControlName="email" autocomplete="email" />
        </label>
        <button type="submit" [disabled]="form.invalid || isSubmitting">
          {{ isSubmitting ? 'Envoi...' : 'Envoyer le lien' }}
        </button>
      </form>
 
      <p *ngIf="submitted">
        Si un compte existe avec cette adresse, un email a été envoyé.
      </p>
 
      <a routerLink="/auth/login">Retour à la connexion</a>
    </div>
  `
})
export class ForgotPasswordComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
 
  isSubmitting = false;
  submitted = false;
 
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
 
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
 
    this.isSubmitting = true;
    const { email } = this.form.getRawValue();
 
    // Volontairement : on affiche le même message succès que la requête réussisse
    // ou que l'email n'existe pas, pour ne pas révéler quels emails sont enregistrés.
    this.http.post(API_ENDPOINTS.auth.forgotPassword, { email }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitted = true;
      },
      error: () => {
        this.isSubmitting = false;
        this.submitted = true;
      }
    });
  }
}