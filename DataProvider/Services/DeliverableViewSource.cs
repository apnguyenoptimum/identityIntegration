using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using DataProvider.ServiceInterfaces;
using Microsoft.Extensions.Configuration;
using utilities;
using DF.Contracts.Models;
using DF.Contracts.Request;


namespace DataProvider.Services
{
    public class DeliverableViewSource : IDeliverableView
    {
        private readonly IConfiguration _configuration;
        public DeliverableViewSource(IConfiguration configutation)
        {
            //_mapper = mapper;
            _configuration = configutation;
        }

        public async Task<IEnumerable<DeliverableView>> GetDeliverables(DeliverableGridFilter deliverableGridFilter)
        {
            try
            {
                List<DeliverableView> result;
                deliverableGridFilter.ToJSON();

                string connectionString = _configuration.GetSection("DFConnectionString").Value;

                using (var conn = new SqlConnection(connectionString))
                {
                    
                    using (var cmd = new SqlCommand("dbo.GetDeliverableViewData", conn))
                    {
                       
                        cmd.CommandType = CommandType.StoredProcedure;
                        var jsonfilter = deliverableGridFilter.ToJSON();
                        cmd.Parameters.AddWithValue("@filter", deliverableGridFilter.ToJSON());

                        cmd.CommandTimeout = 750;
                        conn.Open();

                       using (var reader = await cmd.ExecuteReaderAsync(CommandBehavior.CloseConnection))
                        {
                            result = reader.Automap<DeliverableView>();
                        }
                    }
                }

                return result;
            }
            catch (Exception ex)
            {

                throw ex;

            }
        }
    }
}
