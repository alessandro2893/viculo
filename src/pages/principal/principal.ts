import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
// import {GUIAS} from "../../data/data.guias";
 // import {IMAGENESGUIA} from "../../data/data.imagenesguias";
import { CONTENIDOPRINCIPAL} from "../../data/data.contenidoprin";
import {Contenido} from "../../interfaces/contenido.interface";
import {G1a1Page, G1a2Page, G1a3Page, CamaraPage, AprendiendoPage, KoboPage, ModalPage} from "../index.paginas";
import { ScreenOrientation } from '@ionic-native/screen-orientation';


/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {


contenidoprincipal:any[]=CONTENIDOPRINCIPAL;


  itemExpanded: boolean =true;
  itemExpandHeight:number=200;

contenidos:Contenido[]=[];

  // guias: any[] =[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menuCtrl: MenuController,
              private modalCtrl: ModalController,
              private screenOrientation: ScreenOrientation ) {





this.contenidos=CONTENIDOPRINCIPAL.slice(0);











                //
                // this.guias = GUIAS;
                // console.log(this.guias);
  }


getCurrentScreenOrientation(){
  console.log(this.screenOrientation.type);
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  MostrarMenu(){
    this.menuCtrl.toggle();

  }



// mostrar_modal(){
//
//   this.navCtrl.push(ModalPage);
//
// }



verDetalles( conte:any ){

  this.navCtrl.push( ModalPage, { conte });

}




}
