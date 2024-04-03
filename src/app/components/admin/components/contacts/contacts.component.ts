import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { map, Observable } from 'rxjs';
import { IUser } from '../../models/IUser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public personalList!: Observable<IUser[]>;

  constructor(private _usersService: UsersService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.personalList = this._activatedRoute.data.pipe( map( data => data?.['users']) );
  }
}
