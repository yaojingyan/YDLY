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
import {LoginPage} from "../pages/login/login";
import {HttpModule} from "@angular/http";
import {ZhucePage} from "../pages/zhuce/zhuce";
import {MymessagePage} from "../pages/mymessage/mymessage";
import {MyindentPage} from "../pages/myindent/myindent";

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    SearchPage,
    IndexPage,
    SaishiPage,
    MyPage,
    TabsPage,
    LoginPage,
    ZhucePage
    MymessagePage,
    MyindentPage,
    TabsPage
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
    IndexPage,
    SaishiPage,
    MyPage,
    MymessagePage,
    MyindentPage,
    TabsPage
    TabsPage,
    LoginPage,
    ZhucePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
