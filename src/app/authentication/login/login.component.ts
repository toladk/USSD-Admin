import { AuthenticationService } from './../service/authentication.service';
import { JarwisService } from './../service/jarwis.service';
import { TokenService } from './../service/token.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;

  loginButton = true;
  loginButton2 = false;

  userDetails: any;
  usernameResult = [];
  permissionList = [];

  error = '';
  hide = true;
  submitted = false;

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jarwis: JarwisService,
    private token: TokenService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }else {
      this.loginButton = false;
      this.loginButton2 = true;
      this.jarwis.login(this.loginForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
      );
    }
  }

  handleResponse(data){
    localStorage.setItem('username', this.loginForm.value.username);
    this.token.handle(data.value);
    this.authenticationService.changeAuthStatus(true);
    this.router.navigateByUrl('app/dashboard').then(() => {window.location.reload();});;
  }

  handleError(error){
    this.loginButton = true;
    this.loginButton2 = false;
    error = this.notification.error( 'Login', error.error.Error );
      // console.log(error);
  }


}
