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

  @ViewChild(ComplementComponent)
  private complementComp: ComplementComponent;
  complement: string;

  @ViewChild(SujetComponent)
  private sujetComp: SujetComponent;
  sujet: string;


  @ViewChild(VerbeComponent)
  private verbeComp: VerbeComponent;
  verbe: string;

  sentenceFunc() {
    this.complement = this.complementComp.selected;
    this.sujet = this.sujetComp.selected;
    this.verbe = this.verbeComp.selected;
  }

  ngOnInit() {}
}
