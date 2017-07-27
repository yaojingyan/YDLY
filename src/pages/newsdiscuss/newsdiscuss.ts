import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";

@Component({
  selector: 'page-newsdiscuss',
  templateUrl: 'newsdiscuss.html',
})
export class NewsdiscussPage {
  caption;
  nameid;
  name;
  touimg;
  umessage;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http
  ){
    this.caption = this.navParams.get('caption');
    this.nameid = this.navParams.get('nameid');
    this.name = this.navParams.get('name');
    this.touimg = this.navParams.get('touimg');
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad NewsdiscussPage');
  // }

  // discuss(){
  //   this.http.post('http://localhost:3000/newsdis',{
  //     nameid:this.nameid,
  //     name:this.name,
  //     touimg:this.touimg
  //   })
  //     .toPromise()
  //     .then((res)=>{
  //       if(res.json().success){
  //         this.http.post('http://localhost:3000/dis',{nameid:this.nameid}
  //         )
  //           .toPromise()
  //           .then((res)=>{
  //             if(res.json().success){
  //               let result = res.json();
  //               this.umessage = result.data;
  //             }
  //           })
  //
  //       }
  //     })
  // }
}
