import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {UserService} from "../../app/user.service";
import {MymessagePage} from "../mymessage/mymessage";
import {MyindentPage} from "../myindent/myindent";
import {MytestPage} from "../mytest/mytest";
import {MyrepairPage} from "../myrepair/myrepair";
import {SettingPage} from "../setting/setting";
import {MycoachPage} from "../mycoach/mycoach";
import {MyplacePage} from "../myplace/myplace";
import {MyactivityPage} from "../myactivity/myactivity";
import {MycompetitionPage} from "../mycompetition/mycompetition";
import {MytrainPage} from "../mytrain/mytrain";
import {MyorganizationPage} from "../myorganization/myorganization";
import {MyrunPage} from "../myrun/myrun";

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
  //进入我的教练页面
  goCoach(){
    this.navCtrl.push(MycoachPage);
  }
  //进入我的场地页面
  goPlace(){
    this.navCtrl.push(MyplacePage);
  }
  //进入我的活动页面
  goActivity(){
    this.navCtrl.push(MyactivityPage);
  }
  //进入我的赛事页面
  goCompetition(){
    this.navCtrl.push(MycompetitionPage);
  }
  //进入我的培训页面
  goTrain(){
    this.navCtrl.push(MytrainPage);
  }
  //进入我的社团页面
  goOrganization(){
    this.navCtrl.push(MyorganizationPage);
  }
  //进入智能跑页面
  goRun(){
    this.navCtrl.push(MyrunPage);
  }
}
