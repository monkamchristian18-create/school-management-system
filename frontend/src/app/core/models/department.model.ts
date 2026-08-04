/**
 * Department Status
 */
export enum DepartmentStatus {

  ACTIVE = 'ACTIVE',

  INACTIVE = 'INACTIVE'

}


/**
 * Department Interface
 */
export interface Department {


  id: number;


  name: string;


  code: string;


  description?: string;


  headOfDepartmentId?: number;


  teacherIds?: number[];


  subjectIds?: number[];


  classIds?: number[];


  numberOfTeachers?: number;


  numberOfStudents?: number;


  status: DepartmentStatus;


  createdAt: Date;


  updatedAt: Date;

}


/**
 * Create Department Request
 */
export interface CreateDepartmentRequest {


  name: string;


  code: string;


  description?: string;


  headOfDepartmentId?: number;

}


/**
 * Update Department Request
 */
export interface UpdateDepartmentRequest {


  name?: string;


  code?: string;


  description?: string;


  headOfDepartmentId?: number;


  status?: DepartmentStatus;

}


/**
 * Department Statistics
 */
export interface DepartmentStatistics {


  totalTeachers: number;


  totalStudents: number;


  totalSubjects: number;


  totalClasses: number;

}


/**
 * Department Filter
 */
export interface DepartmentFilter {


  keyword?: string;


  status?: DepartmentStatus;

}