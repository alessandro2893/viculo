import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {ThemeableBrowser} from '@ionic-native/themeable-browser';
import { MyApp } from './app.component';
import {ExpandableComponent} from '../components/expandable/expandable';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import {AccordionComponent} from '../components/accordion/accordion';

import {PrincipalPage,
AjustesPage,
Ajustes2Page,
Pagina1Page,
G1a1Page,
G1a2Page,
G1a3Page,
Pagina2Page,
G2a1Page,
G2a2Page,
G2a3Page,
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
TabsPage} from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    Pagina1Page,
    G1a1Page,
    G1a2Page,
    G1a3Page,
    Pagina2Page,
    G2a1Page,
    G2a2Page,
    G2a3Page,
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
    TabsPage,
    AcordionpruebaPage,
    CamaraPage,
    KoboPage,
    AprendiendoPage,
    AccordionComponent,
    ModalPage,
    ExpandableComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{backButtonText: 'Atras'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    Pagina1Page,
    G1a1Page,
    G1a2Page,
    G2a1Page,
    Pagina2Page,
    G2a2Page,
    G2a3Page,
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
    TabsPage,
    AcordionpruebaPage,
    CamaraPage,
    KoboPage,
    AprendiendoPage,
    ModalPage,
    AccordionComponent
  ],
  providers: [
     InAppBrowser,
     StatusBar,
     ThemeableBrowser,
     SplashScreen,Camera,
     SplashScreen,
     ScreenOrientation,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
