import { AuthenticationService } from './../../authentication/service/authentication.service';
import { UssdService } from './../service/ussd.service';
import { UssdModel } from './../model/ussdmodel';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-approveussd',
  templateUrl: './approveussd.component.html',
  styleUrls: ['./approveussd.component.css']
})
export class ApproveussdComponent implements OnInit {

  allPendingLimitsRequestList: UssdModel[] = [];
  approvelimitRequestResult: any;

  show =  false;
  show2 = true;

  userDetails: any;
  usernameResult = [];
  permissionList = [];

  // for searching
  searchValue: string;

  // Pagination
  pagination: number = 1;

  constructor(
    private ussdService: UssdService,
    private notification: NzNotificationService,
    private nzMessage: NzMessageService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.getAllPendingLimitsRequest();
    this.getUserDetails();

  }

  // Sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  cancel(): void {
    this.nzMessage.success('Cancelled');
  }

  getAllPendingLimitsRequest(){
    this.show = true;
    this.show2 = false
    this.ussdService.getAllPendingLimitsRequest().subscribe((result: any) => {
      this.allPendingLimitsRequestList = result.data
      this.show = false;
      this.show2 = true
    })
  }

  approveLimitRequest(id){
    let approvedBy = localStorage.getItem('username');
    let isApproved = true;
    this.ussdService.approveLimitRequest( id, approvedBy, isApproved).subscribe((result: any) => {
      this.approvelimitRequestResult = result;
      this.getAllPendingLimitsRequest();
      this.notification.success( 'Approve Limit Request', result.data.message || result.data.responseMessage )
    },error => {
      this.notification.error( 'Approve Limit Request',error.error.data.message )
    })
  }

  getUserDetails(){
    let username = localStorage.getItem('username');
    this.authenticationService.getUserByUsername(username).subscribe((result: any) => {
      this.userDetails = result;
      this.usernameResult = result.roles;
      let centralAdminRole = this.usernameResult.find(x => x.applicationName === "USSD");
      if(centralAdminRole === undefined){
      }
      else{
        console.log('checking Application Name', centralAdminRole);
        centralAdminRole.permissions.forEach(permission => {
          this.permissionList.push(permission.name);
        });
        console.log("permissions",this.permissionList);
      }
    })
  }

}
