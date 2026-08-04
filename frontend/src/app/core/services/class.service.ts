import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ApiResponse, SchoolClass } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private readonly endpoint = '/classes';

  constructor(private api: ApiService) {}

  /**
   * Get all classes
   */
  list(): Observable<ApiResponse<SchoolClass[]>> {
    return this.api.get<SchoolClass[]>(this.endpoint);
  }

  /**
   * Get class by id
   */
  get(id: number): Observable<ApiResponse<SchoolClass>> {
    return this.api.get<SchoolClass>(`${this.endpoint}/${id}`);
  }

  /**
   * Create class
   */
  create(data: SchoolClass): Observable<ApiResponse<SchoolClass>> {
    return this.api.post<SchoolClass>(this.endpoint, data);
  }

  /**
   * Update class
   */
  update(
    id: number,
    data: SchoolClass
  ): Observable<ApiResponse<SchoolClass>> {

    return this.api.put<SchoolClass>(
      `${this.endpoint}/${id}`,
      data
    );
  }

  /**
   * Delete class
   */
  delete(id: number): Observable<ApiResponse<void>> {
    return this.api.delete<void>(
      `${this.endpoint}/${id}`
    );
  }
}