/**
 * Grade Type
 */
export enum GradeType {


  ASSIGNMENT = 'ASSIGNMENT',

  TEST = 'TEST',

  EXAM = 'EXAM',

  PROJECT = 'PROJECT',

  PRACTICAL = 'PRACTICAL'

}


/**
 * Grade Letter
 */
export enum GradeLetter {


  A = 'A',

  B = 'B',

  C = 'C',

  D = 'D',

  E = 'E',

  F = 'F'

}


/**
 * Grade Interface
 */
export interface Grade {


  id: number;


  studentId: number;


  subjectId: number;


  teacherId: number;


  classId: number;


  examId?: number;


  title: string;


  type: GradeType;


  marksObtained: number;


  totalMarks: number;


  percentage: number;


  letterGrade?: GradeLetter;


  gradePoint?: number;


  remarks?: string;


  date: Date;


  createdAt: Date;


  updatedAt: Date;

}


/**
 * Create Grade Request
 */
export interface CreateGradeRequest {


  studentId: number;


  subjectId: number;


  teacherId: number;


  classId: number;


  examId?: number;


  title: string;


  type: GradeType;


  marksObtained: number;


  totalMarks: number;


  remarks?: string;

}


/**
 * Bulk Grade Entry
 */
export interface BulkGradeRequest {


  subjectId: number;


  classId: number;


  teacherId: number;


  examId?: number;


  type: GradeType;


  grades: StudentGrade[];

}


/**
 * Student Grade Record
 */
export interface StudentGrade {


  studentId: number;


  marksObtained: number;


  totalMarks: number;


  remarks?: string;

}


/**
 * Grade Statistics
 */
export interface GradeStatistics {


  totalSubjects: number;


  averagePercentage: number;


  highestGrade: number;


  lowestGrade: number;


  passedSubjects: number;


  failedSubjects: number;

}


/**
 * Grade Filter
 */
export interface GradeFilter {


  studentId?: number;


  subjectId?: number;


  classId?: number;


  teacherId?: number;


  examId?: number;


  type?: GradeType;


  startDate?: Date;


  endDate?: Date;

}