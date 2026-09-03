import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  constructor() {}

  /**
   * GET Request
   */
  get<T>(
    endpoint: string,
    params?: HttpParams
  ): Observable<T> {
    return this.http.get<T>(
      `${this.apiUrl}/${endpoint}`,
      { params }
    );
  }

  /**
   * GET By Id
   */
  getById<T>(
    endpoint: string,
    id: number | string
  ): Observable<T> {
    return this.http.get<T>(
      `${this.apiUrl}/${endpoint}/${id}`
    );
  }

  /**
   * POST Request
   */
  post<T>(
    endpoint: string,
    body: any
  ): Observable<T> {
    return this.http.post<T>(
      `${this.apiUrl}/${endpoint}`,
      body
    );
  }

  /**
   * PUT Request
   */
  put<T>(
    endpoint: string,
    id: number | string,
    body: any
  ): Observable<T> {
    return this.http.put<T>(
      '${this.endpoint}/${id}',
      {},
      {}
    
    );
  }

  /**
   * PATCH Request
   */
  patch<T>(
    endpoint: string,
    id: number | string,
    body: any
  ): Observable<T> {
    return this.http.patch<T>(
      `${this.apiUrl}/${endpoint}/${id}`,
      body
    );
  }

  /**
   * DELETE Request
   */
  delete<T>(
    endpoint: string,
    id: number | string
  ): Observable<T> {
   return this.http.delete<T>(
      '${this.endpoint}/${id}',
      {}
    );
  }

  /**
   * Upload File
   */
  upload<T>(
    endpoint: string,
    file: File
  ): Observable<T> {

    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<T>(
      `${this.apiUrl}/${endpoint}`,
      formData
    );
  }

  /**
   * Download File
   */
  download(
    endpoint: string
  ): Observable<Blob> {

    return this.http.get(
      `${this.apiUrl}/${endpoint}`,
      {
        responseType: 'blob'
      }
    );
  }

  /**
   * Custom GET Headers
   */
  getWithHeaders<T>(
    endpoint: string,
    headers: HttpHeaders
  ): Observable<T> {

    return this.http.get<T>(
      `${this.apiUrl}/${endpoint}`,
      {
        headers
      }
    );
  }
}