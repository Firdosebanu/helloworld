import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseToLowerCase'
})
export class UpperCaseToLowerCase implements PipeTransform {

  transform(value: String): String {
    return value+":)";
  }

}
