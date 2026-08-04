import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ApiResponse, Attendance } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private readonly endpoint = '/attendance';

  constructor(private api: ApiService) {}

  /**
   * Get all attendance records
   */
  list(): Observable<ApiResponse<Attendance[]>> {
    return this.api.get<Attendance[]>(this.endpoint);
  }

  /**
   * Get attendance by id
   */
  get(id: number): Observable<ApiResponse<Attendance>> {
    return this.api.get<Attendance>(`${this.endpoint}/${id}`);
  }

  /**
   * Create attendance
   */
  create(attendance: Attendance): Observable<ApiResponse<Attendance>> {
    return this.api.post<Attendance>(this.endpoint, attendance);
  }

  /**
   * Update attendance
   */
  update(
    id: number,
    attendance: Attendance
  ): Observable<ApiResponse<Attendance>> {

    return this.api.put<Attendance>(
      `${this.endpoint}/${id}`,
      attendance
    );
  }

  /**
   * Delete attendance
   */
  delete(id: number): Observable<ApiResponse<void>> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }

  /**
   * Attendance by student
   */
  getByStudent(studentId: number): Observable<ApiResponse<Attendance[]>> {
    return this.api.get<Attendance[]>(
      `${this.endpoint}/student/${studentId}`
    );
  }

  /**
   * Attendance by class
   */
  getByClass(classId: number): Observable<ApiResponse<Attendance[]>> {
    return this.api.get<Attendance[]>(
      `${this.endpoint}/class/${classId}`
    );
  }
}