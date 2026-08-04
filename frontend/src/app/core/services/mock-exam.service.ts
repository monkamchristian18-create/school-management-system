import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Exam } from '../models';
import { MOCK_EXAMS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockExamService {

  private exams: Exam[] = [...MOCK_EXAMS];

  /**
   * Get all exams
   */
  list(): Observable<Exam[]> {
    return of(this.exams).pipe(delay(300));
  }

  /**
   * Get exam by id
   */
  get(id: number): Observable<Exam | undefined> {

    const exam = this.exams.find(
      item => item.id === id
    );

    return of(exam).pipe(delay(300));
  }

  /**
   * Create exam
   */
  create(exam: Exam): Observable<Exam> {

    const newExam: Exam = {
      ...exam,
      id: this.generateId()
    };

    this.exams.push(newExam);

    return of(newExam).pipe(delay(300));
  }

  /**
   * Update exam
   */
  update(
    id: number,
    exam: Exam
  ): Observable<Exam> {

    const index = this.exams.findIndex(
      item => item.id === id
    );

    if (index !== -1) {
      this.exams[index] = {
        ...exam,
        id
      };
    }

    return of(this.exams[index]).pipe(delay(300));
  }

  /**
   * Delete exam
   */
  delete(id: number): Observable<boolean> {

    this.exams = this.exams.filter(
      item => item.id !== id
    );

    return of(true).pipe(delay(300));
  }

  /**
   * Get exams by class
   */
  getByClass(classId: number): Observable<Exam[]> {

    const result = this.exams.filter(
      exam => exam.classId === classId
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Get exams by subject
   */
  getBySubject(subjectId: number): Observable<Exam[]> {

    const result = this.exams.filter(
      exam => exam.subjectId === subjectId
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Search exams
   */
  search(keyword: string): Observable<Exam[]> {

    const value = keyword.toLowerCase();

    const result = this.exams.filter(exam =>
      exam.name.toLowerCase().includes(value)
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Count exams
   */
  count(): Observable<number> {
    return of(this.exams.length).pipe(delay(300));
  }

  /**
   * Generate next id
   */
  private generateId(): number {

    if (this.exams.length === 0) {
      return 1;
    }

    return Math.max(
      ...this.exams.map(item => item.id)
    ) + 1;
  }

}