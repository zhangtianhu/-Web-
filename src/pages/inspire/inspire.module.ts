import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InspirePage } from './inspire';

@NgModule({
  declarations: [
    InspirePage,
  ],
  imports: [
    IonicPageModule.forChild(InspirePage),
  ],
})
export class InspirePageModule {}
