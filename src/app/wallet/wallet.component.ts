import { Component, OnInit } from '@angular/core';
import {CookiesService} from '../cookies.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WalletService} from '../wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  user:any;
  loggedin:boolean;
  balance:any;

  constructor(private cookies: CookiesService,private modalService: NgbModal, private walletservice : WalletService) {
    if (this.cookies.getCookie('usr') != '') {
      this.user = (JSON.parse(this.cookies.getCookie('usr')));
      if (this.user.ID > 0) {
        this.loggedin = true;
      }
    }
  }

  ngOnInit() {
  this.walletservice.auth(this.user)
      .subscribe(user => {
this.balance=user
      });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
