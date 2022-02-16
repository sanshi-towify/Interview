import {Pipe, PipeTransform} from '@angular/core';
import {StringUtil} from '../util';

@Pipe({
  name: 'codeTitle'
})
export class CodeTitlePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return StringUtil.capAll(value);
  }
}
