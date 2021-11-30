using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Models
{
    public class PerformanceView
    {
        public string Description { get; set; }

        public string SourceType { get; set; }

        public string Planner { get; set; }

        public decimal? Cost { get; set; }

        public string CustomerList { get; set; }

        public string ProgramList { get; set; }

        public int? MaterialID { get; set; }

        public string Deliverable { get; set; }

        public int? TotalGoodWeeks { get; set; }

        public int? TotalWeeks { get; set; }

        public double? FlowBalance { get; set; }

        public int? FlowBalanceGoodWeeksRollup { get; set; }

        public int? FlowBalanceTotalWeeksRollup { get; set; }

        public double? FlowBalancePercentRollup { get; set; }

        public double? TotalPieceCount { get; set; }

        public double? TotalPieceNCR { get; set; }

        public double? Quality { get; set; }

        public double? TotalPieceCountRollup { get; set; }

        public double? TotalPieceCountNCRRollup { get; set; }

        public double? QualityRollup { get; set; }

        public int? EntireBuildLeadTime { get; set; }

        public double? EntireBuildRunTime { get; set; }

        public double? EntireBuildTotalTime { get; set; }

        public decimal? EntireBuildSetupTime { get; set; }

        public decimal? EntireBuildQueueTime { get; set; }

        public double? Velocity { get; set; }

        public double? VelocityRollup { get; set; }

        public string MakeComponentCount { get; set; }

        public string BuyComponentsFromLateSuppliers { get; set; }

        public string PartsThroughConstraints { get; set; }

        public double? WeeksOfSupply { get; set; }

        public double? TargetWeeksOfSupply { get; set; }

    }
}
