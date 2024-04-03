import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private showLoader!: Observable<boolean>;
  private hideLoader!: Observable<boolean>;

  isLoading!: Observable<boolean>;

  constructor(private _authService: AuthService, private _router: Router) {
  }

  logout(): void {
    this._authService.logout();
  }

  ngOnInit(): void {
    this.showLoader = this._router.events.pipe(
      filter( e => e instanceof ResolveStart),
      mapTo(true)
    );

    this.hideLoader = this._router.events.pipe(
      filter( e => e instanceof ResolveEnd),
      mapTo(false)
    );

    this.isLoading = merge(this.hideLoader, this.showLoader);
  }
}
