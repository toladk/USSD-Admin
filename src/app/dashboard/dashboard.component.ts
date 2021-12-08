import { DashboardService } from './service/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isCollapsed = false;
  visible = false;
  allPinResetRequest = [];
  allUsers = [];
  allUssdLimit = [];
  userEnableRequest = [];
  userDisableRequest = [];

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {

    this.getAllPinResetUsersRequest();
    this.getAllUsers();
    this.getAllUssdLimits();
    this.getAllUsersEnableRequest();
    this.getAllUsersDisableRequest();

  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  getAllPinResetUsersRequest(){
    this.dashboardService.getAllPinResetUsersRequest().subscribe((result: any) => {
      this.allPinResetRequest = result.data;
    })
  }

  getAllUsers(){
    this.dashboardService.getAllUsers().subscribe((result: any) => {
      this.allUsers = result.data;
    })
  }

  getAllUssdLimits(){
    this.dashboardService.getAllUssdLimits().subscribe((result: any) => {
      this.allUssdLimit = result.data;
    })
  }

  getAllUsersEnableRequest(){
    this.dashboardService.getAllUsersEnableRequest().subscribe((result: any) => {
      this.userEnableRequest = result.data;
    })
  }

  getAllUsersDisableRequest(){
    this,this.dashboardService.getAllUsersDisableRequest().subscribe((result: any) => {
      this.userDisableRequest = result.data;
    })
  }

}
