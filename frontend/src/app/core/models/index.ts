export type UserRole =
  | 'ADMIN'
  | 'TEACHER'
  | 'STUDENT'
  | 'PARENT';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string | null;
  role: UserRole;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Grade {
  id: number;
  studentId: number;
  examId: number;
  subjectId: number;
  marksObtained: number;
  totalMarks: number;
  grade: string;
  remark: string;
}

export interface Fee {

  id: number;

  studentId: number;

  feeType: string;

  amount: number;

  paymentDate: string | null;

  status: 
    | 'Paid'
    | 'Pending'
    | 'Cancelled';

  academicYear: string;

  description: string;

}

export interface Timetable {

  id: number;

  classId: number;

  teacherId: number;

  subjectId: number;

  subjectName: string;

  day: string;

  startTime: string;

  endTime: string;

  room: string;

}