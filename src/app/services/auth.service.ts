import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:1337/api/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ success: boolean }> {
    const loginData = { username, password };

    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`, loginData)
      .pipe(
        map((response) => {
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            return { success: true };
          } else {
            return { success: false };
          }
        }),
        catchError((error) => {
          console.error('Login error', error);
          return of({ success: false });
        })
      );
  }

  register(
    fullName: string,
    email: string,
    username: string,
    password: string
  ): Observable<{ success: boolean }> {
    const registerData = { fullName, email, username, password };

    return this.http
      .post<{ token: string }>(`${this.apiUrl}/register`, registerData)
      .pipe(
        map((response) => {
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            return { success: true };
          } else {
            return { success: false };
          }
        }),
        catchError((error) => {
          console.error('Registration error', error);
          return of({ success: false });
        })
      );
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
