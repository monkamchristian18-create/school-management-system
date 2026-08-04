
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { ClassService } from '../../../core/services/class.service';
import { AuthService } from '../../../core/services/auth.service';
import { Student } from '../../../core/models/student.model';
import { WEEK_DAYS } from '../../../constants';
 
@Component({
  selector: 'app-student-timetable',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Mon emploi du temps</h1>
 
    <div *ngIf="loading">Chargement...</div>
    <div *ngIf="error" class="error">{{ error }}</div>
 
    <table *ngIf="!loading && !error">
      <thead>
        <tr>
          <th *ngFor="let day of weekDays">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td *ngFor="let day of weekDays">{{ timetable?.[day] ?? '—' }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class TimetableComponent implements OnInit {
  private classService = inject(ClassService);
  private authService = inject(AuthService);
 
  weekDays = WEEK_DAYS;
  timetable: Record<string, unknown> | null = null;
  loading = true;
  error = '';
 
  ngOnInit(): void {
    const user = this.authService.getCurrentUser() as (Student & { classId?: string }) | null;
    const classId = user?.classId;
 
    if (!classId) {
      this.error = "Aucune classe associée à l'élève.";
      this.loading = false;
      return;
    }
 
    this.classService.getTimetable(classId).subscribe({
      next: (data) => {
        this.timetable = data as Record<string, unknown>;
        this.loading = false;
      },
      error: () => {
        this.error = "Impossible de charger l'emploi du temps.";
        this.loading = false;
      }
    });
  }
}