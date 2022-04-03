import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import { catchError } from 'rxjs/operators';

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
