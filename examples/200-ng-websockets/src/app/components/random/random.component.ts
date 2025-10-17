import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebsocketService} from '../../shared/websocket.service';

@Component({
  selector: 'app-random',
  imports: [CommonModule],
  templateUrl: './random.component.html'
})
export class RandomComponent implements OnInit {
  // A string to store the random number received from the WebSocket.
  // TODO: Create a signal() from this string.
  randomNumber: string = '';

  // Injects the WebsocketService to handle WebSocket communication.
  websocketService: WebsocketService = inject(WebsocketService);

  ngOnInit(): void {
    // Subscribes to the random numbers observable from the WebsocketService.
    this.websocketService.getRandomNumbers().subscribe((num: string) => {
      // Updates the randomNumber property with the received number.
      this.randomNumber = num;
    });
  }
}
