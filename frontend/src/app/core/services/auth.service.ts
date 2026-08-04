import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';

import { User, UserRole } from '../models/user.model';


/**
 * Login Request
 */
export interface LoginRequest {

  email: string;

  password: string;

}


/**
 * Register Request
 */
export interface RegisterRequest {

  firstName: string;

  lastName: string;

  email: string;

  phone: string;

  username: string;

  password: string;

  role: UserRole;

}


/**
 * Authentication Response
 */
export interface AuthResponse {

  token: string;

  refreshToken?: string;

  user: User;

}


/**
 * Auth Service
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'http://localhost:3000/api/auth';


  private currentUserSubject =
    new BehaviorSubject<User | null>(this.getUserFromStorage());


  public currentUser$ =
    this.currentUserSubject.asObservable();



  constructor(
    private http: HttpClient
  ) {}



  /**
   * Login User
   */
  login(
    credentials: LoginRequest
  ): Observable<AuthResponse> {


    return this.http
      .post<AuthResponse>(
        `${this.apiUrl}/login`,
        credentials
      )
      .pipe(

        tap(response => {

          this.saveAuthentication(response);

        })

      );

  }



  /**
   * Register New User
   */
  register(
    data: RegisterRequest
  ): Observable<AuthResponse> {


    return this.http
      .post<AuthResponse>(
        `${this.apiUrl}/register`,
        data
      )
      .pipe(

        tap(response => {

          this.saveAuthentication(response);

        })

      );

  }



  /**
   * Logout User
   */
  logout(): void {


    localStorage.removeItem('token');

    localStorage.removeItem('refreshToken');

    localStorage.removeItem('user');


    this.currentUserSubject.next(null);


  }




  /**
   * Get Current User
   */
  getCurrentUser(): User | null {


    return this.currentUserSubject.value;


  }




  /**
   * Check If User Is Logged In
   */
  isAuthenticated(): boolean {


    const token =
      localStorage.getItem('token');


    return !!token;


  }




  /**
   * Get Authentication Token
   */
  getToken(): string | null {


    return localStorage.getItem('token');


  }




  /**
   * Save Authentication Data
   */
  private saveAuthentication(
    response: AuthResponse
  ): void {


    localStorage.setItem(
      'token',
      response.token
    );


    if(response.refreshToken){

      localStorage.setItem(
        'refreshToken',
        response.refreshToken
      );

    }


    localStorage.setItem(
      'user',
      JSON.stringify(response.user)
    );


    this.currentUserSubject
      .next(response.user);


  }




  /**
   * Get User From Local Storage
   */
  private getUserFromStorage(): User | null {


    const user =
      localStorage.getItem('user');


    if(!user){

      return null;

    }


    return JSON.parse(user);


  }




  /**
   * Check User Role
   */
  hasRole(
    role: UserRole
  ): boolean {


    const user =
      this.getCurrentUser();


    if(!user){

      return false;

    }


    return user.role === role;


  }




  /**
   * Check Multiple Roles
   */
  hasAnyRole(
    roles: UserRole[]
  ): boolean {


    const user =
      this.getCurrentUser();


    if(!user){

      return false;

    }


    return roles.includes(
      user.role
    );


  }




  /**
   * Get User ID
   */
  getUserId(): number | null {


    const user =
      this.getCurrentUser();


    return user ? user.id : null;


  }



}