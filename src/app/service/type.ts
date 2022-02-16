import {ValidatorFn} from '@angular/forms';

export type OptionItemType = {
  key: string,
  val: string
}
export type QuestionType = {
  code: string;
  label?: string;
  inputType?: string;
  isNoLabel?: boolean;
  optional?: boolean;
  type: string;
  placeholder?: string;
  help?: string;
  data?: string[] | OptionItemType[];
  valid?: ValidatorFn[] | string[];
  value?: string | number | boolean | Date;
  checkValue?: number;
  subItems?: QuestionType[];
}

export type QuestionSessionType = {
  label?: string;
  items: QuestionType[];
  formProps?: [];
}

export type PageType = {
  greeting?: boolean;
  ordered?: boolean;
  introduction?: string;
  type: string;
  buttonTitle?: string;
  questions: QuestionSessionType[];
}
