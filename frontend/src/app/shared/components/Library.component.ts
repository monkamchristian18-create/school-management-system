
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { LibraryService } from '../../../core/services/library.service';
import { Book } from '../../../core/models/library.model';
import { NotificationService } from '../../../core/services/notification.service';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';
import { extractErrorMessage } from '../../../shared/utils/http-error.util';
 
@Component({
  selector: 'app-admin-library',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  template: `
    <h1>Bibliothèque</h1>
 
    <div *ngIf="loading">Chargement...</div>
 
    <app-data-table
      *ngIf="!loading"
      [columns]="columns"
      [rows]="books"
      [showActions]="true"
      (deleteClick)="onDelete($event)"
    ></app-data-table>
  `
})
export class LibraryComponent implements OnInit {
  private libraryService = inject(LibraryService);
  private notificationService = inject(NotificationService);
 
  books: Book[] = [];
  loading = true;
 
  columns: TableColumn<Book>[] = [
    { key: 'title', label: 'Titre' },
    { key: 'author', label: 'Auteur' },
    { key: 'isbn', label: 'ISBN' },
    {
      key: 'availableCopies',
      label: 'Disponibles',
      format: (v, row) => `${v} / ${row.totalCopies}`
    }
  ];
 
  ngOnInit(): void {
    this.load();
  }
 
  load(): void {
    this.loading = true;
    this.libraryService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.loading = false;
      },
      error: (err) => {
        this.notificationService.error(extractErrorMessage(err, 'Impossible de charger la bibliothèque.'));
        this.loading = false;
      }
    });
  }
 
  onDelete(book: Book): void {
    if (!confirm(`Supprimer le livre "${book.title}" ?`)) {
      return;
    }
    this.libraryService.deleteBook(book.id).subscribe({
      next: () => {
        this.notificationService.success('Livre supprimé.');
        this.load();
      },
      error: (err) => this.notificationService.error(extractErrorMessage(err, 'Échec de la suppression.'))
    });
  }
}