import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject} from '@ionic-native/themeable-browser';

/**
 * Generated class for the AprendiendoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aprendiendo',
  templateUrl: 'aprendiendo.html',
})
export class AprendiendoPage {

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
        staticText:'Ayuda en Acción'
      },
      backButton:{
        
      }
    }
    const browser: ThemeableBrowserObject= this.themeableBrowser.create('http://aeahn.org/home3/','black', options);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AprendiendoPage');
  }

}
