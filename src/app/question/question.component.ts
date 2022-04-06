import { Component, OnInit } from '@angular/core';
//import { timeStamp } from 'console';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';
import { Observable } from 'rxjs';
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
  currectAnswer:number=0;
  inCorrectAnswer:number=0;
  interval$:any;
  progress1:string="0";
  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
     this.getAllQuestions();
     this.startCounter();

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
      
      this.currectAnswer++;
      this.currentQuestion++;
      this.getProgressPercent();
    }
    else{
      this.points-=10;
      this.currentQuestion++;
      this.inCorrectAnswer++; 
      this.getProgressPercent();
    }
  }

  startCounter()
  {
    this.interval$=interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0)
      {
        this.currentQuestion++;
        this.counter=60;
        this.points-=10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 6000000);

  }

  stopCounter()
  {
    this.interval$.unsubsribe();
    this.counter=0;
  }

  resetCounter()
  {
    this.stopCounter();
    this.counter=60;
    this.startCounter();


  }

  resetQuiz11()
  {
    this.resetCounter();
    this.getAllQuestions();
    this.points=0;
    this.counter=60;
    this.currentQuestion=0;
    this.progress1="0";
  }

  getProgressPercent(){
    this.progress1=((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress1;  
  }

}
