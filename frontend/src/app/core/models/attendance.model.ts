/**
 * Attendance Status
 */
export enum AttendanceStatus {

  PRESENT = 'PRESENT',

  ABSENT = 'ABSENT',

  LATE = 'LATE',

  EXCUSED = 'EXCUSED'

}


/**
 * Attendance Type
 */
export enum AttendanceType {

  DAILY = 'DAILY',

  SUBJECT = 'SUBJECT',

  EXAM = 'EXAM'

}


/**
 * Attendance Interface
 */
export interface Attendance {


  id: number;


  studentId: number;


  classId: number;


  teacherId: number;


  subjectId?: number;


  date: Date;


  status: AttendanceStatus;


  type: AttendanceType;


  remarks?: string;


  recordedBy: number;


  createdAt: Date;


  updatedAt: Date;

}


/**
 * Create Attendance Request
 */
export interface CreateAttendanceRequest {


  studentId: number;


  classId: number;


  teacherId: number;


  subjectId?: number;


  date: Date;


  status: AttendanceStatus;


  type: AttendanceType;


  remarks?: string;

}


/**
 * Bulk Attendance Request
 * 
 * Used when teachers mark attendance
 * for many students at once
 */
export interface BulkAttendanceRequest {


  classId: number;


  subjectId?: number;


  teacherId: number;


  date: Date;


  attendance: StudentAttendance[];

}


/**
 * Student Attendance Record
 */
export interface StudentAttendance {


  studentId: number;


  status: AttendanceStatus;


  remarks?: string;

}


/**
 * Attendance Statistics
 */
export interface AttendanceStatistics {


  totalDays: number;


  presentDays: number;


  absentDays: number;


  lateDays: number;


  excusedDays: number;


  attendancePercentage: number;

}


/**
 * Attendance Filter
 */
export interface AttendanceFilter {


  studentId?: number;


  classId?: number;


  teacherId?: number;


  subjectId?: number;


  startDate?: Date;


  endDate?: Date;


  status?: AttendanceStatus;

}