import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MymessagePage} from "../mymessage/mymessage";
import {MyindentPage} from "../myindent/myindent";

/**
 * Generated class for the MyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  goMessage(){
    this.navCtrl.push(MymessagePage)
  }

  goIndent(){
    this.navCtrl.push(MyindentPage)
  }
}
