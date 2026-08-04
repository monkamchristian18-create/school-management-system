import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { ApiResponse, Grade } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  private readonly endpoint = '/grades';

  constructor(private api: ApiService) {}

  /**
   * Get all grades
   */
  list(): Observable<ApiResponse<Grade[]>> {
    return this.api.get<Grade[]>(this.endpoint);
  }

  /**
   * Get grade by id
   */
  get(id: number): Observable<ApiResponse<Grade>> {
    return this.api.get<Grade>(`${this.endpoint}/${id}`);
  }

  /**
   * Create grade
   */
  create(grade: Grade): Observable<ApiResponse<Grade>> {
    return this.api.post<Grade>(this.endpoint, grade);
  }

  /**
   * Update grade
   */
  update(
    id: number,
    grade: Grade
  ): Observable<ApiResponse<Grade>> {
    return this.api.put<Grade>(`${this.endpoint}/${id}`, grade);
  }

  /**
   * Delete grade
   */
  delete(id: number): Observable<ApiResponse<void>> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }

  /**
   * Grades by student
   */
  getByStudent(studentId: number): Observable<ApiResponse<Grade[]>> {
    return this.api.get<Grade[]>(`${this.endpoint}/student/${studentId}`);
  }

  /**
   * Grades by exam
   */
  getByExam(examId: number): Observable<ApiResponse<Grade[]>> {
    return this.api.get<Grade[]>(`${this.endpoint}/exam/${examId}`);
  }

  /**
   * Grades by subject
   */
  getBySubject(subjectId: number): Observable<ApiResponse<Grade[]>> {
    return this.api.get<Grade[]>(`${this.endpoint}/subject/${subjectId}`);
  }
}