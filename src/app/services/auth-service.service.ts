import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;

  // Método de autenticação simulado
  login(): Observable<boolean> {
    this.isAuthenticated = true;
    return of(true);
  }

  // Método para verificar se o usuário está autenticado
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  // Método para fazer logout
  logout(): void {
    this.isAuthenticated = false;
  }
}
