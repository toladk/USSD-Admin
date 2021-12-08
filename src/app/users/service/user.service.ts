
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(){
    return this.http.get(`${environment.baseUrl}/getAllUsers`, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  enableUserRequest( id, userId, modifiedBy){
    let payload = { id, userId, modifiedBy }
    return this.http.post<any>(`${environment.baseUrl}/ussdUserEnableProfileRequest`, payload, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  disableUserRequest(id, userId, modifiedBy){
    let payload = { id, userId, modifiedBy }
    return this.http.post<any>(`${environment.baseUrl}/ussdUserDisableProfileRequest`, payload, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  getAllUsersEnableRequest(){
    return this.http.get(`${environment.baseUrl}/getAllUssdUserEnableRequest`, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  enableUserApproval(id, userId, approvedBy){
    let payload = { id, userId, approvedBy }
    return this.http.post<any>(`${environment.baseUrl}/ussdUserEnableProfileApproval`, payload, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  getAllUsersDisableRequest(){
    return this.http.get(`${environment.baseUrl}/getAllUssdUserDisableRequest`, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  disableUserApproval(id, userId, approvedBy){
    let payload = { id, userId, approvedBy }
    return this.http.post<any>(`${environment.baseUrl}/ussdUserDisableProfileApproval`, payload, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

}
