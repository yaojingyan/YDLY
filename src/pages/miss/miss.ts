import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import {TabsPage} from "../tabs/tabs";
import {UserService} from "../../app/user.service";
import {MyPage} from "../my/my";
/**
 * Generated class for the MissPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-miss',
  templateUrl: 'miss.html',
})
export class MissPage {
  user:{}={};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app:App,
              public http:Http,
  public us:UserService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MissPage');
  }

  gorest()
  {
      console.log(this.user);
      this.http.post('http://localhost:3000/rest',this.user)
        .toPromise()
        .then((res)=>{
          console.log(res);
          if (res.json().success){
            alert('修改成功，请登录');
            this.navCtrl.setRoot(MyPage);
          }
        })

    }

}
