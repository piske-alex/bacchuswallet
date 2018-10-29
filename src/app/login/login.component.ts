import {Component, Input, OnInit} from '@angular/core';
import {AuthData, LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  loggedin: boolean;
  registerscreen: boolean;
  faillogin: boolean;
  errmsh: string;
  @Input()
  authData: AuthData = {
    email: '',
    password: '',
    otp: ''
  };
  

  public returnloginstatus(): boolean {
    return this.loggedin;
  }

  public add(): void {

    // console.log('clicked');
    this.loginService.auth(this.authData.email.trim(), this.authData.password.trim(), "990990")
      .subscribe(user => {
        if (user.ID > 0) {
          console.log('Login Successful');
          location.reload();
        } else {
          this.faillogin = true;
          //this.errmsh = user.Name;
        }
      });
  }

  ngOnInit(): void {
  }

}
