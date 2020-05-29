import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
//import { LandingloginComponent } from 'src/app/landinglogin/landinglogin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';
import { SettingsComponent } from 'src/app/modules/settings/settings.component';
import { ClaimstatusComponent } from 'src/app/modules/claimstatus/claimstatus.component';
import { MakeaclaimComponent } from 'src/app/modules/makeaclaim/makeaclaim.component';
import { SoldpoliciesComponent } from 'src/app/modules/soldpolicies/soldpolicies.component';
import { BuypolicyComponent } from 'src/app/modules/buypolicy/buypolicy.component';
import { MypoliciesComponent } from 'src/app/modules/mypolicies/mypolicies.component';
import { MyclaimsComponent } from 'src/app/modules/myclaims/myclaims.component';
import { MycommisionComponent } from 'src/app/modules/mycommision/mycommision.component';
import { NotificationsComponent } from 'src/app/modules/notifications/notifications.component';
import { MystickerComponent } from 'src/app/modules/mysticker/mysticker.component';
import { TransactionsComponent } from 'src/app/modules/transactions/transactions.component';
import { PaymentsComponent } from 'src/app/modules/payments/payments.component';
import { ViewquoteComponent } from 'src/app/modules/viewquote/viewquote.component';
import { CreateaccountComponent } from 'src/app/createaccount/createaccount.component';

@NgModule({
  declarations: [
  //LandingloginComponent,
    CreateaccountComponent,
    DefaultComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    ClaimstatusComponent,
    MakeaclaimComponent,
    MyclaimsComponent,
    SoldpoliciesComponent,
    BuypolicyComponent,
    MypoliciesComponent,
    MycommisionComponent,
    NotificationsComponent,
    MystickerComponent,
    TransactionsComponent,
    PaymentsComponent,
    ViewquoteComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  
})
export class DefaultModule { }
