import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {
  currentYear;

  transform(value: number, args?: any): number {
    this.currentYear = new Date().getFullYear();
    return this.currentYear - value;
  }
}
