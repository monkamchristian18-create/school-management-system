
export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  totalCopies: number;
  availableCopies: number;
}
 
export interface Loan {
  id: string;
  bookId: string;
  studentId: string;
  borrowedAt: string;
  dueDate: string;
  returnedAt?: string;
}
 
export interface CreateBookPayload {
  title: string;
  author: string;
  isbn: string;
  totalCopies: number;
}
 
export interface CreateLoanPayload {
  bookId: string;
  studentId: string;
  dueDate: string;
}