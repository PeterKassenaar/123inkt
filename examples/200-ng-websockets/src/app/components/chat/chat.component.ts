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
  // An array to store incoming chat messages.
  // TODO: Create a signal() from this array.
  messages: any[] = [];

  // A string to hold the message currently being typed by the user.
  // TODO: Create a signal() from this string.
  message: string = '';

  // Injects the WebsocketService to handle WebSocket communication.
  websocketService: WebsocketService = inject(WebsocketService);

  ngOnInit(): void {
    // Subscribes to the chat messages observable from the WebsocketService.
    this.websocketService.getChatMessages().subscribe((msg: any) => {
      // Pushes incoming messages to the messages array.
      this.messages.push(msg);
    });
  }

  // A method to send a chat message to all connected clients. See 'server.js'
  sendMessage(): void {
    if (this.message.trim() !== '') {
      // Sends the chat message using the WebsocketService.
      this.websocketService.sendChatMessage({ message: this.message });
      // Clears the input field after sending the message.
      this.message = '';
    }
  }
}
