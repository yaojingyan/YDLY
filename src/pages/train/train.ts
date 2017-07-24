import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {TraindetailPage} from "../traindetail/traindetail";

@Component({
  selector: 'page-train',
  templateUrl: 'train.html',
})
export class TrainPage  implements OnInit{
  trains = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainPage');
  }
  ngOnInit():void{
      this.http.get('http://localhost:3000/train')
        .toPromise()
        .then((res)=>{
          let result = res.json();
          if(result.success){
            this.trains = result.data;
          }
        })
  }
  itemSelected(params?:string){
    this.navCtrl.push(TraindetailPage,{item:params});
  }
}
