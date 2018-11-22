import { Component } from '@angular/core';
import {CookiesService} from './cookies.service';
import {LoginService} from './login.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedin = false;
  user: any;
  constructor(private translate: TranslateService, private cookies: CookiesService, private login:LoginService) {

    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    if (this.cookies.getCookie('usr') != '') {
      this.user = (JSON.parse(this.cookies.getCookie('usr')));
      if (this.user.ID > 0) {
        this.loggedin = true;
      }
    }//jhh
  }
  logout(){
    this.login.logout();
  }
  tset(lang){
    this.translate.use(lang);
  }
}
