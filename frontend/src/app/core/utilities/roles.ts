export enum Role {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  PARENT = 'PARENT',
  ACCOUNTANT = 'ACCOUNTANT',
  LIBRARIAN = 'LIBRARIAN'
}
 
/**
 * Libellés lisibles pour affichage dans l'UI.
 */
export const ROLE_LABELS: Record<Role, string> = {
  [Role.ADMIN]: 'Administrateur',
  [Role.TEACHER]: 'Enseignant',
  [Role.STUDENT]: 'Élève',
  [Role.PARENT]: 'Parent',
  [Role.ACCOUNTANT]: 'Comptable',
  [Role.LIBRARIAN]: 'Bibliothécaire'
};
 
/** Rôles ayant accès au back-office administratif. */
export const ADMIN_ROLES: Role[] = [Role.ADMIN];
 
/** Rôles ayant accès à la gestion pédagogique (notes, présences, classes). */
export const STAFF_ROLES: Role[] = [Role.ADMIN, Role.TEACHER];
 
export function isValidRole(value: string): value is Role {
  return Object.values(Role).includes(value as Role);
}