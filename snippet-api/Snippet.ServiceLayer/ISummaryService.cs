using Snippet.Entities;
using System.Collections.Generic;

namespace Snippet.ServiceLayer
{
    /// <summary>
    /// Interface for summary service
    /// </summary>
    public interface ISummaryService
    {
        /// <summary>
        /// Loads all the summary
        /// </summary>
        /// <returns>List of summary</returns>
        IEnumerable<Summary> LoadAllSummary();

        /// <summary>
        /// Json file to load
        /// </summary>
        string JsonFile { get; set; }
    }
}
