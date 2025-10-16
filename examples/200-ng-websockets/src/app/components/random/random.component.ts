import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebsocketService} from '../../shared/websocket.service';

@Component({
  selector: 'app-random',
  imports: [CommonModule],
  templateUrl: './random.component.html'
})
export class RandomComponent implements OnInit {
  randomNumber: string = '';

  websocketService: WebsocketService = inject(WebsocketService);

  ngOnInit(): void {
    this.websocketService.getRandomNumbers().subscribe((num: string) => {
      this.randomNumber = num;
    });
  }
}
