import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ApiResponse, Fee } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  private readonly endpoint = '/fees';

  constructor(private api: ApiService) {}

  /**
   * Get all fees
   */
  list(): Observable<ApiResponse<Fee[]>> {
    return this.api.get<Fee[]>(this.endpoint);
  }


  /**
   * Get fee by id
   */
  get(id: number): Observable<ApiResponse<Fee>> {
    return this.api.get<Fee>(
      `${this.endpoint}/${id}`
    );
  }


  /**
   * Create fee
   */
  create(fee: Fee): Observable<ApiResponse<Fee>> {
    return this.api.post<Fee>(
      this.endpoint,
      fee
    );
  }


  /**
   * Update fee
   */
  update(
    id: number,
    fee: Fee
  ): Observable<ApiResponse<Fee>> {

    return this.api.put<Fee>(
      `${this.endpoint}/${id}`,
      fee
    );
  }


  /**
   * Delete fee
   */
  delete(id: number): Observable<ApiResponse<void>> {

    return this.api.delete<void>(
      `${this.endpoint}/${id}`
    );
  }


  /**
   * Get fees by student
   */
  getByStudent(
    studentId: number
  ): Observable<ApiResponse<Fee[]>> {

    return this.api.get<Fee[]>(
      `${this.endpoint}/student/${studentId}`
    );
  }


  /**
   * Get unpaid fees
   */
  getUnpaid(): Observable<ApiResponse<Fee[]>> {

    return this.api.get<Fee[]>(
      `${this.endpoint}/unpaid`
    );
  }
}