import {Component, Input, OnInit} from '@angular/core';
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
  kycscreen:boolean
  @Input() size;
  @Input() dest;
  sendresult
  baccbalance

  constructor(private cookies: CookiesService,private modalService: NgbModal, private walletservice : WalletService) {
    if (this.cookies.getCookie('usr') != '') {
      this.user = (JSON.parse(this.cookies.getCookie('usr')));
      if (this.user.ID > 0 && this.user.Name) {
        this.loggedin = true;
      }else{
        this.kycscreen = true
      }
    }
  }

   myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput") as HTMLInputElement;

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

  ngOnInit() {
  this.walletservice.auth(this.user)
      .subscribe(user => {
this.balance=user.result
        this.baccbalance = Math.floor(user.result*1300/1000000000000000000)
        console.log (user)
      });
  }

  send(){
    this.walletservice.sendtransaction(this.user.APIKey,this.size,this.dest).subscribe(result=>{
      this.sendresult=result
    })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
