using Microsoft.AspNetCore.Mvc;
using Snippet.ServiceLayer;

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
            return Ok(SummaryService.LoadAllSummary());
        }

        
    }
}
