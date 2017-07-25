import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {NewsdetailPage} from "../newsdetail/newsdetail";
import {PlacePage} from "../place/place";
import {TrainPage} from "../train/train";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  implements OnInit {
  news = [];

  constructor(public navCtrl: NavController,
              public http: Http) {
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
  itemSelected(params?:Object){
    this.navCtrl.push(NewsdetailPage,{item:params});
  }
  place(){
    this.navCtrl.push(PlacePage);
  }
  train(){
    this.navCtrl.push(TrainPage);
  }
}

