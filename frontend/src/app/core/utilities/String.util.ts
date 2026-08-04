/**
 * Fonctions utilitaires pour la manipulation des chaînes de caractères.
 */
 
/**
 * Met en majuscule la première lettre.
 */
export function capitalize(value: string): string {
  if (!value) {
    return '';
  }
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
 
/**
 * Met en majuscule la première lettre de chaque mot.
 * Utile pour formater les noms/prénoms d'élèves.
 */
export function toTitleCase(value: string): string {
  if (!value) {
    return '';
  }
  return value
    .trim()
    .split(/\s+/)
    .map((word) => capitalize(word))
    .join(' ');
}
 
/**
 * Construit les initiales à partir d'un prénom et d'un nom (ex: "Jean Dupont" -> "JD").
 */
export function getInitials(firstName: string, lastName: string): string {
  const first = firstName?.trim().charAt(0).toUpperCase() ?? '';
  const last = lastName?.trim().charAt(0).toUpperCase() ?? '';
  return `${first}${last}`;
}
 
/**
 * Tronque une chaîne à une longueur maximale en ajoutant '...' si nécessaire.
 */
export function truncate(value: string, maxLength: number): string {
  if (!value || value.length <= maxLength) {
    return value ?? '';
  }
  return `${value.slice(0, maxLength).trimEnd()}...`;
}
 
/**
 * Génère un matricule élève simple (ex: 'STU-2026-0042').
 */
export function generateStudentMatricule(sequenceNumber: number, year: number = new Date().getFullYear()): string {
  const padded = String(sequenceNumber).padStart(4, '0');
  return `STU-${year}-${padded}`;
}
 
/**
 * Retire les accents d'une chaîne (utile pour recherche/tri insensible aux accents).
 */
export function removeAccents(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
 
/**
 * Slugifie une chaîne (ex: pour générer un identifiant de classe à partir de son nom).
 */
export function slugify(value: string): string {
  return removeAccents(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
 
/**
 * Masque partiellement un email pour affichage (ex: "j***@mail.com").
 */
export function maskEmail(email: string): string {
  const [localPart, domain] = email.split('@');
  if (!domain) {
    return email;
  }
  const visible = localPart.charAt(0);
  return `${visible}${'*'.repeat(Math.max(localPart.length - 1, 1))}@${domain}`;
}
 