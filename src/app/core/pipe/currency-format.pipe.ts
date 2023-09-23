import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number | string): string {
    if (typeof value === 'string') {
      value = parseFloat(value);
    }

    if (!isNaN(value)) {
      // Định dạng số tiền thành mệnh giá Việt Nam (đã bỏ phần thập phân)
      const formattedValue = value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      return formattedValue + ' vnđ';
    }

    return value.toString();
  }
}
