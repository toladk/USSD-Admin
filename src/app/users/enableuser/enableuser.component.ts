import { AuthenticationService } from './../../authentication/service/authentication.service';
import { UserModel } from './../model/usermodel';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-enableuser',
  templateUrl: './enableuser.component.html',
  styleUrls: ['./enableuser.component.css']
})
export class EnableuserComponent implements OnInit {

  allUsersEnableList: UserModel[] = [];
  enableUserApprovalResult: any;

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
    private userService: UserService,
    private notification: NzNotificationService,
    private nzMessage: NzMessageService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.getAllUsersEnableRequest();
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

  getAllUsersEnableRequest(){
    this.show = true;
    this.show2 = false
    this.userService.getAllUsersEnableRequest().subscribe((result: any) => {
      this.allUsersEnableList = result.data
      this.show = false;
      this.show2 = true
    })
  }

  enableUserApproval(id, userId){
    let approvedBy = localStorage.getItem('username');
    this.userService.enableUserApproval( id, userId, approvedBy).subscribe((result: any) => {
      this.enableUserApprovalResult = result;
      this.getAllUsersEnableRequest();
      this.notification.success( 'Enable User Approval', result.data.responseMessage )
    },error => {
      this.notification.error( 'Enable User Approval',error.error.data.message )
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
