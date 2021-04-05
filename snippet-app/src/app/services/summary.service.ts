import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Summary } from "../models/summary.model";
import { StudentSummary } from "../models/student-summary.model";
import { SubjectSummary } from "../models/subject-summary.model";
import { DomainSummary } from "../models/domain-summary.model";
import { LearningObjectiveSummary } from "../models/learning-objective-summary.model";

@Injectable()
export class SummaryService {
    constructor (private http: HttpClient) {
    }

    getSummary () {
        return this.http.get<Summary[]>( environment.apiEndPoint +'/summary');
    }

    getSubjects () {
        return this.http.get<string[]>(environment.apiEndPoint + '/summary/subjects')
    }

    getDomains () {
        return this.http.get<string[]>(environment.apiEndPoint + '/summary/domains')
    }

    getStudentSummary (id:number) {
        return this.http.get<StudentSummary>(environment.apiEndPoint + '/summary/studentsummary',{
            params:new HttpParams().set('studentId', String(id))
        });
    }

    getSummaryByDate(date:string) {
        return this.http.get<SubjectSummary[]>(environment.apiEndPoint + '/summary/summarybydate',{
            params:new HttpParams().set('date', String(date))
        });
    }

    getDomainSummary(date:string,subject:string) {
        return this.http.get<DomainSummary[]>(environment.apiEndPoint + '/summary/domainsummary',{
            params:new HttpParams().set('date', String(date)).set('subject',subject)
        });
    }

    getLearningObjectivesSumary(date:string,domain:string) {
        return this.http.get<LearningObjectiveSummary[]>(environment.apiEndPoint + '/summary/learningobjectivesummary',{
            params:new HttpParams().set('date', String(date)).set('domain',domain)
        });
    }


}