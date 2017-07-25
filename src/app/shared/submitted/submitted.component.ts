import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent {

  @Input()  hero: Hero;
  @Input()  submitted = false;
  @Output() submittedChange = new EventEmitter<boolean>();
  onClick() { this.submittedChange.emit(false); }

}
