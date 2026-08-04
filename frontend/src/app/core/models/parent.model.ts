import { User, UserStatus } from './user.model';

/**
 * Relationship between Parent and Student
 */
export enum ParentRelationship {
  FATHER = 'Father',
  MOTHER = 'Mother',
  GUARDIAN = 'Guardian',
  UNCLE = 'Uncle',
  AUNT = 'Aunt',
  GRANDPARENT = 'Grandparent',
  OTHER = 'Other'
}

/**
 * Parent Interface
 */
export interface Parent extends User {
  parentId: string;

  occupation?: string;

  company?: string;

  workPhone?: string;

  relationship: ParentRelationship;

  nationalId?: string;

  passportNumber?: string;

  annualIncome?: number;

  emergencyContact?: string;

  numberOfChildren: number;

  studentIds: number[];

  preferredLanguage?: string;

  notes?: string;

  status: UserStatus;
}

/**
 * Parent Registration Request
 */
export interface ParentRegistration {
  firstName: string;
  lastName: string;

  username: string;

  email: string;

  phone: string;

  password: string;

  relationship: ParentRelationship;

  occupation?: string;

  emergencyContact?: string;

  studentIds?: number[];
}

/**
 * Parent Update Request
 */
export interface ParentUpdate {
  firstName?: string;

  lastName?: string;

  email?: string;

  phone?: string;

  occupation?: string;

  company?: string;

  workPhone?: string;

  preferredLanguage?: string;

  emergencyContact?: string;

  profileImage?: string;

  notes?: string;
}

/**
 * Parent Dashboard Statistics
 */
export interface ParentStatistics {
  totalChildren: number;

  totalAttendance: number;

  averageAttendance: number;

  totalAssignments: number;

  completedAssignments: number;

  pendingAssignments: number;

  totalFeesPaid: number;

  remainingFees: number;

  unreadNotifications: number;
}

/**
 * Parent Search Filter
 */
export interface ParentFilter {
  keyword?: string;

  relationship?: ParentRelationship;

  occupation?: string;

  status?: UserStatus;
}