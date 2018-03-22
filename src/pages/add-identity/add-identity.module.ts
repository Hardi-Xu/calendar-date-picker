import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddIdentityPage } from './add-identity';

@NgModule({
  declarations: [
    AddIdentityPage,
  ],
  imports: [
    IonicPageModule.forChild(AddIdentityPage),
  ],
})
export class AddIdentityPageModule {}
