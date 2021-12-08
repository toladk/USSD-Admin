import { PinModel } from './../model/pinmodel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pinfilter'
})
export class PinfilterPipe implements PipeTransform {

  transform( tableData: PinModel[], searchValue: string ): PinModel[] {
    if (!tableData || !searchValue) {
      return tableData
    }
    return tableData.filter(details =>
      details.defaultAccount.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.friendlyName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.userId.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.modifiedBy.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
