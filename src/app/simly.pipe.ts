import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simly'
})
export class Simly implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
