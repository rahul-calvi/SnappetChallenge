using System.Collections.Generic;

namespace Snippet.ServiceLayer.Models
{
    public class SummaryViewModel
    {
        public IEnumerable<SubjectSummaryViewModel> Subjects { get; set; }

        public int TotalProgress { get; set; }

        public int ProgressToday { get; set; }
    }
}
