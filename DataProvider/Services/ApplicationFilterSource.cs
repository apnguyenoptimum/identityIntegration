using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DataProvider.ServiceInterfaces;
using Microsoft.Extensions.Configuration;
using utilities;
using DF.Contracts.Models;

namespace DataProvider.Services
{
    public class ApplicationFilterSource: IApplicationFilter
    {
        //private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;
        public ApplicationFilterSource( IConfiguration configutation)
        {
            //_mapper = mapper;
            _configuration = configutation;
        }

        /// <summary>
        /// GetSafetyReportSummary
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<ApplicationFilter>> GetAllFilters(Int64 locationID)
        {
            try
            {
                List<ApplicationFilter> result;

                string connectionString = _configuration.GetSection("DFConnectionString").Value;

                using (var conn = new SqlConnection(connectionString))
                {

                    using (var cmd = new SqlCommand($"Select * from udf_GetApplicationFilter({locationID})", conn))
                    {
                        cmd.CommandType = CommandType.Text;                        
                        conn.Open();
                        using (var reader = await cmd.ExecuteReaderAsync(CommandBehavior.CloseConnection))
                        {
                            result = reader.Automap<ApplicationFilter>();
                        }
                    }
                }

                return result;
            }
            catch (Exception ex)
            {

                throw;

            }
        }

        public async Task<ApplicationFilterCollection> GetFilterCollection(IEnumerable<ApplicationFilter> filterList)
        {
            var collection = new ApplicationFilterCollection();

            var uniqueCustomers = from c in filterList
                                   group c by new { c.CustomerID, c.CustomerName } into grpC
                                   select new Customer { CustomerID = grpC.Key.CustomerID, CustomerName = grpC.Key.CustomerName };
            collection.Customers = uniqueCustomers.ToList();
            
            var uniquePrograms = from c in filterList
                                 group c by new { c.ProgramID, c.ProgramName } into grpC
                                 select new Program { ProgramID = grpC.Key.ProgramID, ProgramName = grpC.Key.ProgramName };

            collection.Programs = uniquePrograms.ToList();

            var uniquePlanners = from c in filterList
                                 group c by new { c.PlannerID, c.PlannerName } into grpC
                                 select new Planner { PlannerID = grpC.Key.PlannerID, PlannerName = grpC.Key.PlannerName };

            collection.Planners = uniquePlanners.ToList();

            
            collection.FilterDataSet = filterList.ToList();

            return collection;

        }
    }
}
