using System;
using System.Collections.Generic;
using System.Text;

namespace DF.Contracts.Response
{
    public class ResponseBase
    {
        /// <summary>
        /// Response errors
        /// </summary>
        public IEnumerable<ResponseErrors> Error { get; set; }
        /// <summary>
        /// Indicates success
        /// </summary>
        public bool IsSuccess { get; set; }
    }
}
