using Snippet.Entities;
using Snippet.ServiceLayer.Models;
using System;
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

        IEnumerable<string> LoadAllSubjects();

        IEnumerable<Domain> LoadAllDomains();

        /// <summary>
        /// Loads summary for a student
        /// </summary>
        /// <param name="studentId">Student id</param>
        /// <returns>StudentSummary</returns>
        StudentSummary LoadStudentSummary(int studentId);

        /// <summary>
        /// Loads the summary by date
        /// </summary>
        /// <param name="dateTime">DateTime</param>
        /// <returns>List of summary</returns>
        IEnumerable<SubjectSummaryViewModel> LoadSummaryByDate(DateTime? dateTime);


        IEnumerable<DomainSummaryViewModel> LoadDomainSummary(DateTime? date, string subject);
    }
}
