/**
 * Subject Status
 */
export enum SubjectStatus {

  ACTIVE = 'ACTIVE',

  INACTIVE = 'INACTIVE'

}


/**
 * Subject Type
 */
export enum SubjectType {

  COMPULSORY = 'COMPULSORY',

  OPTIONAL = 'OPTIONAL'

}


/**
 * Subject Interface
 */
export interface Subject {


  id: number;


  name: string;


  code: string;


  description?: string;


  type: SubjectType;


  departmentId?: number;


  teacherId?: number;


  classIds?: number[];


  coefficient: number;


  weeklyHours: number;


  color?: string;


  status: SubjectStatus;


  createdAt: Date;


  updatedAt: Date;

}


/**
 * Create Subject Request
 */
export interface CreateSubjectRequest {


  name: string;


  code: string;


  description?: string;


  type: SubjectType;


  departmentId?: number;


  teacherId?: number;


  coefficient: number;


  weeklyHours: number;

}


/**
 * Update Subject Request
 */
export interface UpdateSubjectRequest {


  name?: string;


  description?: string;


  teacherId?: number;


  coefficient?: number;


  weeklyHours?: number;


  status?: SubjectStatus;

}


/**
 * Subject Filter
 */
export interface SubjectFilter {


  keyword?: string;


  departmentId?: number;


  teacherId?: number;


  type?: SubjectType;


  status?: SubjectStatus;

}