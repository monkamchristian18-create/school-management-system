import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Timetable } from '../models';
import { MOCK_TIMETABLES } from './mock-data';



@Injectable({
  providedIn: 'root'
})
export class MockTimetableService {


  private timetables: Timetable[] = [
    ...MOCK_TIMETABLES
  ];



  /**
   * Get all timetables
   */
  list(): Observable<Timetable[]> {

    return of(this.timetables)
      .pipe(delay(300));

  }



  /**
   * Get timetable by id
   */
  get(
    id: number
  ): Observable<Timetable | undefined> {


    const timetable = this.timetables.find(
      item => item.id === id
    );


    return of(timetable)
      .pipe(delay(300));

  }



  /**
   * Create timetable
   */
  create(
    timetable: Timetable
  ): Observable<Timetable> {


    const newTimetable: Timetable = {

      ...timetable,

      id: this.generateId()

    };


    this.timetables.push(
      newTimetable
    );


    return of(newTimetable)
      .pipe(delay(300));

  }




  /**
   * Update timetable
   */
  update(
    id: number,
    timetable: Timetable
  ): Observable<Timetable> {


    const index =
      this.timetables.findIndex(
        item => item.id === id
      );



    if(index !== -1) {

      this.timetables[index] = {

        ...timetable,

        id

      };

    }



    return of(
      this.timetables[index]
    )
    .pipe(delay(300));

  }




  /**
   * Delete timetable
   */
  delete(
    id: number
  ): Observable<boolean> {


    this.timetables =
      this.timetables.filter(
        item => item.id !== id
      );


    return of(true)
      .pipe(delay(300));

  }





  /**
   * Get timetable by class
   */
  getByClass(
    classId: number
  ): Observable<Timetable[]> {


    const result =
      this.timetables.filter(
        item => item.classId === classId
      );


    return of(result)
      .pipe(delay(300));

  }





  /**
   * Get timetable by teacher
   */
  getByTeacher(
    teacherId: number
  ): Observable<Timetable[]> {


    const result =
      this.timetables.filter(
        item => item.teacherId === teacherId
      );


    return of(result)
      .pipe(delay(300));

  }





  /**
   * Get timetable by day
   */
  getByDay(
    day: string
  ): Observable<Timetable[]> {


    const result =
      this.timetables.filter(
        item => item.day === day
      );


    return of(result)
      .pipe(delay(300));

  }





  /**
   * Search timetable
   */
  search(
    keyword: string
  ): Observable<Timetable[]> {


    const value =
      keyword.toLowerCase();



    const result =
      this.timetables.filter(item =>

        item.subjectName
          .toLowerCase()
          .includes(value)

        ||

        item.room
          .toLowerCase()
          .includes(value)

      );



    return of(result)
      .pipe(delay(300));

  }





  /**
   * Count timetable records
   */
  count(): Observable<number> {

    return of(
      this.timetables.length
    )
    .pipe(delay(300));

  }





  /**
   * Generate new id
   */
  private generateId(): number {


    if(this.timetables.length === 0) {

      return 1;

    }



    return Math.max(
      ...this.timetables.map(
        item => item.id
      )

    ) + 1;


  }


}