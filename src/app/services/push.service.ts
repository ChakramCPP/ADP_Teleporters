import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

  export interface PushNotification{
    body?:string; 
    icon?:string;
    tag?:string;
    sch?:number; data?:any; renotify?:boolean; silent?:boolean; sound?:string;noscreen?:boolean;
    sticky?:boolean; dir?:'auto'|'ltr'|'rtl'; lang?:string; vibrate?:number[];
    
  }
  export declare type Permission='denied'|'granted'|'default';

  @Injectable({
    providedIn: 'root'
  })
  export class PushService {
  public permission :Permission;
    constructor(private router:Router,
      private zone: NgZone) { 
      this.permission=this.isSupported()? 'default':'denied';
    }
    rpath:String;
  
  public isSupported():boolean{
    return 'Notification' in window;

  }
  requestPermission():void{
      let self=this;
      if(!('Notification' in window)){
        Notification.requestPermission(function(status){
          return self.permission=status;
        });
      }
  }
    sampleF(){

    }
    create(title:string,options ?: PushNotification):any{
    let self=this;
    
    return new Observable(function(obs){
      if(!('Notification' in window)){
        console.log('Notifications are not available in this environment');
        obs.complete();
      }
      if(self.permission == 'denied'){
        console.log("The user has not granted permission to send push notifications");
        obs.complete();
      }
      
      let _notify=new Notification(title,options);
      _notify.onshow=function(e){
        console.log(_notify)
        return obs.next({
          notification: _notify,
          event:e,
          
        });
        
      };
      _notify.onclick=function(e){
        console.log("clicked")
        self.zone.run(() => {
          console.log('onclick');
          self.router.navigate([self.rpath]);
      });
        return obs.next();
      }
      _notify.onerror=function(e){
        return obs.error({
          notification: _notify,
          event:e
        });
      };
      _notify.onclose=function(){
        console.log("closed")
        
        console.log(ServiceWorkerRegistration)
        return obs.complete();
      };
    });
  }
    
    generateNotification(source:Array<any>,path):void{
      this.rpath=path;
      let self=this
      source.forEach((item)=>{
        let options={
            body:item.alertContent,
            icon:"/assets/img/adp.png",
        };
        let _notify=self.create(item.title,options).subscribe();
      })
    }
    generateBreak(source:Array<any>,path):void{
      this.rpath=path;
      let self=this;
      source.forEach((item)=>{
        let options={
        
          body:item.alertContent,
          icon:"/assets/img/adp.png"
        };
        let notify=self.create(item.title,options).subscribe();
      })
    }

}