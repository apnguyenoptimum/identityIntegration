using DF.Contracts.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Response
{
    public class DeliverableViewResponse:ResponseBase
    {
        public IEnumerable<DeliverableView> Result { get; set; }
    }
}
