
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { ClassService } from '../../../core/services/class.service';
import { SchoolClass } from '../../../core/models/class.model';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';
 
@Component({
  selector: 'app-admin-classes',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  template: `
    <h1>Classes</h1>
 
    <div *ngIf="loading">Chargement...</div>
    <div *ngIf="error" class="error">{{ error }}</div>
 
    <app-data-table
      *ngIf="!loading && !error"
      [columns]="columns"
      [rows]="classes"
      [showActions]="true"
      (deleteClick)="onDelete($event)"
    ></app-data-table>
  `
})
export class ClassesComponent implements OnInit {
  private classService = inject(ClassService);
 
  classes: SchoolClass[] = [];
  loading = true;
  error = '';
 
  columns: TableColumn<SchoolClass>[] = [
    { key: 'name', label: 'Nom' },
    { key: 'level', label: 'Niveau' },
    {
      key: 'studentCount',
      label: 'Effectif',
      format: (v, row) => `${v} / ${row.capacity}`
    }
  ];
 
  ngOnInit(): void {
    this.load();
  }
 
  load(): void {
    this.loading = true;
    this.error = '';
    this.classService.getAll().subscribe({
      next: (classes) => {
        this.classes = classes;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger la liste des classes.';
        this.loading = false;
      }
    });
  }
 
  onDelete(schoolClass: SchoolClass): void {
    if (!confirm(`Supprimer la classe ${schoolClass.name} ?`)) {
      return;
    }
    this.classService.delete(schoolClass.id).subscribe({
      next: () => this.load(),
      error: () => (this.error = 'Échec de la suppression.')
    });
  }
}