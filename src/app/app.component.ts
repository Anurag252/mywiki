import { Component,ViewChild ,Input} from '@angular/core';
import {QuizPlaceHolderComponent} from './quiz-place-holder/quiz-place-holder.component'
import {NavComponentComponent} from './nav-component/nav-component.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter : Number = 5;
  message : any;
  newAnswerJson : any;
  newQuestion : any;
 
  getNewAnswer()
  {
    if(this.newAnswerJson !== undefined)
    return this.newAnswerJson.changedAnswer;
  }

  getNewQuestion()
  {
    if(this.newAnswerJson !== undefined)
    {
    return this.newAnswerJson.changedQuestion;
    }
  }


  getQuestion(index:number)
 {
   if(this.message != undefined)
   {
     
     return this.message.response[index].set.question1;
   }

 }
  
 getAnswer(index:number)
 {
  if(this.message !== undefined)
  {
  
  return this.message.response[index].set.answer;
  }
 // var result = JSON.parse(this.message);
 //return result[index].set.answer;
  
 }
 
}
