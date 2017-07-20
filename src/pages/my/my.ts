import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {UserService} from "../../app/user.service";
import {MymessagePage} from "../mymessage/mymessage";
import {MyindentPage} from "../myindent/myindent";
import {MytestPage} from "../mytest/mytest";
import {MyrepairPage} from "../myrepair/myrepair";
import {SettingPage} from "../setting/setting";

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  // user:{};
  user = [];
  phone='';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public us:UserService
  ) {

    if(this.us.user)
    {
      this.user.push(this.us.user);
      console.log(this.user[0].phone);
      this.phone = this.user[0].phone;
    }
  }

  //进入我的系统消息页面
  goMessage(){
    this.navCtrl.push(MymessagePage)
  }
  //进入订单页面
  goIndent(){
    this.navCtrl.push(MyindentPage)
  }
  //进入登录页面
  golog()
  {
      this.navCtrl.setRoot(LoginPage);
      this.user.push(this.us.user);
      console.log(this.user[0]);
  }
  //进入体测页面
  goTest(){
      this.navCtrl.push(MytestPage);
  }
  //进入我的检修页面
  goRepair(){
    this.navCtrl.push(MyrepairPage);
  }
  //进入设置页面
  set(){
    this.navCtrl.push(SettingPage);
  }
}
