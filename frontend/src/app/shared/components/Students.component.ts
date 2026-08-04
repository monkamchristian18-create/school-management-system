
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { StudentService } from '../../../core/services/student.service';
import { Student } from '../../../core/models/student.model';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';
import { formatDate } from '../../../date.util';
 
@Component({
  selector: 'app-admin-students',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  template: `
    <h1>Élèves</h1>
 
    <div *ngIf="loading">Chargement...</div>
    <div *ngIf="error" class="error">{{ error }}</div>
 
    <app-data-table
      *ngIf="!loading && !error"
      [columns]="columns"
      [rows]="students"
      [showActions]="true"
      (editClick)="onEdit($event)"
      (deleteClick)="onDelete($event)"
    ></app-data-table>
 
    <div class="pagination" *ngIf="!loading && !error">
      <button (click)="goToPage(page - 1)" [disabled]="page <= 1">Précédent</button>
      <span>Page {{ page }} / {{ totalPages }}</span>
      <button (click)="goToPage(page + 1)" [disabled]="page >= totalPages">Suivant</button>
    </div>
  `
})
export class StudentsComponent implements OnInit {
  private studentService = inject(StudentService);
 
  students: Student[] = [];
  loading = true;
  error = '';
 
  page = 1;
  pageSize = 20;
  total = 0;
 
  columns: TableColumn<Student>[] = [
    { key: 'matricule', label: 'Matricule' },
    { key: 'firstName', label: 'Prénom' },
    { key: 'lastName', label: 'Nom' },
    { key: 'className', label: 'Classe' },
    { key: 'birthDate', label: 'Naissance', format: (v) => formatDate(v as string) }
  ];
 
  get totalPages(): number {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }
 
  ngOnInit(): void {
    this.load();
  }
 
  load(): void {
    this.loading = true;
    this.error = '';
    this.studentService.getAll(this.page, this.pageSize).subscribe({
      next: (result) => {
        this.students = result.items;
        this.total = result.total;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger la liste des élèves.';
        this.loading = false;
      }
    });
  }
 
  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.page = page;
    this.load();
  }
 
  onEdit(student: Student): void {
    // À brancher sur une modale d'édition (voir shared/components/modal).
    console.log('Édition élève', student.id);
  }
 
  onDelete(student: Student): void {
    if (!confirm(`Supprimer l'élève ${student.firstName} ${student.lastName} ?`)) {
      return;
    }
    this.studentService.delete(student.id).subscribe({
      next: () => this.load(),
      error: () => (this.error = 'Échec de la suppression.')
    });
  }
}