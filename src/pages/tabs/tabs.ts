import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CamaraPage, AprendiendoPage, KoboPage, PrincipalPage} from  "../index.paginas";
import {ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject} from '@ionic-native/themeable-browser';
import { Events } from 'ionic-angular';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {


  tab1:any;
  tab2:any;
  tab3:any;
  tab4:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private themeableBrowser:ThemeableBrowser, public events: Events,) {

      this.tab1 = PrincipalPage;
      this.tab2 = CamaraPage;
      this.tab3 = AprendiendoPage;
      this.tab4 = KoboPage;

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
    console.log('ionViewDidLoad TabsPage');
  }

}
