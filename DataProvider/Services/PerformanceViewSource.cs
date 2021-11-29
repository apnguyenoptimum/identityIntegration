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
using DF.Contracts.Request;


namespace DataProvider.Services
{
    public class PerformanceViewSource : IPerformanceView
    {
        private readonly IConfiguration _configuration;
        public PerformanceViewSource(IConfiguration configutation)
        {
            //_mapper = mapper;
            _configuration = configutation;
        }
        public async Task<IEnumerable<PerformanceView>> GetDeliverablePerformanceData(DeliverableGridFilter filter)
        {
            try
            {
                List<PerformanceView> result;
               

                string connectionString = _configuration.GetSection("DFConnectionString").Value;

                using (var conn = new SqlConnection(connectionString))
                {

                    using (var cmd = new SqlCommand("dbo.GetPerformanceViewData", conn))
                    {

                        cmd.CommandType = CommandType.StoredProcedure;
                       
                        cmd.Parameters.AddWithValue("@filter", filter.ToJSON());

                        cmd.CommandTimeout = 750;
                        conn.Open();

                        using (var reader = await cmd.ExecuteReaderAsync(CommandBehavior.CloseConnection))
                        {
                            result = reader.Automap<PerformanceView>();
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

        public object GetGridData(IEnumerable<PerformanceView> allData)
        {
            throw new NotImplementedException();
        }

        public object GetHeaderData(IEnumerable<PerformanceView> allData)
        {
            throw new NotImplementedException();
        }
    }
}
