
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
export type NotificationType = 'success' | 'error' | 'info';
 
export interface Notification {
  id: number;
  type: NotificationType;
  message: string;
}
 
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private nextId = 1;
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);
 
  notifications$ = this.notificationsSubject.asObservable();
 
  success(message: string): void {
    this.push('success', message);
  }
 
  error(message: string): void {
    this.push('error', message);
  }
 
  info(message: string): void {
    this.push('info', message);
  }
 
  dismiss(id: number): void {
    this.notificationsSubject.next(this.notificationsSubject.value.filter((n) => n.id !== id));
  }
 
  private push(type: NotificationType, message: string): void {
    const notification: Notification = { id: this.nextId++, type, message };
    this.notificationsSubject.next([...this.notificationsSubject.value, notification]);
 
    // Auto-dismiss après 5s pour les succès/info ; les erreurs restent jusqu'à fermeture manuelle.
    if (type !== 'error') {
      setTimeout(() => this.dismiss(notification.id), 5000);
    }
  }
}