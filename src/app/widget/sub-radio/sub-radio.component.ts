import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import { QuestionType } from '../../service/type';

const accessorProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SubRadioComponent),
  multi: true
};

@Component({
  selector: 'app-sub-radio',
  templateUrl: './sub-radio.component.html',
  providers: [accessorProvider]
})
export class SubRadioComponent implements OnInit, ControlValueAccessor {
  isDisabled = false;
  value: string = '';
  @Input() option: QuestionType = { code: '', type: '', subItems: []};
  @Input() form: FormGroup = new FormGroup({ item: new FormControl() });

  ngOnInit(): void {}

  get isShowSubItems(): boolean {
    return !!this.option.subItems && +this.form.value[this.option.code] > 2;
  }

  setSubValue(val: string, code: string): void {
    const name = this.option.code + '-' + code;
    this.form.get(name)?.setValue(val);
  }

  resetSubItems(): void {
    if (this.option.subItems) {
      if (this.isShowSubItems) {
        this.option.subItems.forEach((question: QuestionType) => {
          const name = this.option.code + '-' + question.code;
          this.form.addControl(name, new FormControl('', [Validators.required]));
        });
      } else {
        this.option.subItems.forEach((question: QuestionType) => {
          const name = this.option.code + '-' + question.code;
          this.form.removeControl(name);
        });
      }
    }
  }

  onChange = (value: string) => {
    this.value = value;
  };

  onTouch = () => {
    console.log('touched');
  };

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
