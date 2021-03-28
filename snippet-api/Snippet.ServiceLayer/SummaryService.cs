using Newtonsoft.Json;
using Snippet.Entities;
using System.Collections.Generic;
using System.IO;

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

        #endregion
    }
}
