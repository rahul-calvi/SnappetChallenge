using Newtonsoft.Json;
using Snippet.Entities;
using Snippet.ServiceLayer.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Snippet.ServiceLayer
{
    /// <summary>
    /// Service for summary
    /// </summary>
    public class SummaryService : ISummaryService
    {
        #region Private variables

        /// <summary>
        /// Sumarry list
        /// </summary>
        private static IEnumerable<Summary> summaries;

        #endregion

        #region Public variables

        /// <summary>
        /// Default loaction path for json file to be read
        /// </summary>
        public const string DEFAULTJSONFILEPATH = @"..//../Data//work.json";

        /// <summary>
        /// Json file to load
        /// </summary>
        public string JsonFile { get; set; }

        #endregion

        #region Constructor

        /// <summary>
        /// Constructor for summary service
        /// </summary>
        public SummaryService()
        {
        }

        #endregion

        #region Public methods

        /// <summary>
        /// Loads all the summary
        /// </summary>
        /// <returns>List of summary</returns>
        public IEnumerable<Summary> LoadAllSummary()
        {
            summaries = LoadJson();
            return summaries;
        }

        public IEnumerable<string> LoadAllSubjects()
        {
            summaries = LoadJson();
            return summaries.Select(item => item.Subject).Distinct();
        }

        public IEnumerable<Domain> LoadAllDomains()
        {
            summaries = LoadJson();
            IEnumerable<Domain> domains = summaries.GroupBy(it => new { it.Subject, it.Domain }).Select(item => new Domain { name = item.Key.Domain, subject = item.Key.Subject }).Distinct().ToList();
            return domains.ToList();
        }

        #endregion

        #region Private region

        /// <summary>
        /// Reads the json file and loads into summary entity
        /// </summary>
        /// <returns>List of Summary</returns>
        private IEnumerable<Summary> LoadJson()
        {
            using (StreamReader streamReader = new StreamReader(JsonFile ?? DEFAULTJSONFILEPATH))
            {
                string json = streamReader.ReadToEnd();
                List<Summary> summaryItems = JsonConvert.DeserializeObject<List<Summary>>(json);
                return summaryItems;
            }
        }

        public StudentSummary LoadStudentSummary(int studentId)
        {
            summaries ??= LoadJson();
            IEnumerable<Summary> summariesList = summaries.Where(item => item.UserId == studentId).ToList();
            var summaryGroup = summariesList.GroupBy(item => item.Subject);

            return new StudentSummary() { Correct = 1, Domain = "Test", StudentId = studentId };
        }

        public IEnumerable<SubjectSummaryViewModel> LoadSummaryByDate(DateTime? date)
        {
            summaries ??= LoadJson();
            IEnumerable<Summary> summariesList = summaries.Where(item => item.SubmitDateTime.Date == date.Value.Date).ToList();
            IEnumerable<Summary> totalSummariesTillDate = summaries.Where(item => item.SubmitDateTime.Date <= date.Value.Date).ToList();
            var groupBySubject = totalSummariesTillDate.GroupBy(item => item.Subject);
            List<SubjectSummaryViewModel> subjectSummaryViews = groupBySubject.Select(item => new SubjectSummaryViewModel() { Subject = item.Key, TotalProgress = item.Sum(p => p.Progress) }).ToList();
            foreach (SubjectSummaryViewModel subjectSummaryViewModel in subjectSummaryViews)
            {
                subjectSummaryViewModel.ProgressToday = summariesList.Where(item => item.Subject == subjectSummaryViewModel.Subject).Sum(p => p.Progress);
            }

            return subjectSummaryViews;
        }

        #endregion
    }
}
