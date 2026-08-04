/**
 * Fonctions utilitaires pour la manipulation des dates.
 * Utilise des dates natives (pas de dépendance externe type date-fns/moment).
 */
 
/**
 * Formate une date en 'dd/MM/yyyy'.
 */
export function formatDate(date: Date | string | null | undefined): string {
  if (!date) {
    return '';
  }
  const d = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(d.getTime())) {
    return '';
  }
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}
 
/**
 * Formate une date + heure en 'dd/MM/yyyy HH:mm'.
 */
export function formatDateTime(date: Date | string | null | undefined): string {
  if (!date) {
    return '';
  }
  const d = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(d.getTime())) {
    return '';
  }
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${formatDate(d)} ${hours}:${minutes}`;
}
 
/**
 * Calcule l'âge en années à partir d'une date de naissance.
 */
export function calculateAge(birthDate: Date | string): number {
  const d = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
  const today = new Date();
  let age = today.getFullYear() - d.getFullYear();
  const monthDiff = today.getMonth() - d.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < d.getDate())) {
    age--;
  }
  return age;
}
 
/**
 * Vérifie si une date correspond à aujourd'hui.
 */
export function isToday(date: Date | string): boolean {
  const d = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  return (
    d.getFullYear() === today.getFullYear() &&
    d.getMonth() === today.getMonth() &&
    d.getDate() === today.getDate()
  );
}
 
/**
 * Retourne le début (00:00:00) et la fin (23:59:59) d'une journée donnée.
 * Utile pour filtrer les présences ou paiements par jour.
 */
export function getDayRange(date: Date | string): { start: Date; end: Date } {
  const d = typeof date === 'string' ? new Date(date) : new Date(date.getTime());
  const start = new Date(d);
  start.setHours(0, 0, 0, 0);
  const end = new Date(d);
  end.setHours(23, 59, 59, 999);
  return { start, end };
}
 
/**
 * Retourne le libellé de l'année scolaire (ex: '2025-2026') pour une date donnée.
 * Convention : l'année scolaire commence en septembre.
 */
export function getSchoolYearLabel(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0 = janvier
  if (month >= 8) {
    // septembre à décembre -> année N / N+1
    return `${year}-${year + 1}`;
  }
  // janvier à août -> année N-1 / N
  return `${year - 1}-${year}`;
}
 
/**
 * Ajoute un nombre de jours à une date (n peut être négatif).
 */
export function addDays(date: Date | string, n: number): Date {
  const d = typeof date === 'string' ? new Date(date) : new Date(date.getTime());
  d.setDate(d.getDate() + n);
  return d;
}
 
/**
 * Compare deux dates en ignorant l'heure. Retourne -1, 0 ou 1.
 */
export function compareDatesOnly(a: Date | string, b: Date | string): number {
  const da = typeof a === 'string' ? new Date(a) : a;
  const db = typeof b === 'string' ? new Date(b) : b;
  const ta = new Date(da.getFullYear(), da.getMonth(), da.getDate()).getTime();
  const tb = new Date(db.getFullYear(), db.getMonth(), db.getDate()).getTime();
  return ta === tb ? 0 : ta < tb ? -1 : 1;
}
 