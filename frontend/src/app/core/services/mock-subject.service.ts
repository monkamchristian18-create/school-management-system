import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Subject } from '../models';
import { MOCK_SUBJECTS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockSubjectService {

  private subjects: Subject[] = [...MOCK_SUBJECTS];

  /**
   * Get all subjects
   */
  list(): Observable<Subject[]> {
    return of(this.subjects).pipe(delay(300));
  }

  /**
   * Get subject by id
   */
  get(id: number): Observable<Subject | undefined> {

    const subject = this.subjects.find(
      item => item.id === id
    );

    return of(subject).pipe(delay(300));
  }

  /**
   * Create subject
   */
  create(subject: Subject): Observable<Subject> {

    const newSubject: Subject = {
      ...subject,
      id: this.generateId()
    };

    this.subjects.push(newSubject);

    return of(newSubject).pipe(delay(300));
  }

  /**
   * Update subject
   */
  update(
    id: number,
    subject: Subject
  ): Observable<Subject> {

    const index = this.subjects.findIndex(
      item => item.id === id
    );

    if (index !== -1) {
      this.subjects[index] = {
        ...subject,
        id
      };
    }

    return of(this.subjects[index]).pipe(delay(300));
  }

  /**
   * Delete subject
   */
  delete(id: number): Observable<boolean> {

    this.subjects = this.subjects.filter(
      item => item.id !== id
    );

    return of(true).pipe(delay(300));
  }

  /**
   * Search subject
   */
  search(keyword: string): Observable<Subject[]> {

    const value = keyword.toLowerCase();

    const result = this.subjects.filter(subject =>
      subject.name.toLowerCase().includes(value) ||
      subject.code.toLowerCase().includes(value)
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Find by teacher
   */
  getByTeacher(teacherId: number): Observable<Subject[]> {

    const result = this.subjects.filter(
      subject => subject.teacherId === teacherId
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Count subjects
   */
  count(): Observable<number> {
    return of(this.subjects.length).pipe(delay(300));
  }

  /**
   * Generate next id
   */
  private generateId(): number {

    if (this.subjects.length === 0) {
      return 1;
    }

    return Math.max(
      ...this.subjects.map(subject => subject.id)
    ) + 1;
  }
}