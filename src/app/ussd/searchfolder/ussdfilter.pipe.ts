import { UssdModel } from './../model/ussdmodel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ussdfilter'
})
export class UssdfilterPipe implements PipeTransform {

  transform( tableData: UssdModel[], searchValue: string ): UssdModel[] {
    if (!tableData || !searchValue) {
      return tableData
    }
    return tableData.filter(details =>
      details.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.maximumTransactionValue.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.maximumDailyTransaction.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
