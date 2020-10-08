import {  Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import {PushserviceService} from '../services/pushservice.service';
import { Routes, RouterModule, RouterLink, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css']
})
export class PushComponent implements OnInit {
  EndTime:Date;
  hours:number;
  minutes:number;
  ms :number;
  h:number;
  m:number;
  s:number;
  message:string;
  constructor(private _notificationService: PushserviceService,private http:HttpClientModule) { 
    this._notificationService.requestPermission();
  }
   
  ngOnInit(){ 
  
      }
      
scheduleTime(){
  
  setInterval(() => {
    this._notificationService.generateBreak(data);
  }, 300000);
  let  data :Array<any>=[];
     data.push({
       title:this.message,
       alertContent:'Tired eyes?' 
       
     })
     
  // var alerts=["https://youtube/rPfCtJ1PX9I",'hello'];
   
  //     console.log("yes")
  //     alerts.forEach( function(item){
  //   data.push({ title:'Break Time!!',alertContent:item
    
  //    },title:'Eye exercise' );
     
     
     
    // }
    
    //   )
      this._notificationService.generateBreak(data);
  }
  // meetingAlert(){
    
    // var StartTime = new Date();
    // this.s=StartTime.getMilliseconds();
    //  //console.log(this.s);
    //   console.log(this.EndTime);
    //   this.h=this.EndTime.getTime();
    //   console.log(this.h);
    //         //  this.h= this.hours*3600;
            //  //console.log(this.h);
            //  this.m=this.minutes*60;
            //  this.ms=(this.m+this.h)*1000; 
            // console.log(this.ms);
      //duration = ms - StartTime.valueOf();
  // }
  notify(){
    let data :Array<any>=[];
    data.push({
      title:'Hi!',
      alertContent:'This is first alert'
    });
    this._notificationService.generateNotification(data);
  }
}
