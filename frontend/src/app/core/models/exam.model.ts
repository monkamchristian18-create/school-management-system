/**
 * Exam Type
 */
export enum ExamType {

  MID_TERM = 'MID_TERM',

  FINAL = 'FINAL',

 QUIZ = 'QUIZ',

  ASSIGNMENT = 'ASSIGNMENT',

  MOCK = 'MOCK'

}


/**
 * Exam Status
 */
export enum ExamStatus {

  UPCOMING = 'UPCOMING',

  ONGOING = 'ONGOING',

  COMPLETED = 'COMPLETED',

  CANCELLED = 'CANCELLED'

}


/**
 * Exam Interface
 */
export interface Exam {


  id: number;


  name: string;


  type: ExamType;


  description?: string;


  academicYear: string;


  semester?: string;


  classId: number;


  subjectIds: number[];


  startDate: Date;


  endDate: Date;


  duration?: number;


  totalMarks: number;


  passingMarks: number;


  status: ExamStatus;


  createdBy: number;


  createdAt: Date;


  updatedAt: Date;

}


/**
 * Create Exam Request
 */
export interface CreateExamRequest {


  name: string;


  type: ExamType;


  description?: string;


  academicYear: string;


  semester?: string;


  classId: number;


  subjectIds: number[];


  startDate: Date;


  endDate: Date;


  duration?: number;


  totalMarks: number;


  passingMarks: number;

}


/**
 * Update Exam Request
 */
export interface UpdateExamRequest {


  name?: string;


  description?: string;


  startDate?: Date;


  endDate?: Date;


  duration?: number;


  totalMarks?: number;


  passingMarks?: number;


  status?: ExamStatus;

}


/**
 * Exam Result Summary
 */
export interface ExamResultSummary {


  examId: number;


  totalStudents: number;


  passedStudents: number;


  failedStudents: number;


  averageScore: number;


  highestScore: number;


  lowestScore: number;

}


/**
 * Exam Filter
 */
export interface ExamFilter {


  keyword?: string;


  classId?: number;


  type?: ExamType;


  status?: ExamStatus;


  academicYear?: string;


  startDate?: Date;


  endDate?: Date;

}