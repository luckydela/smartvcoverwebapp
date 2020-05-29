import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { MotorinsuranceComponent } from './modules/motorinsurance/motorinsurance.component';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { LandingloginComponent } from 'src/app/landinglogin/landinglogin.component';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    MotorinsuranceComponent,
    NotificationComponent,
    LandingloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
