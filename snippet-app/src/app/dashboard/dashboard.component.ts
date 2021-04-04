import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SummaryService } from '../services/summary.service';
import { Summary } from 'src/app/models/summary.model';
import { SubjectSummary } from '../models/subject-summary.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  public date: string = "2015-03-01";
  public summary:SubjectSummary;
  constructor(private summarySerice:SummaryService) {
    this.summary = new SubjectSummary();

   }

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.date);
  }

  ngOnInit(): void {
    
  }

  public onDateChanged () {
    console.log(this.date)
    this.summarySerice.getSummaryByDate(this.date).subscribe((summary)=>{
      this.summary = summary;
      console.log(this.summary);
    });

  }

}
