
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
 
import { AuthService } from '../../../core/services/auth.service';
import { Student } from '../../../core/models/student.model';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';
 
/**
 * Liste des enfants rattachés au compte parent connecté.
 * NOTE: nécessite un endpoint backend dédié (ex: GET /parents/:id/children)
 * non encore présent dans api-endpoints.ts — à ajouter selon votre API réelle.
 */
@Component({
  selector: 'app-parent-children',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  template: `
    <h1>Mes enfants</h1>
 
    <div *ngIf="loading">Chargement...</div>
    <div *ngIf="error" class="error">{{ error }}</div>
 
    <app-data-table
      *ngIf="!loading && !error"
      [columns]="columns"
      [rows]="children"
      (rowClick)="onSelectChild($event)"
    ></app-data-table>
  `
})
export class ChildrenComponent implements OnInit {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
 
  children: Student[] = [];
  loading = true;
  error = '';
 
  columns: TableColumn<Student>[] = [
    { key: 'firstName', label: 'Prénom' },
    { key: 'lastName', label: 'Nom' },
    { key: 'className', label: 'Classe' }
  ];
 
  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.error = 'Utilisateur non authentifié.';
      this.loading = false;
      return;
    }
 
    // Endpoint à créer côté backend/api-endpoints.ts : parents.children(id)
    this.http.get<Student[]>(`/api/v1/parents/${user.id}/children`).subscribe({
      next: (children) => {
        this.children = children;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger la liste de vos enfants.';
        this.loading = false;
      }
    });
  }
 
  onSelectChild(child: Student): void {
    console.log('Enfant sélectionné', child.id);
  }
}