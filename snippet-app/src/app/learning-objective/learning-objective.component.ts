import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearningObjectiveSummary } from '../models/learning-objective-summary.model';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-learning-objective',
  templateUrl: './learning-objective.component.html',
  styleUrls: ['./learning-objective.component.css']
})
export class LearningObjectiveComponent implements OnInit {
  domain: string='';
  date:string ='';
  subject:string='';
  learningObjectiveSummary:LearningObjectiveSummary[]=[];
  constructor(private summarService: SummaryService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.domain = this.route.snapshot.params['domain'];
    this.date = this.route.snapshot.params['date'];
    let subject = localStorage.getItem("subject");
    this.subject = subject===null?'':subject.toString();
    this.summarService.getLearningObjectivesSumary(this.date,this.domain).subscribe((item)=>{
      this.learningObjectiveSummary = item;
    });
  }

}
