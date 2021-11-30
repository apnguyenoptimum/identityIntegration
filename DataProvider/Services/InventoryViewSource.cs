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
    public class InventoryViewSource : IInventoryView
    {
        private readonly IConfiguration _configuration;
        public InventoryViewSource(IConfiguration configutation)        {
            
            _configuration = configutation;
        }

        public async Task<IEnumerable<InventoryView>> GetDeliverableInventoryData(DeliverableGridFilter deliverableGridFilter)
        {
            try
            {
                List<InventoryView> result;
                deliverableGridFilter.ToJSON();

                string connectionString = _configuration.GetSection("DFConnectionString").Value;

                using (var conn = new SqlConnection(connectionString))
                {

                    using (var cmd = new SqlCommand("dbo.GetDeliverableViewInventoryData", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        var jsonfilter = deliverableGridFilter.ToJSON();
                        cmd.Parameters.AddWithValue("@filter", deliverableGridFilter.ToJSON());

                        cmd.CommandTimeout = 750;
                        conn.Open();

                        using (var reader = await cmd.ExecuteReaderAsync(CommandBehavior.CloseConnection))
                        {
                            result = reader.Automap<InventoryView>();
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

        public IEnumerable<InventoryView> GetGridData(IEnumerable<InventoryView> allData)
        {
            return allData.Where(x => x.DeliverableMaterialID != null);
        }

        public InventoryViewSummary GetHeaderData(IEnumerable<InventoryView> allData)
        {
            var summ = new InventoryViewSummary();
            summ.MakeSurplus = allData.Where(x => x.MakeSurplus == 1).Count();
            summ.BuySurplus = allData.Where(x => x.BuySurplus == 1).Count();
            summ.TargetInventoryCost = allData.Sum(x => x.TargetInventoryCost);
            summ.CurrentInventoryCost = allData.Sum(x => x.CurrentInventoryCost);
            summ.ExcessInventoryCost = allData.Sum(x => x.ExcessInventoryCost);
            summ.ProjectedInventoryCost = allData.Sum(x => x.ProjectedInventoryCost);
            summ.GapInventoryCost = allData.Sum(x => x.GapInventoryCost);
            return summ;
        }
    }
}
