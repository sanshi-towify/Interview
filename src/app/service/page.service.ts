import { Injectable } from '@angular/core';
import { PageType, QuestionSessionType } from './type';
import {
  android,
  architecture,
  education,
  git,
  introduction,
  ios,
  job,
  logic,
  patterns,
  performance,
  personal,
  product,
  teamwork,
  web
} from './questions';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  questionPages: PageType[] = [
    {
      type: 'list',
      ordered: true,
      questions: [job, personal, education],
      buttonTitle: 'Yeah, Let Us Go To Next Step!'
    },
    {
      type: 'pop',
      greeting: true,
      buttonTitle: 'Confirm current answer & Show next question',
      introduction:
        'Please check the following questions carefully and honestly. This is to allow us to better understand your situation before the interview, so that we can ask more critical questions about your information during the interview. Server - Knowledge and Skills Module',
      questions: []
    },
    {
      type: 'list',
      greeting: true,
      buttonTitle: 'Done',
      introduction:
        'The daily work of the program is developed in an English environment with opportunities, including document viewing, question query and naming of function attributes, so we hope you can understand your English foundation through a short self-introduction.',
      questions: [introduction]
    }
  ];

  currentPageIndex = 0;
  questionResult: Record<string, string> = {};

  setQuestionResult(values: Record<string, string>) {
    this.questionResult = { ...this.questionResult, ...values };
  }

  getNextPage(pageOffset: number): PageType {
    if (this.currentPageIndex + pageOffset < this.questionPages.length) {
      this.currentPageIndex += pageOffset;
    }
    return this.questionPages[this.currentPageIndex];
  }

  isHasPage(pageOffset: number): boolean {
    if (pageOffset < 0) {
      return this.currentPageIndex + pageOffset >= 0;
    } else {
      return this.currentPageIndex + pageOffset < this.questionPages.length && !this.isDone;
    }
  }

  getQuestionsByType(type: string): QuestionSessionType[] {
    let items;
    switch (type) {
      case 'Server':
        items = [patterns, git, performance, architecture, teamwork, logic];
        break;
      case 'Web':
        items = [patterns, web, teamwork, logic];
        break;
      case 'IOS':
        items = [patterns, ios, teamwork, logic];
        break;
      case 'Android':
        items = [patterns, android, teamwork, logic];
        break;
      default:
        items = [product, performance, logic];
    }
    return items;
  }

  addQuestionsToPage(questionCategory: string) {
    if (this.currentPageIndex != 0 || !questionCategory) {
      return;
    }
    const page = this.questionPages.find((item: PageType) => {
      return item.type === 'pop';
    });
    if (page) page.questions = this.getQuestionsByType(questionCategory);
  }

  get isDone(): boolean {
    return this.currentPageIndex === this.questionPages.length - 1;
  }

  reset() {
    this.currentPageIndex = 0;
    this.questionResult = {};
  }
}
