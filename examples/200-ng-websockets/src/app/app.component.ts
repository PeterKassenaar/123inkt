import {Component} from '@angular/core';
import {ChatComponent} from './components/chat/chat.component';
import {RandomComponent} from './components/random/random.component';

@Component({
  selector: 'app-root',
  imports: [ChatComponent, RandomComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
