import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { data } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-app';
  data: data[];
  constructor() {
    this.data = [
      { usernme: '1st User', password: '1stpassword ', email: '1stemail' },
      { usernme: '2ndUser', password: '2ndpassword ', email: '2ndemail' },
      { usernme: '3rd User', password: '3rdpassword ', email: '3rdemail' },
    ];
  }
}
