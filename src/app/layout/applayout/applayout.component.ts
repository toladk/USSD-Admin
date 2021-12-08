import { AuthenticationService } from './../../authentication/service/authentication.service';
import { TokenService } from './../../authentication/service/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-applayout',
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.css']
})
export class ApplayoutComponent implements OnInit {

  isCollapsed = false;
  userDetails: any;

  usernameResult = [];
  permissionList = [];

  constructor(
    private tokenService: TokenService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {

    this.getUserDetails();

  }

  LogOut(): void{
    this.tokenService.logout();
    this.authenticationService.changeAuthStatus(false);
  }

  getUserDetails(): void{
    const username = localStorage.getItem('username');
    this.authenticationService.getUserByUsername(username).subscribe((result: any) => {
      this.userDetails = result;
      this.usernameResult = result.roles;
      const centralAdminRole = this.usernameResult.find(x => x.applicationName === 'USSD');
      if (centralAdminRole === undefined){
        this.router.navigateByUrl('/login');
        this.notification.success( 'Permission', 'You dont have permission to view this application !!' );
      }
      else{
        console.log('checking Application Name', centralAdminRole);
        centralAdminRole.permissions.forEach(permission => {
          this.permissionList.push(permission.name);
        });
        console.log('permissions', this.permissionList);
      }
    });
  }

}
