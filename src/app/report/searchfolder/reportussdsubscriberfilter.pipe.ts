import { Pipe, PipeTransform } from '@angular/core';
import { ReportUssdSubscriberModel } from '../model/reportussdsubscribermodel';

@Pipe({
  name: 'reportussdsubscriberfilter'
})
export class ReportussdsubscriberfilterPipe implements PipeTransform {

  transform( tableData: ReportUssdSubscriberModel[], searchValue: string ): ReportUssdSubscriberModel[] {
    if (!tableData || !searchValue) {
      return tableData
    }
    return tableData.filter(details =>
      details.userId.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.friendlyName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.defaultAccount.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.dateCreated.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
