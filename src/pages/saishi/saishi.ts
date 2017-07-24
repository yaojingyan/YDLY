import { Component } from '@angular/core';
import { NavController, NavParams ,} from 'ionic-angular';
import {Saishi2Page} from "../saishi2/saishi2";
import {SsyServiceProvider} from "../../providers/ssy-service/ssy-service";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the SaishiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-saishi',
  templateUrl: 'saishi.html',
  providers:[SsyServiceProvider]
})
export class SaishiPage {
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public serv:SsyServiceProvider,public http: Http) {
    // this.item = NavParams.data.item;
    this.items = [
      {
        img:'../assets/images/saishi-img/1.png',
        title: '2017年首届“水分子杯”绿色低碳环...',
        time:'2017年06月17日',
        address:'洛阳市体育公园环湖智能健身步道',
        feiyong:'免费',
        id:1
      },
      {
        img:'../assets/images/saishi-img/2.png',
        title: '【测试赛事】收费',
        time:'2017年06月21日',
        address:'江苏省南京市雨花台区雨花经济...',
        feiyong:'￥0.01元',
        id:2
      },
    ]
  }
    go(id)
    {
      // this.serv.changeId(id);
      this.navCtrl.push(
        Saishi2Page,{
          id:id
        }
      )}
  get(){
    return new Promise((resolve,reject)=>{
      this.http.get("http://localhost:3000/c")
        .map(res=>res.json())
        .subscribe(data=>{
          resolve(data.article);
        }),err=>{
        reject(err);
      }
    })
  }


  // ionViewDidLoad() {
  //   // console.log('ionViewDidLoad SaishiPage');
  // }


}


