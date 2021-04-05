import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SummaryService } from '../services/summary.service';
import { Summary } from 'src/app/models/summary.model';
import { SubjectSummary } from '../models/subject-summary.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public date: string;
  public progressName:string= 'width:100%' ;
  public subject:string='';
  public showDomainSummary:boolean =false;
  public showSummary:boolean = true;
  public summary:SubjectSummary[]=[];
  constructor(private summarySerice:SummaryService) {
   
    let storedDate = localStorage.getItem("date");
    this.date = storedDate==null?"2015-03-01":storedDate.toString();
  
   }

   ngOnInit(): void {
    this.loadData();
  }

  public onDateChanged () {
   this.loadData();
   localStorage.setItem("date",this.date);
  }

  private loadData(){
    this.summarySerice.getSummaryByDate(this.date).subscribe((summary)=>{
      this.summary = summary;
    });
  }

  /**
   * name
   */
  public progressBarClick(subject:string,date:string) {
    this.subject = subject;
    this.showDomainSummary = true;
    this.showSummary = false;
  }

}
