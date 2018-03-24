import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ExplorePage } from '../explore/index';
// import { ContactPage } from '../contact/contact';
import { SettingPage } from '../setting/index';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorePage;
  tab3Root = SettingPage;

  constructor() {

  }
}
