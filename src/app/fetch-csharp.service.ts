import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Jsonp, RequestOptions, Http } from '@angular/http';



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
  //configUrl = 'http://demo3552177.mockable.io/getcsharpData';
//configUrl = "http://localhost:8000/csharp";
configUrl = "http://code-now-heroku.herokuapp.com/csharp";
  constructor(private http: HttpClient) { 

  }

 postData(newAnswer : string ,question : string )
 {
   if(this.json !== undefined)
  this.json.res.find(x => x.set.question1 == question).set.answer = newAnswer;
 }

 addQuestion(question : string , answer : string)
 {
   console.log('{"question":"'+question + '","answer":"' +answer+'" }');
 return this.http.post(this.configUrl,'{"question":"'+question + '","answer":"' +answer+'" }')
 .subscribe(res => console.log(res));
 }

getDataFromCsharpSerive() {
 return this.http.get(this.configUrl);

}

}
