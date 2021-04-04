import { Component, OnInit } from '@angular/core';
import { Summary } from 'src/app/models/summary.model';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  summaryList: Summary[] = [];

  constructor(private summaryService: SummaryService) { }

  ngOnInit(): void {
    this.summaryService.getSummary().subscribe((summary) => {
      this.summaryList = summary;
    });
  }
}
