import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';



interface JsonObj
{
      res :[Response]
}

 class Response
{
      set : Set
}

 class Set
{
     question1 : string
     answer : string
}

@Injectable()
export class FetchCsharpService {
  json :JsonObj;
  configUrl = 'http://demo3552177.mockable.io/getcsharpData';
  constructor(private http: HttpClient) { 

  }

 postData(newAnswer : string ,question : string )
 {
   if(this.json !== undefined)
  this.json.res.find(x => x.set.question1 == question).set.answer = newAnswer;
 }

getDataFromCsharpSerive() {
  
   this.json  = JSON.parse(`{
    "response": [
      {
        "set": { 
          "question1": "what is csharp",
          "answer": "this is csharp"
        }
      },
      {
        "set": {
          "question1": "what is csharp",
          "answer": "this is csharp"
        }
      },
      {
        "set": {
          "question1": "what is csharp",
          "answer": "this is csharp"
        }
      },
      {
        "set": {
          "question1": "what is csharp",
          "answer": "this is csharp"
        }
      },
      {
        "set": {
          "question1": "what is csharp",
          "answer": "this is csharp"
        }
      }
    ]
  }`);

  return   Observable.of(this.json) ;
}

}
