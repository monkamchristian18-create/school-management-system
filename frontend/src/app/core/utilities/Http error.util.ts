
import { HttpErrorResponse } from '@angular/common/http';
 
/**
 * Extrait un message d'erreur lisible d'une HttpErrorResponse.
 * Gère plusieurs formats courants de payload d'erreur backend
 * (NestJS { message }, Express { error }, ou texte brut).
 */
export function extractErrorMessage(error: unknown, fallback = 'Une erreur est survenue.'): string {
  if (!(error instanceof HttpErrorResponse)) {
    return fallback;
  }
 
  if (error.status === 0) {
    return 'Impossible de contacter le serveur. Vérifiez votre connexion.';
  }
 
  const body = error.error;
 
  if (typeof body === 'string' && body.trim().length > 0) {
    return body;
  }
 
  if (body && typeof body === 'object') {
    if (typeof body.message === 'string') {
      return body.message;
    }
    if (Array.isArray(body.message) && body.message.length > 0) {
      // Cas fréquent avec class-validator (NestJS) : message est un tableau de strings.
      return body.message.join(', ');
    }
    if (typeof body.error === 'string') {
      return body.error;
    }
  }
 
  return fallback;
}