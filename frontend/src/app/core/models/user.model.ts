/**
 * User Roles
 */
export enum UserRole {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  PARENT = 'PARENT'
}

/**
 * Gender
 */
export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}

/**
 * User Status
 */
export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED'
}

/**
 * Address Interface
 */
export interface Address {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

/**
 * Base User Interface
 */
export interface User {
  id: number;

  firstName: string;
  lastName: string;

  email: string;
  phone: string;

  username: string;

  gender: Gender;

  role: UserRole;

  profileImage?: string;

  dateOfBirth?: Date;

  address?: Address;

  status: UserStatus;

  lastLogin?: Date;

  createdAt: Date;

  updatedAt: Date;
}