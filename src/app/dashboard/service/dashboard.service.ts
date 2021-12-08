import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }


  getAllPinResetUsersRequest(){
    return this.http.get(`${environment.baseUrl}/getAllPinResetUsersRequest`, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  getAllUsers(){
    return this.http.get(`${environment.baseUrl}/getAllUsers`, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  getAllUssdLimits(){
    return this.http.get(`${environment.baseUrl}/getAllLimits`, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  getAllUsersEnableRequest(){
    return this.http.get(`${environment.baseUrl}/getAllUssdUserEnableRequest`, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  getAllUsersDisableRequest(){
    return this.http.get(`${environment.baseUrl}/getAllUssdUserDisableRequest`, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

}
