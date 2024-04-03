import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private _authService: AuthService, private _router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('admin@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      'password': new FormControl('qwer1234', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      ]),
    });

    if (this._authService.isLogged()) {
      this._router.navigate(['admin']);
    }
  }

  loginSend(): void {
    this._authService.loging(this.loginForm.value).subscribe({
      next: () => { this._router.navigate(['admin']) },
      error: (err) => { alert( err ) }
    })
  }
}
