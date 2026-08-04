import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
 
export type ButtonVariant = 'primary' | 'secondary' | 'danger';
 
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [type]="type" [disabled]="disabled || loading" [class]="'btn btn-' + variant">
      <span *ngIf="loading">...</span>
      <ng-content *ngIf="!loading"></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() loading = false;
}
 