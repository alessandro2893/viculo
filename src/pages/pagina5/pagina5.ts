import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {G5a1Page, G5a2Page, G5a3Page, G5a4Page} from "../index.paginas";

/**
 * Generated class for the Pagina5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina5',
  templateUrl: 'pagina5.html',
})
export class Pagina5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  irguia5a1(){
    this.navCtrl.push(G5a1Page);
  }

  irguia5a2(){
    this.navCtrl.push(G5a2Page);
  }

  irguia5a3(){
    this.navCtrl.push(G5a3Page);
  }

  irguia5a4(){
    this.navCtrl.push(G5a4Page);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina5Page');
  }

}
