import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Student } from '../models';
import { MOCK_STUDENTS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class MockStudentService {

  private students: Student[] = [...MOCK_STUDENTS];

  list(): Observable<Student[]> {
    return of(this.students).pipe(delay(300));
  }

  get(id: number): Observable<Student | undefined> {
    return of(
      this.students.find(student => student.id === id)
    ).pipe(delay(300));
  }

  create(student: Student): Observable<Student> {

    student.id = this.students.length + 1;

    this.students.push(student);

    return of(student).pipe(delay(300));
  }

  update(id: number, student: Student): Observable<Student> {

    const index = this.students.findIndex(s => s.id === id);

    if (index !== -1) {
      this.students[index] = student;
    }

    return of(student).pipe(delay(300));
  }

  delete(id: number): Observable<boolean> {

    this.students =
      this.students.filter(student => student.id !== id);

    return of(true).pipe(delay(300));
  }

}