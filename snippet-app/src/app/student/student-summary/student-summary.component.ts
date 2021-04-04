import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentSummary } from 'src/app/models/student-summary.model';
import { SummaryService } from 'src/app/services/summary.service';

@Component({
  selector: 'app-student-summary',
  templateUrl: './student-summary.component.html',
  styleUrls: ['./student-summary.component.css']
})
export class StudentSummaryComponent implements OnInit {

  studentSummary: StudentSummary= new StudentSummary();
  studentId:number = 0;
  constructor(private summaryService: SummaryService,private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];
    this.summaryService.getStudentSummary(this.studentId).subscribe((studentSummary)=>{
      this.studentSummary = studentSummary;
    })
  }
}
