/**
 * Constantes globales de l'application.
 */
 
export const APP_NAME = 'School Management System';
 
/** Clé utilisée pour stocker le token JWT (voir storage.util.ts). */
export const AUTH_TOKEN_KEY = 'sms_auth_token';
export const REFRESH_TOKEN_KEY = 'sms_refresh_token';
export const CURRENT_USER_KEY = 'sms_current_user';
 
/** Pagination par défaut pour les listes (élèves, enseignants, classes...). */
export const DEFAULT_PAGE_SIZE = 20;
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
 
/** Format d'affichage des dates dans toute l'application. */
export const DATE_DISPLAY_FORMAT = 'dd/MM/yyyy';
export const DATETIME_DISPLAY_FORMAT = 'dd/MM/yyyy HH:mm';
 
/** Note de passage par défaut (sur 20), utilisée si non configurée par établissement. */
export const DEFAULT_PASSING_GRADE = 10;
export const MAX_GRADE = 20;
export const MIN_GRADE = 0;
 
/** Statuts de présence possibles. */
export enum AttendanceStatus {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
  LATE = 'LATE',
  EXCUSED = 'EXCUSED'
}
 
/** Statuts de paiement des frais scolaires. */
export enum FeeStatus {
  PAID = 'PAID',
  PENDING = 'PENDING',
  OVERDUE = 'OVERDUE',
  PARTIALLY_PAID = 'PARTIALLY_PAID'
}
 
/** Jours de la semaine utilisés pour l'emploi du temps. */
export const WEEK_DAYS = [
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi'
] as const;
 
/** Délai (ms) avant de considérer une requête comme "lente" dans l'UI. */
export const SLOW_REQUEST_THRESHOLD_MS = 3000;
 