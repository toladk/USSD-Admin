import { ReportService } from './../service/report.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ReportUssdSubscriberModel } from '../model/reportussdsubscribermodel';

@Component({
  selector: 'app-subscriberreport',
  templateUrl: './subscriberreport.component.html',
  styleUrls: ['./subscriberreport.component.css']
})
export class SubscriberreportComponent implements OnInit {

  allUssdSubscriberReportList: ReportUssdSubscriberModel[] = [];

  loader = false;
  noData = true;

  // for searching
  searchValue: string;

  // Pagination
  pagination: number = 1;

  constructor(
    private reportService: ReportService,
    private notification: NzNotificationService,
  ) { }

  ngOnInit(): void {

    this.getUssdSubscriberReport();

  }

  // Sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  getUssdSubscriberReport(){
    this.reportService.getUssdSubscriberReport().subscribe((result: any) => {
      this.allUssdSubscriberReportList = result.data;
      this.notification.success( 'Subscriber Report', 'Report Fetch Successfully !!' );
    }, error => {
      this.notification.error( 'Subscriber Report', error.error.data.message )
    });
  }

}
