import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {Http} from "@angular/http";
import {MyPage} from "../my/my";
import {LoginPage} from "../login/login";

/**
 * Generated class for the ZhucePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html',
})
export class ZhucePage {
  user:{}={};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public  app:App,
              public http:Http

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZhucePage');
  }

  gozhuce()
  {
    console.log(this.user);
    this.http.post('http://localhost:3000/zhuce',this.user)
      .toPromise()
      .then((res)=>{
        console.log(res);
        if (res.json().success){
          alert('注册成功,请登录');
          this.navCtrl.setRoot(LoginPage);

        }

      })

  }

}
