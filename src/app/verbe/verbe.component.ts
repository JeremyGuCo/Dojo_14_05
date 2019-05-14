import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-verbe",
  templateUrl: "./verbe.component.html",
  styleUrls: ["./verbe.component.css"],
  exportAs: "appVerbe"
})
export class VerbeComponent implements OnInit {
  verbes: string[];
  selected: string = "hahaha";
  @Output() public verbe: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.verbes = [
      "mange",
      "boit",
      "fume",
      "dort",
      "finit",
      "court",
      "travaille",
      "insulte",
      "tend",
      "parle"
    ];
  }

  ngOnInit() {}

  setSelected(value: string) {
    this.verbe.emit(value);
    console.log(`Verbe : ${this.selected}`);

  }
}
