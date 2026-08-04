import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Teacher } from '../models';
import { MOCK_TEACHERS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockTeacherService {

  private teachers: Teacher[] = [...MOCK_TEACHERS];

  /**
   * Get all teachers
   */
  list(): Observable<Teacher[]> {
    return of(this.teachers).pipe(delay(300));
  }

  /**
   * Get teacher by id
   */
  get(id: number): Observable<Teacher | undefined> {

    const teacher = this.teachers.find(
      item => item.id === id
    );

    return of(teacher).pipe(delay(300));
  }

  /**
   * Create teacher
   */
  create(teacher: Teacher): Observable<Teacher> {

    const newTeacher: Teacher = {
      ...teacher,
      id: this.generateId()
    };

    this.teachers.push(newTeacher);

    return of(newTeacher).pipe(delay(300));
  }

  /**
   * Update teacher
   */
  update(
    id: number,
    teacher: Teacher
  ): Observable<Teacher> {

    const index = this.teachers.findIndex(
      item => item.id === id
    );

    if (index !== -1) {
      this.teachers[index] = {
        ...teacher,
        id
      };
    }

    return of(this.teachers[index]).pipe(delay(300));
  }

  /**
   * Delete teacher
   */
  delete(id: number): Observable<boolean> {

    this.teachers = this.teachers.filter(
      item => item.id !== id
    );

    return of(true).pipe(delay(300));
  }

  /**
   * Search teacher by name
   */
  search(keyword: string): Observable<Teacher[]> {

    const result = this.teachers.filter(item =>
      `${item.firstName} ${item.lastName}`
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Count teachers
   */
  count(): Observable<number> {
    return of(this.teachers.length).pipe(delay(200));
  }

  /**
   * Generate next id
   */
  private generateId(): number {

    if (this.teachers.length === 0) {
      return 1;
    }

    return Math.max(
      ...this.teachers.map(item => item.id)
    ) + 1;
  }

}