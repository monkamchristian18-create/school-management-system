import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Grade } from '../models';
import { MOCK_GRADES } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockGradeService {

  private grades: Grade[] = [...MOCK_GRADES];

  /**
   * Get all grades
   */
  list(): Observable<Grade[]> {
    return of(this.grades).pipe(delay(300));
  }

  /**
   * Get grade by id
   */
  get(id: number): Observable<Grade | undefined> {

    const grade = this.grades.find(
      item => item.id === id
    );

    return of(grade).pipe(delay(300));
  }

  /**
   * Create grade
   */
  create(grade: Grade): Observable<Grade> {

    const newGrade: Grade = {
      ...grade,
      id: this.generateId()
    };

    this.grades.push(newGrade);

    return of(newGrade).pipe(delay(300));
  }

  /**
   * Update grade
   */
  update(
    id: number,
    grade: Grade
  ): Observable<Grade> {

    const index = this.grades.findIndex(
      item => item.id === id
    );

    if (index !== -1) {
      this.grades[index] = {
        ...grade,
        id
      };
    }

    return of(this.grades[index]).pipe(delay(300));
  }

  /**
   * Delete grade
   */
  delete(id: number): Observable<boolean> {

    this.grades = this.grades.filter(
      item => item.id !== id
    );

    return of(true).pipe(delay(300));
  }

  /**
   * Grades by student
   */
  getByStudent(studentId: number): Observable<Grade[]> {

    const result = this.grades.filter(
      grade => grade.studentId === studentId
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Grades by exam
   */
  getByExam(examId: number): Observable<Grade[]> {

    const result = this.grades.filter(
      grade => grade.examId === examId
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Grades by subject
   */
  getBySubject(subjectId: number): Observable<Grade[]> {

    const result = this.grades.filter(
      grade => grade.subjectId === subjectId
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Search by student
   */
  search(studentId: number): Observable<Grade[]> {

    const result = this.grades.filter(
      grade => grade.studentId === studentId
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Count grades
   */
  count(): Observable<number> {
    return of(this.grades.length).pipe(delay(300));
  }

  /**
   * Generate next id
   */
  private generateId(): number {

    if (this.grades.length === 0) {
      return 1;
    }

    return Math.max(
      ...this.grades.map(item => item.id)
    ) + 1;
  }

}