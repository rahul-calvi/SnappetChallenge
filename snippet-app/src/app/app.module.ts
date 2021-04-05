import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student/student-list/student-list.component';
import { SummaryService } from './services/summary.service';
import { HttpClientModule } from '@angular/common/http';
import { DomainListComponent } from './domain/domain-list/domain-list.component';
import { SubjectListComponent } from './subjects/subject-list/subject-list.component';
import { StudentSummaryComponent } from './student/student-summary/student-summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { LearningObjectiveComponent } from './learning-objective/learning-objective.component';
import { DomainSummaryComponent } from './domain/domain-summary/domain-summary.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'domains', component: DomainListComponent },
  { path: 'subjects', component: SubjectListComponent },
  { path: 'studentsummary/:id', component: StudentSummaryComponent },
  { path: 'domainsummary/:date/:subject', component: DomainSummaryComponent },
  { path: 'learningobjectivesummary/:date/:domain', component: LearningObjectiveComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentListComponent,
    SubjectListComponent,
    DomainListComponent,
    StudentSummaryComponent,
    DashboardComponent,
    LearningObjectiveComponent,
    DomainSummaryComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
