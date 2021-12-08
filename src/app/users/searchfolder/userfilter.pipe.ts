import { UserModel } from './../model/usermodel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  transform( tableData: UserModel[], searchValue: string ): UserModel[] {
    if (!tableData || !searchValue) {
      return tableData
    }
    return tableData.filter(details =>
      details.defaultAccount.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.friendlyName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.userId.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
