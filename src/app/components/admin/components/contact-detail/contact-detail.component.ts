import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IUser } from '../../models/IUser';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  user!: Observable<IUser>;
  id!: number;

  constructor(private _usersService: UsersService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = this._activatedRoute.data.pipe( map( data => data?.['user']));
  }
}
