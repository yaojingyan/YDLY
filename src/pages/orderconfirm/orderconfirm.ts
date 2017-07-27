import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {TrainPage} from "../train/train";

@Component({
  selector: 'page-orderconfirm',
  templateUrl: 'orderconfirm.html',
})
export class OrderconfirmPage {
  applys;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl:AlertController
  ) {
    this.applys = this.navParams.get('data');
    // console.log(this.apply);
  }

  refer(){
      let alert = this.alertCtrl.create({
        title:'提交成功',
        buttons:[
          {
            text:'确定',
            handler:()=>{
              this.navCtrl.push(TrainPage);
            }
          }
        ]
      });
      alert.present();
  }
}
