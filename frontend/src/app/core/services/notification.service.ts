import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import {
  Notification,
  NotificationFilter,
  NotificationStatus,
  CreateNotificationRequest
}
from '../models/notification.model';



/**
 * Notification Service
 */
@Injectable({
  providedIn:'root'
})
export class NotificationService {



  private apiUrl =
    'http://localhost:3000/api/notifications';




  constructor(
    private http: HttpClient
  ) {}





  /**
   * Get User Notifications
   */
  getNotifications(
    userId:number
  ): Observable<Notification[]> {


    return this.http.get<Notification[]>(
      `${this.apiUrl}/user/${userId}`
    );

  }




  /**
   * Get Notifications With Filter
   */
  filterNotifications(
    filter:NotificationFilter
  ):Observable<Notification[]> {


    return this.http.post<Notification[]>(
      `${this.apiUrl}/filter`,
      filter
    );

  }





  /**
   * Get Notification By ID
   */
  getNotification(
    id:number
  ):Observable<Notification>{


    return this.http.get<Notification>(
      `${this.apiUrl}/${id}`
    );

  }





  /**
   * Create Notification
   */
  createNotification(
    data:CreateNotificationRequest
  ):Observable<Notification>{


    return this.http.post<Notification>(
      this.apiUrl,
      data
    );

  }





  /**
   * Mark Notification As Read
   */
  markAsRead(
    id:number
  ):Observable<Notification>{


    return this.http.patch<Notification>(
      `${this.apiUrl}/${id}/read`,
      {
        status: NotificationStatus.READ,
        readAt:new Date()
      }
    );

  }





  /**
   * Mark All Notifications As Read
   */
  markAllAsRead(
    userId:number
  ):Observable<void>{


    return this.http.patch<void>(
      `${this.apiUrl}/user/${userId}/read-all`,
      {}
    );

  }





  /**
   * Delete Notification
   */
  deleteNotification(
    id:number
  ):Observable<void>{


    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );

  }





  /**
   * Count Unread Notifications
   */
  getUnreadCount(
    userId:number
  ):Observable<number>{


    return this.http.get<number>(
      `${this.apiUrl}/user/${userId}/unread-count`
    );

  }



}