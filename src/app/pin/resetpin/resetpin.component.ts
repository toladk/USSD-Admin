import { PinService } from './../service/pin.service';
import { PinModel } from './../model/pinmodel';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DatePipe } from '@angular/common'
import { AuthenticationService } from './../../authentication/service/authentication.service';

@Component({
  selector: 'app-resetpin',
  templateUrl: './resetpin.component.html',
  styleUrls: ['./resetpin.component.css']
})
export class ResetpinComponent implements OnInit {

  allPinResetUsersList: PinModel[] = [];
  approvePinResetRequestResult: any;

  show =  false;
  show2 = true;

  userDetails: any;
  usernameResult = [];
  permissionList = [];

  // for searching
  searchValue: string;

  // Pagination
  pagination: number = 1;

  convertBirthDate: any;

  constructor(
    private pinService: PinService,
    private notification: NzNotificationService,
    private nzMessage: NzMessageService,
    private datepipe: DatePipe,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.getAllPinResetUsersRequest();
    this.getUserDetails();

  }

  // Sorting
  key: string = 'id';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  cancel(): void {
    this.nzMessage.success('Cancelled');
  }

  getAllPinResetUsersRequest(){
    this.show = true;
    this.show2 = false
    this.pinService.getAllPinResetUsersRequest().subscribe((result: any) => {
      this.allPinResetUsersList = result.data
      this.show = false;
      this.show2 = true
    })
  }

  sendPinResetRequest(id, userId, defaultAccount, birthDate ){
    let modifiedBy = localStorage.getItem('username');
    this.convertBirthDate = this.datepipe.transform(birthDate, 'dd-MM-yyyy')
    this.pinService.sendPinResetRequest( id, userId, modifiedBy, this.convertBirthDate, defaultAccount).subscribe((result: any) => {
      this.approvePinResetRequestResult = result;
      this.getAllPinResetUsersRequest();
      this.notification.success( 'Send Pin Reset Request', result.data.message || result.data.responseMessage )
    },error => {
      this.notification.error( 'Send Pin Reset Request',error.error.data.message )
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
