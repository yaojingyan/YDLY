import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {SsyServiceProvider} from "../../providers/ssy-service/ssy-service";
import {Http} from "@angular/http";


/**
 * Generated class for the Saishi3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-saishi3',
  templateUrl: 'saishi3.html',
})
export class Saishi3Page implements OnInit{
  matchrule='';
  constructor(public navCtrl: NavController,
              public serv: SsyServiceProvider,
              public http: Http,
              public navParams: NavParams)
  {
    this.matchrule=this.navParams.get('txt');
    //console.log(this.matchrule);

  }

  ngOnInit():void{

  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad Saishi3Page');
  // }

}
