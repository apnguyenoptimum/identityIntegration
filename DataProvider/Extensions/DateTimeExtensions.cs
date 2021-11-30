using System.Collections.Generic;
using System.Linq;

namespace System
{
    public static class DateTimeExtensions
    {
        public static bool IsKindUTC(this DateTime dateTime) => dateTime.Kind == DateTimeKind.Utc;

        public static bool IsKindNotUTC(this DateTime dateTime) => !dateTime.IsKindUTC();

        public static bool IsKindLocal(this DateTime dateTime) => dateTime.Kind == DateTimeKind.Local;

        public static bool IsKindNotLocal(this DateTime dateTime) => !dateTime.IsKindLocal();

        public static bool IsBetweenInclusive(this DateTime date, DateTime startDate, DateTime endDate) =>
            (startDate <= date && date <= endDate);

        public static bool IsBetweenExclusive(this DateTime date, DateTime startDate, DateTime endDate) =>
            (startDate < date && date < endDate);

        public static IEnumerable<DateTime> Range(this DateTime startDate, DateTime endDate)
        {
            return Enumerable.Range(0, (endDate - startDate).Days + 1).Select(d => startDate.AddDays(d));
        }
        public static DateTime LastDayOfMonth(this DateTime inputDate)
        {
            return new DateTime(inputDate.Year, inputDate.Month, DateTime.DaysInMonth(inputDate.Year, inputDate.Month)).AddHours(23).AddMinutes(59);
        }
        public static DateTime FirstDayOfMonth(this DateTime inputDate)
        {
            return new DateTime(inputDate.Year, inputDate.Month, 1);
        }
        public static DateTime ToPST(this DateTime inputDate)
        {            
            var zone = TimeZoneInfo.FindSystemTimeZoneById("Pacific Standard Time");           
            return TimeZoneInfo.ConvertTimeFromUtc(inputDate, zone);
        }
        public static DateTime ToCST(this DateTime inputDate)
        {
            var zone = TimeZoneInfo.FindSystemTimeZoneById("Central Standard Time");
            return TimeZoneInfo.ConvertTimeFromUtc(inputDate, zone);
        }
        public static DateTime ToEST(this DateTime inputDate)
        {
            var zone = TimeZoneInfo.FindSystemTimeZoneById("Eastern Standard Time");
            return TimeZoneInfo.ConvertTimeFromUtc(inputDate, zone);
        }
        public static DateTime ToMST(this DateTime inputDate)
        {
            var zone = TimeZoneInfo.FindSystemTimeZoneById("Mountain Standard Time");
            return TimeZoneInfo.ConvertTimeFromUtc(inputDate, zone);
        }
        public static bool IsIRMinDate(this DateTime date) => (date == Convert.ToDateTime("01/01/1900"));
        public static bool IsNotIRMinDate(this DateTime date) => (date >= Convert.ToDateTime("01/01/1900"));
        public static bool IsMinDate(this DateTime date) => (date == DateTime.MinValue);
        public static bool IsNotMinDate(this DateTime date) => (date > DateTime.MinValue);
        public static DateTime IRMinDate { get; } = Convert.ToDateTime("01/01/1900");
        
        public static bool SameDay(this DateTime date1, DateTime date2) 
        {
            return (date2 - date1).Days > 0;
        }
        
        public static bool SameDay(this string date1, string date2)
        {
            return (Convert.ToDateTime(date2) - Convert.ToDateTime(date1)).Days > 0;
        }

        /// <summary>
        /// returns earlier of 2 dates, when equal returns pram 1
        /// </summary>
        /// <param name="date1"></param>
        /// <param name="date2"></param>
        /// <returns></returns>

        public static DateTime Earlier(DateTime date1, DateTime date2) => date1 <= date2 ? date1 : date2;

        public static DateTime Later(DateTime date1, DateTime date2)
        {
            if (date1.IsNull()) return date2;
            if (date2.IsNull()) return date1;
            return date1 >= date2 ? date1 : date2;
        }
        public static bool DateEqual(DateTime date1, DateTime date2) => date1.Date == date2.Date;
        public static bool DateNotEqual(DateTime date1, DateTime date2) => date1.Date != date2.Date;
        public static bool NotEqual(this DateTime date1, DateTime date2) => date1 != date2;
        public static bool IsPast(this DateTime date1, DateTime date2) => date1 < date2;
        public static bool IsFuture(this DateTime date1, DateTime date2) => date1 > date2;
        public static DateTime Round(this DateTime dt)
        {
            var rounded = new DateTime(dt.Year, dt.Month, dt.Day, dt.Hour, 0, 0);
            if (dt.Minute >= 30) rounded = rounded.AddHours(1);
            return rounded;

        }
        /// <summary>
        /// returns integer day of week Monday =0
        /// </summary>
        /// <param name="date"></param>
        /// <returns></returns>
        public static int WeekDayCustom(this DateTime date)
        {
            switch (date.DayOfWeek)
            {
                case DayOfWeek.Friday:
                    return 5;                    
                case DayOfWeek.Monday:
                    return 1;
                case DayOfWeek.Saturday:
                    return 6;
                case DayOfWeek.Sunday:
                    return 0;
                case DayOfWeek.Thursday:
                    return 4;
                case DayOfWeek.Tuesday:
                    return 2;
                case DayOfWeek.Wednesday:
                    return 3;
                default:
                    return -1;
            }
        }
    }
}
