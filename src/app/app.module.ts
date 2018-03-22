import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddIdentityPage } from '../pages/add-identity/add-identity';
import { AddTypePage } from '../pages/add-type/add-type';
import { AddEventPage } from '../pages/add-event/add-event';
import { EditEventTypePage } from '../pages/edit-event-type/edit-event-type';


import { IdentityComponent,PopoverPage } from '../components/identity/identity';
import { TypesComponent } from '../components/types/types';
import { EventComponent } from '../components/event/event';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IdentitiesProvider } from '../providers/identities/identities';
import { TypesProvider } from '../providers/types/types';
import { EventsProvider } from '../providers/events/events';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IdentityComponent ,
    AddIdentityPage,
    TypesComponent,
    EventComponent,
    AddTypePage,
    AddEventPage,
    EditEventTypePage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IdentityComponent,
    AddIdentityPage,
    TypesComponent,
    EventComponent,
    AddTypePage,
    AddEventPage,
    EditEventTypePage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IdentitiesProvider,
    TypesProvider,
    EventsProvider
  ]
})
export class AppModule {}
