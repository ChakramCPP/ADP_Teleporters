import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor() { }
  v:boolean;
  ngOnInit(): void {
    this.v=false
  }
  hide(){
    this.v=true;
  }
}
