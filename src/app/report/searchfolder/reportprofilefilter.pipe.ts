import { ReportProfileModel } from './../model/reportprofilemodel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reportprofilefilter'
})
export class ReportprofilefilterPipe implements PipeTransform {

  transform( tableData: ReportProfileModel[], searchValue: string ): ReportProfileModel[] {
    if (!tableData || !searchValue) {
      return tableData
    }
    return tableData.filter(details =>
      details.id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.initiator.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.date.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.disablingUssdProfileModifiedBy.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.activity.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
