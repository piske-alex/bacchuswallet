import {Component, Input, OnInit} from '@angular/core';
import {KYCService} from '../kyc.service';
import {User} from '../login.service';
import {CookiesService} from '../cookies.service';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KYCComponent implements OnInit {


  @Input() name
  @Input() age
  @Input() idnum
  @Input() country
  step1 = true
  step2:boolean
  user:User
  newusr:any
  constructor(private kycservice: KYCService, private cookies: CookiesService) {
    if (this.cookies.getCookie('usr') != '') {
      this.user = (JSON.parse(this.cookies.getCookie('usr')));
    }
  }

  ngOnInit() {

  }

  public reg(): void {

    // console.log('clicked');
    this.kycservice.auth(this.user.APIKey, this.name.trim() ,this.idnum.trim(), this.country.trim(), this.age)
      .subscribe(user => {
        this.newusr = user;
        location.reload();
      });
  }

}
