/**
 * Class Status
 */
export enum ClassStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}


/**
 * Class Interface
 */
export interface SchoolClass {

  id: number;

  name: string;

  code: string;

  level: string;

  section?: string;

  roomNumber?: string;

  capacity: number;

  academicYear: string;

  departmentId?: number;

  classTeacherId?: number;

  studentCount?: number;

  status: ClassStatus;

  createdAt: Date;

  updatedAt: Date;
}


/**
 * Create Class Request
 */
export interface CreateClassRequest {

  name: string;

  code: string;

  level: string;

  section?: string;

  roomNumber?: string;

  capacity: number;

  academicYear: string;

  departmentId?: number;

  classTeacherId?: number;

}


/**
 * Update Class Request
 */
export interface UpdateClassRequest {

  name?: string;

  code?: string;

  level?: string;

  section?: string;

  roomNumber?: string;

  capacity?: number;

  classTeacherId?: number;

  status?: ClassStatus;

}


/**
 * Class Filter
 */
export interface ClassFilter {

  keyword?: string;

  level?: string;

  departmentId?: number;

  academicYear?: string;

  status?: ClassStatus;

}