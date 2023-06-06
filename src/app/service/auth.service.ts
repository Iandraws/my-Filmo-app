import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://ibrahim.parklolo.com/api';
  private localStorageKey = 'accessToken';
  
  constructor(private http: HttpClient) {}

  login(credentials: {
    identifier: string;
    password: string;
  }): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Object>(`${this.apiUrl}/login`, credentials, {
      headers,
    });
  }

  saveAccessToken(token: string): void {
    localStorage.setItem(this.localStorageKey, token);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.localStorageKey);
  }

  clearAccessToken(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  register(credentials: {
    username: string;
    email: string;
    displayName: string;
    password: string;
    active: boolean;
    isAdmin: boolean;
  }): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODYwNDQxMjksImV4cCI6MTY4NjA0NzcyOSwiY2xhaW0iOiJjYjEwODU0YS1jMWM3LTQ4YTktOTAxMC03NTE0NGI0YzJjOGUiLCJlbXBsb3llZUlkIjoiYjI4NGVhYmUtZjFjYy00YjE0LTk1YTktN2FmZDhkNTRmODhhIiwic3ViZG9tYWluIjoiaWJyYWhpbSJ9.By18uuawRX-TrXwnubug3VnqNSaAOW_ZwwbPHLrfcgY`,


    });

    return this.http.post<Object>(`${this.apiUrl}/employees`, credentials, 
    {headers});
  }
}
