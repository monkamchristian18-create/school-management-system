export const environment = {
  /**
   * Production mode
   */
  production: false,

  /**
   * Backend API URL
   * Change this according to your backend server.
   *
   * Spring Boot Example:
   * http://localhost:8080/api
   *
   * Laravel Example:
   * http://localhost:8000/api
   */
  apiUrl: 'http://localhost:8080/api',

  /**
   * Application Name
   */
  appName: 'School Management System',

  /**
   * Application Version
   */
  version: '1.0.0',

  /**
   * Use Mock Services
   * true  -> Angular Mock Services
   * false -> Real Backend API
   */
  useMock: true,

  /**
   * Request timeout (milliseconds)
   */
  requestTimeout: 30000,

  /**
   * Authentication
   */
  auth: {
    tokenKey: 'sms_token',
    refreshTokenKey: 'sms_refresh_token'
  },

  /**
   * Pagination
   */
  pagination: {
    defaultPage: 0,
    defaultSize: 10,
    pageSizeOptions: [5, 10, 20, 50, 100]
  },

  /**
   * Date Format
   */
  dateFormat: 'yyyy-MM-dd',

  /**
   * Currency
   */
  currency: 'XAF',

  /**
   * Upload Settings
   */
  upload: {
    maxFileSize: 5242880, // 5 MB
    allowedExtensions: [
      'pdf',
      'png',
      'jpg',
      'jpeg',
      'doc',
      'docx'
    ]
  },

  /**
   * Dashboard
   */
  dashboard: {
    refreshInterval: 30000
  }
};