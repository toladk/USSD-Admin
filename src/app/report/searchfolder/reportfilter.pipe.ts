import { ReportModel } from './../model/reportmodel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reportfilter'
})
export class ReportfilterPipe implements PipeTransform {

  transform( tableData: ReportModel[], searchValue: string ): ReportModel[] {
    if (!tableData || !searchValue) {
      return tableData
    }
    return tableData.filter(details =>
      details.amount.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.category.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.count.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      details.type.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
