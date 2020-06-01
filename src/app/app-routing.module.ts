import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingloginComponent } from './landinglogin/landinglogin.component';
import { DashboardComponent} from './modules/dashboard/dashboard.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { SoldpoliciesComponent } from './modules/soldpolicies/soldpolicies.component';
import { MycommisionComponent } from './modules/mycommision/mycommision.component';
import { NotificationsComponent } from './modules/notifications/notifications.component';
import { MystickerComponent } from './modules/mysticker/mysticker.component';
import { MyclaimsComponent } from './modules/myclaims/myclaims.component';
import { ClaimstatusComponent } from './modules/claimstatus/claimstatus.component';
import { MakeaclaimComponent } from './modules/makeaclaim/makeaclaim.component';
import { MypoliciesComponent } from './modules/mypolicies/mypolicies.component';
import { BuypolicyComponent } from './modules/buypolicy/buypolicy.component';
import { TransactionsComponent } from './modules/transactions/transactions.component';
import { PaymentsComponent } from './modules/payments/payments.component';
import { ViewquoteComponent } from './modules/viewquote/viewquote.component';
import { DefaultComponent } from './layouts/default/default.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { MotorinsuranceComponent } from './modules/motorinsurance/motorinsurance.component';

const routes: Routes = [
  {path:'', component: LandingloginComponent},
  {path:'', component:DefaultComponent,
  children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'profile', component:ProfileComponent},
    {path:'settings', component:SettingsComponent},
    {path:'soldpolicies', component:SoldpoliciesComponent},
    {path:'mycommision', component:MycommisionComponent},
    {path:'notifications', component:NotificationsComponent}, 
    {path:'mysitcker', component: MystickerComponent},
    {path:'myclaims', component: MyclaimsComponent},
    {path:'claimstatus', component: ClaimstatusComponent},
    {path:'make-a-claim', component: MakeaclaimComponent},
    {path:'mypolicies', component:MypoliciesComponent},
    {path:'buy-and-renew-policy', component:BuypolicyComponent},
    {path:'transactions', component: TransactionsComponent},
    {path:'payments', component: PaymentsComponent},
    {path:'viewquote', component: ViewquoteComponent},
  ]

},
{path:'motorinsurance', component: MotorinsuranceComponent},
{path:'createaccount', component: CreateaccountComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
