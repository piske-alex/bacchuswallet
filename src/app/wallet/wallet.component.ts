import {Component, Input, OnInit} from '@angular/core';
import {CookiesService} from '../cookies.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WalletService} from '../wallet.service';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: '酒神代幣預售在 2018年11月7日香港UTC+8 的00:00上開始，並將一直持續到2019年2月6日香港UTC+8的23:59\n' +
  '以30%MORE COIN 預售5000萬TOKEN',
}
];

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  alerts:Alert[];
  user:any;
  loggedin:boolean;
  balance:any;
  kycscreen:boolean
  @Input() size;
  @Input() dest;
  sendresult
  baccbalance
  av
  private modal: Promise<void>;

  constructor(private cookies: CookiesService,private modalService: NgbModal, private walletservice : WalletService) {
    if (this.cookies.getCookie('usr') != '') {
      this.user = (JSON.parse(this.cookies.getCookie('usr')));
      if (this.user.ID > 0 && this.user.Name) {
        this.loggedin = true;
      } else {
        this.kycscreen = true
      }
    }
    this.reset();
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


  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
  open(content) {
    this.modal =  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
