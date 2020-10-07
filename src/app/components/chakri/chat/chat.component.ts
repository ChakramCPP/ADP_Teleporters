import { Component, OnInit,TemplateRef,ViewChild,ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSidebarModule, NbButtonModule } from '@nebular/theme';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  // @ViewChild('buttonlong') button;
  // longPress = 'first state';
  // longPressing = 0;
  // isLongPressed = false;

  // onLongPress() {
  //   this.longPressing = null;
  //   if (this.isLongPressed) this.button.nativeElement.style.backgroundColor = 'green';
  //   else this.button.nativeElement.style.backgroundColor = 'orange';
  //   this.isLongPressed = !this.isLongPressed;
  //   this.longPress = this.isLongPressed ? 'second state' : 'first state';
  // }

  // onLongPressing() {
  //   this.longPressing += 1;
  // }
  // ch="chat"
  ngOnInit(): void {
  }

  modalRef: BsModalRef;
  message: string;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    console.log(this.message)
    
    // this.messages=[]
    this.modalRef.hide();
    this.saveMsg();
  }
  
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  changeBtn(){
    this.btnclass="btn-success"
  }
  btnclass="btn-prinary"
  messages: any[] = [];
  ar=new Array<number>();

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {

    const files = !event.files ? [] : event.files.map((file) => {
      console.log(file.src,file.type)
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: reply,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: userName,
        avatar: avatar,
      },
    });
    this.ar.push(0);
    console.log(this.ar)
  }

  saveChat(id,checked:boolean){
    console.log("harekrishna",checked)
    if(checked==true)
    {this.ar[id]=1;}
    else{
      this.ar[id]=0;
    }
    console.log(this.ar)

  }
  saveMsg(){
    const len=this.ar.length;
    for(var i=0;i<this.messages.length;i++){
      if(this.ar[i]==0){
        console.log(i,this.messages[i])
        this.messages.splice(i,1)
        this.ar.splice(i,1)
        
         i--;
      }
    }
    console.log(this.messages)
    console.log(this.ar)
  }

}
