import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  items=[
    '账号设置',
    '清除缓存',
    '软件许可协议',
    '关于云动洛阳',
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemSelected(item:string){
    console.log();
  }

}
