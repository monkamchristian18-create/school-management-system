import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { environment } from '../environments/environment';

import { StudentService } from './core/services/student.service';
import { MockStudentService } from './core/services/mock-student.service';

export const appConfig: ApplicationConfig = {

  providers: [

    provideRouter(routes),

    provideHttpClient(),

    {
      provide: StudentService,
      useClass: environment.useMock
        ? MockStudentService
        : StudentService
    }

  ]

};