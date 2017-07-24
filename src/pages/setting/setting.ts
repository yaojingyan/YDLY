import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AccountsettingsPage} from "../accountsettings/accountsettings";
import {XieyiPage} from "../xieyi/xieyi";
import {GuanyuPage} from "../guanyu/guanyu";
import {ClearPage} from "../clear/clear";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  items=[
    {title:'账号设置',page: AccountsettingsPage},
    {title:'清除缓存', page: ClearPage},
    {title:'软件许可协议',page: XieyiPage},
    {title:'关于云动洛阳',page: GuanyuPage}
  ];
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }
  itemSelected(page){
    this.navCtrl.push(page);
  }
  quit(){
    this.navCtrl.push(LoginPage);
  }
}
