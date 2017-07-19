import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {MyPage} from "../my/my";
import {TabsPage} from "../tabs/tabs";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import {ZhucePage} from "../zhuce/zhuce";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:{}={};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app:App,
              public http:Http
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gologin()
  {
    this.http.post('http://localhost:3000/loginx',this.user)
      .toPromise()
      .then((res)=>{
      console.log(res);
        if (res.json().success){
          this.app.getRootNav().setRoot(TabsPage);

        }
      })

  }
  godxlogin()
  {

  }

  zhuce()
  {
    this.navCtrl.push(ZhucePage);
  }




}
