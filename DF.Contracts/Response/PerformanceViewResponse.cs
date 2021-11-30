using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DF.Contracts.Models;

namespace DF.Contracts.Response
{
   public class PerformanceViewResponse:ResponseBase
    {
        public IEnumerable<PerformanceView> Result { get; set; }
    }
}
