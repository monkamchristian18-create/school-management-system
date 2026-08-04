import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Parent } from '../models';
import { MOCK_PARENTS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockParentService {

  private parents: Parent[] = [...MOCK_PARENTS];

  /**
   * Get all parents
   */
  list(): Observable<Parent[]> {
    return of(this.parents).pipe(delay(300));
  }

  /**
   * Get parent by id
   */
  get(id: number): Observable<Parent | undefined> {

    const parent = this.parents.find(
      item => item.id === id
    );

    return of(parent).pipe(delay(300));
  }

  /**
   * Create parent
   */
  create(parent: Parent): Observable<Parent> {

    const newParent: Parent = {
      ...parent,
      id: this.generateId()
    };

    this.parents.push(newParent);

    return of(newParent).pipe(delay(300));
  }

  /**
   * Update parent
   */
  update(
    id: number,
    parent: Parent
  ): Observable<Parent> {

    const index = this.parents.findIndex(
      item => item.id === id
    );

    if (index !== -1) {
      this.parents[index] = {
        ...parent,
        id
      };
    }

    return of(this.parents[index]).pipe(delay(300));
  }

  /**
   * Delete parent
   */
  delete(id: number): Observable<boolean> {

    this.parents = this.parents.filter(
      item => item.id !== id
    );

    return of(true).pipe(delay(300));
  }

  /**
   * Search parents
   */
  search(keyword: string): Observable<Parent[]> {

    const result = this.parents.filter(parent =>
      `${parent.firstName} ${parent.lastName}`
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Count parents
   */
  count(): Observable<number> {
    return of(this.parents.length).pipe(delay(300));
  }

  /**
   * Generate new id
   */
  private generateId(): number {

    if (this.parents.length === 0) {
      return 1;
    }

    return Math.max(
      ...this.parents.map(parent => parent.id)
    ) + 1;
  }
}