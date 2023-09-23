import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | Date): string {
    if (typeof value === 'string') {
      value = new Date(value);
    }

    if (value instanceof Date && !isNaN(value.getTime())) {
      const day = value.getDate().toString().padStart(2, '0');
      const month = (value.getMonth() + 1).toString().padStart(2, '0');
      const year = value.getFullYear();
      return `${day}/${month}/${year}`;
    }

    return value.toString();
  }
}
