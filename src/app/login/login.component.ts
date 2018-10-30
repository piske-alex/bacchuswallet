import {Component, Input, OnInit} from '@angular/core';
import {AuthData, LoginService} from '../login.service';
import {Router} from '@angular/router';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private regservice: RegisterService) {
    this.registerscreen=false;
  }

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
  @Input() emailreg
  @Input() phonereg
  @Input() areacode
  @Input() pwreg
  newusr
  

  public returnloginstatus(): boolean {
    return this.loggedin;
  }

  public add(): void {

    // console.log('clicked');
    this.loginService.auth(this.authData.email.trim().toLowerCase(), this.authData.password.trim(), '990993')
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

  public reg(): void {

    // console.log('clicked');
    this.regservice.auth(this.emailreg.trim().toLowerCase(), this.areacode.trim() + this.phonereg.trim(),this.pwreg.trim())
      .subscribe(user => {
        this.newusr=user
      });
  }

  ngOnInit(): void {
  }

}
