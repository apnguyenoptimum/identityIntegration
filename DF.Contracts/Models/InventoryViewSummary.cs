using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Models
{
    public class InventoryViewSummary
    {
        public int MakeSurplus { get; set; }
        public int BuySurplus { get; set; }
        public double? TargetInventoryCost { get; set; }
        public double? CurrentInventoryCost { get; set; }
        public double? ExcessInventoryCost { get; set; }
        public decimal? ProjectedInventoryCost { get; set; }
        public decimal? GapInventoryCost { get; set; }
    }
}
