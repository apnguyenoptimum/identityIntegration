using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace utilities
{
  public static class Extensions
  {
    public static List<T> Automap<T>(this IDataReader reader) where T : new()
    {
      return new DataReaderMapper<T>(reader).MapReaderRecords();
    }

    public static T AutomapSingle<T>(this IDataReader reader) where T : new()
    {
      return new DataReaderMapper<T>(reader).MapReaderRecords().SingleOrDefault<T>();
    }

    public static T AutomapSingle<S, T>(this S sourceObject) where T : new()
    {
      return ObjectMapper.Map<S, T>(new List<S>()
      {
        sourceObject
      }).SingleOrDefault<T>();
    }

    public static List<T> Automap<S, T>(this List<S> sourceList) where T : new()
    {
      return ObjectMapper.Map<S, T>(sourceList);
    }
  }
}
