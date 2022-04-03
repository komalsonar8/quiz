import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
// import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
// import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/observable/throw';
// import { Observable, of, Subject } from 'rxjs';
// import { mapTo } from "rxjs/operators";
// const answer = of(6 * 9).pipe(mapTo(42));

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name:string="";
  public questionList:any=[];
  public currentQuestion:number=0;
  public points : number=0;
  counter=60;
  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
     this.getAllQuestions();

  }

  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe((res: any)=>{
      this.questionList=res.questions;
    })
  }

  nextQuesion(){
    this.currentQuestion++;

  }

  previousQuestion(){

    this.currentQuestion--;
  }

  answer(currentQno:number , option:any){

    if(option.correct){
      this.points+=10;
      //this.points=this.points+10;
    }
  }

}
