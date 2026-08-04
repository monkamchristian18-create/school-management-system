import {
  Student,
  Teacher,
  SchoolClass,
  Subject
} from '../models';

export const MOCK_STUDENTS: Student[] = [
  {
    id: 1,
    registrationNumber: 'STD001',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    dateOfBirth: '2010-05-12',
    email: 'john@example.com',
    phone: '670000001',
    address: 'Douala',
    classId: 1,
    parentId: 1,
    admissionDate: '2025-09-01',
    active: true
  }
];

export const MOCK_TEACHERS: Teacher[] = [
  {
    id: 1,
    employeeNumber: 'EMP001',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'teacher@example.com',
    phone: '670000002',
    qualification: 'Master',
    specialization: 'Mathematics',
    hireDate: '2023-01-10',
    active: true
  }
];

export const MOCK_CLASSES: SchoolClass[] = [
  {
    id: 1,
    name: 'Form One',
    level: 'Secondary',
    academicYear: '2026/2027',
    capacity: 50,
    classTeacherId: 1
  }
];

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: 'MTH101',
    name: 'Mathematics',
    coefficient: 4,
    teacherId: 1
  }
];

import { Parent } from '../models';

export const MOCK_PARENTS: Parent[] = [
  {
    id: 1,
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@email.com',
    phone: '670000101',
    occupation: 'Engineer',
    address: 'Douala'
  },
  {
    id: 2,
    firstName: 'Sarah',
    lastName: 'Williams',
    email: 'sarah.williams@email.com',
    phone: '670000102',
    occupation: 'Teacher',
    address: 'Yaoundé'
  },
  {
    id: 3,
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@email.com',
    phone: '670000103',
    occupation: 'Businessman',
    address: 'Bafoussam'
  }
];

import { Subject } from '../models';

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: 'MTH101',
    name: 'Mathematics',
    coefficient: 5,
    teacherId: 1
  },
  {
    id: 2,
    code: 'ENG101',
    name: 'English Language',
    coefficient: 4,
    teacherId: 2
  },
  {
    id: 3,
    code: 'PHY101',
    name: 'Physics',
    coefficient: 5,
    teacherId: 3
  },
  {
    id: 4,
    code: 'CHM101',
    name: 'Chemistry',
    coefficient: 5,
    teacherId: 4
  },
  {
    id: 5,
    code: 'BIO101',
    name: 'Biology',
    coefficient: 4,
    teacherId: 5
  },
  {
    id: 6,
    code: 'CSC101',
    name: 'Computer Science',
    coefficient: 5,
    teacherId: 6
  }
];

import { Attendance } from '../models';

export const MOCK_ATTENDANCE: Attendance[] = [
  {
    id: 1,
    studentId: 1,
    classId: 1,
    date: '2026-09-10',
    status: 'Present',
    remarks: 'On time'
  },
  {
    id: 2,
    studentId: 2,
    classId: 1,
    date: '2026-09-10',
    status: 'Absent',
    remarks: 'Sick'
  },
  {
    id: 3,
    studentId: 3,
    classId: 1,
    date: '2026-09-10',
    status: 'Late',
    remarks: 'Arrived 15 minutes late'
  },
  {
    id: 4,
    studentId: 4,
    classId: 2,
    date: '2026-09-10',
    status: 'Present',
    remarks: 'Present'
  }
];

import { Exam } from '../models';

export const MOCK_EXAMS: Exam[] = [
  {
    id: 1,
    name: 'First Term Mathematics',
    classId: 1,
    subjectId: 1,
    teacherId: 1,
    examDate: '2026-11-15',
    totalMarks: 100,
    duration: 120,
    semester: 'First Term'
  },
  {
    id: 2,
    name: 'First Term English',
    classId: 1,
    subjectId: 2,
    teacherId: 2,
    examDate: '2026-11-16',
    totalMarks: 100,
    duration: 120,
    semester: 'First Term'
  },
  {
    id: 3,
    name: 'Mid-Term Physics',
    classId: 2,
    subjectId: 3,
    teacherId: 3,
    examDate: '2026-10-20',
    totalMarks: 100,
    duration: 90,
    semester: 'First Term'
  },
  {
    id: 4,
    name: 'Final Biology',
    classId: 3,
    subjectId: 5,
    teacherId: 5,
    examDate: '2027-03-12',
    totalMarks: 100,
    duration: 120,
    semester: 'Second Term'
  }
];

import { Grade } from '../models';

export const MOCK_GRADES: Grade[] = [
  {
    id: 1,
    studentId: 1,
    examId: 1,
    subjectId: 1,
    marksObtained: 85,
    totalMarks: 100,
    grade: 'A',
    remark: 'Excellent'
  },
  {
    id: 2,
    studentId: 2,
    examId: 1,
    subjectId: 1,
    marksObtained: 72,
    totalMarks: 100,
    grade: 'B',
    remark: 'Very Good'
  },
  {
    id: 3,
    studentId: 3,
    examId: 2,
    subjectId: 2,
    marksObtained: 63,
    totalMarks: 100,
    grade: 'C',
    remark: 'Good'
  },
  {
    id: 4,
    studentId: 4,
    examId: 2,
    subjectId: 2,
    marksObtained: 48,
    totalMarks: 100,
    grade: 'D',
    remark: 'Needs Improvement'
  }
];

import { Fee } from '../models';


export const MOCK_FEES: Fee[] = [

  {
    id: 1,
    studentId: 1,
    feeType: 'Tuition Fee',
    amount: 150000,
    paymentDate: '2026-09-05',
    status: 'Paid',
    academicYear: '2026/2027',
    description: 'First semester tuition'
  },


  {
    id: 2,
    studentId: 2,
    feeType: 'Library Fee',
    amount: 25000,
    paymentDate: null,
    status: 'Pending',
    academicYear: '2026/2027',
    description: 'Library access fee'
  },


  {
    id: 3,
    studentId: 3,
    feeType: 'Transport Fee',
    amount: 50000,
    paymentDate: '2026-09-10',
    status: 'Paid',
    academicYear: '2026/2027',
    description: 'School transport'
  }

];

import { Timetable } from '../models';


export const MOCK_TIMETABLES: Timetable[] = [

  {
    id: 1,
    classId: 1,
    teacherId: 1,
    subjectId: 1,
    subjectName: 'Mathematics',
    day: 'Monday',
    startTime: '08:00',
    endTime: '10:00',
    room: 'Room A101'
  },


  {
    id: 2,
    classId: 1,
    teacherId: 2,
    subjectId: 2,
    subjectName: 'English',
    day: 'Monday',
    startTime: '10:00',
    endTime: '12:00',
    room: 'Room A102'
  },


  {
    id: 3,
    classId: 2,
    teacherId: 3,
    subjectId: 3,
    subjectName: 'Physics',
    day: 'Wednesday',
    startTime: '08:00',
    endTime: '10:00',
    room: 'Laboratory 1'
  },


  {
    id: 4,
    classId: 3,
    teacherId: 4,
    subjectId: 4,
    subjectName: 'Computer Science',
    day: 'Friday',
    startTime: '13:00',
    endTime: '15:00',
    room: 'Computer Lab'
  }

];