using System;
using System.Collections.Generic;
using System.Text;

namespace DF.Contracts.Response
{
    /// <summary>
    /// ResponseErrors
    /// </summary>
    public class ResponseErrors
    {
        /// <summary>
        /// Type
        /// </summary>
        public string Type { get; set; }
        /// <summary>
        /// Code
        /// </summary>
        public string Code { get; set; }
        /// <summary>
        /// Description
        /// </summary>
        public string Description { get; set; }
    }

}
