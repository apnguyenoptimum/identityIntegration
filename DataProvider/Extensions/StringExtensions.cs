using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace System
{
    public static class StringExtensions
    {
        public static bool NotEquals(this string value, string s) => !value.ToLower().AsEquals(s);
         /// <summary>
        /// compares all values and returns true if any values matches. case insensitive
        /// usage e.g. variable.In("INIT,TRAN")
        /// </summary>
        /// <param name="value"></param>
        /// <param name="commaSeperated"></param>
        /// <returns></returns>
        public static bool In(this string value, string commaSeperated)
        {
            var csv = commaSeperated.Split(',');
            var ret = false;
            foreach (var item in csv)
            {
                if (value.AsEquals(item))
                {
                    ret = true;
                }
            }
            return ret;
        }
        /// <summary>
        /// compares all values and returns true if any value matches. case insensitive
        /// usage e.g. variable.In("INIT,TRAN")
        /// </summary>
        /// <param name="value"></param>
        /// <param name="commaSeperated"></param>
        /// <returns></returns>
        public static bool NotIn(this string value, string commaSeperated)
        {
            var csv = commaSeperated.Split(',');
            var ret = false;
            foreach (var item in csv)
            {
                if (value.NotAsEquals(item))
                {
                    ret = true;
                }
            }
            return ret;
        }
        /// <summary>
        /// Case insensitive and Trimmed string comparision
        /// </summary>
        /// <param name="strA"></param>
        /// <param name="strB"></param>
        /// <returns></returns>
        public static bool AsEquals(this String strA, String strB)
        {
            if (strA.IsNull() || strB.IsNull()) return false;
            
            return strA.Trim().Equals(strB.Trim(), StringComparison.CurrentCultureIgnoreCase);
        }
       
        /// <summary>
        /// Case insensitive Trimmed string comparision
        /// </summary>
        /// <param name="strA"></param>
        /// <param name="strB"></param>
        /// <returns></returns>
        public static bool NotAsEquals(this String strA, String strB)
        {
            return !strA.Trim().Equals(strB, StringComparison.CurrentCultureIgnoreCase);
        }
        /// <summary>
        /// converts to bool true if string value is 1. all other values converted to false
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static bool ToBool_0_1(this string str) => str.AsEquals("1");

        public static DateTime ToDateTime(this string str) => Convert.ToDateTime(str);

        public static string ToDash8Format(this string str)
        {
            if (str.Length > 11)
            {
                var val= $"{str.Substring(0, 4)}-{str.Substring(4, 5)}-{str.Substring(6)}";
                return val;
            }
            if (str.Length <= 7) return str.Trim();

            return $"{str.Substring(0,2)}-{str.Substring(2, 4)}-{str.Substring(6,1)}-{str.Substring(7)}";
        }
        public static bool IsNumericString(this string str)
        {
            return int.TryParse(str, out _);
        }
        public static string FirstCharToUpper(this string input)
        {
            switch (input)
            {
                case null: return null;
                case "":return input;
                default: return input.First().ToString().ToUpper() + input.Substring(1);
            }
        }
        public static string FirstSevenCharacters(this string input)
        {
            if (input.IsNullOrEmpty()) return null;
            if (input.Length <= 7) return input;
            return input.Substring(0, 7);            
        }
        public static string To3DigitString(this string input)
        {
            if (input.IsNullOrEmpty()) return null;
            if (input.Length >= 3) return input.Substring(0,3);
            if (input.Length == 2) return "0" + input;
            if (input.Length == 1) return "00" + input;
            return "";
        }
        public static string ToNDigitString(this string input, int nDigits)
        {
            if (input.IsNullOrEmpty()) return null;
            if (nDigits <= input.Length) return input.ToString();
            
            StringBuilder st = new StringBuilder();
            for (int i = 0; i < nDigits-input.Length; i++)
            {
                st.Append("0");
            }
            return st.Append(input).ToString();
             
        }
        public static string RemoveLastChar(this string str, char c)
        {
            if (String.IsNullOrEmpty(str))
            {
                return str;
            }
            else if(str[str.Length - 1]==c)
            {
                return str.TrimEnd(str[str.Length - 1]);
            }
            return str;
        }
        public static string RemoveLastChar(this string str)
        {
            if (String.IsNullOrEmpty(str))
            {
                return str;
            }
            else 
            {
                return str.TrimEnd(str[str.Length - 1]);
            }
        }

        public static string RemoveFirstChar(this string s) => s.Remove(0,1);


    }
}
