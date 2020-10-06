import { Component, OnInit,TemplateRef } from '@angular/core';
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

  ch="chat"
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
    this.messages=[]
    this.ar=[]
    this.modalRef.hide();
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

  saveChat(id){
    console.log("harekrishna")
    this.ar[id]=1;

  }

}
