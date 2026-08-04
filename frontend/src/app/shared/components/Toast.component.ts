
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { NotificationService } from '../../../core/services/notification.service';
 
/**
 * À placer une seule fois, dans ShellComponent (ou AppComponent), pour
 * afficher les notifications émises via NotificationService partout
 * ailleurs dans l'application.
 */
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      <div
        *ngFor="let notification of notificationService.notifications$ | async"
        class="toast toast-{{ notification.type }}"
      >
        <span>{{ notification.message }}</span>
        <button type="button" (click)="notificationService.dismiss(notification.id)" aria-label="Fermer">
          ×
        </button>
      </div>
    </div>
  `
})
export class ToastComponent {
  notificationService = inject(NotificationService);
}