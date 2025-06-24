import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'currencyConverter',
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    console.log('args', args)
    let [data] = args
    return value + data
  }
}
