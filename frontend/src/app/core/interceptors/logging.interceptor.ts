import {
  HttpInterceptorFn,
  HttpResponse
} from '@angular/common/http';

import { tap } from 'rxjs/operators';

export const loggingInterceptor: HttpInterceptorFn = (
  request,
  next
) => {

  const started = Date.now();

  console.group('HTTP Request');

  console.log('Method:', request.method);

  console.log('URL:', request.url);

  console.log('Body:', request.body);

  console.groupEnd();

  return next(request).pipe(

    tap({

      next: (event) => {

        if (event instanceof HttpResponse) {

          console.group('HTTP Response');

          console.log('Status:', event.status);

          console.log('URL:', request.url);

          console.log(
            'Time:',
            `${Date.now() - started} ms`
          );

          console.log('Response:', event.body);

          console.groupEnd();

        }

      },

      error: (error) => {

        console.group('HTTP Error');

        console.error('URL:', request.url);

        console.error('Status:', error.status);

        console.error(error);

        console.groupEnd();

      }

    })

  );

}