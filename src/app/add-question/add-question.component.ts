import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FetchCsharpService } from '../fetch-csharp.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(public serviceCall :FetchCsharpService ) { }

  ngOnInit() {
    
  }

  addCard(data)
  {
    this.serviceCall.addQuestion(data.questions,data.answers)
  }
}
