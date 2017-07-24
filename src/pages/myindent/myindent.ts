import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-myindent',
  templateUrl: 'myindent.html',
})
export class MyindentPage {
  goods:string ="全部";
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }


}
