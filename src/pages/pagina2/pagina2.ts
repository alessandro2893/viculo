import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {G2a1Page, G2a2Page, G2a3Page} from "../index.paginas";

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  irguia2a1(){
    this.navCtrl.push(G2a1Page);
  }

  irguia2a2(){
    this.navCtrl.push(G2a2Page);
  }

  irguia2a3(){
    this.navCtrl.push(G2a3Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

}
