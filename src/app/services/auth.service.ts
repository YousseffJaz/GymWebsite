import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; // URL de ton backend

  constructor(private http: HttpClient) {}

  // Appel pour l'inscription
  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  // Appel pour la connexion
  login(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, userData);
  }
}
