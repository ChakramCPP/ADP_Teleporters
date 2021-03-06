import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleComponent } from './components/chakri/sample/sample.component';
import { Sample2Component } from './components/chakri/sample2/sample2.component';
import { KanbanComponent } from './components/chakri/kanban/kanban.component';
import { ChatComponent } from './components/chakri/chat/chat.component';
import { PollComponent } from './components/chakri/poll/poll.component';
import { SurveyComponent } from './components/chakri/survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Sample2Component,
    KanbanComponent,
    ChatComponent,
    PollComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
