/**
 * Notification Type
 */
export enum NotificationType {

  INFO = 'INFO',

  SUCCESS = 'SUCCESS',

  WARNING = 'WARNING',

  ERROR = 'ERROR'

}

/**
 * Notification Category
 */
export enum NotificationCategory {

  GENERAL = 'GENERAL',

  ATTENDANCE = 'ATTENDANCE',

  EXAM = 'EXAM',

  GRADE = 'GRADE',

  ASSIGNMENT = 'ASSIGNMENT',

  FEE = 'FEE',

  ANNOUNCEMENT = 'ANNOUNCEMENT'

}

/**
 * Notification Status
 */
export enum NotificationStatus {

  UNREAD = 'UNREAD',

  READ = 'READ'

}

/**
 * Notification
 */
export interface Notification {

  id: number;

  userId: number;

  title: string;

  message: string;

  type: NotificationType;

  category: NotificationCategory;

  status: NotificationStatus;

  actionUrl?: string;

  icon?: string;

  createdAt: Date;

  readAt?: Date;

}

/**
 * Create Notification Request
 */
export interface CreateNotificationRequest {

  userId: number;

  title: string;

  message: string;

  type: NotificationType;

  category: NotificationCategory;

  actionUrl?: string;

  icon?: string;

}

/**
 * Update Notification Request
 */
export interface UpdateNotificationRequest {

  status?: NotificationStatus;

  readAt?: Date;

}

/**
 * Notification Statistics
 */
export interface NotificationStatistics {

  totalNotifications: number;

  unreadNotifications: number;

  readNotifications: number;

}

/**
 * Notification Filter
 */
export interface NotificationFilter {

  userId?: number;

  category?: NotificationCategory;

  type?: NotificationType;

  status?: NotificationStatus;

  startDate?: Date;

  endDate?: Date;

}