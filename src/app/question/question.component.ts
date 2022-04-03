import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/throw';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name:string="";
  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
     this.getAllQuestions();

  }

  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe((res: any)=>{
      console.log(res.questions);
    })
  }

}
