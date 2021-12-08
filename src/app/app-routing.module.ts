import { LimitincreasereportComponent } from './report/limitincreasereport/limitincreasereport.component';
import { BillpaymentreportComponent } from './report/billpaymentreport/billpaymentreport.component';
import { FundtransferreportComponent } from './report/fundtransferreport/fundtransferreport.component';
import { AirtimereportComponent } from './report/airtimereport/airtimereport.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imported Component
import { ApplayoutComponent } from './layout/applayout/applayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './authentication/login/login.component';
import { EnableuserComponent } from './users/enableuser/enableuser.component';
import { DisableuserComponent } from './users/disableuser/disableuser.component';
import { ManageuserComponent } from './users/manageuser/manageuser.component';
import { ReportsheetComponent } from './report/reportsheet/reportsheet.component';
import { UssdlimitComponent } from './ussd/ussdlimit/ussdlimit.component';
import { ResetpinComponent } from './pin/resetpin/resetpin.component';
import { ApprovepinComponent } from './pin/approvepin/approvepin.component';
import { ProfilereportComponent } from './report/profilereport/profilereport.component';
import { SubscriberreportComponent } from './report/subscriberreport/subscriberreport.component';
import { ApproveussdComponent } from './ussd/approveussd/approveussd.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent ,
  },

  {
    path : 'app',
    component : ApplayoutComponent ,
    children : [
      {
        path : '',
        redirectTo : 'dashboard',
        pathMatch : 'full'
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'manage-user',
        component : ManageuserComponent
      },
      {
        path : 'disable-user',
        component : DisableuserComponent
      },
      {
        path : 'enable-user',
        component : EnableuserComponent
      },
      {
        path : 'approve-pin',
        component : ApprovepinComponent
      },
      {
        path : 'reset-pin',
        component : ResetpinComponent
      },
      {
        path : 'ussd-limit',
        component : UssdlimitComponent
      },
      {
        path : 'approve-limit',
        component : ApproveussdComponent
      },
      {
        path : 'report',
        component : ReportsheetComponent
      },
      {
        path : 'profile-report',
        component : ProfilereportComponent
      },
      {
        path : 'sub-report',
        component : SubscriberreportComponent
      },
      {
        path : 'airtime-report',
        component : AirtimereportComponent
      },
      {
        path : 'fund-transfer-report',
        component : FundtransferreportComponent
      },
      {
        path : 'bill-payment-report',
        component : BillpaymentreportComponent
      },
      {
        path : 'limit-increase-report',
        component : LimitincreasereportComponent
      },
      {
        path : '**',
        redirectTo : ''
      }
    ]
  },

  {
    path : '**',
    redirectTo : ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
