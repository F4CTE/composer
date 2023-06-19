import { Component } from '@angular/core';
import { State } from './State';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'composer';
  myArray: Array<number> = [];
  randomNumber: number = Math.random();
  state: State = State.Working;
  constructor() {
    this.myArray
    for (let i = 0; i <= 100; i++) {
      if (i % 2 == 0) {
        this.myArray.push(i);
      } else continue;
    }

    console.log(this.randomNumber);
  }
}
