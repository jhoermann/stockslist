import { Pipe, PipeTransform } from '@angular/core'
const moment = require('moment')

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: string): string {
    return moment(date).format('YYYY-MM-DD')
  }

}
