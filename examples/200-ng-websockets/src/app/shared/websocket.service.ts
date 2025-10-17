// Import necessary modules from Angular core and RxJS.
import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  // A WebSocketSubject for the chat functionality.
  private chatSocket$: WebSocketSubject<any>;

  // A WebSocketSubject for the random number functionality.
  private numberSocket$: WebSocketSubject<any>;

  constructor() {
    // Creates a new WebSocketSubject for the chat, connecting to the specified URL.
    this.chatSocket$ = webSocket('ws://localhost:3005');
    // Creates a new WebSocketSubject for the random numbers, connecting to the specified URL.
    this.numberSocket$ = webSocket('ws://localhost:3006');
  }

  // A method to get chat messages as an observable.
  getChatMessages(): Observable<any> {
    // Returns the chat socket as an observable,
    // allowing components to subscribe to messages.
    return this.chatSocket$.asObservable();
  }

  // A method to send a chat message.
  sendChatMessage(message: any): void {
    // Sends a message to the chat WebSocket.
    this.chatSocket$.next(message);
  }

  // A method to get random numbers as an observable.
  getRandomNumbers(): Observable<any> {
    // Returns the number socket as an observable, allowing components to subscribe to numbers.
    return this.numberSocket$.asObservable();
  }
}
