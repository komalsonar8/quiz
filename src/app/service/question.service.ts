import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs';
// import 'rxjs/add/observable/throw';
// import { catchError } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';


//import { mapTo } from "rxjs/operators";
//const answer = of(6 * 9).pipe(mapTo(42));
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getQuestionJson():Observable<any>{
   return this.http.get<any>("assets/questions.json"); 
  }

  // getQuestionJson(){
  //   return this.http.get<any>("assets/questions.json"); 
  //  }
}
