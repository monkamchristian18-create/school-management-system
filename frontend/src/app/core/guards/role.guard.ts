import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from '../services/auth.service';
import { UserRole } from '../models/user.model';

export const roleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if user is authenticated
  if (!authService.isAuthenticated()) {
    router.navigate(['/auth/login']);
    return false;
  }

  // Roles allowed for this route
  const allowedRoles =
    route.data['roles'] as UserRole[];

  if (!allowedRoles || allowedRoles.length === 0) {
    return true;
  }

  // Check if current user has one of the allowed roles
  if (authService.hasAnyRole(allowedRoles)) {
    return true;
  }

  router.navigate(['/unauthorized']);

  return false;

};