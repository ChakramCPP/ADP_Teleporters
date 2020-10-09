import { SurveyComponent } from './components/chakri/survey/survey.component';
import { KanbanComponent } from './components/chakri/kanban/kanban.component';
import { UserDashboardComponent } from './components/chakri/user-dashboard/user-dashboard.component';
import { AdDashboardComponent } from './components/chakri/ad-dashboard/ad-dashboard.component';
import { FeedComponent } from './components/chakri/feed/feed.component';
import { UserHomeComponent } from './components/chakri/user-home/user-home.component';
import { TimerComponent } from './components/chakri/timer/timer.component';
import { AdHomeComponent } from './components/chakri/ad-home/ad-home.component';
import { ChatComponent } from './components/chakri/chat/chat.component';
import { Sample2Component } from './components/chakri/sample2/sample2.component';
import { SampleComponent } from './components/chakri/sample/sample.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCompComponent } from './components/chakri/sample/my-comp/my-comp.component';

const routes: Routes = [
  {path:'',component:SampleComponent},
  {path:'user',component:UserHomeComponent,
  children:[
    {path:'dashboard', component:UserDashboardComponent},
    {path:'feed', component:FeedComponent},
    {path:'chat', component:ChatComponent},
    {path:'survey',component:SurveyComponent}
    ],
  },
  {path:'snehita',component:Sample2Component},
  
  {path:'admin',component:AdHomeComponent,
    children:[
      {path:'dashboard', component:AdDashboardComponent},
      {path:'feed', component:FeedComponent},
      {path:'chat', component:ChatComponent},
      ],
  },
  {path:"admin/chat",component:ChatComponent},
  {path:'timer',component: TimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
