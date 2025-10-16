import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SignalsComponent} from "./components/signals/signals.component";
import {CustomerListComponent} from "./components/customer-list/customer-list.component";
import {HttpClientComponent} from "./components/http-client/http-client.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalsComponent, CustomerListComponent, HttpClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Modern Angular app';
}
