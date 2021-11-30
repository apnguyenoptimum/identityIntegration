using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DF.Contracts.Models;

namespace DF.Contracts.Request
{
    public class DeliverableGridFilter
    {
        public List<Customer> Customers { get; set; }
        public List <Program> Programs { get; set; }
        public List <Planner> Planners { get; set; }
        public int LocationID { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        
    }
}
