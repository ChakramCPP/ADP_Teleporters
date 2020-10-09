import { PushService } from './../../../services/push.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-dashboard',
  templateUrl: './ad-dashboard.component.html',
  styleUrls: ['./ad-dashboard.component.css']
})
export class AdDashboardComponent implements OnInit {
  isEmergency:string;
  notificationType:string;
  title:string;
  description:string;
  question:string;
  constructor(private pushservice:PushService) { }

  ngOnInit(): void {
  }
  doIfChecked(i,m){
    this.isEmergency=i
    this.notificationType=m
  }

  notifyUsers(){
    let  data :Array<any>=[];
      data.push({
        title:"New Notification from Admin:"+this.title,
        alertContent:this.notificationType+this.description
        
      })
        
        setTimeout(()=>{                           
          this.pushservice.generateBreak(data,'admin/chat');
          console.log("hare krishna")
     }, 1000);
  }

}
