import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditEventTypePage } from './edit-event-type';

@NgModule({
  declarations: [
    EditEventTypePage,
  ],
  imports: [
    IonicPageModule.forChild(EditEventTypePage),
  ],
})
export class EditEventTypePageModule {}
