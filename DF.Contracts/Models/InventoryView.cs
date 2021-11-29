using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Models
{
   public class InventoryView
    {
        public int MaterialID { get; set; }

        public string PartNumber { get; set; }

        public int? DeliverableMaterialID { get; set; }

        public string DeliverablePartNumber { get; set; }

        public string Description { get; set; }

        public string Planner { get; set; }

        public decimal? Cost { get; set; }

        public string CustomerList { get; set; }

        public string ProgramList { get; set; }

        public string SourceType { get; set; }

        public double? CurrentStock { get; set; }

        public double? LeadTimeWeeks { get; set; }

        public double? AverageDailyDemand { get; set; }

        public double? TargetWIPUnits { get; set; }

        public double? TargetWIPCost { get; set; }

        public double? ABCDays { get; set; }

        public double? TargetStockUnits { get; set; }

        public double? TargetStockCost { get; set; }

        public double? TargetInventoryUnit { get; set; }

        public double? TargetInventoryCost { get; set; }

        public double? CurrentWIPUnits { get; set; }

        public double? CurrentWIPCost { get; set; }

        public double? CurrentStockCost { get; set; }

        public double? CurrentInventoryCost { get; set; }

        public double? CurrentInventoryUnits { get; set; }

        public double? DeltaInventoryToTarget { get; set; }

        public double? ExcessInventoryCost { get; set; }

        public double? DeficitInventoryCost { get; set; }

        public short? LotSize { get; set; }

        public string LotSizeVSAverageWeeklyDemand { get; set; }

        public decimal? ProjectedInventoryCost { get; set; }

        public decimal? GapInventoryCost { get; set; }

        public int MakeSurplus { get; set; }

        public int BuySurplus { get; set; }

        public double? RollupTargetStockCost { get; set; }

        public double? RollupTargetWIPCost { get; set; }

        public double? RollupTargetInventoryCost { get; set; }

        public double? RollupCurrentWIPCost { get; set; }

        public double? RollupCurrentStockCost { get; set; }

        public double? RollupCurrentInventoryCost { get; set; }

        public double? RollupDeltaInventoryToTarget { get; set; }
        public int MakeConstraint { get; set; }
        public List<string> MakeContraintParts { get; set; }
        public int BuyConstraint { get; set; }
        public List<string> BuyConstraintParts { get; set; }

        public int? EntireBuildLeadTime { get; set; }
        public decimal? ProjectedStockCost { get; set; }
        public decimal? ProjectedWIPCost { get; set; }

    }
}
