using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using eLite.Kasherk.Data;
using Volo.Abp.DependencyInjection;

namespace eLite.Kasherk.EntityFrameworkCore;

public class EntityFrameworkCoreKasherkDbSchemaMigrator
    : IKasherkDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreKasherkDbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the KasherkDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<KasherkDbContext>()
            .Database
            .MigrateAsync();
    }
}
