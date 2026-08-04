import { User, UserStatus } from './user.model';

/**
 * Student Interface
 */
export interface Student extends User {
  studentId: string;
  admissionNumber: string;
  admissionDate: Date;

  classId: number;
  sectionId?: number;
  departmentId?: number;

  parentId: number;

  rollNumber: number;

  bloodGroup?: string;
  nationality?: string;
  religion?: string;

  emergencyContact?: string;

  medicalConditions?: string;

  previousSchool?: string;

  currentSemester?: number;

  academicYear?: string;

  status: UserStatus;
}

/**
 * Student Registration Request
 */
export interface StudentRegistration {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;

  studentId: string;
  admissionNumber: string;

  classId: number;
  parentId: number;

  password: string;
}

/**
 * Student Update Request
 */
export interface StudentUpdate {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;

  classId?: number;
  sectionId?: number;

  emergencyContact?: string;

  medicalConditions?: string;

  profileImage?: string;
}

/**
 * Student Dashboard Statistics
 */
export interface StudentStatistics {
  totalAttendance: number;
  presentDays: number;
  absentDays: number;
  attendancePercentage: number;

  completedAssignments: number;
  pendingAssignments: number;

  averageGrade: number;

  totalFeesPaid: number;
  remainingFees: number;
}

/**
 * Student Search Filter
 */
export interface StudentFilter {
  keyword?: string;

  classId?: number;

  sectionId?: number;

  departmentId?: number;

  academicYear?: string;

  status?: UserStatus;
}