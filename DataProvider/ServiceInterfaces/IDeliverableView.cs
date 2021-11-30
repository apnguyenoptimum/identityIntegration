using DF.Contracts.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DF.Contracts.Models;

namespace DataProvider.ServiceInterfaces
{
    public interface IDeliverableView
    {
        Task<IEnumerable<DeliverableView>> GetDeliverables(DeliverableGridFilter deliverableGridFilter);
    }
}
