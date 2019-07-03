
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from './module/modal/modal.module';

import { FuncSeviceService } from './service/func-sevice.service';
import { HttpService } from './service/http.service';
import { DataSeviceService } from './service/data-sevice.service';
import { ModalService } from './service/modal.service';

import { DeviceService } from './service/device.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    FormsModule,
    ModalModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    DataSeviceService,
    FuncSeviceService,
    HttpService,
    ModalService,
    DeviceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
