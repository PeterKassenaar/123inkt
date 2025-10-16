import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private chatSocket$: WebSocketSubject<any>;
  private numberSocket$: WebSocketSubject<any>;

  constructor() {
    this.chatSocket$ = webSocket('ws://localhost:3005');
    this.numberSocket$ = webSocket('ws://localhost:3006');
  }

  getChatMessages(): Observable<any> {
    return this.chatSocket$.asObservable();
  }

  sendChatMessage(message: any): void {
    this.chatSocket$.next(message);
  }

  getRandomNumbers(): Observable<any> {
    return this.numberSocket$.asObservable();
  }
}
