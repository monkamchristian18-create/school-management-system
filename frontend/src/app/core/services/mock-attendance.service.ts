import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Attendance } from '../models';
import { MOCK_ATTENDANCE } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockAttendanceService {

  private attendance: Attendance[] = [...MOCK_ATTENDANCE];

  /**
   * Get all attendance
   */
  list(): Observable<Attendance[]> {
    return of(this.attendance).pipe(delay(300));
  }

  /**
   * Get attendance by id
   */
  get(id: number): Observable<Attendance | undefined> {

    const item = this.attendance.find(
      attendance => attendance.id === id
    );

    return of(item).pipe(delay(300));
  }

  /**
   * Create attendance
   */
  create(data: Attendance): Observable<Attendance> {

    const newAttendance: Attendance = {
      ...data,
      id: this.generateId()
    };

    this.attendance.push(newAttendance);

    return of(newAttendance).pipe(delay(300));
  }

  /**
   * Update attendance
   */
  update(
    id: number,
    data: Attendance
  ): Observable<Attendance> {

    const index = this.attendance.findIndex(
      attendance => attendance.id === id
    );

    if (index !== -1) {
      this.attendance[index] = {
        ...data,
        id
      };
    }

    return of(this.attendance[index]).pipe(delay(300));
  }

  /**
   * Delete attendance
   */
  delete(id: number): Observable<boolean> {

    this.attendance = this.attendance.filter(
      attendance => attendance.id !== id
    );

    return of(true).pipe(delay(300));
  }

  /**
   * Search attendance by student
   */
  getByStudent(studentId: number): Observable<Attendance[]> {

    const result = this.attendance.filter(
      attendance => attendance.studentId === studentId
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Search attendance by class
   */
  getByClass(classId: number): Observable<Attendance[]> {

    const result = this.attendance.filter(
      attendance => attendance.classId === classId
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Search attendance by date
   */
  getByDate(date: string): Observable<Attendance[]> {

    const result = this.attendance.filter(
      attendance => attendance.date === date
    );

    return of(result).pipe(delay(300));
  }

  /**
   * Count attendance records
   */
  count(): Observable<number> {
    return of(this.attendance.length).pipe(delay(300));
  }

  /**
   * Generate id
   */
  private generateId(): number {

    if (this.attendance.length === 0) {
      return 1;
    }

    return Math.max(
      ...this.attendance.map(attendance => attendance.id)
    ) + 1;
  }

}