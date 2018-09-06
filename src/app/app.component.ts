import { Component,ViewChild ,Input} from '@angular/core';
import {QuizPlaceHolderComponent} from './quiz-place-holder/quiz-place-holder.component'
import {NavComponentComponent} from './nav-component/nav-component.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  counter  = new Array(0) ;
  message : any;
  newAnswerJson : any;
  newQuestion : any;
 

  updateMessage(message : any)
  {
    console.log("jjkbhj");
     this.message =message;
     this.counter = new Array(this.message.response.length);
  }


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
     return this.message.response[index].question;
   }

 }
  
 getAnswer(index:number)
 {
  if(this.message !== undefined)
  {
  
  return this.message.response[index].answer;
  }
 // var result = JSON.parse(this.message);
 //return result[index].set.answer;
  
 }
 
}
