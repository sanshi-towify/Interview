import { Pipe, PipeTransform } from '@angular/core';
import { OptionItemType } from '../service/type';

@Pipe({
  name: 'radioText'
})
export class RadioTextPipe implements PipeTransform {
  transform(value: string | OptionItemType): string {
    if (typeof value === 'string') {
      return value;
    } else {
      return value.val;
    }
  }
}
