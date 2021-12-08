import { AuthenticationService } from './../../authentication/service/authentication.service';
import { UssdService } from './../service/ussd.service';
import { UssdModel } from './../model/ussdmodel';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ussdlimit',
  templateUrl: './ussdlimit.component.html',
  styleUrls: ['./ussdlimit.component.css']
})
export class UssdlimitComponent implements OnInit {

  limitForm: FormGroup;

  allUssdLimitList: UssdModel[] = [];
  approvelimitRequestResult: any;
  limitName: any;
  id: any;
  limitResult: any;
  modifiedBy: any;

  userDetails: any;
  usernameResult = [];
  permissionList = [];

  drawerOpen = false;

  show =  false;
  show2 = true;

  // for searching
  searchValue: string;

  // Pagination
  pagination: number = 1;


  constructor(
    private ussdService: UssdService,
    private notification: NzNotificationService,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {

  }

  ngOnInit(): void {
    this.limitForm = this.formBuilder.group({
      id: [''],
      modifiedBy: [''],
      name: [''],
      description: ['', Validators.required],
      maximumDailyTransaction: ['', Validators.required],
      maximumTransactionValue: ['', Validators.required]
    });

    this.getAllUssdLimits();
    this.getUserDetails();

  }

  open(): void {
    this.drawerOpen = true;
  }
  close(){
    this.drawerOpen = false;
  }

  // Sorting
  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  clearForm(){
    this.limitForm.reset();
  }

  sendLimitReq(id, name){
    this.id = id;
    this.limitName = name;
    this.open();
    this.modifiedBy = localStorage.getItem('username');
  }

  sendLimitRequest(){
    this.limitForm.value.id = this.id;
    this.limitForm.value.modifiedBy = this.modifiedBy;
    this.limitForm.value.name = this.limitName;
    this.limitForm.value.maximumDailyTransaction = parseFloat(this.limitForm.value.maximumDailyTransaction).toFixed(2);
    this.limitForm.value.maximumTransactionValue = parseFloat(this.limitForm.value.maximumTransactionValue).toFixed(2);
    this.ussdService.ussdLimitChangeRequest(this.limitForm.value).subscribe((result: any) => {
      this.limitResult = result;
      this.getAllUssdLimits();
      this.close();
      this.clearForm();
      this.notification.success( 'Limit Request', result.data.message || result.data.responseMessage )
    },error => {
      this.close();
      this.clearForm();
      this.notification.error( 'Limit Request',error.error.data.message )
    })
  }

  getAllUssdLimits(){
    this.show = true;
    this.show2 = false;
    this.ussdService.getAllUssdLimits().subscribe((result: any) => {
      this.allUssdLimitList = result.data;
      this.show = false;
      this.show2 = true;
    })
  }

  getUserDetails(){
    const username = localStorage.getItem('username');
    this.authenticationService.getUserByUsername(username).subscribe((result: any) => {
      this.userDetails = result;
      this.usernameResult = result.roles;
      const centralAdminRole = this.usernameResult.find(x => x.applicationName === 'USSD');
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
