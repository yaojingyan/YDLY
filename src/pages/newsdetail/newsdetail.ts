import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewsdiscussPage} from "../newsdiscuss/newsdiscuss";
import {Http} from "@angular/http";

/**
 * Generated class for the NewsdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-newsdetail',
  templateUrl: 'newsdetail.html',
})
export class NewsdetailPage {
  newsdetail;
  nameid;
  name;
  touimg;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http
  ) {
    this.newsdetail = this.navParams.get('item');
    this.nameid = this.navParams.get('nameid');
    this.name = this.navParams.get('name');
    this.touimg = this.navParams.get('touimg');
  }
  newsdiscuss(){
    this.navCtrl.push(NewsdiscussPage,{
      caption:this.newsdetail,
      nameid:this.nameid,
      name:this.name,
      touimg:this.touimg
    });
  }

}
