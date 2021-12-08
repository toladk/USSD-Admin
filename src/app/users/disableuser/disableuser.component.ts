import { UserModel } from './../model/usermodel';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-disableuser',
  templateUrl: './disableuser.component.html',
  styleUrls: ['./disableuser.component.css']
})
export class DisableuserComponent implements OnInit {

  allUsersDisableList: UserModel[] = [];
  enableUserApprovalResult: any;

  show =  false;
  show2 = true;

  // for searching
  searchValue: string;

  // Pagination
  pagination: number = 1;

  constructor(
    private userService: UserService,
    private notification: NzNotificationService,
    private nzMessage: NzMessageService
  ) { }

  ngOnInit(): void {

    this.getAllUsersDisableRequest();

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

  getAllUsersDisableRequest(){
    this.show = true;
    this.show2 = false
    this.userService.getAllUsersDisableRequest().subscribe((result: any) => {
      this.allUsersDisableList = result.data
      this.show = false;
      this.show2 = true
    })
  }

  disableUserApproval(id, userId){
    let approvedBy = localStorage.getItem('username');
    this.userService.disableUserApproval( id, userId, approvedBy).subscribe((result: any) => {
      this.enableUserApprovalResult = result;
      this.getAllUsersDisableRequest();
      this.notification.success( 'Disable User Request', result.data.responseMessage )
    },error => {
      this.notification.error( 'Disable User Request',error.error.data.message )
    })
  }

}
