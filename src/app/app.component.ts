import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import {GUIAS} from "../data/data.guias";
import { PrincipalPage,
   Pagina2Page,
   G2a1Page,
   G2a2Page,
   G2a3Page,
   Pagina1Page,
   G1a1Page,
   G1a2Page,
   G1a3Page,
   Pagina3Page,
   G3a1Page,
   G3a2Page,
   G3a3Page,
   G3a4Page,
   G3a5Page,
   Pagina4Page,
   G4a1Page,
   G4a2Page,
   G4a3Page,
   G4a4Page,
   Pagina5Page,
   G5a1Page,
   G5a2Page,
   G5a3Page,
   G5a4Page,
   AcordionpruebaPage,
   CamaraPage,
   KoboPage,
   AprendiendoPage,
   ModalPage,
   TabsPage
  } from "../pages/index.paginas";

@Component({
  templateUrl: 'app.html',
    providers: [
        ScreenOrientation
    ]
})
export class MyApp {
  principal=TabsPage;
  pagina1= Pagina1Page;
  g1a1= G1a1Page;
  g1a2= G1a2Page;
  g1a3= G1a3Page;
  pagina2= Pagina2Page;
  g2a1= G2a1Page;
  g2a2= G2a2Page;
  g2a3= G2a3Page;
  pagina3= Pagina3Page;
  g3a1= G3a1Page;
  g3a2= G3a2Page;
  g3a3= G3a3Page;
  g3a4= G3a4Page;
  g3a5= G3a5Page;
  pagina4= Pagina4Page;
  g4a1= G4a1Page;
  g4a2= G4a2Page;
  g4a3= G4a3Page;
  g4a4= G4a4Page;
  pagina5= Pagina5Page;
  g5a1= G5a1Page;
  g5a2= G5a2Page;
  g5a3= G5a3Page;
  g5a4= G5a4Page;
  acordionprueba=AcordionpruebaPage;
  camara=CamaraPage;
  kobo=KoboPage;
  aprendiendo=AprendiendoPage;
  tabs=TabsPage;
  modal=ModalPage;




  rootPage:any = TabsPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private screenOrientation: ScreenOrientation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

abrirPagina( pagina: any){
this.rootPage=pagina;
this.menuCtrl.close();


}

}
