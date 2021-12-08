import { Pipe, PipeTransform } from '@angular/core';
import { FundTransferReportModel } from '../model/reportfundtransfer';

@Pipe({
  name: 'fundtransferreportfilter'
})
export class FundtransferreportfilterPipe implements PipeTransform {

  transform( tableData: FundTransferReportModel[], searchValue: string ): FundTransferReportModel[] {
    if (!tableData || !searchValue) {
      return tableData
    }
    return tableData.filter(details =>
      details.transactionAmount.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.accountNumber.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.transactionDate.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.transactionId.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.transactionResponse.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.beneficiary.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.valueDate.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.destinationAccount.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.userId.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())

    );
  }

}
