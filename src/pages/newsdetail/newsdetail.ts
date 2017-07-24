import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewsdiscussPage} from "../newsdiscuss/newsdiscuss";

/**
 * Generated class for the NewsdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-newsdetail',
  templateUrl: 'newsdetail.html',
})
export class NewsdetailPage {
  newsdetail;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.newsdetail = this.navParams.get('item');
  }
  newsdiscuss(){
    this.navCtrl.push(NewsdiscussPage);
  }

}
