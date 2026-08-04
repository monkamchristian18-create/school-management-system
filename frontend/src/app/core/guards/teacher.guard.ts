import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

import { UserRole } from '../models/user.model';


export const teacherGuard: CanActivateFn = () => {

  const authService = inject(AuthService);

  const router = inject(Router);

  if (
    authService.isAuthenticated() &&
    authService.hasRole(UserRole.TEACHER)
  ) {

    return true;

  }

  router.navigate(['/unauthorized']);

  return false;

};