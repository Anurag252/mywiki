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
configUrl = "https://code-now-heroku.herokuapp.com";
  constructor(private jsonp: HttpClient) { 

  }

 postData(newAnswer : string ,question : string )
 {
   if(this.json !== undefined)
  this.json.res.find(x => x.set.question1 == question).set.answer = newAnswer;
 }

getDataFromCsharpSerive() {
 return this.jsonp.get(this.configUrl);

}

}
