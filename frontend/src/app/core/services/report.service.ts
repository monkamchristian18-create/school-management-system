import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



/**
 * Report Types
 */
export enum ReportType {

  STUDENT = 'STUDENT',

  TEACHER = 'TEACHER',

  ATTENDANCE = 'ATTENDANCE',

  GRADE = 'GRADE',

  FEE = 'FEE',

  EXAM = 'EXAM'

}


/**
 * Report Response
 */
export interface ReportResponse {


  id: number;

  name: string;

  type: ReportType;

  fileUrl?: string;

  generatedBy: number;

  createdAt: Date;

}



/**
 * Report Service
 */
@Injectable({
  providedIn: 'root'
})
export class ReportService {


  private apiUrl =
    'http://localhost:3000/api/reports';



  constructor(
    private http: HttpClient
  ) {}



  /**
   * Generate Report
   */
  generateReport(
    type: ReportType,
    parameters?: any
  ): Observable<ReportResponse> {


    return this.http.post<ReportResponse>(
      `${this.apiUrl}/generate`,
      {
        type,
        parameters
      }
    );

  }




  /**
   * Get All Reports
   */
  getReports():
    Observable<ReportResponse[]> {


    return this.http.get<ReportResponse[]>(
      this.apiUrl
    );

  }




  /**
   * Get Report By ID
   */
  getReport(
    id:number
  ): Observable<ReportResponse> {


    return this.http.get<ReportResponse>(
      `${this.apiUrl}/${id}`
    );

  }




  /**
   * Download Report
   */
  downloadReport(
    id:number
  ): Observable<Blob> {


    return this.http.get(
      `${this.apiUrl}/${id}/download`,
      {
        responseType:'blob'
      }
    );

  }




  /**
   * Delete Report
   */
  deleteReport(
    id:number
  ): Observable<void> {


    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );

  }


}