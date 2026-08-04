import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ApiResponse, Timetable } from '../models';


@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  private readonly endpoint = '/timetables';


  constructor(
    private api: ApiService
  ) {}


  /**
   * Get all timetables
   */
  list(): Observable<ApiResponse<Timetable[]>> {

    return this.api.get<Timetable[]>(
      this.endpoint
    );

  }


  /**
   * Get timetable by id
   */
  get(id: number): Observable<ApiResponse<Timetable>> {

    return this.api.get<Timetable>(
      `${this.endpoint}/${id}`
    );

  }


  /**
   * Create timetable
   */
  create(
    timetable: Timetable
  ): Observable<ApiResponse<Timetable>> {

    return this.api.post<Timetable>(
      this.endpoint,
      timetable
    );

  }


  /**
   * Update timetable
   */
  update(
    id: number,
    timetable: Timetable
  ): Observable<ApiResponse<Timetable>> {

    return this.api.put<Timetable>(
      `${this.endpoint}/${id}`,
      timetable
    );

  }


  /**
   * Delete timetable
   */
  delete(
    id: number
  ): Observable<ApiResponse<void>> {

    return this.api.delete<void>(
      `${this.endpoint}/${id}`
    );

  }


  /**
   * Get timetable by class
   */
  getByClass(
    classId: number
  ): Observable<ApiResponse<Timetable[]>> {

    return this.api.get<Timetable[]>(
      `${this.endpoint}/class/${classId}`
    );

  }


  /**
   * Get timetable by teacher
   */
  getByTeacher(
    teacherId: number
  ): Observable<ApiResponse<Timetable[]>> {

    return this.api.get<Timetable[]>(
      `${this.endpoint}/teacher/${teacherId}`
    );

  }


  /**
   * Get timetable by day
   */
  getByDay(
    day: string
  ): Observable<ApiResponse<Timetable[]>> {

    return this.api.get<Timetable[]>(
      `${this.endpoint}/day/${day}`
    );

  }

}