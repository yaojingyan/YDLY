import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {UserService} from "../../app/user.service";
import {MymessagePage} from "../mymessage/mymessage";
import {MyindentPage} from "../myindent/myindent";

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  // user:{};
  user = [];
  phone='';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public us:UserService
  ) {

    if(this.us.user)
    {
      this.user.push(this.us.user);
      console.log(this.user[0].phone);
      this.phone = this.user[0].phone;
    }
  }


  goMessage(){
    this.navCtrl.push(MymessagePage)
  }

  goIndent(){
    this.navCtrl.push(MyindentPage)
  }

  golog()
  {
      this.navCtrl.setRoot(LoginPage);
  }




}
