import { AuthenticationService } from './../../authentication/service/authentication.service';
import { UserModel } from './../model/usermodel';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {

  show =  false;
  show2 = true;

  // for searching
  searchValue: string;

  userDetails: any;
  usernameResult = [];
  permissionList = [];

  // Pagination
  pagination: number = 1;

  allUsersList: UserModel[] = [];
  enableRequestResult: any;

  constructor(
    private userService: UserService,
    private notification: NzNotificationService,
    private nzMessage: NzMessageService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.getAllUsers();
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

  getAllUsers(){
    this.show = true;
    this.show2 = false
    this.userService.getAllUsers().subscribe((result: any) => {
      this.allUsersList = result.data
      this.show = false;
      this.show2 = true
    })
  }

  enableUserRequest(id, userId){
    let modifiedBy = localStorage.getItem('username');
    this.userService.enableUserRequest( id, userId, modifiedBy).subscribe((result: any) => {
      this.enableRequestResult = result;
      this.getAllUsers()
      this.notification.success( 'Enable Request', result.data.responseMessage )
    },error => {
      this.notification.error( 'Enable Request',error.error.data.message )
    })
  }

  disableUserRequest(id, userId){
    let modifiedBy = localStorage.getItem('username');
    this.userService.disableUserRequest( id, userId, modifiedBy).subscribe((result: any) => {
      this.enableRequestResult = result;
      this.getAllUsers()
      this.notification.success( 'Disable Request', result.data.responseMessage )
    },error => {
      this.notification.error( 'Disable Request',error.error.data.message )
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
