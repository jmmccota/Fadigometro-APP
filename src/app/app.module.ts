import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { BLE } from '@ionic-native/ble';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { TipoaPage } from '../pages/tipoa/tipoa';
import { TipobPage } from '../pages/tipob/tipob';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

const declares = [
  MyApp,
  HomePage,
  TipoaPage,
  TipobPage,
  ListPage,
  LoginPage
]

@NgModule({
  declarations: declares,
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: declares,
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
