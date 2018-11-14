import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {ICONOSG1} from "../../data/data.iconsg1";
import {Iconsg1} from "../../interfaces/icons.interfaces";
import {G1a1Page, G1a2Page, G1a3Page, CamaraPage, AprendiendoPage, KoboPage} from "../index.paginas";



/**
 * Generated class for the Pagina1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-pagina1',
  templateUrl: 'pagina1.html',
})
export class Pagina1Page {


  tab1:any;
  tab2:any;
  tab3:any;
  tab4:any;



  iconsg1:any[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

// this.iconsg1=ICONOSG1.slice(0);


// this.tab1 = PrincipalPage;
// this.tab2 = CamaraPage;
// this.tab3 = AprendiendoPage;
// this.tab4 = KoboPage;



  }
  irguia1a1(){
    this.navCtrl.push(G1a1Page);
  }

  irguia1a2(){
    this.navCtrl.push(G1a2Page);
  }

  irguia1a3(){
    this.navCtrl.push(G1a3Page);
  }









// irguia1a1(icong1:Iconsg1){
//   console.log(icong1);
// }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina1Page');
  }

}
