import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UssdService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPendingLimitsRequest(){
    return this.http.get(`${environment.baseUrl}/getAllPendingLimitsRequest`, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  approveLimitRequest(id, approvedBy, isApproved){
    let payload = { id, approvedBy, isApproved }
    return this.http.post<any>(`${environment.baseUrl}/ussdLimitChangeApproval`, payload, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  getAllUssdLimits(){
    return this.http.get(`${environment.baseUrl}/getAllLimits`, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

  ussdLimitChangeRequest(payload){
    return this.http.post<any>(`${environment.baseUrl}/ussdLimitChangeRequest`, payload, {headers: {
      Authorization: `${localStorage.token}`
    }})
  }

}
