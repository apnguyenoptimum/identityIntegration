using DF.Contracts.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Response
{
    public class InventoryViewResponse : ResponseBase
    {
        public IEnumerable<InventoryView> Result { get; set; }
        public InventoryViewSummary Summary { get; set; }
    }
}
