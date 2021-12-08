import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient
  ) { }

  getReport( startDate: Date, endDate: Date ){
    const params = new HttpParams()
      .set('startDate', startDate.toLocaleString('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric' }))
      .set('endDate', endDate.toLocaleString('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric' }));
    return this.http.get(`${environment.baseUrl}/report?${params}`, {headers: {
      Authorization: `Bearer ${localStorage.token}`
    }});
  }

  // For Exporting Excel
  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const myworkbook: XLSX.WorkBook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
  }

  getUssdSubscriberReport(){
    return this.http.get(`${environment.baseUrl}/getAllUsers`, {headers: {
      Authorization: `Bearer ${localStorage.token}`
    }});
  }

  getProfileReport(){
    return this.http.get(`${environment.baseUrl}/getAllUssdUserRequest`, {headers: {
      Authorization: `Bearer ${localStorage.token}`
    }});
  }

  getAirtimeReport( startDate: Date, endDate: Date ){
    const params = new HttpParams()
      .set('startDate', startDate.toLocaleString('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric' }))
      .set('endDate', endDate.toLocaleString('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric' }));
    return this.http.get(`${environment.baseUrl}/ussdAirtimeReport?${params}`, {headers: {
      Authorization: `Bearer ${localStorage.token}`
    }});
  }

  fundTransferReport( startDate: Date, endDate: Date ){
    const params = new HttpParams()
      .set('startDate', startDate.toLocaleString('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric' }))
      .set('endDate', endDate.toLocaleString('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric' }));
    return this.http.get(`${environment.baseUrl}/ussdFundTransferReport?${params}`, {headers: {
      Authorization: `Bearer ${localStorage.token}`
    }});
  }

  getBillPaymentReport( startDate: Date, endDate: Date ){
    const params = new HttpParams()
      .set('startDate', startDate.toLocaleString('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric' }))
      .set('endDate', endDate.toLocaleString('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric' }));
    return this.http.get(`${environment.baseUrl}/ussdBillPaymentReport?${params}`, {headers: {
      Authorization: `Bearer ${localStorage.token}`
    }});
  }

  getLimitIncreaseReport( startDate: Date, endDate: Date ){
    const params = new HttpParams()
      .set('startDate', startDate.toLocaleString('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric' }))
      .set('endDate', endDate.toLocaleString('fr-CA', { day: '2-digit', month: '2-digit', year: 'numeric' }));
    return this.http.get(`${environment.baseUrl}/ussdLimitIncreaseReport?${params}`, {headers: {
      Authorization: `Bearer ${localStorage.token}`
    }});
  }

}
