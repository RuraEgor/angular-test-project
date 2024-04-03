import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, Observable, of, tap } from 'rxjs';
import { IUser } from '../models/IUser';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {
  constructor(private _usersService: UsersService, private _router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    return this._usersService.getPerson(route.params?.['id']).pipe(
      delay(1000),
      tap( el => {
        if (el == null) {
          this._router.navigate(['admin/contacts']);
        }
      }),
      catchError( () => {
        this._router.navigate(['admin/contacts']);
        return EMPTY;
      })
    );
  }
}
