import { ReportModel } from './../model/reportmodel';
import { ReportService } from './../service/report.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-reportsheet',
  templateUrl: './reportsheet.component.html',
  styleUrls: ['./reportsheet.component.css']
})
export class ReportsheetComponent implements OnInit {

  reportForm: FormGroup;

  allUssdReportList: ReportModel[] = [];

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
    this.reportForm = this.formBuilder.group({
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
    this.reportForm.reset();
  }

  getReport(){
    this.reportBtn = false
    this.reportBtn2 = true
    this.reportForm.value.startDate = this.datepipe.transform(this.reportForm.value.startDate, 'dd-MM-yyyy');
    this.reportForm.value.endDate = this.datepipe.transform(this.reportForm.value.endDate, 'dd-MM-yyyy');
    this.reportService.getReport(this.reportForm.value.startDate, this.reportForm.value.endDate).subscribe((result: any) => {
      this.allUssdReportList = result.data;
      // this.clearForm();
      this.notification.success( 'Report', 'Report Fetch Successfully !!' )
      this.show3 = true;
      this.reportBtn = true;
      this.reportBtn2 = false;
      this.downloadBtn = true;
    },error => {
      this.reportBtn = true;
      this.reportBtn2 = false;
      this.notification.error( 'Report',error.error.data.message )
    })
  }

  downloadReport(){
    this.reportService.exportAsExcelFile(this.allUssdReportList, 'Report');
  }

}
