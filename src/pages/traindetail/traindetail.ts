import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {OrderconfirmPage} from "../orderconfirm/orderconfirm";

@Component({
  selector: 'page-traindetail',
  templateUrl: 'traindetail.html',
})
export class TraindetailPage {
  slideimg1 = 'assets/myimg/yujia1.jpg';
  slideimg2 = 'assets/myimg/yujia2.jpg';
  slideimg3 = 'assets/myimg/yujia3.jpg';
  detail;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    //接收上一页面传的item对象
    this.detail = this.navParams.get('item');
  }
  apply(){
    this.navCtrl.push(OrderconfirmPage,{data:this.detail});
  }
}
