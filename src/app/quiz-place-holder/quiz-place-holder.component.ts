import { Component, OnInit ,Input, EventEmitter, Output,ElementRef} from '@angular/core';

@Component({
  selector: 'app-quiz-place-holder',
  templateUrl: './quiz-place-holder.component.html',
  styleUrls: ['./quiz-place-holder.component.css']
})
export class QuizPlaceHolderComponent implements OnInit {
@Input() question;
@Input() answer;
 newQuestion : string;
@Output() changedAnswer = new EventEmitter();
newAnswer : string;
  constructor(private elRef: ElementRef)
   { 
 
   }
isInEditMode : boolean = false;
isInDisplayMode : boolean = true;
isLongerThanDiv : boolean = false;
  editAnswer()
  {
    this.isInDisplayMode = false;
    this.isInEditMode = true;
  }

  saveAnswer()
  {
    this.answer = this.newAnswer
    this.isInDisplayMode = true;
    this.isInEditMode = false;
    
    var json = {
      changedQuestion :  this.newQuestion ,Answer : this.answer
    };
    this.changedAnswer.emit(json);
  }

  ngOnInit() {
  }

}
