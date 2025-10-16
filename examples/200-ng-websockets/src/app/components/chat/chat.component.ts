import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebsocketService } from '../../shared/websocket.service';

@Component({
  selector: 'app-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  message: string = '';

  websocketService: WebsocketService = inject(WebsocketService);

  ngOnInit(): void {
    this.websocketService.getChatMessages().subscribe((msg: any) => {
      this.messages.push(msg);
    });
  }

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this.websocketService.sendChatMessage({ message: this.message });
      this.message = '';
    }
  }
}
