import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: WelcomeComponent },
  { path: 'questions', component: QuestionPageComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
