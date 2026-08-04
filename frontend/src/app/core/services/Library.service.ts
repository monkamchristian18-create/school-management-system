
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
import { API_ENDPOINTS } from '../../api-endpoints';
import { Book, Loan, CreateBookPayload, CreateLoanPayload } from '../models/library.model';
 
@Injectable({ providedIn: 'root' })
export class LibraryService {
  private http = inject(HttpClient);
 
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(API_ENDPOINTS.library.books);
  }
 
  addBook(payload: CreateBookPayload): Observable<Book> {
    return this.http.post<Book>(API_ENDPOINTS.library.books, payload);
  }
 
  updateBook(id: string, payload: Partial<CreateBookPayload>): Observable<Book> {
    return this.http.patch<Book>(API_ENDPOINTS.library.byId(id), payload);
  }
 
  deleteBook(id: string): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.library.byId(id));
  }
 
  getLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(API_ENDPOINTS.library.loans);
  }
 
  /** Emprunt d'un livre. Le backend doit refuser si availableCopies === 0. */
  borrowBook(payload: CreateLoanPayload): Observable<Loan> {
    return this.http.post<Loan>(API_ENDPOINTS.library.loans, payload);
  }
 
  returnBook(loanId: string): Observable<Loan> {
    return this.http.patch<Loan>(`${API_ENDPOINTS.library.loans}/${loanId}/return`, {});
  }
}