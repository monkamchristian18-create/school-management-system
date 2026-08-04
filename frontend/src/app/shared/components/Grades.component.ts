
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
 
import { GradeService } from '../../../core/services/grade.service';
import { Student } from '../../../core/models/student.model';
 
/**
 * Saisie groupée des notes d'une classe pour une matière/trimestre donné.
 * NOTE: la liste des élèves de la classe sélectionnée doit être chargée
 * (via StudentService.getByClass) avant d'appeler buildForm().
 */
@Component({
  selector: 'app-teacher-grades',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h1>Saisie des notes</h1>
 
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>
        Matière
        <input type="text" formControlName="subject" />
      </label>
      <label>
        Trimestre
        <select formControlName="term">
          <option value="T1">Trimestre 1</option>
          <option value="T2">Trimestre 2</option>
          <option value="T3">Trimestre 3</option>
        </select>
      </label>
 
      <table formArrayName="grades">
        <tbody>
          <tr *ngFor="let group of gradesArray.controls; let i = index" [formGroupName]="i">
            <td>{{ students[i]?.firstName }} {{ students[i]?.lastName }}</td>
            <td>
              <input type="number" formControlName="value" min="0" max="20" step="0.5" />
            </td>
          </tr>
        </tbody>
      </table>
 
      <div class="error" *ngIf="serverError">{{ serverError }}</div>
 
      <button type="submit" [disabled]="form.invalid || isSubmitting">
        {{ isSubmitting ? 'Enregistrement...' : 'Enregistrer les notes' }}
      </button>
    </form>
  `
})
export class GradesComponent {
  private fb = inject(FormBuilder);
  private gradeService = inject(GradeService);
 
  students: Student[] = [];
  isSubmitting = false;
  serverError = '';
 
  form = this.fb.group({
    subject: ['', Validators.required],
    term: ['T1', Validators.required],
    grades: this.fb.array<ReturnType<typeof this.buildGradeControl>>([])
  });
 
  get gradesArray(): FormArray {
    return this.form.get('grades') as FormArray;
  }
 
  private buildGradeControl(studentId: string) {
    return this.fb.group({
      studentId: [studentId],
      value: [null as number | null, [Validators.required, Validators.min(0), Validators.max(20)]]
    });
  }
 
  /** À appeler une fois la liste des élèves de la classe chargée. */
  loadStudents(students: Student[]): void {
    this.students = students;
    this.gradesArray.clear();
    students.forEach((s) => this.gradesArray.push(this.buildGradeControl(s.id)));
  }
 
  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
 
    this.isSubmitting = true;
    this.serverError = '';
 
    const { subject, term, grades } = this.form.getRawValue();
    const classId = this.students[0]?.classId ?? '';
 
    this.gradeService
      .bulkCreate({
        classId,
        subject: subject!,
        term: term!,
        grades: (grades ?? []).map((g) => ({ studentId: g.studentId!, value: g.value! }))
      })
      .subscribe({
        next: () => {
          this.isSubmitting = false;
        },
        error: () => {
          this.isSubmitting = false;
          this.serverError = "Échec de l'enregistrement des notes.";
        }
      });
  }
}
 