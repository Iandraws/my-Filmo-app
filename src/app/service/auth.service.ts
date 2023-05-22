import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://demo.parklolo.com/api';
  private localStorageKey = 'accessToken';

  constructor(private http: HttpClient) { }

  login(credentials: { identifier: string, password: string }): Observable<Object> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Object>(`${this.apiUrl}/login`, credentials, { headers });
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
}
