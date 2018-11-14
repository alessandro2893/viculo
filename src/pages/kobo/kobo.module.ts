import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KoboPage } from './kobo';

@NgModule({
  declarations: [
    KoboPage,
  ],
  imports: [
    IonicPageModule.forChild(KoboPage),
  ],
})
export class KoboPageModule {}
