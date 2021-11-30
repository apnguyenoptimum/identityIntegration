using System;
using System.Collections.Generic;
using System.Data;
using System.Reflection;
using System.Text;

namespace utilities
{
    public static  class IEnumerableExtensions
    {
        public static DataTable ToDataTable<T>(this IEnumerable<T> list)
        {
            if (list == null)
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
    }
}
