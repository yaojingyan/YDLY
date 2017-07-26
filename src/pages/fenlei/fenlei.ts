import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TrainPage} from "../train/train";


@Component({
  selector: 'page-fenlei',
  templateUrl: 'fenlei.html',
})
export class FenleiPage {
  items = [
    {fenlei:'全部'},
    {fenlei:'户外'},
    {fenlei:'自行车'},
    {fenlei:'走跑'},
    {fenlei:'健身'},
    {fenlei:'网球'},
    {fenlei:'游泳'},
    {fenlei:'乒乓球'},
    {fenlei:'足球'},
    {fenlei:'篮球'},
    {fenlei:'羽毛球'},
    {fenlei:'太极'},
    {fenlei:'冰壶'},
    {fenlei:'综合'},
    {fenlei:'空竹'},
    {fenlei:'鞭陀'},
    {fenlei:'围棋'},
    {fenlei:'其他'},
    {fenlei:'门球'},
    {fenlei:'轮滑'},
    {fenlei:'高尔夫球'},
    {fenlei:'排球'},
    {fenlei:'跆拳道'},
    {fenlei:'滑雪'},
    {fenlei:'骑马'},
    {fenlei:'射箭'},
    {fenlei:'台球'},
    {fenlei:'泰拳'}
  ];

  fenlei:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FenleiPage');
  // }

  sure(a){
    this.fenlei = a;
  }

  confirm(){
    this.navCtrl.push(TrainPage,{fenlei:this.fenlei});
  }
}
