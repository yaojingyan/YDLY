import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {MyPage} from "../my/my";
import {TabsPage} from "../tabs/tabs";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import {ZhucePage} from "../zhuce/zhuce";
import {UserService} from "../../app/user.service";
import {MissPage} from "../miss/miss";
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
  x = 0;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app:App,
              public http:Http,
              public us:UserService
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
        if (res.json().success)
        {
          this.x = res.json().data[0];
          console.log(this.x);
          this.http.post('http://localhost:3000/user',this.x)
            .toPromise()
            .then((res)=>{
              console.log(res);
              if (res.json().success){

                this.us.user = res.json().data[0];
                this.navCtrl.setRoot(MyPage);

              }

            })

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

  misspwd()
  {
    this.navCtrl.push(MissPage);
  }



}
