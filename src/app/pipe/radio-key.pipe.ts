import { Pipe, PipeTransform } from '@angular/core';
import { OptionItemType } from '../service/type';

@Pipe({
  name: 'radioKey'
})
export class RadioKeyPipe implements PipeTransform {
  transform(value: string | OptionItemType): string {
    if (typeof value === 'string') {
      return value;
    } else {
      return value.key;
    }
  }
}
