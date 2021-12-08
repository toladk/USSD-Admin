import { LimitIncreaseReportModel } from './../model/reportlimitincrease';
import { ReportService } from './../service/report.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-limitincreasereport',
  templateUrl: './limitincreasereport.component.html',
  styleUrls: ['./limitincreasereport.component.css']
})
export class LimitincreasereportComponent implements OnInit {

  limitIncreaseReportForm: FormGroup;

  allLimitIncreaseReportList: LimitIncreaseReportModel[] = [];

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
    this.limitIncreaseReportForm = this.formBuilder.group({
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
    this.limitIncreaseReportForm.reset();
  }

  getReport(){
    this.reportBtn = false
    this.reportBtn2 = true
    this.limitIncreaseReportForm.value.startDate = this.datepipe.transform(this.limitIncreaseReportForm.value.startDate, 'dd-MM-yyyy');
    this.limitIncreaseReportForm.value.endDate = this.datepipe.transform(this.limitIncreaseReportForm.value.endDate, 'dd-MM-yyyy');
    this.reportService.getLimitIncreaseReport(this.limitIncreaseReportForm.value.startDate, this.limitIncreaseReportForm.value.endDate).subscribe((result: any) => {
      this.allLimitIncreaseReportList = result.data;
      // this.clearForm();
      this.notification.success( 'Limit Increase Report', 'Report Fetch Successfully !!' )
      this.show3 = true;
      this.reportBtn = true;
      this.reportBtn2 = false;
      this.downloadBtn = true;
    }, error => {
      this.reportBtn = true;
      this.reportBtn2 = false;
      this.notification.error( 'Limit Increase Report', error.error.data.message )
    })
  }

  downloadReport(){
    this.reportService.exportAsExcelFile(this.allLimitIncreaseReportList, 'Report');
  }

}
