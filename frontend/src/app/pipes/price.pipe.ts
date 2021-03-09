import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price: number): string {
    const priceFormated = (Math.abs(price / 100)).toFixed(2)
    if (isNaN(price)) {
      return 'N/A'
    }
    if (price >= 0) {
      return '$' + priceFormated
    }
    return '-$' + priceFormated
  }

}
