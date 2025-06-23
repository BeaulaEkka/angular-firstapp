import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return value + 85
  }
}
