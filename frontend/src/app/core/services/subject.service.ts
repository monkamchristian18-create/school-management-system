import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ApiResponse, Subject } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private readonly endpoint = '/subjects';

  constructor(private api: ApiService) {}

  /**
   * Get all subjects
   */
  list(): Observable<ApiResponse<Subject[]>> {
    return this.api.get<Subject[]>(this.endpoint);
  }

  /**
   * Get subject by id
   */
  get(id: number): Observable<ApiResponse<Subject>> {
    return this.api.get<Subject>(`${this.endpoint}/${id}`);
  }

  /**
   * Create subject
   */
  create(subject: Subject): Observable<ApiResponse<Subject>> {
    return this.api.post<Subject>(this.endpoint, subject);
  }

  /**
   * Update subject
   */
  update(
    id: number,
    subject: Subject
  ): Observable<ApiResponse<Subject>> {

    return this.api.put<Subject>(
      `${this.endpoint}/${id}`,
      subject
    );
  }

  /**
   * Delete subject
   */
  delete(id: number): Observable<ApiResponse<void>> {
    return this.api.delete<void>(
      `${this.endpoint}/${id}`
    );
  }
}