ndpoints · TS
/**
 * Centralisation des routes API.
 * Modifier BASE_URL selon l'environnement (voir environment.ts / environment.prod.ts).
 */
 
export const BASE_URL = '/api/v1';
 
export const API_ENDPOINTS = {
  auth: {
    login: `${BASE_URL}/auth/login`,
    logout: `${BASE_URL}/auth/logout`,
    refresh: `${BASE_URL}/auth/refresh`,
    forgotPassword: `${BASE_URL}/auth/forgot-password`,
    resetPassword: `${BASE_URL}/auth/reset-password`,
    me: `${BASE_URL}/auth/me`
  },
 
  students: {
    base: `${BASE_URL}/students`,
    byId: (id: string | number) => `${BASE_URL}/students/${id}`,
    byClass: (classId: string | number) => `${BASE_URL}/classes/${classId}/students`,
    grades: (id: string | number) => `${BASE_URL}/students/${id}/grades`,
    attendance: (id: string | number) => `${BASE_URL}/students/${id}/attendance`
  },
 
  teachers: {
    base: `${BASE_URL}/teachers`,
    byId: (id: string | number) => `${BASE_URL}/teachers/${id}`,
    classes: (id: string | number) => `${BASE_URL}/teachers/${id}/classes`
  },
 
  classes: {
    base: `${BASE_URL}/classes`,
    byId: (id: string | number) => `${BASE_URL}/classes/${id}`,
    timetable: (id: string | number) => `${BASE_URL}/classes/${id}/timetable`
  },
 
  grades: {
    base: `${BASE_URL}/grades`,
    byId: (id: string | number) => `${BASE_URL}/grades/${id}`,
    bulk: `${BASE_URL}/grades/bulk`
  },
 
  attendance: {
    base: `${BASE_URL}/attendance`,
    byClass: (classId: string | number, date: string) =>
      `${BASE_URL}/classes/${classId}/attendance?date=${date}`
  },
 
  fees: {
    base: `${BASE_URL}/fees`,
    byStudent: (studentId: string | number) => `${BASE_URL}/students/${studentId}/fees`,
    payments: `${BASE_URL}/fees/payments`
  },
 
  library: {
    books: `${BASE_URL}/library/books`,
    loans: `${BASE_URL}/library/loans`,
    byId: (id: string | number) => `${BASE_URL}/library/books/${id}`
  },
 
  users: {
    base: `${BASE_URL}/users`,
    byId: (id: string | number) => `${BASE_URL}/users/${id}`
  }
};