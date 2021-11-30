// Decompiled with JetBrains decompiler
// Type: Utilities.ObjectMapper
// Assembly: Utilities, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 1FA06A3C-A27B-49EB-A968-05F8EFEDF631
// Assembly location: C:\_Dev\TechOpsAPI\services\aircraft\Main\Libs\Utilities.dll

using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace utilities
{
    public static class ObjectMapper
    {
        public static List<T> Map<S, T>(List<S> sourceList) where T : new()
        {
            if (sourceList == null) throw new ArgumentNullException("sourceList");
            if (sourceList.Any(o => o == null)) throw new ArgumentException("Source list cannot contain null objects.");

            List<string> stringList = new List<string>();
            foreach (PropertyInfo propertyInfo1 in ((IEnumerable<PropertyInfo>)typeof(T).GetProperties()).ToList())
            {
                foreach (PropertyInfo propertyInfo2 in ((IEnumerable<PropertyInfo>)sourceList.GetType().GetGenericArguments()[0].GetProperties()).ToList())
                {
                    if (propertyInfo1.Name.ToLower() == propertyInfo2.Name.ToLower())
                        stringList.Add(propertyInfo1.Name.ToLower());
                }
            }

            List<T> objList = new List<T>();
            foreach (S source2 in sourceList)
            {
                T instance = Activator.CreateInstance<T>();
                foreach (string name in stringList)
                {
                    object obj = typeof(S).GetProperty(name, BindingFlags.IgnoreCase | BindingFlags.Instance | BindingFlags.Public).GetValue(source2);
                    typeof(T).GetProperty(name, BindingFlags.IgnoreCase | BindingFlags.Instance | BindingFlags.Public).SetValue(instance, obj);
                }
                objList.Add(instance);
            }
            return objList;
        }
    }
}
