import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OptionItemType, PageType, QuestionType } from '../../service/type';
import { PageService } from '../../service/page.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  questionResult: Record<string, string> = {};
  pages: PageType[] = [];

  constructor(private readonly router: Router, private readonly pageService: PageService) {}

  ngOnInit(): void {
    this.pages = this.pageService.questionPages;
    this.questionResult = this.pageService.questionResult;
  }

  showAnswer(question: QuestionType, isSub?: string): string {
    let code = question.code;
    if (isSub) {
      code = isSub + '-' + code;
    }
    const value = this.questionResult[code];
    if (value && !question.data) {
      return value;
    }
    if (value && question.data) {
      if (typeof question.data[0] === 'string') {
        return value;
      } else {
        const index = parseInt(value) - 1;
        return `${value}: ${(<OptionItemType>question.data[index]).val}`;
      }
    } else {
      return value;
    }
  }

  resetPage(): void {
    this.pageService.reset();
    this.router.navigate(['/']).then();
  }
}
