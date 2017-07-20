import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
    '东北虎王KO日本拳手',
    '东北虎王KO日本拳手',
    '东北虎王KO日本拳手',
    '东北虎王KO日本拳手',
    '东北虎王KO日本拳手',
    '东北虎王KO日本拳手',
    '东北虎王KO日本拳手'
  ]
  constructor(public navCtrl: NavController) {

  }

}
