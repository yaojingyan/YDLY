import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsdiscussPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-newsdiscuss',
  templateUrl: 'newsdiscuss.html',
})
export class NewsdiscussPage {
  caption;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.caption = this.navParams.get('caption');
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad NewsdiscussPage');
  // }

}
