import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price: number): string {
    return '$' + (price / 100).toFixed(2)
  }

}
