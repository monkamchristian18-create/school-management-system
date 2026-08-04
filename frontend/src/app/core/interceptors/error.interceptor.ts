import { inject } from '@angular/core';

import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import { Router } from '@angular/router';

import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (
  req,
  next
) => {

  const router = inject(Router);

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      switch (error.status) {

        case 400:

          console.error('Bad Request', error.error);

          break;

        case 401:

          localStorage.clear();

          router.navigate(['/auth/login']);

          break;

        case 403:

          router.navigate(['/unauthorized']);

          break;

        case 404:

          console.error('Resource Not Found');

          break;

        case 500:

          console.error('Internal Server Error');

          break;

        default:

          console.error('Unexpected Error', error);

      }

      return throwError(() => error);

    })

  );

};