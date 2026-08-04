/**
 * Announcement Audience
 */
export enum AnnouncementAudience {
  ALL = 'ALL',
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  PARENT = 'PARENT'
}

/**
 * Announcement Priority
 */
export enum AnnouncementPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}

/**
 * Announcement Status
 */
export enum AnnouncementStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED'
}

/**
 * Announcement
 */
export interface Announcement {

  id: number;

  title: string;

  message: string;

  audience: AnnouncementAudience;

  priority: AnnouncementPriority;

  status: AnnouncementStatus;

  publishedBy: number;

  publishDate: Date;

  expiryDate?: Date;

  attachmentUrl?: string;

  createdAt: Date;

  updatedAt: Date;

}

/**
 * Create Announcement Request
 */
export interface CreateAnnouncementRequest {

  title: string;

  message: string;

  audience: AnnouncementAudience;

  priority: AnnouncementPriority;

  publishDate: Date;

  expiryDate?: Date;

  attachmentUrl?: string;

}

/**
 * Update Announcement Request
 */
export interface UpdateAnnouncementRequest {

  title?: string;

  message?: string;

  audience?: AnnouncementAudience;

  priority?: AnnouncementPriority;

  publishDate?: Date;

  expiryDate?: Date;

  attachmentUrl?: string;

  status?: AnnouncementStatus;

}

/**
 * Announcement Statistics
 */
export interface AnnouncementStatistics {

  totalAnnouncements: number;

  publishedAnnouncements: number;

  draftAnnouncements: number;

  archivedAnnouncements: number;

}

/**
 * Announcement Filter
 */
export interface AnnouncementFilter {

  keyword?: string;

  audience?: AnnouncementAudience;

  priority?: AnnouncementPriority;

  status?: AnnouncementStatus;

  startDate?: Date;

  endDate?: Date;

}