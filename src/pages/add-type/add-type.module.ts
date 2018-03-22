import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTypePage } from './add-type';

@NgModule({
  declarations: [
    AddTypePage,
  ],
  imports: [
    IonicPageModule.forChild(AddTypePage),
  ],
})
export class AddTypePageModule {}
