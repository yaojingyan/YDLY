import { Component } from '@angular/core';

import {HomePage} from '../home/home';
import {ContactPage } from '../contact/contact';
import {SearchPage} from '../search/search';
import {SaishiPage} from "../saishi/saishi";
import {MyPage} from "../my/my";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  num = 0;
  tab1Root = SearchPage;
  tab2Root = ContactPage;
  tab3Root = HomePage;
  tab4Root = SaishiPage;
  tab5Root = MyPage;

  constructor() {
    this.num = 10;
  }
}
