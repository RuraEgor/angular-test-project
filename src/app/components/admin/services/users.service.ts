import { Injectable } from '@angular/core';
import { catchError, delay, EMPTY, Observable, tap } from 'rxjs';
import { IUser } from '../models/IUser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }

  getPersonalList(): Observable<IUser[]> {
    return this._http.get<IUser[]>('https://fakestoreapi.com/users?limit=10');
  }

  getPerson(id: number): Observable<IUser> {
    return this._http.get<IUser>(`https://fakestoreapi.com/users/${id}`);
  }
}
