using DF.Contracts.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DF.Contracts.Response
{
    public class ApplicationFilterResponse: ResponseBase
    {
        public ApplicationFilterCollection Result { get; set; }
    }
}
