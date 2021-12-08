import { AirtimeReportModel } from './../model/reportairtime';
import { ReportService } from './../service/report.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-airtimereport',
  templateUrl: './airtimereport.component.html',
  styleUrls: ['./airtimereport.component.css']
})
export class AirtimereportComponent implements OnInit {

  airtimeReportForm: FormGroup;

  allAirtimeReportList: AirtimeReportModel[] = [];

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
    this.airtimeReportForm = this.formBuilder.group({
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
    this.airtimeReportForm.reset();
  }

  getReport(){
    this.reportBtn = false
    this.reportBtn2 = true
    this.airtimeReportForm.value.startDate = this.datepipe.transform(this.airtimeReportForm.value.startDate, 'dd-MM-yyyy');
    this.airtimeReportForm.value.endDate = this.datepipe.transform(this.airtimeReportForm.value.endDate, 'dd-MM-yyyy');
    this.reportService.getAirtimeReport(this.airtimeReportForm.value.startDate, this.airtimeReportForm.value.endDate).subscribe((result: any) => {
      this.allAirtimeReportList = result.data;
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
    this.reportService.exportAsExcelFile(this.allAirtimeReportList, 'Report');
  }

}

