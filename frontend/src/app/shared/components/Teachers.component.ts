
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { TeacherService } from '../../../core/services/teacher.service';
import { Teacher } from '../../../core/models/teacher.model';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';
 
@Component({
  selector: 'app-admin-teachers',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  template: `
    <h1>Enseignants</h1>
 
    <div *ngIf="loading">Chargement...</div>
    <div *ngIf="error" class="error">{{ error }}</div>
 
    <app-data-table
      *ngIf="!loading && !error"
      [columns]="columns"
      [rows]="teachers"
      [showActions]="true"
      (deleteClick)="onDelete($event)"
    ></app-data-table>
  `
})
export class TeachersComponent implements OnInit {
  private teacherService = inject(TeacherService);
 
  teachers: Teacher[] = [];
  loading = true;
  error = '';
 
  columns: TableColumn<Teacher>[] = [
    { key: 'employeeId', label: 'Matricule' },
    { key: 'firstName', label: 'Prénom' },
    { key: 'lastName', label: 'Nom' },
    { key: 'subjects', label: 'Matières', format: (v) => (v as string[]).join(', ') }
  ];
 
  ngOnInit(): void {
    this.load();
  }
 
  load(): void {
    this.loading = true;
    this.error = '';
    this.teacherService.getAll().subscribe({
      next: (result) => {
        this.teachers = result.items;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger la liste des enseignants.';
        this.loading = false;
      }
    });
  }
 
  onDelete(teacher: Teacher): void {
    if (!confirm(`Supprimer l'enseignant ${teacher.firstName} ${teacher.lastName} ?`)) {
      return;
    }
    this.teacherService.delete(teacher.id).subscribe({
      next: () => this.load(),
      error: () => (this.error = 'Échec de la suppression.')
    });
  }
}