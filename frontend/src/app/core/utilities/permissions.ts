import { Role } from './Roles';
 
/**
 * Permissions atomiques utilisées dans l'application.
 */
export enum Permission {
  VIEW_STUDENTS = 'VIEW_STUDENTS',
  MANAGE_STUDENTS = 'MANAGE_STUDENTS',
  VIEW_TEACHERS = 'VIEW_TEACHERS',
  MANAGE_TEACHERS = 'MANAGE_TEACHERS',
  VIEW_CLASSES = 'VIEW_CLASSES',
  MANAGE_CLASSES = 'MANAGE_CLASSES',
  VIEW_GRADES = 'VIEW_GRADES',
  MANAGE_GRADES = 'MANAGE_GRADES',
  VIEW_ATTENDANCE = 'VIEW_ATTENDANCE',
  MANAGE_ATTENDANCE = 'MANAGE_ATTENDANCE',
  VIEW_TIMETABLE = 'VIEW_TIMETABLE',
  MANAGE_TIMETABLE = 'MANAGE_TIMETABLE',
  VIEW_FEES = 'VIEW_FEES',
  MANAGE_FEES = 'MANAGE_FEES',
  VIEW_LIBRARY = 'VIEW_LIBRARY',
  MANAGE_LIBRARY = 'MANAGE_LIBRARY',
  MANAGE_USERS = 'MANAGE_USERS',
  MANAGE_SETTINGS = 'MANAGE_SETTINGS'
}
 
/**
 * Table de correspondance rôle -> permissions accordées.
 */
export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  [Role.ADMIN]: Object.values(Permission),
 
  [Role.TEACHER]: [
    Permission.VIEW_STUDENTS,
    Permission.VIEW_CLASSES,
    Permission.VIEW_GRADES,
    Permission.MANAGE_GRADES,
    Permission.VIEW_ATTENDANCE,
    Permission.MANAGE_ATTENDANCE,
    Permission.VIEW_TIMETABLE
  ],
 
  [Role.STUDENT]: [
    Permission.VIEW_GRADES,
    Permission.VIEW_ATTENDANCE,
    Permission.VIEW_TIMETABLE,
    Permission.VIEW_LIBRARY
  ],
 
  [Role.PARENT]: [
    Permission.VIEW_GRADES,
    Permission.VIEW_ATTENDANCE,
    Permission.VIEW_TIMETABLE,
    Permission.VIEW_FEES
  ],
 
  [Role.ACCOUNTANT]: [
    Permission.VIEW_FEES,
    Permission.MANAGE_FEES,
    Permission.VIEW_STUDENTS
  ],
 
  [Role.LIBRARIAN]: [
    Permission.VIEW_LIBRARY,
    Permission.MANAGE_LIBRARY,
    Permission.VIEW_STUDENTS
  ]
};
 
/**
 * Vérifie si un rôle donné possède une permission donnée.
 */
export function hasPermission(role: Role, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}
 
/**
 * Vérifie si un rôle possède au moins une des permissions listées.
 */
export function hasAnyPermission(role: Role, permissions: Permission[]): boolean {
  return permissions.some((p) => hasPermission(role, p));
}
 
/**
 * Vérifie si un rôle possède toutes les permissions listées.
 */
export function hasAllPermissions(role: Role, permissions: Permission[]): boolean {
  return permissions.every((p) => hasPermission(role, p));
}