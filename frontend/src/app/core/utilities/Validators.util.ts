import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
 
/**
 * Validateurs Angular réutilisables pour les formulaires du système
 * de gestion scolaire (inscription élève, création utilisateur, notes...).
 */
 
/**
 * Valide un numéro de téléphone (format simple, adaptable selon le pays ciblé).
 * Accepte des espaces, tirets et un préfixe international optionnel.
 */
export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const pattern = /^\+?[0-9]{1,4}?[-.\s]?(\(?\d{2,4}\)?[-.\s]?){2,4}\d{2,4}$/;
    return pattern.test(control.value.trim()) ? null : { invalidPhone: true };
  };
}
 
/**
 * Valide qu'une note est comprise entre min et max (par défaut 0-20).
 */
export function gradeRangeValidator(min = 0, max = 20): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value === null || control.value === undefined || control.value === '') {
      return null;
    }
    const value = Number(control.value);
    if (isNaN(value)) {
      return { notANumber: true };
    }
    if (value < min || value > max) {
      return { gradeOutOfRange: { min, max, actual: value } };
    }
    return null;
  };
}
 
/**
 * Valide qu'une date de naissance correspond à un âge plausible pour un élève
 * (par défaut entre 3 et 25 ans).
 */
export function birthDateValidator(minAge = 3, maxAge = 25): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const birthDate = new Date(control.value);
    if (isNaN(birthDate.getTime())) {
      return { invalidDate: true };
    }
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < minAge || age > maxAge) {
      return { ageOutOfRange: { minAge, maxAge, actual: age } };
    }
    return null;
  };
}
 
/**
 * Valide que deux champs (ex: mot de passe / confirmation) sont identiques.
 * À appliquer au niveau du FormGroup, pas d'un contrôle individuel.
 */
export function matchFieldsValidator(fieldA: string, fieldB: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const valueA = group.get(fieldA)?.value;
    const valueB = group.get(fieldB)?.value;
    if (valueA === undefined || valueB === undefined) {
      return null;
    }
    return valueA === valueB ? null : { fieldsMismatch: { fieldA, fieldB } };
  };
}
 
/**
 * Valide la robustesse d'un mot de passe :
 * au moins 8 caractères, une majuscule, une minuscule, un chiffre.
 */
export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const value: string = control.value;
    const errors: ValidationErrors = {};
    if (value.length < 8) {
      errors['minLength'] = true;
    }
    if (!/[A-Z]/.test(value)) {
      errors['requiresUppercase'] = true;
    }
    if (!/[a-z]/.test(value)) {
      errors['requiresLowercase'] = true;
    }
    if (!/[0-9]/.test(value)) {
      errors['requiresDigit'] = true;
    }
    return Object.keys(errors).length > 0 ? { weakPassword: errors } : null;
  };
}
 
/**
 * Valide un matricule élève au format 'STU-YYYY-NNNN'.
 */
export function studentMatriculeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const pattern = /^STU-\d{4}-\d{4}$/;
    return pattern.test(control.value) ? null : { invalidMatricule: true };
  };
}