import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  birthday:Date = new Date(1992, 8, 13); // September 13, 1992
  // toggle = true; // start with true == shortDate

  // get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  // toggleFormat() { this.toggle = !this.toggle; }
}
