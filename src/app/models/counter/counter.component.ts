import { PushService } from './../../services/push.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

 

   time;
   interval;
   incrementadd;

   constructor( public dialogRef: MatDialogRef<CounterComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
   private ps:PushService){
    // this.time= data.Time;
   }

   onNoClick(): void {
    this.dialogRef.close();
   }
  ngOnInit(): void {
    this.time= this.data.Time;
    this.incrementadd=this.data.Times;
    document.getElementById("time").innerHTML = (this.time-this.time%60)/60 + ":" + this.time%60;
    document.getElementById("incrementadd").innerHTML = (this.incrementadd-this.incrementadd%60)/60 + ":" + this.incrementadd%60;
    if(!this.data.TimerPaused) {
      this.resume();
    }
    // setInterval(() => {
    //   this.increase()
    // },1000);
  }
  increase(){
    this.incrementadd= this.incrementadd + 1;
    this.data.Times = this.incrementadd;
    document.getElementById("incrementadd").innerHTML = (this.incrementadd-this.incrementadd%60)/60 + ":" + this.incrementadd%60;
  }
  close() {
    this.data.Time = this.time;
    clearInterval(this.interval);
    this.dialogRef.close();
  }
  pause() {
      if(this.interval) {
        clearInterval(this.interval);
        this.data.TimerPaused = true;
      }
  }
  resume() {
    this.data.TimerPaused = false;
    this.interval = setInterval(() => {
      this.decrement(); 
      }, 1000);
  }
  decrement() {
    let c=0
    if(this.time>0){
    this.time = this.time - 1;
    this.data.Time = this.time;
    document.getElementById("time").innerHTML = (this.time-this.time%60)/60 + ":" + this.time%60;
   }else{
     if(this.time==0){
      let  data :Array<any>=[];
      data.push({
        title:"New Notification from System:",
        alertContent:"Hey how about taking a break!"
        
      })
      if(c==0)
        this.ps.generateNotification(data,'user/chat')
        c=1;

     }
   }
 
}
}
