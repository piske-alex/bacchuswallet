import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historylist: any;


  constructor() { }

  ngOnInit() {
    this.historylist = [{
      status: 'success',
      from: '0x938hxfc89732bbsd34ww',
      to: '0x9834hjv3q4vtrwafcet',
      amount: 234,
      txhash: '3023x98qyw4e9t8vbyhw8re7yw48eiuh5t8if7wy4rt8i7dsfgvaww35'
    }];
  }

}
