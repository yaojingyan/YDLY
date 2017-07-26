import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SaishiPage} from "../pages/saishi/saishi";
import {MyPage} from "../pages/my/my";
import {Saishi2Page} from "../pages/saishi2/saishi2";
import { SsyServiceProvider } from '../providers/ssy-service/ssy-service';
import {Saishi3Page} from "../pages/saishi3/saishi3";

import {LoginPage} from "../pages/login/login";
import {HttpModule} from "@angular/http";
import {ZhucePage} from "../pages/zhuce/zhuce";
import {MymessagePage} from "../pages/mymessage/mymessage";
import {MyindentPage} from "../pages/myindent/myindent";
import {UserService} from "./user.service";
import {MissPage} from "../pages/miss/miss";
import {MyrepairPage} from "../pages/myrepair/myrepair";
import {MytestPage} from "../pages/mytest/mytest";
import {SettingPage} from "../pages/setting/setting";
import {HomePage} from "../pages/home/home";
import {NewsdetailPage} from "../pages/newsdetail/newsdetail";
import {MyactivityPage} from "../pages/myactivity/myactivity";
import {MycoachPage} from "../pages/mycoach/mycoach";
import {MyplacePage} from "../pages/myplace/myplace";
import {MytrainPage} from "../pages/mytrain/mytrain";
import {MycompetitionPage} from "../pages/mycompetition/mycompetition";
import {MyrunPage} from "../pages/myrun/myrun";
import {MyorganizationPage} from "../pages/myorganization/myorganization";
import {NewsdiscussPage} from "../pages/newsdiscuss/newsdiscuss";
import {PinglunPage} from "../pages/pinglun/pinglun";
import {AccountsettingsPage} from "../pages/accountsettings/accountsettings";
import {XieyiPage} from "../pages/xieyi/xieyi";
import {GuanyuPage} from "../pages/guanyu/guanyu";
import {ClearPage} from "../pages/clear/clear";
import {PlacePage} from "../pages/place/place";
import {TrainPage} from "../pages/train/train";
import {TraindetailPage} from "../pages/traindetail/traindetail";
import {FenleiPage} from "../pages/fenlei/fenlei";
import {OrderconfirmPage} from "../pages/orderconfirm/orderconfirm";

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    SearchPage,
    HomePage,
    SaishiPage,
    MyPage,
    TabsPage,
    Saishi2Page,
    Saishi3Page,
    MymessagePage,
    MyindentPage,
    TabsPage,
    LoginPage,
    ZhucePage,
    MyrepairPage,
    MytestPage,
    SettingPage,
    ZhucePage,
    MissPage,
    SettingPage,
    NewsdetailPage,
    MyactivityPage,
    MycoachPage,
    MyplacePage,
    MytrainPage,
    MycompetitionPage,
    MyrunPage,
    MyorganizationPage,
    NewsdiscussPage,
    AccountsettingsPage,
    XieyiPage,
    GuanyuPage,
    ClearPage,
    PlacePage,
    TrainPage,
    TraindetailPage,
    NewsdiscussPage,
    PinglunPage,
    TraindetailPage,
    FenleiPage,
    OrderconfirmPage
  ],
  imports: [
    BrowserModule,HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    SearchPage,
    HomePage,
    SaishiPage,
    MyPage,
    MymessagePage,
    MyindentPage,
    TabsPage,
    LoginPage,
    ZhucePage,
    MissPage,
    ZhucePage,
    MyrepairPage,
    MytestPage,
    SettingPage,
    NewsdetailPage,
    MyactivityPage,
    MycoachPage,
    MyplacePage,
    MytrainPage,
    MycompetitionPage,
    MyrunPage,
    MyorganizationPage,
    NewsdiscussPage,

    AccountsettingsPage,
    XieyiPage,
    GuanyuPage,
    ClearPage,
    PlacePage,
    TrainPage,
    TraindetailPage,


    TabsPage,
    Saishi2Page,
    Saishi3Page,
    FenleiPage,
    OrderconfirmPage,
    Saishi3Page,

    NewsdiscussPage,
    PinglunPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SsyServiceProvider,
    UserService,
  ]
})
export class AppModule {}
