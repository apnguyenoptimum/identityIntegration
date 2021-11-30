using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Models
{
    public class ApplicationFilter
    {
        public int CustomerID { get; set; }
        public string CustomerName { get; set; }
        public int ProgramID { get; set; }
        public string ProgramName { get; set; }
        public int PlannerID { get; set; }
        public string PlannerName { get; set; }
        //public int MaterialID { get; set; }
        //public string PartNumber { get; set; }     

    }
    public class ApplicationFilterCollection
    {
        public List<Customer> Customers { get; set; }
        public List<Program> Programs { get; set; }
        public List<Planner> Planners { get; set; }
        public List<ApplicationFilter> FilterDataSet { get; set; }
    }
}
