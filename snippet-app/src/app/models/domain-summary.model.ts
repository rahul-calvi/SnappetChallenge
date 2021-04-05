export class DomainSummary {
    domain: string='';
    totalProgress: number=0;
    progressToday:number=0;
    progressWidth:number = (this.progressToday/75);
}