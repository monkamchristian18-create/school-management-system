import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StudentStatistics } from '../models/student.model';
import { ParentStatistics } from '../models/parent.model';
import { AttendanceStatistics } from '../models/attendance.model';
import { GradeStatistics } from '../models/grade.model';
import { FeeStatistics } from '../models/fee.model';


/**
 * Dashboard Summary
 */
export interface DashboardSummary {

  totalStudents: number;

  totalTeachers: number;

  totalParents: number;

  totalClasses: number;

  totalSubjects: number;

  attendanceRate: number;

  feeCollection: number;

}


/**
 * Dashboard Service
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  private apiUrl =
    'http://localhost:3000/api/dashboard';



  constructor(
    private http: HttpClient
  ) {}



  /**
   * Get Admin Dashboard
   */
  getAdminDashboard():
    Observable<DashboardSummary> {


    return this.http.get<DashboardSummary>(
      `${this.apiUrl}/admin`
    );

  }




  /**
   * Get Teacher Dashboard
   */
  getTeacherDashboard(
    teacherId: number
  ): Observable<any> {


    return this.http.get(
      `${this.apiUrl}/teacher/${teacherId}`
    );

  }




  /**
   * Get Student Dashboard
   */
  getStudentDashboard(
    studentId: number
  ): Observable<StudentStatistics> {


    return this.http.get<StudentStatistics>(
      `${this.apiUrl}/student/${studentId}`
    );

  }




  /**
   * Get Parent Dashboard
   */
  getParentDashboard(
    parentId: number
  ): Observable<ParentStatistics> {


    return this.http.get<ParentStatistics>(
      `${this.apiUrl}/parent/${parentId}`
    );

  }




  /**
   * Attendance Overview
   */
  getAttendanceStatistics():
    Observable<AttendanceStatistics> {


    return this.http.get<AttendanceStatistics>(
      `${this.apiUrl}/attendance`
    );

  }




  /**
   * Grade Overview
   */
  getGradeStatistics():
    Observable<GradeStatistics> {


    return this.http.get<GradeStatistics>(
      `${this.apiUrl}/grades`
    );

  }




  /**
   * Fee Overview
   */
  getFeeStatistics():
    Observable<FeeStatistics> {


    return this.http.get<FeeStatistics>(
      `${this.apiUrl}/fees`
    );

  }


}