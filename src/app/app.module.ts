import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IndexPage } from '../pages/index/index';
import { ContactPage } from '../pages/contact/contact';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SaishiPage} from "../pages/saishi/saishi";
import {MyPage} from "../pages/my/my";
import {Saishi2Page} from "../pages/saishi2/saishi2";
import { SsyServiceProvider } from '../providers/ssy-service/ssy-service';
import {HttpModule} from "@angular/http";
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
    NewsdiscussPage
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
    TabsPage,
    Saishi2Page,
    Saishi3Page
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
