import { Component } from '@angular/core';
import {CookiesService} from './cookies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loggedin = false;
  user:any;
  constructor(private cookies: CookiesService){
    if (this.cookies.getCookie('usr') != '') {
      this.user = (JSON.parse(this.cookies.getCookie('usr')));
      if(this.user.ID>0){
        this.loggedin=true
      }
    }
  }
}
