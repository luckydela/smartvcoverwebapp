import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingloginComponent } from './landinglogin/landinglogin.component';
import { DefaultComponent } from './layouts/default/default.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingloginComponent,
    DefaultComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
