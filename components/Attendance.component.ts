import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { StudentService } from '../../../core/services/student.service';
import { AuthService } from '../../../core/services/auth.service';
import { AttendanceRecord } from '../../../core/models/attendance.model';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';
import { formatDate } from '../../../date.util';
 
@Component({
  selector: 'app-student-attendance',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  template: `
    <h1>Mes présences</h1>
 
    <div *ngIf="loading">Chargement...</div>
    <div *ngIf="error" class="error">{{ error }}</div>
 
    <app-data-table *ngIf="!loading && !error" [columns]="columns" [rows]="records"></app-data-table>
  `
})
export class AttendanceComponent implements OnInit {
  private studentService = inject(StudentService);
  private authService = inject(AuthService);
 
  records: AttendanceRecord[] = [];
  loading = true;
  error = '';
 
  columns: TableColumn<AttendanceRecord>[] = [
    { key: 'date', label: 'Date', format: (v) => formatDate(v as string) },
    { key: 'status', label: 'Statut' },
    { key: 'note', label: 'Note' }
  ];
 
  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.error = 'Utilisateur non authentifié.';
      this.loading = false;
      return;
    }
 
    this.studentService.getAttendance(user.id).subscribe({
      next: (records) => {
        this.records = records;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger vos présences.';
        this.loading = false;
      }
    });
  }
}