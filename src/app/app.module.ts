import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { MotorinsuranceComponent } from './modules/motorinsurance/motorinsurance.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    MotorinsuranceComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
