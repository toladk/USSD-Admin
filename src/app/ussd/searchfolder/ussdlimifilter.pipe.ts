import { UssdModel } from './../model/ussdmodel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ussdlimifilter'
})
export class UssdlimifilterPipe implements PipeTransform {

  transform( tableData: UssdModel[], searchValue: string ): UssdModel[] {
    if (!tableData || !searchValue) {
      return tableData
    }
    return tableData.filter(details =>
      details.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
