using DF.Contracts.Models;
using DF.Contracts.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataProvider.ServiceInterfaces
{
    public interface IPerformanceView
    {
        Task<IEnumerable<PerformanceView>> GetDeliverablePerformanceData(DeliverableGridFilter filter);
        object GetGridData(IEnumerable<PerformanceView> allData);
        object GetHeaderData(IEnumerable<PerformanceView> allData);
    }
}
