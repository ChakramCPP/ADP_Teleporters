import { Component, OnInit } from '@angular/core';
// import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
// import { NbEvaIconsModule } from '@nebular/eva-icons';
// import { NbSidebarModule, NbButtonModule } from '@nebular/theme';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  messages: any[] = [];

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
  }

}
