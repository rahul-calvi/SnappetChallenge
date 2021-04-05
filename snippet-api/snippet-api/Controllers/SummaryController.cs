using Microsoft.AspNetCore.Mvc;
using Snippet.Entities;
using Snippet.ServiceLayer;
using Snippet.ServiceLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace snippet_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SummaryController : ControllerBase
    {

        public ISummaryService SummaryService { get; set; }

        public SummaryController(ISummaryService summaryService)
        {
            SummaryService = summaryService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(SummaryService.LoadAllSummary().Take(100));
        }

        [Route("subjects")]
        public IActionResult GetAllSubjects()
        {
            return Ok(SummaryService.LoadAllSubjects());
        }

        [Route("domains")]
        public IActionResult GetAllDomains()
        {
            IEnumerable<string> domains = SummaryService.LoadAllDomains().Select(item=>item.name);
            return Ok(domains);
        }

        [Route("studentsummary")]
        public IActionResult GetStudentSummary(int studentId)
        {
            StudentSummary studentSummary = SummaryService.LoadStudentSummary(studentId);
            return Ok(studentSummary);
        }

        [Route("summarybydate")]
        public IActionResult GetSummaryByDate(DateTime? date)
        {
            IEnumerable<SubjectSummaryViewModel> summaries = SummaryService.LoadSummaryByDate(date);
            return Ok(summaries);
        }

        [Route("domainsummary")]
        public IActionResult GetDomainSummary(DateTime? date,string subject)
        {
            IEnumerable<DomainSummaryViewModel> summaries = SummaryService.LoadDomainSummary(date,subject);
            return Ok(summaries);
        }
    }
}
