using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Models
{
    public class DeliverableView
    {
        public int MaterialID { get; set; }

        public string Deliverable { get; set; }

        public string Description { get; set; }

        public decimal? ShortShipment { get; set; }

        public bool? ConstraintDeliverable { get; set; }

        public bool? HealthyDeliverable { get; set; }

        public int? ActualShipment { get; set; }

        public decimal? ProjectedShipment { get; set; }

        public double? TargetShipment { get; set; }

        public double? MaxShipment { get; set; }

        public double? CurrentStock { get; set; }

        public double? OpenOrders { get; set; }

        public double? PendingShipment { get; set; }

        public double? ActualCompletion { get; set; }

        public decimal? ProjectedCompletion { get; set; }

        public double? TargetCompletion { get; set; }

        public double? AverageDailyDemand { get; set; }

        public decimal? ForecastRevenue { get; set; }

        public decimal? ActualRevenue { get; set; }

        public decimal? ProjectedRevenue { get; set; }

        public decimal? GapRevenue { get; set; }

        public double? TargetRevenue { get; set; }

        public decimal? GapUnits { get; set; }

        public decimal? ForecastUnits { get; set; }

        public decimal? MaxRevenue { get; set; }

        public double? AverageUnitSoldPrice { get; set; }

        public decimal? ShortCompletions { get; set; }

        public decimal? MakePartCountCausingShortage { get; set; }

        public decimal? BuyPartCountCausingShortage { get; set; }

        public decimal? Issues { get; set; }

        public short? LotSize { get; set; }

        public string SourceType { get; set; }

        public string Planner { get; set; }

        public decimal? Cost { get; set; }

        public string CustomerList { get; set; }

        public string ProgramList { get; set; }

        public double? CurrentDue { get; set; }

        public double? FutureDue { get; set; }

    }
}
