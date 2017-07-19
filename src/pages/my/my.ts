import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {UserService} from "../../app/user.service";
import {MymessagePage} from "../mymessage/mymessage";
import {MyindentPage} from "../myindent/myindent";

/**
 * Generated class for the MyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  // user:{};
  user = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public app: App,
              public us:UserService
  ) {


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
      this.user.push(this.us.user);
      console.log(this.user[0]);
  }

}
