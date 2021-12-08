import { ReportService } from './../service/report.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ReportProfileModel } from '../model/reportprofilemodel';

@Component({
  selector: 'app-profilereport',
  templateUrl: './profilereport.component.html',
  styleUrls: ['./profilereport.component.css']
})
export class ProfilereportComponent implements OnInit {

  allUssdProfileReportList: ReportProfileModel[] = [];

  loader = false;
  noData = true;

  // for searching
  searchValue: string;

  // Pagination
  pagination: number = 1

  constructor(
    private reportService: ReportService,
    private notification: NzNotificationService,
  ) { }

  ngOnInit(): void {

    this.getUssdProfileReport();

  }

  // Sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  getUssdProfileReport(){
    this.reportService.getProfileReport().subscribe((result: any) => {
      this.allUssdProfileReportList = result.data;
      this.notification.success( 'Profile Report', 'Report Fetch Successfully !!' );
    }, error => {
      this.notification.error( 'Profile Report', error.error.data.message );
    });
  }

}
