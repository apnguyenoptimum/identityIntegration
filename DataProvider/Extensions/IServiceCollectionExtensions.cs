using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataProvider.ServiceInterfaces;
using DataProvider.Services;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class IServiceCollectionExtension
    {
        public static IServiceCollection AddDecisionFlowDataProviderServiceCollection(this IServiceCollection services)
        {

            services.AddScoped<ISQLDataService, SQLDataService>();
            services.AddScoped<IApplicationFilter, ApplicationFilterSource>();
            services.AddScoped<IDeliverableView, DeliverableViewSource>();
            services.AddScoped<IInventoryView, InventoryViewSource>();
            services.AddScoped<IPerformanceView, PerformanceViewSource>();
            return services;

        }
    }
}
