import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
/**
 * Page de paramètres établissement (année scolaire active, note de passage,
 * politique de mots de passe, etc.). Squelette à brancher sur un
 * SettingsService selon les besoins réels du backend.
 */
@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Paramètres</h1>
    <p>Configuration générale de l'établissement (à compléter selon les besoins).</p>
  `
})
export class SettingsComponent {}
 