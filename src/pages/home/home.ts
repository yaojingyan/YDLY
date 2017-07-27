import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {NewsdetailPage} from "../newsdetail/newsdetail";
import {PlacePage} from "../place/place";
import {TrainPage} from "../train/train";
import {UserService} from "../../app/user.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit {
  news = [];
  user = [];
  touimg;
  nameid;
  name;
  constructor(public navCtrl: NavController,
              public http: Http,
              public yh:UserService,
  ) {
  }

  ngOnInit():void {
    this.http.get('http://localhost:3000/news')
      .toPromise()
      .then((res) => {
        let result = res.json();
        if (result.success) {
          console.log(result.data);
          this.news = result.data;
        }
      })
  }
  place(){
    this.navCtrl.push(PlacePage);
  }
  train(){
    this.navCtrl.push(TrainPage);
  }

  //获取登录id的信息
  ionViewWillEnter(){
    if(this.yh.user){
      this.user.push(this.yh.user);
      this.touimg = this.user[0].touimg;
      this.nameid = this.user[0].id;
      this.name = this.user[0].name;
      console.log(this.nameid);
      console.log(this.name);
      console.log(this.touimg);
    }
  }
  itemSelected(params?:Object){
    this.navCtrl.push(NewsdetailPage,{item:params,
      nameid:this.nameid,name:this.name,touimg:this.touimg});
  }
}

