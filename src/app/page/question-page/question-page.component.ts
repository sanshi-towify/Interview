import { Component, OnInit } from '@angular/core';
import { PageService } from '../../service/page.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageType, QuestionSessionType, QuestionType } from '../../service/type';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html'
})
export class QuestionPageComponent implements OnInit {
  questionSession: QuestionSessionType[] = [];
  pageForm: FormGroup = this.formBuilder.group({});
  page: PageType = {
    type: '',
    questions: []
  };

  currentQuestionIndex = 0;
  currentSessionIndex = 0;

  formErrors: Record<string, string> = {};

  validationMessage: Record<string, string> = {
    min: 'Length is too short',
    max: 'Too Long',
    required: 'It is required'
  };

  constructor(
    private readonly router: Router,
    public readonly pageService: PageService,
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getQuestionPage(0);
  }

  setFormItemProperty(property: QuestionType) {
    if (!property.valid) {
      property.valid = [];
    }
    if (!property.optional) {
      property.valid.push(Validators.required);
    }
    return [this.questionResult[property.code] || property.value || '', property.valid];
  }

  getQuestionPage(pageOffset: number): void {
    this.page = this.pageService.getNextPage(pageOffset);
    this.questionSession = this.page.questions;
    const properties: {
      [key: string]: {};
    } = {};
    if (this.page.type === 'list') {
      this.questionSession.forEach(it => {
        if (it.items) {
          it.items.forEach(question => {
            properties[question.code] = this.setFormItemProperty(question);
          });
        }
      });
    } else {
      this.currentQuestionIndex = 0;
      this.currentSessionIndex = 0;
      const question =
        this.questionSession[this.currentSessionIndex].items[this.currentQuestionIndex];
      properties[question.code] = this.setFormItemProperty(question);
    }
    this.pageForm = this.formBuilder.group(properties);
    this.pageForm.valueChanges.subscribe(() => {
      this.onValueChanged();
    });
  }

  onValueChanged(): void {
    for (const name in this.pageForm.controls) {
      const control = this.pageForm.get(name);
      if (control && control.invalid && (control.dirty || control.touched)) {
        const messages = [];
        for (const key in control.errors) {
          messages.push(this.validationMessage[key]);
        }
        this.formErrors[name] = messages.join('\n');
      }
    }
  }

  get isHasNextPage(): boolean {
    return this.pageService.isHasPage(1);
  }

  finish(): void {
    if (this.pageForm.valid) {
      this.pageService.setQuestionResult(this.pageForm.getRawValue());
      this.router.navigate(['/result']).then(() => {});
    }
  }

  isDone(): boolean {
    return this.pageService.isDone;
  }

  addQuestionToSession(curSession: QuestionSessionType) {
    const item = curSession.items[this.currentQuestionIndex];
    this.pageForm.addControl(item.code, new FormControl(...this.setFormItemProperty(item)));
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 0);
  }

  nextItem(): void {
    let curSession = this.questionSession[this.currentSessionIndex];
    if (!this.pageForm.valid) return;
    if (this.currentQuestionIndex + 1 >= curSession.items.length) {
      if (this.currentSessionIndex + 1 >= this.questionSession.length) {
        this.pageService.setQuestionResult(this.pageForm.getRawValue());
        this.getQuestionPage(1);
      } else {
        this.currentSessionIndex += 1;
        this.currentQuestionIndex = 0;
        curSession = this.questionSession[this.currentSessionIndex];
        this.addQuestionToSession(curSession);
      }
    } else {
      this.currentQuestionIndex += 1;
      this.addQuestionToSession(curSession);
    }
  }

  get questionResult(): Record<string, string> {
    return this.pageService.questionResult;
  }

  nextPage(): void {
    if (this.pageForm.valid) {
      this.pageService.setQuestionResult(this.pageForm.getRawValue());
      this.pageService.addQuestionsToPage(this.questionResult['jobPosition']);
      this.getQuestionPage(1);
    } else {
      this.snackBar.open('Please finish all questions', 'Attention', { duration: 1000 });
    }
  }
}
