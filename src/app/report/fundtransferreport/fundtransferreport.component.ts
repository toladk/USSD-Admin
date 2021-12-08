import { FundTransferReportModel } from './../model/reportfundtransfer';
import { ReportService } from './../service/report.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-fundtransferreport',
  templateUrl: './fundtransferreport.component.html',
  styleUrls: ['./fundtransferreport.component.css']
})
export class FundtransferreportComponent implements OnInit {

  fundTransferReportForm: FormGroup;

  allFundTransferReportList: FundTransferReportModel[] = [];

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
    this.fundTransferReportForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  // Sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  clearForm(){
    this.fundTransferReportForm.reset();
  }

  getReport(){
    this.reportBtn = false
    this.reportBtn2 = true
    this.fundTransferReportForm.value.startDate = this.datepipe.transform(this.fundTransferReportForm.value.startDate, 'dd-MM-yyyy');
    this.fundTransferReportForm.value.endDate = this.datepipe.transform(this.fundTransferReportForm.value.endDate, 'dd-MM-yyyy');
    this.reportService.fundTransferReport(this.fundTransferReportForm.value.startDate, this.fundTransferReportForm.value.endDate).subscribe((result: any) => {
      this.allFundTransferReportList = result.data;
      // this.clearForm();
      this.notification.success( 'Fund Transfer Report', 'Report Fetch Successfully !!' )
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
    this.reportService.exportAsExcelFile(this.allFundTransferReportList, 'Report');
  }

}
