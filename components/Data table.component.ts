import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
 
export interface TableColumn<T> {
  key: keyof T & string;
  label: string;
  format?: (value: unknown, row: T) => string;
}
 
@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table class="data-table">
      <thead>
        <tr>
          <th *ngFor="let col of columns">{{ col.label }}</th>
          <th *ngIf="showActions"></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of rows" (click)="rowClick.emit(row)">
          <td *ngFor="let col of columns">
            {{ col.format ? col.format(row[col.key], row) : row[col.key] }}
          </td>
          <td *ngIf="showActions">
            <button type="button" (click)="editClick.emit(row); $event.stopPropagation()">Modifier</button>
            <button type="button" (click)="deleteClick.emit(row); $event.stopPropagation()">Supprimer</button>
          </td>
        </tr>
        <tr *ngIf="rows.length === 0">
          <td [attr.colspan]="columns.length + (showActions ? 1 : 0)">Aucune donnée.</td>
        </tr>
      </tbody>
    </table>
  `
})
export class DataTableComponent<T extends Record<string, unknown>> {
  @Input() columns: TableColumn<T>[] = [];
  @Input() rows: T[] = [];
  @Input() showActions = false;
 
  @Output() rowClick = new EventEmitter<T>();
  @Output() editClick = new EventEmitter<T>();
  @Output() deleteClick = new EventEmitter<T>();
} 