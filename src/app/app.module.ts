import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { DatePipe, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { UseErrorInterceptor } from './authentication/service/error.interceptor';

// ANT JS;
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';


import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplayoutComponent } from './layout/applayout/applayout.component';
import { ManageuserComponent } from './users/manageuser/manageuser.component';
import { EnableuserComponent } from './users/enableuser/enableuser.component';
import { DisableuserComponent } from './users/disableuser/disableuser.component';
import { UserfilterPipe } from './users/searchfolder/userfilter.pipe';
import { ApprovepinComponent } from './pin/approvepin/approvepin.component';
import { ResetpinComponent } from './pin/resetpin/resetpin.component';
import { PinfilterPipe } from './pin/searchfolder/pinfilter.pipe';
import { UssdlimitComponent } from './ussd/ussdlimit/ussdlimit.component';
import { ReportsheetComponent } from './report/reportsheet/reportsheet.component';
import { ReportfilterPipe } from './report/searchfolder/reportfilter.pipe';
import { ApproveussdComponent } from './ussd/approveussd/approveussd.component';
import { UssdfilterPipe } from './ussd/searchfolder/ussdfilter.pipe';
import { UssdlimifilterPipe } from './ussd/searchfolder/ussdlimifilter.pipe';
import { ProfilereportComponent } from './report/profilereport/profilereport.component';
import { SubscriberreportComponent } from './report/subscriberreport/subscriberreport.component';
import { ReportussdsubscriberfilterPipe } from './report/searchfolder/reportussdsubscriberfilter.pipe';
import { ReportprofilefilterPipe } from './report/searchfolder/reportprofilefilter.pipe';
import { AirtimereportComponent } from './report/airtimereport/airtimereport.component';
import { FundtransferreportComponent } from './report/fundtransferreport/fundtransferreport.component';
import { AirtimereportfilterPipe } from './report/searchfolder/airtimereportfilter.pipe';
import { FundtransferreportfilterPipe } from './report/searchfolder/fundtransferreportfilter.pipe';
import { BillpaymentreportComponent } from './report/billpaymentreport/billpaymentreport.component';
import { LimitincreasereportComponent } from './report/limitincreasereport/limitincreasereport.component';
import { LimitincreasereportfilterPipe } from './report/searchfolder/limitincreasereportfilter.pipe';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ApplayoutComponent,
    ManageuserComponent,
    EnableuserComponent,
    DisableuserComponent,
    UserfilterPipe,
    ApprovepinComponent,
    ResetpinComponent,
    PinfilterPipe,
    UssdlimitComponent,
    ReportsheetComponent,
    ReportfilterPipe,
    ApproveussdComponent,
    UssdfilterPipe,
    UssdlimifilterPipe,
    ProfilereportComponent,
    SubscriberreportComponent,
    ReportussdsubscriberfilterPipe,
    ReportprofilefilterPipe,
    AirtimereportComponent,
    FundtransferreportComponent,
    AirtimereportfilterPipe,
    FundtransferreportfilterPipe,
    BillpaymentreportComponent,
    LimitincreasereportComponent,
    LimitincreasereportfilterPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzToolTipModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzMessageModule,
    NzTabsModule,
    NzTableModule,
    NzDrawerModule,
    NzFormModule,
    NzSelectModule,
    NzIconModule,
    NzDatePickerModule,
    NzInputModule,
    NzStepsModule,
    NzListModule,
    NzResultModule,
    NzGridModule,
    NzUploadModule,
    NzNotificationModule,
    NzPopconfirmModule,
    NzInputNumberModule,
    NzSkeletonModule,
    NzBadgeModule,
    NzModalModule,
    NzCollapseModule,
    NzDropDownModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [UseErrorInterceptor, { provide: NZ_I18N, useValue: en_US }, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
