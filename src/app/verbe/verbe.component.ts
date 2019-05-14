import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-verbe",
  templateUrl: "./verbe.component.html",
  styleUrls: ["./verbe.component.css"],
  exportAs: "appVerbe"
})
export class VerbeComponent implements OnInit {
  verbes: string[];
  selected: string = "hahaha";

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
    this.selected = value;
    console.log(`Verbe : ${this.selected}`);
    
  }
}
