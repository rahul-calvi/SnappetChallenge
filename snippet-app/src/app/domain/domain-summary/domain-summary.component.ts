import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomainSummary } from 'src/app/models/domain-summary.model';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-domain-summary',
  templateUrl: './domain-summary.component.html',
  styleUrls: ['./domain-summary.component.css']
})
export class DomainSummaryComponent implements OnInit {

  @Input() subject:string ='';
  @Input() date:string ='';
  public domainSummary:DomainSummary[]=[];
  constructor(private summarService: SummaryService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subject = this.route.snapshot.params['subject'];
    this.date = this.route.snapshot.params['date'];
    this.summarService.getDomainSummary(this.date,this.subject).subscribe((item)=>{
      this.domainSummary = item;
    });
  }

}
