import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PinService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPinResetUsersRequest(){
    return this.http.get(`${environment.baseUrl}/getAllPinResetUsersRequest`, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  approvePinResetRequest(id, userId, approvedBy, isApproved, defaultAccount){
    let payload = { id, userId, approvedBy, isApproved, defaultAccount }
    return this.http.post<any>(`${environment.baseUrl}/ussdUserPinResetApproval`, payload, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  sendPinResetRequest(id, userId, modifiedBy, dateOfBirth, defaultAccount){
    let payload = { id, userId, modifiedBy, dateOfBirth, defaultAccount }
    return this.http.post<any>(`${environment.baseUrl}/ussdUserPinResetRequest`, payload, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

}
