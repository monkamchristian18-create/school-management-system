import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ApiResponse, Parent } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private readonly endpoint = '/parents';

  constructor(private api: ApiService) {}

  /**
   * Get all parents
   */
  list(): Observable<ApiResponse<Parent[]>> {
    return this.api.get<Parent[]>(this.endpoint);
  }

  /**
   * Get parent by id
   */
  get(id: number): Observable<ApiResponse<Parent>> {
    return this.api.get<Parent>(`${this.endpoint}/${id}`);
  }

  /**
   * Create parent
   */
  create(parent: Parent): Observable<ApiResponse<Parent>> {
    return this.api.post<Parent>(this.endpoint, parent);
  }

  /**
   * Update parent
   */
  update(
    id: number,
    parent: Parent
  ): Observable<ApiResponse<Parent>> {

    return this.api.put<T>(url, body)  
  }

  /**
   * Delete parent
   */
  delete(id: number): Observable<ApiResponse<void>> {
    return this.api.delete<void>(url)
  }
}