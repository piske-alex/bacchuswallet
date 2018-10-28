import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HistoryService} from '../history.service';
import {CookiesService} from '../cookies.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historylist: any;
  user: any;
  loggedin: boolean;

  constructor(private http: HttpClient, private historyservice: HistoryService, private cookies: CookiesService) {
    if (this.cookies.getCookie('usr') != '') {
      this.user = (JSON.parse(this.cookies.getCookie('usr')));
      if (this.user.ID > 0) {
        this.loggedin = true;
      }
    }
  }

  ngOnInit() {

    this.historyservice.auth(this.user.APIKey)
      .subscribe(us => {
this.historylist = us
      });
  }

}
