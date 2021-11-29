using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;

namespace utilities
{
    public class DataReaderMapper<T> where T : new()
    {
        private readonly List<PropertyOrdinalMap> propertyOrdinalMappings = new List<PropertyOrdinalMap>();
        private readonly IDataReader reader;

        public DataReaderMapper(IDataReader reader)
        {
            this.reader = reader;
            PopulatePropertyOrdinalMappings();
        }

        private bool HasFieldInReader(string columnName)
        {
            return Enumerable.Range(0, reader.FieldCount).Any((i => reader.GetName(i).ToLower() == columnName.ToLower()));
        }

        private void PopulatePropertyOrdinalMappings()
        {
            foreach (PropertyInfo property in typeof(T).GetProperties())
            {
                if (HasFieldInReader(property.Name))
                {
                    List<PropertyOrdinalMap> propertyOrdinalMappings = this.propertyOrdinalMappings;
                    PropertyOrdinalMap propertyOrdinalMap = new PropertyOrdinalMap();
                    propertyOrdinalMap.Property = property;
                    int ordinal = reader.GetOrdinal(property.Name);
                    propertyOrdinalMap.Ordinal = ordinal;
                    propertyOrdinalMappings.Add(propertyOrdinalMap);
                }
            }
        }

        public List<T> MapReaderRecords()
        {
            List<T> objList = new List<T>();
            while (reader.Read())
            {
                try
                {

                    T instance = Activator.CreateInstance<T>();
                    foreach (PropertyOrdinalMap propertyOrdinalMapping in propertyOrdinalMappings)
                    {
                        var checkOn = propertyOrdinalMapping;
                        try
                        {

                            if (!reader.IsDBNull(propertyOrdinalMapping.Ordinal) && propertyOrdinalMapping.Property.CanWrite)
                                propertyOrdinalMapping.Property.SetValue(instance, reader.GetValue(propertyOrdinalMapping.Ordinal));
                        }
                        catch (Exception ex)
                        {

                            throw;
                        }
                    }
                    objList.Add(instance);
                }
                catch (Exception ex)
                {

                    throw;
                }
            }
            return objList;
        }

        private class PropertyOrdinalMap
        {
            public PropertyInfo Property { get; set; }

            public int Ordinal { get; set; }
        }
    }
}
