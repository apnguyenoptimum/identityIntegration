using DF.Contracts.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DF.Contracts.Models;

namespace DataProvider.ServiceInterfaces
{
    public interface IInventoryView
    {
        Task<IEnumerable<InventoryView>> GetDeliverableInventoryData(DeliverableGridFilter deliverableGridFilter);
        IEnumerable<InventoryView> GetGridData(IEnumerable<InventoryView> allData);
        InventoryViewSummary GetHeaderData(IEnumerable<InventoryView> allData);
    }
}
