import { Component, OnInit, ViewChild } from "@angular/core";
import { ComplementComponent } from "../complement/complement.component";
import { SujetComponent } from "../sujet/sujet.component";
import { VerbeComponent } from "../verbe/verbe.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor() {}

  complement: string;
  sujet: string;
  verbe: string;

  complementFunc($event) {
    this.complement = $event;
    console.log($event);
  }

  sujetFunc($event) {
    this.sujet = $event;
    console.log($event);
  }

  verbeFunc($event) {
    this.verbe = $event;
    console.log($event);
  }
  ngOnInit() {}
}
