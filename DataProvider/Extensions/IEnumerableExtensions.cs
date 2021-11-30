using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;

namespace System.Collections.Generic
{
    public static class IEnumerableExtensions
    {
        public static DataTable ToDataTable<T>(this IEnumerable<T> list)
        {
            if (list.IsNull())
            {
                return null;
            }
            Type type = typeof(T);
            var properties = type.GetProperties();

            DataTable dataTable = new DataTable();
            foreach (PropertyInfo info in properties)
            {
                dataTable.Columns.Add(new DataColumn(info.Name, Nullable.GetUnderlyingType(info.PropertyType) ?? info.PropertyType));
            }

            foreach (T entity in list)
            {
                object[] values = new object[properties.Length];
                for (int i = 0; i < properties.Length; i++)
                {
                    values[i] = properties[i].GetValue(entity);
                }

                dataTable.Rows.Add(values);
            }

            return dataTable;
        }
        public static bool IsNullOrEmpty<T>(this IEnumerable<T> enumerable)
        {
            return enumerable == null || !enumerable.Any();
        }
        public static bool IsNotNullOrEmpty<T>(this IEnumerable<T> enumerable)
        {
            return (enumerable != null && enumerable.Any());
        }
        public static string Pipyfy(this IEnumerable<string> strLst)
        {
            if(strLst.IsNullOrEmpty()) return "";
            if (strLst.Count() == 1) return strLst.First();
            var newString = new StringBuilder();
            foreach (var item in strLst)
            {
                newString.Append("| ");
                newString.Append(item);                
            }
            return newString.ToString().Substring(1, newString.Length - 1);
        }
        public static IEnumerable<T> RemoveWhere<T>(this IEnumerable<T> query, Predicate<T> predicate)
        {
            return query.Where(e => !predicate(e));
        }
    }
}
