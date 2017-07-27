import {Component, OnInit} from '@angular/core';
import {AlertController, App, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
// import {Md5} from "ts-md5/dist/md5";
import {UserService} from "../../app/user.service";
import set = Reflect.set;
import {PinglunPage} from "../pinglun/pinglun";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  shuoshuo=[];
  h=0;
  d = 0;
  user = [];
  touimg = '';
  nameid = '';
  name = '';

  surl='assets/images/dianzan1.png';
  constructor(public navCtrl: NavController,
              public http:Http,
              public us:UserService,
              public navParams: NavParams,
              public alertCtrl:AlertController

  ) {


      this.http.get('http://localhost:3000/shuoshuo')
      .toPromise()
      .then((res)=>{

        if (res.json().success)
        {
          let result = res.json();
          this.shuoshuo = result.data;
          console.log(this.shuoshuo);
        }

      })

  }




  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    if(this.us.user)
    {
      this.user.push(this.us.user);
      this.touimg = this.user[0].touimg;
      this.nameid = this.user[0].id;
      this.name = this.user[0].name;
      console.log(this.nameid);
      console.log(this.touimg);
    }
  }

  pinglun(id)
  {
    if (this.touimg!='')
    {
      this.navCtrl.push(PinglunPage,{id:id,nameid:this.nameid,name:this.name,touimg:this.touimg});
    }
    else {
      let alert = this.alertCtrl.create(
        {
          title:'请先登录',
          buttons:['确定']
        });
      alert.present();
    }
  }

  // dianzan(s,y)
  // {
  //   this.d = y;
  //   this.h = this.h+1;
  //   if (this.h%2!=0)
  //   {
  //     this.http.post('http://localhost:3000/dianzan',{id:s,zanshu:this.d+1})
  //       .toPromise()
  //       .then((res)=>{
  //         // console.log(res);
  //         if (res.json().success)
  //         {
  //
  //         }
  //
  //       })
  //   }
  //   else
  //   {
  //     this.http.post('http://localhost:3000/dianzan',{id:s,zanshu:y-1})
  //       .toPromise()
  //       .then((res)=>{
  //         // console.log(res);
  //         if (res.json().success)
  //         {
  //
  //         }
  //
  //       })
  //   }
  // }








}
