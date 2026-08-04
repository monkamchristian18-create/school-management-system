import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ApiResponse, Exam } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private readonly endpoint = '/exams';

  constructor(private api: ApiService) {}

  /**
   * Get all exams
   */
  list(): Observable<ApiResponse<Exam[]>> {
    return this.api.get<Exam[]>(this.endpoint);
  }

  /**
   * Get exam by id
   */
  get(id: number): Observable<ApiResponse<Exam>> {
    return this.api.get<Exam>(`${this.endpoint}/${id}`);
  }

  /**
   * Create exam
   */
  create(exam: Exam): Observable<ApiResponse<Exam>> {
    return this.api.post<Exam>(this.endpoint, exam);
  }

  /**
   * Update exam
   */
  update(
    id: number,
    exam: Exam
  ): Observable<ApiResponse<Exam>> {
    return this.api.put<Exam>(`${this.endpoint}/${id}`, exam);
  }

  /**
   * Delete exam
   */
  delete(id: number): Observable<ApiResponse<void>> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }

  /**
   * Get exams by class
   */
  getByClass(classId: number): Observable<ApiResponse<Exam[]>> {
    return this.api.get<Exam[]>(`${this.endpoint}/class/${classId}`);
  }

  /**
   * Get exams by subject
   */
  getBySubject(subjectId: number): Observable<ApiResponse<Exam[]>> {
    return this.api.get<Exam[]>(`${this.endpoint}/subject/${subjectId}`);
  }
}