import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";

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

  constructor(public navCtrl: NavController, public navParams: NavParams , public app:App) {
    let uname = ' ';
    if(uname==' ')
    {

      app.getRootNav().setRoot(LoginPage);
    }
  }










}
