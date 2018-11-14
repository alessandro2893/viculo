import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {G3a1Page, G3a2Page, G3a3Page, G3a4Page, G3a5Page} from "../index.paginas";


/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irguia3a1(){
    this.navCtrl.push(G3a1Page);
  }

  irguia3a2(){
    this.navCtrl.push(G3a2Page);
  }

  irguia3a3(){
    this.navCtrl.push(G3a3Page);
  }

  irguia3a4(){
    this.navCtrl.push(G3a4Page);
  }

  irguia3a5(){
    this.navCtrl.push(G3a5Page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

}
