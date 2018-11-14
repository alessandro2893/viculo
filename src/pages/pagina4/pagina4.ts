import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {G4a1Page, G4a2Page, G4a3Page, G4a4Page} from "../index.paginas";


/**
 * Generated class for the Pagina4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina4',
  templateUrl: 'pagina4.html',
})
export class Pagina4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  irguia4a1(){
    this.navCtrl.push(G4a1Page);
  }

  irguia4a2(){
    this.navCtrl.push(G4a2Page);
  }

  irguia4a3(){
    this.navCtrl.push(G4a3Page);
  }

  irguia4a4(){
    this.navCtrl.push(G4a4Page);
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina4Page');
  }

}
