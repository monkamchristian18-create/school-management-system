import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Student } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private api: ApiService) {}

  list() {
    return this.api.get<Student[]>('/students');
  }

  get(id: number) {
    return this.api.get<Student>(`/students/${id}`);
  }

  create(student: Student) {
    return this.api.post<Student>('/students', student);
  }

  update(id: number, student: Student) {
    return this.api.put<Student>(`/students/${id}`, student);
  }

  delete(id: number) {
    return this.api.delete<void>(`/students/${id}`);
  }

}