import { Pipe, PipeTransform } from '@angular/core';
import { AirtimeReportModel } from '../model/reportairtime';

@Pipe({
  name: 'airtimereportfilter'
})
export class AirtimereportfilterPipe implements PipeTransform {

  transform( tableData: AirtimeReportModel[], searchValue: string ): AirtimeReportModel[] {
    if (!tableData || !searchValue) {
      return tableData;
    }
    return tableData.filter(details =>
      details.transactionAmount.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.accountNumber.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.transactionDate.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.transactionId.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.transactionResponse.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.userId.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())

    );
  }

}
