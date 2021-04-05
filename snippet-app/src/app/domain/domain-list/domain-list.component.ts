import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.css']
})
export class DomainListComponent implements OnInit {
  domainList: string[] = [];

  constructor( private summaryService: SummaryService) { }

  ngOnInit(): void {
    this.summaryService.getDomains().subscribe((result)=> {
      console.log(result);
      this.domainList = result;
    });
  }

}
