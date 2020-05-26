import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { MotorinsuranceComponent } from './modules/motorinsurance/motorinsurance.component';


@NgModule({
  declarations: [
    AppComponent,
    MotorinsuranceComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
