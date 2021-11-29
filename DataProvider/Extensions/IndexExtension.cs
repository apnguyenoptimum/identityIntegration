using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace System
{
    public static class IndexExtensions
    {
        public static string AddSiblingIndex(this string value, int ind)
        {
            var str = value.Split(".");
            str[str.Length - 1] = ind.ToString().To3DigitString();
            StringBuilder st = new StringBuilder();
            for (int i = 0; i < str.Length; i++)
            {
                if (i == 0) st.Append(str[i]);
                else st.Append($".{str[i]}");
            }
            return st.ToString();
        }
        public static string AddChildIndex(this string value, int ind)
        {
            return ($"{value}.{ind.ToString().To3DigitString()}");

            //var str = value.Split(".");
            //str[str.Length - 1] = ind.ToString().To3DigitString();
            //StringBuilder st = new StringBuilder();
            //for (int i = 0; i < str.Length; i++)
            //{
            //    if (i == 0) st.Append(str[i]);
            //    else st.Append($".{str[i]}");
            //}
            //return st.ToString();
        }

    }
}