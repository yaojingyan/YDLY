import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {UserService} from "../../app/user.service";

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
  // user:{};
  user = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public us:UserService
  ) {

    if (!us.user)
    {
      this.navCtrl.setRoot(LoginPage);
    }else{
      this.user.push(us.user);
      console.log(this.user[0]);


    }

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyPage');
  }



}
