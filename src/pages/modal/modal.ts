import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CONTENIDOPRINCIPAL} from "../../data/data.contenidoprin";

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {


    conte:any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.conte = this.navParams.get("conte");

    console.log( this.conte );



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
