import { Component, OnInit } from '@angular/core';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjectList: string[] = [];

  constructor( private summaryService: SummaryService) { }

  ngOnInit(): void {
    this.summaryService.getSubjects().subscribe((subject)=> {
      this.subjectList = subject;
    });
  }

}
