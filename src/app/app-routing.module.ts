import { ChatComponent } from './components/chakri/chat/chat.component';
import { Sample2Component } from './components/chakri/sample2/sample2.component';
import { SampleComponent } from './components/chakri/sample/sample.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushComponent } from './components/snehita/push/push.component';

const routes: Routes = [
  {path:'',component:SampleComponent},
  {path:'snehita',component:Sample2Component},
  {path:'chat',component:ChatComponent},
  {path:'notification',component:PushComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
