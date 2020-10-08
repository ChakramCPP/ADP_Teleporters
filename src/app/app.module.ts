import { LongPress } from './components/chakri/chat/long-press';
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
import { NbThemeModule, NbLayoutModule, NbCheckboxModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { NbChatModule } from '@nebular/theme';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdHomeComponent } from './components/chakri/ad-home/ad-home.component';
import { TimerComponent } from './components/chakri/timer/timer.component';
import { MyComponentComponent } from './components/chakri/sample/my-component/my-component.component';
import { MyCompComponent } from './components/chakri/sample/my-comp/my-comp.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { UserHomeComponent } from './components/chakri/user-home/user-home.component';
import { FeedComponent } from './components/chakri/feed/feed.component';
import { AdDashboardComponent } from './components/chakri/ad-dashboard/ad-dashboard.component';
import { UserDashboardComponent } from './components/chakri/user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Sample2Component,
    KanbanComponent,
    ChatComponent,
    PollComponent,
    SurveyComponent,
    LongPress,
    AdHomeComponent,
    TimerComponent,
    MyComponentComponent,
    MyCompComponent,
    UserHomeComponent,
    FeedComponent,
    AdDashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbChatModule.forRoot(),
    ModalModule.forRoot(),
    NbCheckboxModule,
    FormsModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
