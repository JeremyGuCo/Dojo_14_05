import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css'],
  exportAs: "appSujet"
})
export class SujetComponent implements OnInit {
  sujets: string[];
  selected: string;
  @Output() public sujet: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.sujets = [
      'Eddy',
      'Nico',
      'Jeremy G',
      'Felix',
      'Cyrpien',
      'Martial',
      'Gordian',
      'Jocelyn',
      'Jeremy C',
      'Dylan',
    ];
  }

  ngOnInit() {
  }

  setSelected(value: string) {
    this.sujet.emit(value);
    console.log(`Sujet : ${this.selected}`);
  }

}
