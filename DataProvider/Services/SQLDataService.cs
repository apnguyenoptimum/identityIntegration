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

namespace DataProvider.Services
{
    public class SQLDataService : ISQLDataService
    {
        //private readonly IMapper _mapper;
        //private readonly IConfiguration _configuration;
        //public SQLDataService(IMapper mapper, IConfiguration configutation)
        //{
        //    _mapper = mapper;
        //    _configuration = configutation;
        //}

        /// <summary>
        /// GetSafetyReportSummary
        /// </summary>
        /// <returns></returns>
        //public async Task<IEnumerable<ApplicationFilter>> GetSafetyReportSummary(Int64 userId)
        //{
        //    try
        //    {
        //        List<ApplicationFilter> result;

        //        string connectionString = _configuration.GetSection("MSADBConnection").Value;

        //        using (var conn = new SqlConnection(connectionString))
        //        {

        //            using (var cmd = new SqlCommand("dbo.usp_GetSafetyRecordsSummary", conn))
        //            {
        //                cmd.CommandType = CommandType.StoredProcedure;
        //                cmd.Parameters.Add(new SqlParameter("@userId", userId));
        //                conn.Open();

        //                using (var reader = await cmd.ExecuteReaderAsync(CommandBehavior.CloseConnection))
        //                {

        //                    result = reader.Automap<ApplicationFilter>();
        //                }
        //            }
        //        }

        //        return result;
        //    }
        //    catch (Exception ex)
        //    {

        //        throw;

        //    }
        //}

    }
}
