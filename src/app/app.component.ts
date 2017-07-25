import { Component, Input, Output } from '@angular/core';
import { FLYER } from './config/flyerTs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  power = 5;
  factor = 1;

  //  Pure-Impure Pipes
  flyers: any[] = FLYER;
  @Input() canFly: boolean = true;
  @Input() mutate: boolean = true;
  @Input() name: string = 'dummy-value';

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = { name, canFly: this.canFly };
    if (this.mutate) {
      // Pure pipe won't update display because heroes array reference is unchanged
      // Impure pipe will display
      this.flyers.push(hero);
      this.name = '';
    } else {
      // Pipe updates display because heroes array is a new object
      this.flyers = this.flyers.concat(hero);
    }
  }

  reset() {
    this.canFly = true;
    this.mutate = true;
    this.name = '';
    this.flyers = FLYER.slice();
  }

}
