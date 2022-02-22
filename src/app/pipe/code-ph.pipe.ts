import {Pipe, PipeTransform} from '@angular/core';
import {StringUtil} from '../util';

@Pipe({
  name: 'codePh'
})
export class CodePhPipe implements PipeTransform {
  transform(code: string): string {
    return 'please enter your ' + StringUtil.capAll(code);
  }
}
