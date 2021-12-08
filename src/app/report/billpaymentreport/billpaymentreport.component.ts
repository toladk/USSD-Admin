import { AirtimeReportModel } from './../model/reportairtime';
import { ReportService } from './../service/report.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-billpaymentreport',
  templateUrl: './billpaymentreport.component.html',
  styleUrls: ['./billpaymentreport.component.css']
})
export class BillpaymentreportComponent implements OnInit {

  billPaymentReportForm: FormGroup;

  allBillPaymentReportList: AirtimeReportModel[] = [];

  drawerOpen = false;

  show =  false;
  show2 = true;
  show3 = false;
  reportBtn = true;
  reportBtn2 = false;
  downloadBtn = false;

  // for searching
  searchValue: string;

  // Pagination
  pagination: number = 1;

  constructor(
    private reportService: ReportService,
    private notification: NzNotificationService,
    private formBuilder: FormBuilder,
    private datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.billPaymentReportForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  // Sorting
  key: string = 'userId';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  clearForm(){
    this.billPaymentReportForm.reset();
  }

  getReport(){
    this.reportBtn = false
    this.reportBtn2 = true
    this.billPaymentReportForm.value.startDate = this.datepipe.transform(this.billPaymentReportForm.value.startDate, 'dd-MM-yyyy');
    this.billPaymentReportForm.value.endDate = this.datepipe.transform(this.billPaymentReportForm.value.endDate, 'dd-MM-yyyy');
    this.reportService.getBillPaymentReport(this.billPaymentReportForm.value.startDate, this.billPaymentReportForm.value.endDate).subscribe((result: any) => {
      this.allBillPaymentReportList = result.data;
      // this.clearForm();
      this.notification.success( 'Airtime Report', 'Report Fetch Successfully !!' )
      this.show3 = true;
      this.reportBtn = true;
      this.reportBtn2 = false;
      this.downloadBtn = true;
    }, error => {
      this.reportBtn = true;
      this.reportBtn2 = false;
      this.notification.error( 'Report', error.error.data.message )
    })
  }

  downloadReport(){
    this.reportService.exportAsExcelFile(this.allBillPaymentReportList, 'Report');
  }

}
