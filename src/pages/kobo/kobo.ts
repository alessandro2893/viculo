import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject} from '@ionic-native/themeable-browser';

/**
 * Generated class for the KoboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kobo',
  templateUrl: 'kobo.html',
})
export class KoboPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private themeableBrowser:ThemeableBrowser) {
  }


  openBrowser(){

    const options: ThemeableBrowserOptions={
      toolbar:{
        height:44,
        color:'3573ff'
      },
      title:{
        color:'#ffffffff',
        showPageTitle:true,
        staticText:'KOBO'
      },
      backButton:{

      }
    }
    const browser: ThemeableBrowserObject= this.themeableBrowser.create('https://play.google.com/store/apps/details?id=org.koboc.collect.android','black', options);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KoboPage');
  }

}
