import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { LoginDialog } from './page/welcome/login-dialog.component';
import { QuestionPageComponent } from './page/question-page/question-page.component';
import { CountdownModule } from 'ngx-countdown';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './page/result/result.component';
import { CodeTitlePipe } from './pipe/code-title.pipe';
import { CodePhPipe } from './pipe/code-ph.pipe';
import { SubRadioComponent } from './widget/sub-radio/sub-radio.component';
import { RadioTextPipe } from './pipe/radio-text.pipe';
import { RadioKeyPipe } from './pipe/radio-key.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionPageComponent,
    LoginDialog,
    ResultComponent,
    CodeTitlePipe,
    CodePhPipe,
    SubRadioComponent,
    RadioKeyPipe,
    RadioTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    CountdownModule,

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
