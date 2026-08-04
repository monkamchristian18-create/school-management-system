/**
 * Days of Week
 */
export enum WeekDay {

  MONDAY = 'MONDAY',

  TUESDAY = 'TUESDAY',

  WEDNESDAY = 'WEDNESDAY',

  THURSDAY = 'THURSDAY',

  FRIDAY = 'FRIDAY',

  SATURDAY = 'SATURDAY'

}


/**
 * Timetable Status
 */
export enum TimetableStatus {

  ACTIVE = 'ACTIVE',

  INACTIVE = 'INACTIVE'

}


/**
 * Timetable Interface
 */
export interface Timetable {


  id: number;


  classId: number;


  subjectId: number;


  teacherId: number;


  day: WeekDay;


  startTime: string;


  endTime: string;


  roomNumber?: string;


  academicYear: string;


  semester?: string;


  status: TimetableStatus;


  createdAt: Date;


  updatedAt: Date;

}


/**
 * Create Timetable Request
 */
export interface CreateTimetableRequest {


  classId: number;


  subjectId: number;


  teacherId: number;


  day: WeekDay;


  startTime: string;


  endTime: string;


  roomNumber?: string;


  academicYear: string;


  semester?: string;

}


/**
 * Update Timetable Request
 */
export interface UpdateTimetableRequest {


  subjectId?: number;


  teacherId?: number;


  day?: WeekDay;


  startTime?: string;


  endTime?: string;


  roomNumber?: string;


  status?: TimetableStatus;

}


/**
 * Daily Timetable
 */
export interface DailyTimetable {


  day: WeekDay;


  lessons: TimetableLesson[];

}


/**
 * Timetable Lesson
 */
export interface TimetableLesson {


  subjectId: number;


  subjectName: string;


  teacherId: number;


  teacherName: string;


  startTime: string;


  endTime: string;


  roomNumber?: string;

}


/**
 * Timetable Filter
 */
export interface TimetableFilter {


  classId?: number;


  teacherId?: number;


  subjectId?: number;


  day?: WeekDay;


  academicYear?: string;


  status?: TimetableStatus;

}