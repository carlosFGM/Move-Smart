import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000'; 

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertarUsuario`, userData);
  }

  login(correo: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correo, password });
  }

  getRutas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/rutas`); 
  }
}
