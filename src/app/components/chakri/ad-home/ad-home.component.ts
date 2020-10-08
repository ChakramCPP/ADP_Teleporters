import { Survey, Question, Option } from './data-models';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

export interface QuestionType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ad-home',
  templateUrl: './ad-home.component.html',
  styleUrls: ['./ad-home.component.css']
})
export class AdHomeComponent implements OnInit {

  

  constructor(
    // private surveyService: SurveyService,

  ) { }

  ngOnInit() {

  }







}