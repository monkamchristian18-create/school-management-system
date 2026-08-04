import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ApiResponse, Teacher } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private readonly endpoint = '/teachers';

  constructor(private api: ApiService) {}

  /**
   * Get all teachers
   */
  list(): Observable<ApiResponse<Teacher[]>> {
    return this.api.get<Teacher[]>(this.endpoint);
  }

  /**
   * Get teacher by id
   */
  get(id: number): Observable<ApiResponse<Teacher>> {
    return this.api.get<Teacher>(`${this.endpoint}/${id}`);
  }

  /**
   * Create teacher
   */
  create(teacher: Teacher): Observable<ApiResponse<Teacher>> {
    return this.api.post<Teacher>(this.endpoint, teacher);
  }

  /**
   * Update teacher
   */
  update(id: number, teacher: Teacher): Observable<ApiResponse<Teacher>> {
    return this.api.put<Teacher>(`${this.endpoint}/${id}`, teacher);
  }

  /**
   * Delete teacher
   */
  delete(id: number): Observable<ApiResponse<void>> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }
}