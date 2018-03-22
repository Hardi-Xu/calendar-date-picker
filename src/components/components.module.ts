import { NgModule } from '@angular/core';
import { IdentityComponent } from './identity/identity';
import { TypesComponent } from './types/types';
import { EventComponent } from './event/event';
@NgModule({
	declarations: [IdentityComponent,
    TypesComponent,
    EventComponent],
	imports: [],
	exports: [IdentityComponent,
    TypesComponent,
    EventComponent]
})
export class ComponentsModule {}
