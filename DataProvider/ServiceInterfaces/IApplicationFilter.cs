using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DF.Contracts.Models;

namespace DataProvider.ServiceInterfaces
{
   public interface IApplicationFilter
    {
        Task<IEnumerable<ApplicationFilter>> GetAllFilters(Int64 locationID);
        Task<ApplicationFilterCollection> GetFilterCollection(IEnumerable<ApplicationFilter> filterList);
    }

}
