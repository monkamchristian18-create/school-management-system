import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { SchoolClass } from '../models';
import { MOCK_CLASSES } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockClassService {

  private classes: SchoolClass[] = [...MOCK_CLASSES];

  /**
   * Get all classes
   */
  list(): Observable<SchoolClass[]> {
    return of(this.classes).pipe(delay(300));
  }

  /**
   * Get class by id
   */
  get(id: number): Observable<SchoolClass | undefined> {

    const item = this.classes.find(
      cls => cls.id === id
    );

    return of(item).pipe(delay(300));
  }

  /**
   * Create class
   */
  create(
    data: SchoolClass
  ): Observable<SchoolClass> {

    const newClass: SchoolClass = {
      ...data,
      id: this.generateId()
    };

    this.classes.push(newClass);

    return of(newClass).pipe(delay(300));
  }

  /**
   * Update class
   */
  update(
    id: number,
    data: SchoolClass
  ): Observable<SchoolClass> {

    const index = this.classes.findIndex(
      cls => cls.id === id
    );

    if (index !== -1) {
      this.classes[index] = {
        ...data,
        id
      };
    }

    return of(this.classes[index]).pipe(delay(300));
  }

  /**
   * Delete class
   */
  delete(id: number): Observable<boolean> {

    this.classes = this.classes.filter(
      cls => cls.id !== id
    );

    return of(true).pipe(delay(300));
  }

  /**
   * Search classes
   */
  search(
    keyword: string
  ): Observable<SchoolClass[]> {

    const result = this.classes.filter(cls =>
      cls.name.toLowerCase().includes(keyword.toLowerCase()) ||
      cls.level.toLowerCase().includes(keyword.toLowerCase()) ||
      cls.academicYear.toLowerCase().includes(keyword.toLowerCase())
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Count classes
   */
  count(): Observable<number> {
    return of(this.classes.length).pipe(delay(300));
  }

  /**
   * Generate next id
   */
  private generateId(): number {

    if (this.classes.length === 0) {
      return 1;
    }

    return Math.max(
      ...this.classes.map(c => c.id)
    ) + 1;
  }

}