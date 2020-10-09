import { PushService } from './../../../services/push.service';
import {  Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { Routes, RouterModule, RouterLink, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  EndTime:Date;
  hours:number;
  minutes:number;
  ms :number;
  h:number;
  m:number;
  s:number;
  message:string;
  constructor(private _notificationService:PushService,
              private http:HttpClientModule) { 

    this._notificationService.requestPermission();
  }
   
  ngOnInit(){ 
  
  }
      
  scheduleTime(){
    
    // setInterval(() => {
    //   this._notificationService.generateBreak(data);
    // }, 1000);
    console.log(this.message)
    console.log(this.message.split('T'))
    console.log(new Date().getTime())
    console.log(new Date().getTime()-new Date("2020-10-08T23:31").getTime())
    console.log(new Date("2020-10-08T23:31").getTime())
    let  data :Array<any>=[];
      data.push({
        title:this.message,
        alertContent:'Tired eyes?' 
        
      })
        
        setTimeout(()=>{                           
          this._notificationService.generateBreak(data,'admin/chat');
          console.log("hare krishna")
     }, new Date(this.message).getTime()-new Date().getTime());
    }

    notify(){
      let data :Array<any>=[];
      data.push({
        title:'Hi!',
        alertContent:'This is first alert'
      });
      this._notificationService.generateNotification(data,'admin/chat');
    }

}
