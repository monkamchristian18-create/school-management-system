
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" *ngIf="isOpen" (click)="onBackdropClick()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <header class="modal-header">
          <h2>{{ title }}</h2>
          <button type="button" (click)="close()" aria-label="Fermer">×</button>
        </header>
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() closeOnBackdropClick = true;
 
  @Output() closed = new EventEmitter<void>();
 
  onBackdropClick(): void {
    if (this.closeOnBackdropClick) {
      this.close();
    }
  }
 
  close(): void {
    this.closed.emit();
  }
}