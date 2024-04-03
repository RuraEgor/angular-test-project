import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string = 'qwerasdfzxcv38sdfgbe345sdfssdfsd';

  constructor(private _router: Router) {}

  private _setToken(token: string) {
    localStorage.setItem('token', token);
  }

  private _getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  isLogged(): boolean {
    if (this._getToken && this._getToken() === this._token) {
      return true;
    }
    return false;
  }

  loging(userInfo: {email: string, password: string}): Observable<string | boolean> {
    if (userInfo.email === 'admin@gmail.com' && userInfo.password === 'qwer1234') {
      this._setToken(this._token);
      return of(true);
    }
    return throwError( () => new Error('Failed Login'));
  }

  logout(): void {
    this._router.navigate(['login']);
  }
}
