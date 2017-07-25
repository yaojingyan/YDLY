import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {SsyServiceProvider} from "../../providers/ssy-service/ssy-service";
import {Http} from "@angular/http";
import {Saishi3Page} from "../saishi3/saishi3";

/**
 * Generated class for the Saishi2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-saishi2',
  templateUrl: 'saishi2.html',
})
// export class Saishi2Page implements OnInit {
  export class Saishi2Page {
  items = [];
  limitpeople = '';
  matchimg = '';
  matchlike='';
  matchpraise='';
  matchshare='';
  matchtitle='';
  entryfees='';
  matchunit='';
  consultant='';
  hotline='';
  matchplace='';
  registime='';
  matchtime='';
  matchrule='';
  matchapplicants='';
  id = '';
  user=[];
  constructor(public navCtrl: NavController,
              public serv: SsyServiceProvider,
              public http: Http, public navParams: NavParams)
  {
    console.log(navParams.data.id);
    this.id=navParams.data.id ;
    console.log(this.id);
    this.http.get('http://localhost:3000/c/'+this.id)
      .toPromise()
      .then((res)=>
      {
        this.items=res.json().data ;
        this.limitpeople = this.items[0].limitpeople;
        this.matchlike = this.items[0].matchlike;
        this.matchimg = this.items[0].matchimg;
        this.matchpraise = this.items[0].matchpraise;
        this.matchshare = this.items[0].matchshare;
        this.matchtitle = this.items[0].matchtitle;
        this.entryfees = this.items[0].entryfees;
        this.matchunit = this.items[0].matchunit;
        this.consultant = this.items[0].consultant;
        this.hotline = this.items[0].hotline;
        this.matchplace = this.items[0].matchplace;
        this.registime = this.items[0].registime;
        this.matchtime = this.items[0].matchtime;
        this.matchrule = this.items[0].matchrule;
        this.matchapplicants = this.items[0].matchapplicants;
      });

  }
  go(txt:string){
    this.navCtrl.push(Saishi3Page,{txt:txt});
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad Saishi2Page');
  // }

  // ngOnInit(): void {
    /*this.ssy.ss().subscribe(data => {
     this.items = data;
     console.log(this.items);
     this.limitpeople = this.items[0].limitpeople;
     });*/
    // console.log(this.serv.getId())

  // }
}
